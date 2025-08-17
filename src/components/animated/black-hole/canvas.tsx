// canvas.tsx
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

export const BlackHoleParticles: React.FC<{ particles?: number }> = ({
  particles = 4500,
}) => {
  const particlesRef = React.useRef<THREE.Points>(null);

  // Store positions and velocities in refs for mutability and performance
  const positions = React.useRef<Float32Array | null>(null);
  const velocities = React.useRef<Float32Array | null>(null);
  const colors = React.useRef<Float32Array | null>(null);

  // React.useEffect(() => {
  //   if (!positions.current) {
  //     positions.current = new Float32Array(particles * 3);
  //   }
  //   if (!velocities.current) {
  //     velocities.current = new Float32Array(particles * 3);
  //   }
  //   if (!colors.current) {
  //     colors.current = new Float32Array(particles * 3);
  //   }
  // }, [particles, colors, positions, velocities]);

  // Initialize geometry data only once
  React.useEffect(() => {
    const pos = new Float32Array(particles * 3);
    const vel = new Float32Array(particles * 3);
    const col = new Float32Array(particles * 3);
    const color = new THREE.Color();

    for (let i = 0; i < particles; i++) {
      // Place particles on a spherical shell
      const [x, y, z] = randomSpherePoint(Math.random() * 2 + 1.5);
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Give each particle a small random initial velocity
      vel[i * 3] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;

      // Color: blueish-white
      color.setHSL(0.6, 0.8, Math.random() * 0.3 + 0.7);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    positions.current = pos;
    velocities.current = vel;
    colors.current = col;
  }, [particles]);

  // Animation loop
  useFrame((_, delta) => {
    const pts = particlesRef.current;
    if (!pts || !positions.current || !velocities.current) return;
    const pos = positions.current;
    const vel = velocities.current;

    for (let i = 0; i < particles; i++) {
      const i3 = i * 3;
      let x = pos[i3];
      let y = pos[i3 + 1];
      let z = pos[i3 + 2];

      // Vector to center
      const dist = Math.sqrt(x * x + y * y + z * z);

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
      pos[i3] += vel[i3] * delta * 60;
      pos[i3 + 1] += vel[i3 + 1] * delta * 60;
      pos[i3 + 2] += vel[i3 + 2] * delta * 60;
    }

    // Update geometry
    const geo = pts.geometry;
    geo.attributes.position.needsUpdate = true;
    pts.rotation.y += delta * 0.08;
  });

  // Geometry and material setup
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current ?? new Float32Array(), 3]}
          count={particles}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors.current ?? new Float32Array(), 3]}
          count={particles}
        />
      </bufferGeometry>
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
BlackHoleParticles.displayName = "BlackHoleParticles";

export const BlackHoleAnimation: React.FC<
  Omit<React.ComponentPropsWithoutRef<"div">, "children">
> = ({ className, ...props }) => (
  <div
    {...props}
    className={cn(
      "fixed z-0 h-full w-full bg-primary/10",
      className,
    )}
  >
    <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
      <React.Suspense fallback={null}>
        <BlackHoleParticles />
      </React.Suspense>
    </Canvas>
  </div>
);
BlackHoleAnimation.displayName = "BlackHoleAnimation";

export default BlackHoleAnimation;
