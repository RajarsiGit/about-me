import { motion } from "framer-motion";

export default function Section({ id, title, icon, children, className = "" }) {
  const Icon = icon;
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 mb-12 ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      {title && Icon && (
        <div className="mb-6 flex items-center gap-2">
          <Icon size={18} className="text-blue-600" />
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
      )}
      {children}
    </motion.section>
  );
}
