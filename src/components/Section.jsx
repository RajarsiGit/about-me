import { motion } from "framer-motion";

export default function Section({ id, title, icon, children, className = "" }) {
  const Icon = icon;
  return (
    <motion.section
      id={id}
      className={`scroll-mt-20 mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {title && (
        <div className="mb-8 flex items-center gap-3">
          <div className="h-4 w-0.5 flex-shrink-0 bg-amber-400" />
          {Icon && <Icon size={14} className="flex-shrink-0 text-amber-400/70" />}
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            {title}
          </h2>
          <div className="flex-1 border-t border-white/[0.05]" />
        </div>
      )}
      {children}
    </motion.section>
  );
}
