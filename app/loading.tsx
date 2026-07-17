export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-2 border-border" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-royal animate-spin" />
        </div>
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-blue-primary">
          Loading portfolio
        </span>
      </div>
    </div>
  );
}
