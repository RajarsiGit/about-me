import { useState, useEffect, useCallback, useRef } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Download,
  Briefcase,
  Code2,
  GraduationCap,
  Globe,
  ArrowUpRight,
  Menu,
  X,
  ChevronUp,
  ChevronDown,
  Search,
  Copy,
  Check,
  Award,
  GitBranch,
  FileText,
  ExternalLink,
  Users,
  ShieldAlert,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import profile from "./data/profile";
import Section from "./components/Section";
import SocialIcon from "./components/SocialIcon";
import ChatBot from "./components/ChatBot";
import SearchModal from "./components/SearchModal";
import { downloadAsPdf } from "./utils/downloadAsPdf";

const ICON_COLOR = "rgba(255,255,255,0.5)";
const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Leadership", "Incidents", "Contact"];
const PROJECT_CATEGORIES = ["All", ...Array.from(new Set(profile.projects.map((p) => p.category)))];

const education = [
  { degree: "Master of Science — Computer Science", school: "Pondicherry University", period: "2019 – 2021" },
  { degree: "Bachelor of Science — Computer Science", school: "St. Xavier's College (Autonomous), Kolkata", period: "2016 – 2019" },
];

// ── Animated counter ──────────────────────────────────────────────────────────
function AnimatedStat({ value, label }) {
  const [displayed, setDisplayed] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // Parse numeric part
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

// ── Avatar tilt ───────────────────────────────────────────────────────────────
function TiltAvatar({ src, alt }) {
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

// ── 3D tilt project card ──────────────────────────────────────────────────────
function TiltCard({ children, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 25 });
  const glowX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100]);

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
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(251,191,36,0.07) 0%, transparent 60%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

// ── Flip cert card ────────────────────────────────────────────────────────────
function FlipCertCard({ cert }) {
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

// ── Skill chip ────────────────────────────────────────────────────────────────
const CHIP_COLORS = {
  blue:    { chip: "border-blue-500/25    bg-blue-500/[0.08]    text-blue-300/80    hover:border-blue-400/50    hover:bg-blue-400/[0.14]    hover:text-blue-200    hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]" },
  orange:  { chip: "border-orange-500/25  bg-orange-500/[0.08]  text-orange-300/80  hover:border-orange-400/50  hover:bg-orange-400/[0.14]  hover:text-orange-200  hover:shadow-[0_0_12px_rgba(249,115,22,0.25)]" },
  violet:  { chip: "border-violet-500/25  bg-violet-500/[0.08]  text-violet-300/80  hover:border-violet-400/50  hover:bg-violet-400/[0.14]  hover:text-violet-200  hover:shadow-[0_0_12px_rgba(139,92,246,0.25)]" },
  emerald: { chip: "border-emerald-500/25 bg-emerald-500/[0.08] text-emerald-300/80 hover:border-emerald-400/50 hover:bg-emerald-400/[0.14] hover:text-emerald-200 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)]" },
  rose:    { chip: "border-rose-500/25    bg-rose-500/[0.08]    text-rose-300/80    hover:border-rose-400/50    hover:bg-rose-400/[0.14]    hover:text-rose-200    hover:shadow-[0_0_12px_rgba(244,63,94,0.25)]" },
};

const ROW_GLOW = {
  blue:    "hover:bg-blue-500/[0.025]    [&:hover_.glow]:opacity-100",
  orange:  "hover:bg-orange-500/[0.025]  [&:hover_.glow]:opacity-100",
  violet:  "hover:bg-violet-500/[0.025]  [&:hover_.glow]:opacity-100",
  emerald: "hover:bg-emerald-500/[0.025] [&:hover_.glow]:opacity-100",
  rose:    "hover:bg-rose-500/[0.025]    [&:hover_.glow]:opacity-100",
};

const GLOW_COLOR = {
  blue:    "from-blue-500/10",
  orange:  "from-orange-500/10",
  violet:  "from-violet-500/10",
  emerald: "from-emerald-500/10",
  rose:    "from-rose-500/10",
};

function SkillChip({ name, slug, color }) {
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

// ── Project tag chip ──────────────────────────────────────────────────────────
function Tag({ children }) {
  return (
    <span className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-white/38">
      {children}
    </span>
  );
}

// ── Expandable card (publications / open source) ──────────────────────────────
function ExpandableCard({ children, href, defaultOpen = false }) {
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

export default function AboutMe() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [expandedJobs, setExpandedJobs] = useState(
    Object.fromEntries(profile.experience.map((job, i) => [i, job.company === profile.company]))
  );

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.toLowerCase());
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-35% 0px -60% 0px" }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleDownload = (e) => {
    e.preventDefault();
    downloadAsPdf("resume-root", "Rajarsi_Saha_Resume.pdf");
  };

  const handleNavClick = (href) => {
    setMobileOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("rajarsi3997@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const handleCopyPhone = useCallback(() => {
    navigator.clipboard.writeText(profile.phone).then(() => {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    });
  }, []);

  const toggleJob = (i) => setExpandedJobs((prev) => ({ ...prev, [i]: !prev[i] }));

  const filteredProjects =
    activeCategory === "All"
      ? profile.projects
      : profile.projects.filter((p) => p.category === activeCategory);

  return (
    <>
    <div id="resume-root" className="min-h-screen bg-[#0d0d10] text-[#f0ece8]">
      <div className="fixed left-0 right-0 top-0 z-50 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      {/* ── Header ───────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0d0d10]/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-4 w-[2px] bg-amber-400" />
            <span className="font-mono text-sm tracking-wide text-white/75">{profile.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden gap-8 md:flex">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <a key={item} href={`#${item.toLowerCase()}`}
                    className={`relative font-mono text-[11px] uppercase tracking-widest transition-colors duration-200 ${isActive ? "text-amber-400" : "text-white/30 hover:text-white/60"}`}
                  >
                    {item}
                    {isActive && (
                      <motion.span layoutId="nav-indicator"
                        className="absolute -bottom-[17px] left-0 right-0 h-px bg-amber-400"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>
            <button onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-white/30 transition-colors hover:border-white/[0.15] hover:text-white/55">
              <Search size={13} />
              <span className="hidden font-mono text-[11px] md:inline">Search</span>
              <kbd className="hidden rounded border border-white/[0.08] px-1 py-px font-mono text-[10px] md:inline">⌘K</kbd>
            </button>
            <button onClick={() => setMobileOpen((o) => !o)}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-white/[0.08] text-white/40 transition-colors hover:border-white/20 hover:text-white/70 md:hidden">
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }} className="overflow-hidden border-t border-white/[0.06] md:hidden">
              <nav className="flex flex-col gap-1 px-6 py-3">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.toLowerCase();
                  return (
                    <a key={item} href={`#${item.toLowerCase()}`}
                      onClick={(e) => { e.preventDefault(); handleNavClick(`#${item.toLowerCase()}`); }}
                      className={`rounded-md px-3 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors ${isActive ? "bg-amber-400/10 text-amber-400" : "text-white/40 hover:bg-white/[0.04] hover:text-white/70"}`}>
                      {item}
                    </a>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="mx-auto max-w-5xl px-6">

        {/* ── Hero / About ─────────────────────────── */}
        <motion.section id="about" className="scroll-mt-20 grid gap-12 py-20 md:grid-cols-[200px_1fr]"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <TiltAvatar src={profile.avatar} alt={profile.name} />
            <motion.button onClick={handleDownload} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="flex w-44 items-center justify-center gap-2 rounded-lg border border-amber-400/25 bg-amber-400/[0.06] px-4 py-2.5 font-mono text-xs text-amber-400 transition-all hover:border-amber-400/45 hover:bg-amber-400/10">
              <Download size={12} /> Download Résumé
            </motion.button>
          </div>

          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-amber-400/65">
              {profile.title}
              {profile.experience?.[0]?.company && (
                <span className="text-white/30"> · {profile.company}</span>
              )}
            </p>
            <div className="flex items-baseline gap-3">
              <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-6xl">{profile.name}</h1>
              {profile.pronouns && (
                <span className="font-mono text-xs text-white/30">{profile.pronouns}</span>
              )}
            </div>
            <div className="mb-7 mt-2.5 flex items-center gap-1.5 font-mono text-xs text-white/30">
              <MapPin size={11} /><span>{profile.location}</span>
            </div>
            <p className="max-w-xl text-[15px] leading-relaxed text-white/55">{profile.summary}</p>

            {/* Animated stat counters */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {profile.highlights.map((h) => (
                <AnimatedStat key={h.label} value={h.value} label={h.label} />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {profile.socials.map(({ name, href, slug }) => (
                <motion.a key={name} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs text-white/50 transition-all hover:border-white/[0.18] hover:text-white/80">
                  <SocialIcon slug={slug} size={13} color={ICON_COLOR} />{name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── Skills ───────────────────────────────── */}
        <Section id="skills" title="Skills" icon={Code2}>
          <div className="divide-y divide-white/[0.04]">
            {profile.skillGroups.map((group, i) => (
              <motion.div key={group.label}
                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-lg px-4 py-5 transition-colors duration-300 sm:flex sm:items-start sm:gap-6 ${ROW_GLOW[group.color]}`}>
                <div className={`glow pointer-events-none absolute -left-8 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-gradient-radial opacity-0 blur-2xl transition-opacity duration-500 ${GLOW_COLOR[group.color]} to-transparent`} />
                <div className="relative mb-3 flex shrink-0 items-center gap-3 sm:mb-0 sm:w-52 sm:flex-col sm:items-start sm:gap-1">
                  <span className="font-mono text-[10px] text-white/18">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/38 transition-colors duration-200 group-hover:text-white/60">{group.label}</span>
                </div>
                <div className="relative flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillChip key={skill.name} {...skill} color={group.color} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── Experience ───────────────────────────── */}
        <Section id="experience" title="Experience" icon={Briefcase}>
          <div className="relative">
            <div className="absolute left-[120px] top-0 hidden h-full w-px bg-gradient-to-b from-amber-400/30 via-white/[0.06] to-transparent md:block" />
            {profile.experience.map((job, i) => {
              const isSysCloud = job.company === profile.company;
              const isOpen = !!expandedJobs[i];
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="relative mb-4 flex flex-col gap-4 last:mb-0 md:flex-row md:gap-0"
                >
                  <div className="flex shrink-0 items-start gap-3 md:w-[120px] md:flex-col md:items-end md:gap-1 md:pr-6 md:pt-4">
                    <span className="font-mono text-[10px] leading-snug text-white/28 md:text-right">{job.period.split("—")[0].trim()}</span>
                    <span className="font-mono text-[10px] leading-snug text-white/18 md:text-right">{job.period.split("—")[1]?.trim()}</span>
                  </div>
                  <div className="absolute left-[120px] top-[18px] hidden -translate-x-1/2 md:flex md:flex-col md:items-center">
                    <motion.div whileHover={{ scale: 1.5 }} transition={{ type: "spring", stiffness: 300 }}
                      className={`h-3 w-3 rounded-full border-2 cursor-pointer ${isSysCloud ? "border-amber-400 bg-amber-400/20 shadow-[0_0_8px_rgba(251,191,36,0.4)]" : "border-white/20 bg-white/[0.04]"}`}
                      onClick={() => toggleJob(i)}
                    />
                  </div>
                  <div className="flex-1 md:pl-8">
                    <div
                      onClick={() => toggleJob(i)}
                      className={`cursor-pointer rounded-xl border p-5 transition-all ${isSysCloud
                        ? `border-amber-400/12 bg-amber-400/[0.03] hover:border-amber-400/20 ${isOpen ? "hover:bg-amber-400/[0.04]" : ""}`
                        : "border-white/[0.05] bg-white/[0.015] hover:border-white/[0.09]"}`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-white/85">{job.role}</span>
                          <span className={`rounded border px-1.5 py-0.5 font-mono text-[10px] ${isSysCloud ? "border-amber-400/25 text-amber-400/70" : "border-white/[0.08] text-white/30"}`}>
                            {job.company}
                          </span>
                        </div>
                        {job.bullets.length > 0 && (
                          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown size={14} className="shrink-0 text-white/25" />
                          </motion.div>
                        )}
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen && job.bullets.length > 0 && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="mt-3 overflow-hidden space-y-1.5"
                          >
                            {job.bullets.map((b, idx) => (
                              <motion.li key={idx}
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.04 }}
                                className="flex gap-2.5 text-xs leading-relaxed text-white/42"
                              >
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400/30" />
                                {b}
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>

        {/* ── Certifications ───────────────────────── */}
        <Section id="certifications" title="Certifications" icon={Award}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.certifications.map((cert) => (
              <FlipCertCard key={cert.name} cert={cert} />
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] text-white/18">Tap a card to see credential details</p>
        </Section>

        {/* ── Projects ─────────────────────────────── */}
        <Section id="projects" title="Selected Projects" icon={Globe}>
          <div className="mb-5 flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map((cat) => (
              <motion.button key={cat} onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className={`rounded-lg border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "border-amber-400/40 bg-amber-400/10 text-amber-400"
                    : "border-white/[0.07] bg-white/[0.02] text-white/35 hover:border-white/[0.15] hover:text-white/60"
                }`}>
                {cat}
              </motion.button>
            ))}
          </div>

          <motion.div key={activeCategory} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p) => (
              <TiltCard key={p.name} className="group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-amber-400/20">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <span className="text-sm font-semibold leading-snug text-white/80 transition-colors group-hover:text-amber-300">{p.name}</span>
                  <ArrowUpRight size={14} className="mt-0.5 shrink-0 text-white/15 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-400/55" />
                </div>
                <p className="mb-3 flex-1 text-xs leading-relaxed text-white/38">{p.tagline}</p>
                {p.tags && <div className="flex flex-wrap gap-1.5">{p.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>}
              </TiltCard>
            ))}
          </motion.div>
        </Section>

        {/* ── Open Source ──────────────────────────── */}
        <Section id="open-source" title="Open Source" icon={GitBranch}>
          <div className="space-y-3">
            {profile.contributions.map((c) => (
              <ExpandableCard key={c.project} href={c.url}>
                {({ open }) => (
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <GitBranch size={15} className="mt-0.5 shrink-0 text-white/22 transition-colors group-hover:text-amber-400/55" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-white/80 transition-colors group-hover:text-amber-300">{c.project}</span>
                          <span className="rounded border border-white/[0.07] px-1.5 py-0.5 font-mono text-[10px] text-white/28">{c.role}</span>
                        </div>
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
                              <p className="mb-3 mt-2 text-xs leading-relaxed text-white/45">{c.description}</p>
                              <div className="mb-2 flex flex-wrap gap-1.5">{c.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                              <a href={c.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 font-mono text-[10px] text-amber-400/60 hover:text-amber-400">
                                <ExternalLink size={10} /> View project
                              </a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown size={14} className="shrink-0 text-white/25" />
                      </motion.div>
                    </div>
                  </div>
                )}
              </ExpandableCard>
            ))}
          </div>
        </Section>

        {/* ── Publications ─────────────────────────── */}
        <Section id="publications" title="Publications & Writing" icon={FileText}>
          <div className="space-y-3">
            {profile.writings.map((w) => (
              <ExpandableCard key={w.title} href={w.url}>
                {({ open }) => (
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <FileText size={15} className="mt-0.5 shrink-0 text-white/22 transition-colors group-hover:text-amber-400/55" />
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 text-sm font-semibold leading-snug text-white/80 transition-colors group-hover:text-amber-300">{w.title}</div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-amber-400/50">{w.type}</span>
                          <span className="text-white/15">·</span>
                          <span className="font-mono text-[10px] text-white/25">{w.date}</span>
                        </div>
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
                              <p className="mb-3 mt-2 text-xs leading-relaxed text-white/45">{w.description}</p>
                              <div className="mb-2 flex flex-wrap gap-1.5">{w.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                              <a href={w.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 font-mono text-[10px] text-amber-400/60 hover:text-amber-400">
                                <ExternalLink size={10} /> Read article
                              </a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown size={14} className="shrink-0 text-white/25" />
                      </motion.div>
                    </div>
                  </div>
                )}
              </ExpandableCard>
            ))}
          </div>
        </Section>

        {/* ── Education ────────────────────────────── */}
        <Section id="education" title="Education" icon={GraduationCap}>
          <div className="space-y-3">
            {education.map((edu, i) => (
              <motion.div key={edu.degree}
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex cursor-default flex-wrap items-baseline justify-between gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                <div>
                  <div className="text-sm font-semibold text-white/80">{edu.degree}</div>
                  <div className="mt-0.5 text-xs text-white/38">{edu.school}</div>
                </div>
                <span className="font-mono text-xs text-white/25">{edu.period}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── Leadership ───────────────────────────── */}
        <Section id="leadership" title="Leadership" icon={Users}>
          <div className="space-y-4">
            {profile.leadership.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-amber-400/10 bg-amber-400/[0.02] p-5"
              >
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-sm font-semibold text-white/80">{item.title}</span>
                  <span className="font-mono text-xs text-white/25">{item.period}</span>
                </div>
                <ul className="space-y-1.5">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-xs leading-relaxed text-white/48">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400/40" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── Incident Response ────────────────────── */}
        <Section id="incidents" title="Incident Response" icon={ShieldAlert}>
          <div className="space-y-3">
            {profile.incidents.map((inc, i) => (
              <motion.div key={inc.title}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-white/[0.1] hover:bg-white/[0.03]"
              >
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`rounded border px-1.5 py-0.5 font-mono text-[10px] font-medium ${
                      inc.severity === "P1"
                        ? "border-red-400/30 bg-red-400/10 text-red-400"
                        : "border-amber-400/25 bg-amber-400/10 text-amber-400/80"
                    }`}>{inc.severity}</span>
                    <span className="text-sm font-semibold text-white/80">{inc.title}</span>
                  </div>
                  <span className="font-mono text-xs text-white/25">{inc.date}</span>
                </div>
                <p className="mb-2 text-xs leading-relaxed text-white/45">{inc.summary}</p>
                <div className="mb-1.5 flex gap-1.5">
                  <AlertTriangle size={11} className="mt-0.5 shrink-0 text-amber-400/50" />
                  <p className="text-xs leading-relaxed text-white/38"><span className="text-amber-400/60">Resolution: </span>{inc.resolution}</p>
                </div>
                <div className="flex gap-1.5">
                  <ShieldAlert size={11} className="mt-0.5 shrink-0 text-white/25" />
                  <p className="text-xs leading-relaxed text-white/30"><span className="text-white/40">Impact: </span>{inc.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── Contact ──────────────────────────────── */}
        <Section id="contact" title="Get in Touch" icon={Mail}>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8">
            <p className="mb-6 max-w-md text-sm leading-relaxed text-white/48">
              Open to collaborations, consultations, or just a good chat about databases and cloud architecture.
            </p>
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={13} className="shrink-0 text-white/25" />
                <code className="font-mono text-sm text-white/60">rajarsi3997@gmail.com</code>
                <button onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 font-mono text-[11px] text-white/35 transition-all hover:border-white/[0.18] hover:text-white/65">
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.span key="check" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} className="flex items-center gap-1 text-emerald-400">
                        <Check size={11} /> Copied
                      </motion.span>
                    ) : (
                      <motion.span key="copy" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} className="flex items-center gap-1">
                        <Copy size={11} /> Copy
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={13} className="shrink-0 text-white/25" />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="font-mono text-sm text-white/60 transition-colors hover:text-white/80">
                  {profile.phone}
                </a>
                <button onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 font-mono text-[11px] text-white/35 transition-all hover:border-white/[0.18] hover:text-white/65">
                  <AnimatePresence mode="wait" initial={false}>
                    {copiedPhone ? (
                      <motion.span key="check" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} className="flex items-center gap-1 text-emerald-400">
                        <Check size={11} /> Copied
                      </motion.span>
                    ) : (
                      <motion.span key="copy" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} className="flex items-center gap-1">
                        <Copy size={11} /> Copy
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <motion.a href="mailto:rajarsi3997@gmail.com"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-medium text-black">
                {/* Shimmer sweep */}
                <motion.span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ translateX: ["−100%", "200%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2 }}
                />
                <Mail size={14} /> Email me
              </motion.a>
              <motion.button onClick={handleDownload}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm text-white/50 transition-colors hover:border-white/[0.18] hover:text-white/70">
                <Download size={14} /> Download Résumé
              </motion.button>
            </div>
          </div>
        </Section>

        {/* ── Footer ───────────────────────────────── */}
        <footer className="mb-12 border-t border-white/[0.05] pt-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-white/22">{profile.name} · {new Date().getFullYear()}</span>
            <span className="font-mono text-xs text-white/18">Built with React · Tailwind CSS</span>
          </div>
        </footer>
      </main>

      <AnimatePresence>
        {showTop && (
          <motion.button initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.2 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/30 bg-[#0d0d10]/90 text-amber-400 backdrop-blur-sm transition-colors hover:border-amber-400/60 hover:bg-amber-400/10">
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>

    <ChatBot />
    <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
