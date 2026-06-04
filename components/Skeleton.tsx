'use client';

export default function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-white/5 rounded-lg ${className}`} />
  );
}

export function CardSkeleton() {
  return (
    <div className="glass p-8 h-full flex flex-col gap-4">
      <Skeleton className="w-12 h-12" />
      <Skeleton className="w-3/4 h-8" />
      <Skeleton className="w-full h-24" />
      <div className="flex gap-2">
        <Skeleton className="w-16 h-6" />
        <Skeleton className="w-16 h-6" />
      </div>
    </div>
  );
}
