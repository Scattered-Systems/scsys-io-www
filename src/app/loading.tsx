/**
 * Created At: 2025.08.17:01:22:54
 * @author - @FL03
 * @file - loading.tsx
 */
import { Spinner } from "@/components/common/loaders";

export default function Loading() {
  return (
    <div className="flex flex-1 h-full w-full items-center justify-center relative z-50">
      <Spinner showLabel />
    </div>
  );
}
