/**
 * Created At: 2025.08.17:16:15:56
 * @author - @FL03
 * @file - page.tsx
 */
import { CollapsingParticleSystem } from "@/components/animated";

export default function Page() {
  return (
    <div className="relative -z-0 flex-1 h-screen w-screen overflow-hidden">
      
      <CollapsingParticleSystem />
    </div>
  );
}
Page.displayName = "HomePage";
