import { motion } from "framer-motion";
import profile from "../data/profile";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0d10]"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(251,191,36,0.05)_0%,transparent_100%)]" />

      {/* Monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] shadow-[0_0_24px_rgba(251,191,36,0.08)]"
      >
        <span className="font-display text-2xl font-bold text-amber-400">RS</span>
      </motion.div>

      {/* Name */}
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.18 }}
        className="font-display text-lg font-bold text-white/80"
      >
        {profile.name}
      </motion.p>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.32 }}
        className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-white/28"
      >
        {profile.title} · {profile.company}
      </motion.p>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 h-px w-28 overflow-hidden rounded-full bg-white/[0.06]"
      >
        <motion.div
          className="h-full bg-amber-400/70"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
        />
      </motion.div>
    </motion.div>
  );
}
