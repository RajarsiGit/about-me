import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function FlipCertCard({ cert }) {
  const [flipped, setFlipped] = useState(false);
  const badgeClass =
    cert.badgeColor === "orange" ? "bg-orange-400/10 text-orange-400 border-orange-400/20"
    : cert.badgeColor === "teal"   ? "bg-teal-400/10 text-teal-400 border-teal-400/20"
    : cert.badgeColor === "violet" ? "bg-violet-400/10 text-violet-400 border-violet-400/20"
    : "bg-blue-400/10 text-blue-400 border-blue-400/20";

  return (
    <div
      className="group relative h-36 cursor-pointer"
      style={{ perspective: 900 }}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 backface-hidden hover:border-white/[0.12]">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border font-mono text-xs font-bold ${badgeClass}`}>
            {cert.abbr}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-semibold leading-snug text-white/80">{cert.name}</div>
            <div className="mt-1 font-mono text-[10px] text-white/35">{cert.issuer}</div>
            <div className="mt-2 font-mono text-[10px] text-white/20">Tap to flip ↩</div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col justify-center gap-2 rounded-xl border border-white/[0.06] bg-[#0f0f14] p-5"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="font-mono text-[10px] text-white/30">Issued {cert.issued}</div>
          {cert.credentialId && (
            <div className="truncate font-mono text-[10px] text-white/25">ID: {cert.credentialId}</div>
          )}
          {cert.verifyUrl !== "#" ? (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 font-mono text-[10px] text-amber-400/70 hover:text-amber-400"
            >
              <ExternalLink size={10} /> Verify credential
            </a>
          ) : (
            <span className="font-mono text-[10px] text-white/18">No credential link yet</span>
          )}
        </div>
      </motion.div>
    </div>
  );
}
