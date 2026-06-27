import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimatedStat({ value, label }) {
  const [displayed, setDisplayed] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  const numericStr = String(value).replace(/[^0-9.]/g, "");
  const suffix = String(value).replace(/[0-9.]/g, "");
  const target = parseFloat(numericStr) || 0;
  const isInt = !numericStr.includes(".");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const steps = 40;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(isInt ? Math.round(target * eased) : parseFloat((target * eased).toFixed(1)));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [started, target, isInt]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="cursor-default rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-amber-400/20 hover:bg-amber-400/[0.03]"
    >
      <div className="font-display text-3xl font-bold text-amber-400">
        {displayed}{suffix}
      </div>
      <div className="mt-1 font-mono text-[10px] leading-snug text-white/30">{label}</div>
    </motion.div>
  );
}
