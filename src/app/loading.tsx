// loading.tsx
'use client';
// imports
import { Spinner } from '@/components/common/loaders';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Spinner showLabel />
    </div>
  );
};
Page.displayName = 'LoadingPage';

