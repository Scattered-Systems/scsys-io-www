/**
 * Created At: 2025.08.17:16:15:56
 * @author - @FL03
 * @file - page.tsx
 */
import { Metadata } from "next";
import { BlackHoleView } from "@/components/animated";

export const metadata: Metadata = {
  title: "scsys.io",
  description: "Welcome to scsys.io, home to the Scattered Systems project.",
};

export default function Page() {
  return (
    <div className="h-screen w-screen relative z-0">
      <BlackHoleView />
    </div>
  );
}
Page.displayName = "HomePage";
