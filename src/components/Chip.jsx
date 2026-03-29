export default function Chip({ children }) {
  return (
    <span className="inline-flex cursor-default items-center rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-white/50 transition-all hover:border-amber-400/30 hover:text-amber-300/80">
      {children}
    </span>
  );
}
