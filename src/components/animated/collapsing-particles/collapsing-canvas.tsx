/**
 * Created At: 2025.08.18:22:38:34
 * @author - @FL03
 * @file - collapsing-canvas.tsx
 */
"use client";
// imports
import * as React from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { cn } from "@/lib/utils";

export const CollapsingParticleSystem: React.FC<
  Omit<React.ComponentPropsWithoutRef<typeof Canvas>, "children"> & {
    particles?: number;
    timeScale?: number;
  }
> = ({ className, particles, timeScale, ...props }) => {
  // dynamically import the particles component
  const Particles = dynamic(
    () => import("./collapsing-particles"),
    {
      ssr: false,
    },
  );
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 75 }}
      className={cn(
        "fixed z-0 h-full w-full bg-primary/10 top-0 left-0 right-0 bottom-0",
        className,
      )}
      {...props}
    >
      <Particles particles={particles} timeScale={timeScale} />
    </Canvas>
  );
};
CollapsingParticleSystem.displayName = "CollapsingParticleCanvas";

export default CollapsingParticleSystem;
