/**
 * Created At: 2025.08.17:16:15:56
 * @author - @FL03
 * @file - page.tsx
 */
import { CollapsingParticleSystem } from "@/components/animated";

export default function Page() {
  return (
    <div className="h-screen w-full fixed z-0 top-0 bottom-0 left-0 right-0">
      <CollapsingParticleSystem />
    </div>
  );
}
Page.displayName = "HomePage";
