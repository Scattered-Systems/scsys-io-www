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

export const BlackHoleView: React.FC<
  Omit<React.ComponentProps<"div">, "children">
> = ({ className, ...props }) => {
  const Canvas = dynamic(async () => await import("./canvas"), {
    ssr: false,
  });
  return (
    <div
      className={cn("relative z-0 flex-1 h-full w-full", className)}
      {...props}
    >
      <Canvas />
    </div>
  );
};
BlackHoleView.displayName = "BlackHoleView";

export default BlackHoleView;
