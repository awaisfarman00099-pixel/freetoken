export function SkeletonCard() {
  return (
    <div className="p-6 rounded-xl bg-card border border-border animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-lg bg-muted" />
          <div>
            <div className="h-5 w-24 bg-muted rounded mb-2" />
            <div className="h-4 w-16 bg-muted rounded" />
          </div>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-3/4 bg-muted rounded" />
      </div>
      <div className="space-y-1.5 mb-4">
        <div className="h-3 w-full bg-muted rounded" />
        <div className="h-3 w-full bg-muted rounded" />
        <div className="h-3 w-5/6 bg-muted rounded" />
      </div>
      <div className="flex items-center justify-between">
        <div className="h-7 w-20 bg-muted rounded" />
        <div className="h-8 w-24 bg-muted rounded" />
      </div>
    </div>
  )
}

export function SkeletonBanner() {
  return <div className="h-24 w-full bg-muted rounded-lg animate-pulse" />
}
