import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function TiltAvatar({ src, alt }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 600 }}
      className="relative cursor-pointer"
    >
      <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-amber-400/20 via-amber-400/5 to-transparent" />
      <img src={src} alt={alt} className="relative h-44 w-44 rounded-2xl object-cover" />
    </motion.div>
  );
}
