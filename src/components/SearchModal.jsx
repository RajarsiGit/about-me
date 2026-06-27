import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, CornerDownLeft } from "lucide-react";
import profile from "../data/profile";

const SECTIONS = [
  { label: "About",                href: "#about",           description: "Profile & overview" },
  { label: "Skills",               href: "#skills",          description: "Technical expertise" },
  { label: "Experience",           href: "#experience",      description: "Work history at SysCloud" },
  { label: "Certifications",       href: "#certifications",  description: "AWS & Microsoft credentials" },
  { label: "Projects",             href: "#projects",        description: "Selected engineering work" },
  { label: "Open Source",          href: "#open-source",     description: "Community contributions" },
  { label: "Publications",         href: "#publications",    description: "Design docs & writing" },
  { label: "Education",            href: "#education",       description: "Academic background" },
  { label: "Leadership",           href: "#leadership",      description: "Team & org initiatives" },
  { label: "Contact",              href: "#contact",         description: "Get in touch" },
];

const INDEX = [
  ...SECTIONS.map((s) => ({ type: "section", ...s })),
  ...profile.skills.map((s) => ({
    type: "skill",
    label: s,
    href: "#skills",
    description: "Skill",
  })),
  ...profile.projects.map((p) => ({
    type: "project",
    label: p.name,
    href: "#projects",
    description: p.tagline,
  })),
  ...profile.experience.map((e) => ({
    type: "experience",
    label: `${e.role} · ${e.company}`,
    href: "#experience",
    description: e.period,
  })),
  ...profile.certifications.map((c) => ({
    type: "certification",
    label: c.name,
    href: "#certifications",
    description: c.issuer,
  })),
  ...profile.contributions.map((c) => ({
    type: "open-source",
    label: c.project,
    href: "#open-source",
    description: c.description,
  })),
  ...profile.writings.map((w) => ({
    type: "writing",
    label: w.title,
    href: "#publications",
    description: w.description,
  })),
];

const TYPE_STYLE = {
  section:       "text-blue-400/75 bg-blue-400/10",
  skill:         "text-emerald-400/75 bg-emerald-400/10",
  project:       "text-amber-400/75 bg-amber-400/10",
  experience:    "text-violet-400/75 bg-violet-400/10",
  certification: "text-orange-400/75 bg-orange-400/10",
  "open-source": "text-teal-400/75 bg-teal-400/10",
  writing:       "text-rose-400/75 bg-rose-400/10",
};

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const results = query.trim()
    ? INDEX.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.description?.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 9)
    : SECTIONS.map((s) => ({ type: "section", ...s }));

  // Reset on open
  useEffect(() => {
    if (open) {
      setQuery("");
      setCursor(0);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  // Reset cursor on query change
  useEffect(() => {
    setCursor(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCursor((c) => Math.min(c + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setCursor((c) => Math.max(c - 1, 0));
      }
      if (e.key === "Enter" && results[cursor]) {
        navigate(results[cursor]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, results, cursor, onClose]);

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.children[cursor];
    el?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  const navigate = (item) => {
    onClose();
    setTimeout(() => {
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -12 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="fixed left-1/2 top-[18%] z-50 w-full max-w-md -translate-x-1/2 overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0f0f13] shadow-2xl shadow-black/80"
          >
            {/* Input row */}
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3.5">
              <Search size={15} className="shrink-0 text-white/28" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections, skills, projects…"
                className="flex-1 bg-transparent text-sm text-white/80 placeholder-white/22 outline-none"
              />
              <div className="flex items-center gap-2">
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="text-white/22 hover:text-white/50 transition-colors"
                  >
                    <X size={13} />
                  </button>
                )}
                <kbd className="rounded border border-white/[0.08] px-1.5 py-0.5 font-mono text-[10px] text-white/22">
                  ESC
                </kbd>
              </div>
            </div>

            {/* Results list */}
            <div ref={listRef} className="max-h-64 overflow-y-auto py-1.5">
              {results.length === 0 ? (
                <p className="px-4 py-8 text-center text-xs text-white/25">
                  No results for &ldquo;{query}&rdquo;
                </p>
              ) : (
                results.map((item, i) => (
                  <button
                    key={`${item.type}-${item.label}-${i}`}
                    onClick={() => navigate(item)}
                    onMouseEnter={() => setCursor(i)}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                      i === cursor ? "bg-white/[0.05]" : ""
                    }`}
                  >
                    <span
                      className={`shrink-0 rounded px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest ${TYPE_STYLE[item.type]}`}
                    >
                      {item.type}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-medium text-white/72">{item.label}</div>
                      {item.description && item.type !== "skill" && (
                        <div className="truncate font-mono text-[10px] text-white/28">
                          {item.description}
                        </div>
                      )}
                    </div>
                    {i === cursor && (
                      <CornerDownLeft size={12} className="shrink-0 text-white/22" />
                    )}
                  </button>
                ))
              )}
            </div>

            {/* Footer hint */}
            <div className="flex items-center gap-3 border-t border-white/[0.05] px-4 py-2">
              {[
                { keys: "↑↓", label: "navigate" },
                { keys: "↵", label: "select" },
                { keys: "esc", label: "close" },
              ].map(({ keys, label }) => (
                <span key={label} className="flex items-center gap-1 font-mono text-[10px] text-white/18">
                  <kbd className="rounded border border-white/[0.07] px-1 py-px">{keys}</kbd>
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
