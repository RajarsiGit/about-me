import { motion } from "framer-motion";
import SocialIcon from "./SocialIcon";

export const CHIP_COLORS = {
  blue:    { chip: "border-blue-500/25    bg-blue-500/[0.08]    text-blue-300/80    hover:border-blue-400/50    hover:bg-blue-400/[0.14]    hover:text-blue-200    hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]" },
  orange:  { chip: "border-orange-500/25  bg-orange-500/[0.08]  text-orange-300/80  hover:border-orange-400/50  hover:bg-orange-400/[0.14]  hover:text-orange-200  hover:shadow-[0_0_12px_rgba(249,115,22,0.25)]" },
  violet:  { chip: "border-violet-500/25  bg-violet-500/[0.08]  text-violet-300/80  hover:border-violet-400/50  hover:bg-violet-400/[0.14]  hover:text-violet-200  hover:shadow-[0_0_12px_rgba(139,92,246,0.25)]" },
  emerald: { chip: "border-emerald-500/25 bg-emerald-500/[0.08] text-emerald-300/80 hover:border-emerald-400/50 hover:bg-emerald-400/[0.14] hover:text-emerald-200 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)]" },
  rose:    { chip: "border-rose-500/25    bg-rose-500/[0.08]    text-rose-300/80    hover:border-rose-400/50    hover:bg-rose-400/[0.14]    hover:text-rose-200    hover:shadow-[0_0_12px_rgba(244,63,94,0.25)]" },
};

export const ROW_GLOW = {
  blue:    "hover:bg-blue-500/[0.025]    [&:hover_.glow]:opacity-100",
  orange:  "hover:bg-orange-500/[0.025]  [&:hover_.glow]:opacity-100",
  violet:  "hover:bg-violet-500/[0.025]  [&:hover_.glow]:opacity-100",
  emerald: "hover:bg-emerald-500/[0.025] [&:hover_.glow]:opacity-100",
  rose:    "hover:bg-rose-500/[0.025]    [&:hover_.glow]:opacity-100",
};

export const GLOW_COLOR = {
  blue:    "from-blue-500/10",
  orange:  "from-orange-500/10",
  violet:  "from-violet-500/10",
  emerald: "from-emerald-500/10",
  rose:    "from-rose-500/10",
};

export default function SkillChip({ name, slug, color }) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`inline-flex cursor-default items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs transition-all duration-200 ${CHIP_COLORS[color].chip}`}
    >
      {slug && <SocialIcon slug={slug} size={11} color="currentColor" />}
      {name}
    </motion.span>
  );
}
