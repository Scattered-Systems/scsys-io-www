"use client";
import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

// Utility to generate a random point on a sphere shell
function randomSpherePoint(radius: number) {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);
  return [x, y, z];
}

const DEFAULT_TIME_SCALE: number = 0.9; // Adjust this to control the speed of the animation

export const CollapsingParticles: React.FC<
  { particles?: number; timeScale?: number }
> = ({
  particles = 3500,
  timeScale = DEFAULT_TIME_SCALE,
}) => {
  const particlesRef = React.useRef<THREE.Points>(null);
  const geometryRef = React.useRef<THREE.BufferGeometry>(null);

  // Mutable arrays for positions, velocities, and colors
  const positions = React.useRef<Float32Array | null>(null);
  const velocities = React.useRef<Float32Array | null>(null);
  const colors = React.useRef<Float32Array | null>(null);

  // Initialize geometry data only once
  React.useEffect(() => {
    const pos = new Float32Array(particles * 3);
    const vel = new Float32Array(particles * 3);
    const col = new Float32Array(particles * 3);
    const color = new THREE.Color();

    for (let i = 0; i < particles; i++) {
      const [x, y, z] = randomSpherePoint(Math.random() * 2 + 1.5);
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      vel[i * 3] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;

      color.setHSL(0.6, 0.8, Math.random() * 0.3 + 0.7);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    positions.current = pos;
    velocities.current = vel;
    colors.current = col;

    // Set attributes directly for better control
    if (geometryRef.current) {
      geometryRef.current.setAttribute(
        "position",
        new THREE.BufferAttribute(pos, 3),
      );
      geometryRef.current.setAttribute(
        "color",
        new THREE.BufferAttribute(col, 3),
      );
    }
  }, [particles]);

  // Animation loop
  useFrame((_, delta) => {
    if (
      !particlesRef.current ||
      !positions.current ||
      !velocities.current ||
      !geometryRef.current
    ) {
      return;
    }
    const pos = positions.current;
    const vel = velocities.current;

    for (let i = 0; i < particles; i++) {
      const i3 = i * 3;
      let x = pos[i3];
      let y = pos[i3 + 1];
      let z = pos[i3 + 2];

      const dist = Math.sqrt(x * x + y * y + z * z);

      // Prevent division by zero
      if (!isFinite(dist) || dist < 1e-6) {
        // Respawn at shell
        const [nx, ny, nz] = randomSpherePoint(Math.random() * 2 + 1.5);
        pos[i3] = nx;
        pos[i3 + 1] = ny;
        pos[i3 + 2] = nz;
        vel[i3] = (Math.random() - 0.5) * 0.002;
        vel[i3 + 1] = (Math.random() - 0.5) * 0.002;
        vel[i3 + 2] = (Math.random() - 0.5) * 0.002;
        continue;
      }

      // If close to center, respawn at shell
      if (dist < 0.12) {
        const [nx, ny, nz] = randomSpherePoint(Math.random() * 2 + 1.5);
        pos[i3] = nx;
        pos[i3 + 1] = ny;
        pos[i3 + 2] = nz;
        vel[i3] = (Math.random() - 0.5) * 0.002;
        vel[i3 + 1] = (Math.random() - 0.5) * 0.002;
        vel[i3 + 2] = (Math.random() - 0.5) * 0.002;
        continue;
      }

      // Gravity-like acceleration toward center
      const gravity = 0.08;
      vel[i3] -= (x / dist) * gravity * delta;
      vel[i3 + 1] -= (y / dist) * gravity * delta;
      vel[i3 + 2] -= (z / dist) * gravity * delta;

      // Damping for stability
      vel[i3] *= 0.995;
      vel[i3 + 1] *= 0.995;
      vel[i3 + 2] *= 0.995;

      // Update positions
      pos[i3] += vel[i3] * delta * timeScale;
      pos[i3 + 1] += vel[i3 + 1] * delta * timeScale;
      pos[i3 + 2] += vel[i3 + 2] * delta * timeScale;
    }

    // Update geometry buffer directly
    geometryRef.current.attributes.position.needsUpdate = true;
    particlesRef.current.rotation.y += delta * 0.08;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry ref={geometryRef} />
      <pointsMaterial
        size={0.012}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};
CollapsingParticles.displayName = "CollapsingParticleSystem";

export const CollapsingParticleCanvas: React.FC<
  Omit<React.ComponentPropsWithoutRef<typeof Canvas>, "children"> & {
    particles?: number;
    timeScale?: number;
  }
> = ({ className, particles, timeScale, ...props }) => (
  <React.Suspense fallback={null}>
    <Canvas
      camera={{ position: [0, 0, 3], fov: 75 }}
      className={cn(
        "fixed z-0 h-full w-full bg-primary/10",
        className,
      )}
      {...props}
    >
      <CollapsingParticles particles={particles} timeScale={timeScale}/>
    </Canvas>
  </React.Suspense>
);
CollapsingParticleCanvas.displayName = "CollapsingParticleCanvas";

export default CollapsingParticleCanvas;
