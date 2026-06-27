import { useState } from "react";

export default function ExpandableCard({ children, href, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      onClick={() => setOpen((o) => !o)}
      className="group cursor-pointer rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all hover:border-white/[0.11] hover:bg-white/[0.03]"
    >
      {children({ open, href })}
    </div>
  );
}
