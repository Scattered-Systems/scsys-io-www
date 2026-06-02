/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site/hero
 * @file - scene.tsx
 *
 * The hero's WebGL field: a *generalized Tonnetz* rendered as the 1-skeleton of
 * a simplicial complex wrapped onto a torus — the Tonnetz's natural quotient
 * manifold under octave equivalence. ~390 nodes ease from a scattered spherical
 * shell into the ordered triangular lattice ("scattered systems, assembled"),
 * then a few lit triads walk the lattice via neo-Riemannian P/L/R edge-flips —
 * the harmonic orchestration mechanism behind Eryon, made visible.
 *
 * Pure `three` (no react-three-fiber) to keep the client chunk lean; only ever
 * reached through a dynamic, `ssr:false` import. The pipeline builds once (keyed
 * on reduced-motion); theme changes only mutate color uniforms + blending, so
 * toggling light/dark never tears down the GL context or replays the assembly.
 */
'use client';
import * as React from 'react';
import * as THREE from 'three';

// --- lattice geometry -------------------------------------------------------
// GU = 2·GV with SHEAR = 0.5 makes the sheared triangular lattice seamless
// across the major seam (the minor angle advances exactly 2π per major loop).
const GV = 14; // nodes around the minor (tube) circle — the "thirds" axis
const GU = 28; // nodes around the major circle — the "fifths" axis
const SHEAR = 0.5;
const COUNT = GU * GV; // 392 pitch-class nodes
const R = 1.95; // major radius
const TUBE = 0.82; // minor radius
const ASSEMBLE = 2.6; // assembly duration, seconds

/** Map continuous lattice coords (i, j) onto the torus surface. */
function torusPos(i: number, j: number, out: THREE.Vector3): THREE.Vector3 {
  const u = (i / GU) * Math.PI * 2;
  const minor = ((j + i * SHEAR) / GV) * Math.PI * 2;
  const ring = R + TUBE * Math.cos(minor);
  return out.set(ring * Math.cos(u), ring * Math.sin(u), TUBE * Math.sin(minor));
}

const wrapU = (i: number) => ((i % GU) + GU) % GU;
const wrapV = (j: number) => ((j % GV) + GV) % GV;
const nodeId = (i: number, j: number) => wrapU(i) * GV + wrapV(j);

type Buffers = {
  pointPos: Float32Array;
  pointTarget: Float32Array;
  pointSeed: Float32Array;
  linePos: Float32Array;
  lineTarget: Float32Array;
  lineSeed: Float32Array;
};

/** Build scattered + assembled buffers for the nodes and the lattice edges. */
function buildLattice(): Buffers {
  const scattered = new Float32Array(COUNT * 3);
  const target = new Float32Array(COUNT * 3);
  const pointSeed = new Float32Array(COUNT);
  const v = new THREE.Vector3();

  for (let i = 0; i < GU; i++) {
    for (let j = 0; j < GV; j++) {
      const n = i * GV + j;
      const n3 = n * 3;
      // scattered: random point in a thick spherical shell
      const r = 4 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      scattered[n3] = r * Math.sin(phi) * Math.cos(theta);
      scattered[n3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      scattered[n3 + 2] = r * Math.cos(phi);
      // assembled: the torus lattice position
      torusPos(i, j, v);
      target[n3] = v.x;
      target[n3 + 1] = v.y;
      target[n3 + 2] = v.z;
      pointSeed[n] = Math.random();
    }
  }

  // three edge families per node → the triangular (Tonnetz) 1-skeleton
  const dirs: Array<[number, number]> = [
    [1, 0], // fifths axis
    [0, 1], // thirds axis
    [1, 1], // the diagonal that closes the triangles
  ];
  const edges = COUNT * dirs.length;
  const linePos = new Float32Array(edges * 2 * 3);
  const lineTarget = new Float32Array(edges * 2 * 3);
  const lineSeed = new Float32Array(edges * 2);

  let e = 0;
  for (let i = 0; i < GU; i++) {
    for (let j = 0; j < GV; j++) {
      const a = i * GV + j;
      for (const [di, dj] of dirs) {
        const b = nodeId(i + di, j + dj);
        for (const id of [a, b]) {
          const o = e * 3;
          linePos[o] = scattered[id * 3];
          linePos[o + 1] = scattered[id * 3 + 1];
          linePos[o + 2] = scattered[id * 3 + 2];
          lineTarget[o] = target[id * 3];
          lineTarget[o + 1] = target[id * 3 + 1];
          lineTarget[o + 2] = target[id * 3 + 2];
          lineSeed[e] = pointSeed[id];
          e++;
        }
      }
    }
  }

  return {
    pointPos: scattered,
    pointTarget: target,
    pointSeed,
    linePos,
    lineTarget,
    lineSeed,
  };
}

// --- shaders ----------------------------------------------------------------
const MORPH = /* glsl */ `
  uniform float uProgress;
  attribute vec3 aTarget;
  attribute float aSeed;
  varying float vDepth;
  vec3 morphed() {
    return mix(position, aTarget, uProgress);
  }
  float depthOf(vec4 mv) {
    return clamp((-mv.z - 1.0) / 7.5, 0.0, 1.0);
  }
`;

const POINT_VERT = /* glsl */ `
  ${MORPH}
  uniform float uSize;
  uniform float uPixelRatio;
  void main() {
    vec4 mv = modelViewMatrix * vec4(morphed(), 1.0);
    vDepth = depthOf(mv);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixelRatio * (5.0 / -mv.z) * (0.5 + aSeed);
  }
`;

const POINT_FRAG = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vDepth;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float edge = smoothstep(0.5, 0.04, d);
    gl_FragColor = vec4(uColor, edge * uOpacity * mix(0.25, 1.0, vDepth));
  }
`;

const LINE_VERT = /* glsl */ `
  ${MORPH}
  void main() {
    vec4 mv = modelViewMatrix * vec4(morphed(), 1.0);
    vDepth = depthOf(mv);
    gl_Position = projectionMatrix * mv;
  }
`;

const LINE_FRAG = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vDepth;
  void main() {
    gl_FragColor = vec4(uColor, uOpacity * mix(0.1, 1.0, vDepth));
  }
`;

// --- theme palettes ---------------------------------------------------------
type Palette = {
  node: string;
  edge: string;
  edgeOpacity: number;
  nodeOpacity: number;
  voices: string[]; // [cyan, violet, teal]
  blending: THREE.Blending;
};

const DARK: Palette = {
  node: '#7fe1ff',
  edge: '#4cc3e6',
  edgeOpacity: 0.5,
  nodeOpacity: 0.7,
  voices: ['#5fdcff', '#bf9bff', '#5ff0d0'],
  blending: THREE.AdditiveBlending,
};

const LIGHT: Palette = {
  node: '#1f86ad',
  edge: '#3a93b4',
  edgeOpacity: 0.42,
  nodeOpacity: 0.85,
  voices: ['#1577a3', '#6a44c0', '#138a73'],
  blending: THREE.NormalBlending,
};

/** A soft radial sprite for the lit nodes of an active triad. */
function makeGlowTexture(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const g = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  );
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.4, 'rgba(255,255,255,0.55)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

type Coord = [number, number];

/**
 * A harmonic voice: a triad (triangle face) that walks the lattice by
 * neo-Riemannian edge-flips. Reflecting a vertex across the opposite edge,
 * `v' = p + q - v`, is exactly the affine map that takes a triad to the
 * neighbour sharing that edge — the P / L / R transformations.
 */
function createVoice(glow: THREE.Texture, seedCell: Coord, phase: number) {
  const STEP = 2.3; // seconds per transformation (move + hold)
  const MOVE = 0.6; // fraction of the cycle spent moving

  let tri: Coord[] = [
    [seedCell[0], seedCell[1]],
    [seedCell[0] + 1, seedCell[1]],
    [seedCell[0] + 1, seedCell[1] + 1],
  ];
  let nextTri = tri.map((c) => [...c] as Coord);
  let lastMoved = -1;
  let wt = phase;

  const advance = () => {
    tri = nextTri.map((c) => [...c] as Coord);
    const allowed = [0, 1, 2].filter((x) => x !== lastMoved);
    const m = allowed[Math.floor(Math.random() * allowed.length)];
    const [o1, o2] = [0, 1, 2].filter((x) => x !== m);
    const moved: Coord = [
      tri[o1][0] + tri[o2][0] - tri[m][0],
      tri[o1][1] + tri[o2][1] - tri[m][1],
    ];
    nextTri = tri.map((c) => [...c] as Coord);
    nextTri[m] = moved;
    lastMoved = m;
  };
  advance(); // seed the first target

  const group = new THREE.Group();

  const fillGeo = new THREE.BufferGeometry();
  fillGeo.setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array(9), 3),
  );
  const fillMat = new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  group.add(new THREE.Mesh(fillGeo, fillMat));

  const outGeo = new THREE.BufferGeometry();
  outGeo.setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array(9), 3),
  );
  const outMat = new THREE.LineBasicMaterial({
    transparent: true,
    opacity: 0,
    depthWrite: false,
  });
  group.add(new THREE.LineLoop(outGeo, outMat));

  const dotGeo = new THREE.BufferGeometry();
  dotGeo.setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array(9), 3),
  );
  const dotMat = new THREE.PointsMaterial({
    size: 0.34,
    map: glow,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    sizeAttenuation: true,
  });
  group.add(new THREE.Points(dotGeo, dotMat));

  const fillPos = fillGeo.attributes.position as THREE.BufferAttribute;
  const outPos = outGeo.attributes.position as THREE.BufferAttribute;
  const dotPos = dotGeo.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();

  return {
    group,
    setColors(hex: string, blending: THREE.Blending) {
      fillMat.color.set(hex);
      outMat.color.set(hex);
      dotMat.color.set(hex);
      fillMat.blending = blending;
      outMat.blending = blending;
      dotMat.blending = blending;
    },
    update(dt: number, reveal: number) {
      const prev = Math.floor(wt / STEP);
      wt += dt;
      if (Math.floor(wt / STEP) > prev) advance();

      const local = (wt % STEP) / STEP;
      const e = local < MOVE ? easeInOut(local / MOVE) : 1;

      for (let k = 0; k < 3; k++) {
        const i = tri[k][0] + (nextTri[k][0] - tri[k][0]) * e;
        const j = tri[k][1] + (nextTri[k][1] - tri[k][1]) * e;
        torusPos(i, j, v);
        fillPos.setXYZ(k, v.x, v.y, v.z);
        outPos.setXYZ(k, v.x, v.y, v.z);
        dotPos.setXYZ(k, v.x, v.y, v.z);
      }
      fillPos.needsUpdate = true;
      outPos.needsUpdate = true;
      dotPos.needsUpdate = true;

      fillMat.opacity = 0.14 * reveal;
      outMat.opacity = 0.9 * reveal;
      dotMat.opacity = reveal;
    },
    dispose() {
      fillGeo.dispose();
      fillMat.dispose();
      outGeo.dispose();
      outMat.dispose();
      dotGeo.dispose();
      dotMat.dispose();
    },
  };
}

type SceneProps = {
  dark: boolean; // tune palette + blending to the active theme
  reducedMotion: boolean; // when true, render one assembled frame, skip rAF
};

const Scene: React.FC<SceneProps> = ({ dark, reducedMotion }) => {
  const mountRef = React.useRef<HTMLDivElement>(null);
  const applyRef = React.useRef<((dark: boolean) => void) | null>(null);
  const repaintRef = React.useRef<(() => void) | null>(null);
  const darkRef = React.useRef(dark);

  // --- setup: build the pipeline once (rebuild only if reduced-motion flips) -
  React.useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = mount.clientWidth || 1;
    const height = mount.clientHeight || 1;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.1);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';

    const group = new THREE.Group();
    group.rotation.x = -0.92; // tilt the torus toward the viewer
    scene.add(group);

    const data = buildLattice();
    const shared = {
      uProgress: { value: 0 },
    };

    // nodes (0-skeleton)
    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(data.pointPos, 3),
    );
    pointGeo.setAttribute(
      'aTarget',
      new THREE.BufferAttribute(data.pointTarget, 3),
    );
    pointGeo.setAttribute('aSeed', new THREE.BufferAttribute(data.pointSeed, 1));
    const pointMat = new THREE.ShaderMaterial({
      vertexShader: POINT_VERT,
      fragmentShader: POINT_FRAG,
      uniforms: {
        ...shared,
        uSize: { value: 2.1 },
        uPixelRatio: { value: dpr },
        uColor: { value: new THREE.Color() },
        uOpacity: { value: 0.7 },
      },
      transparent: true,
      depthWrite: false,
    });
    group.add(new THREE.Points(pointGeo, pointMat));

    // edges (1-skeleton)
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(data.linePos, 3));
    lineGeo.setAttribute(
      'aTarget',
      new THREE.BufferAttribute(data.lineTarget, 3),
    );
    lineGeo.setAttribute('aSeed', new THREE.BufferAttribute(data.lineSeed, 1));
    const lineMat = new THREE.ShaderMaterial({
      vertexShader: LINE_VERT,
      fragmentShader: LINE_FRAG,
      uniforms: {
        ...shared,
        uColor: { value: new THREE.Color() },
        uOpacity: { value: 0.5 },
      },
      transparent: true,
      depthWrite: false,
    });
    group.add(new THREE.LineSegments(lineGeo, lineMat));

    // harmonic voices (walking triads)
    const glow = makeGlowTexture();
    // staggered phases (seconds) so the voices never move in unison
    const voices = [
      createVoice(glow, [3, 4], 0),
      createVoice(glow, [16, 9], 0.9),
      createVoice(glow, [22, 2], 1.7),
    ];
    voices.forEach((voice) => group.add(voice.group));

    const apply = (isDark: boolean) => {
      const p = isDark ? DARK : LIGHT;
      pointMat.uniforms.uColor.value.set(p.node);
      pointMat.uniforms.uOpacity.value = p.nodeOpacity;
      pointMat.blending = p.blending;
      pointMat.needsUpdate = true;
      lineMat.uniforms.uColor.value.set(p.edge);
      lineMat.uniforms.uOpacity.value = p.edgeOpacity;
      lineMat.blending = p.blending;
      lineMat.needsUpdate = true;
      voices.forEach((voice, k) => voice.setColors(p.voices[k], p.blending));
    };
    apply(darkRef.current);
    applyRef.current = apply;

    const repaint = () => renderer.render(scene, camera);
    repaintRef.current = repaint;

    // --- interaction + visibility ---
    const pointer = new THREE.Vector2(0, 0);
    const pointerTarget = new THREE.Vector2(0, 0);
    const onPointerMove = (ev: PointerEvent) => {
      pointerTarget.x = (ev.clientX / window.innerWidth) * 2 - 1;
      pointerTarget.y = -((ev.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reducedMotion) loop();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(mount);

    const onResize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(dpr);
      renderer.setSize(w, h);
      pointMat.uniforms.uPixelRatio.value = dpr;
      if (!running) repaint();
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    // --- render loop (manual timer; THREE.Clock is deprecated) ---
    let raf = 0;
    let running = false;
    let elapsed = 0;
    let lastTime = 0;

    const tick = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.05); // clamp post-idle gaps
      lastTime = now;
      elapsed += dt;
      const progress = Math.min(elapsed / ASSEMBLE, 1);
      shared.uProgress.value = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      // voices fade in only once the lattice has assembled
      const reveal = THREE.MathUtils.clamp((progress - 0.82) / 0.18, 0, 1);
      voices.forEach((voice) => voice.update(dt, reveal));

      pointer.lerp(pointerTarget, 0.05);
      group.rotation.y += 0.0016;
      group.rotation.x = -0.92 + pointer.y * 0.16;
      group.rotation.z = pointer.x * 0.12;
      const breathe = 1 + Math.sin(elapsed * 0.5) * 0.012;
      group.scale.setScalar(breathe);

      repaint();
      if (visible && running) raf = requestAnimationFrame(tick);
    };
    function loop() {
      if (running) return;
      running = true;
      lastTime = performance.now(); // drop idle time accumulated while paused
      raf = requestAnimationFrame(tick);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (visible && !reducedMotion) loop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    if (reducedMotion) {
      shared.uProgress.value = 1; // assembled, static
      voices.forEach((voice) => voice.update(0, 1));
      repaint();
    } else {
      loop();
    }

    // --- teardown ---
    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibility);
      applyRef.current = null;
      repaintRef.current = null;
      pointGeo.dispose();
      pointMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      voices.forEach((voice) => voice.dispose());
      glow.dispose();
      renderer.forceContextLoss();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  // --- theme: mutate uniforms in place, then repaint (no rebuild) ---
  React.useEffect(() => {
    darkRef.current = dark;
    applyRef.current?.(dark);
    repaintRef.current?.();
  }, [dark]);

  return <div ref={mountRef} className="absolute inset-0" />;
};
Scene.displayName = 'HarmonicLatticeScene';

export default Scene;
