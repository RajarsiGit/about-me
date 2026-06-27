export default function Tag({ children }) {
  return (
    <span className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-white/38">
      {children}
    </span>
  );
}
