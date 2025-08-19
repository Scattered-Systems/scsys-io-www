/**
 * Created At: 2025.05.02:01:59:23
 * @author - @FL03
 * @file - view.tsx
 */
"use client";
// imports
import * as React from "react";
import dynamic from "next/dynamic";
// project
import { cn } from "@/lib/utils";

export const CollapsingParticleSystem: React.FC<
  Omit<React.ComponentPropsWithoutRef<"div">, "children">
> = ({ className, ...props }) => {
  const Comp = dynamic(
    () => import("./canvas").then((mod) => mod.CollapsingParticleCanvas),
    {
      ssr: false,
    },
  );
  return (
    <div
      className={cn("flex-1 h-full w-full fixed -z-10 right-0 left-0 top-0 bottom-0", className)}
      {...props}
    >
      <Comp />
    </div>
  );
};
CollapsingParticleSystem.displayName = "CollapsingParticleSystem";

export default CollapsingParticleSystem;
