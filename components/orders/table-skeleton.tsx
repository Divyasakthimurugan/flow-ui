export function OrdersSkeleton() {
  return (
    <div className="border rounded-md p-4 space-y-3">
      {[1, 2, 3, 4].map(i => (
        <div
          key={i}
          className="h-8 bg-muted animate-pulse rounded"
        />
      ))}
    </div>
  );
}
