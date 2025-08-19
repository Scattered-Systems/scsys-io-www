/**
 * Created At: 2025.05.02:01:59:23
 * @author - @FL03
 * @file - view.tsx
 */
"use client";
// imports
import * as React from "react";
import dynamic from "next/dynamic";

type ViewPropsT = {
  className?: string;
  particles?: number;
  timeScale?: number;
};

export const CollapsingParticleSystem: React.FC<
  ViewPropsT
> = ({ ...props }) => {
  const Comp = dynamic(
    () =>
      import("./collapsing-canvas").then((mod) => mod.CollapsingParticleSystem),
    {
      ssr: false,
    },
  );
  return <Comp {...props} />;
};
CollapsingParticleSystem.displayName = "CollapsingParticleSystem";

export default CollapsingParticleSystem;
