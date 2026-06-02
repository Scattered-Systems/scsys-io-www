/**
 * Created At: 2025.08.17:01:22:54
 * @author - @FL03
 * @directory - src/app
 * @file - loading.tsx
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99] flex items-center justify-center bg-background/60 backdrop-blur-xl">
      <div className="flex flex-col items-center gap-4">
        <div className="size-8 animate-spin rounded-full border-2 border-primary/25 border-t-primary" />
        <span className="label-mono text-muted-foreground">Orchestrating…</span>
      </div>
    </div>
  );
}
Loading.displayName = 'LoadingPage';
