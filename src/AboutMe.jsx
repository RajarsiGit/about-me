import { useState, useEffect, useCallback } from "react";
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
  Search,
  Copy,
  Check,
  Award,
  GitBranch,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "./data/profile";
import Section from "./components/Section";
import SocialIcon from "./components/SocialIcon";
import ChatBot from "./components/ChatBot";
import SearchModal from "./components/SearchModal";
import { downloadAsPdf } from "./utils/downloadAsPdf";

const ICON_COLOR = "rgba(255,255,255,0.5)";
const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Contact"];
const PROJECT_CATEGORIES = ["All", ...Array.from(new Set(profile.projects.map((p) => p.category)))];

const education = [
  {
    degree: "Master of Science — Computer Science",
    school: "Pondicherry University",
    period: "2019 – 2021",
  },
  {
    degree: "Bachelor of Science — Computer Science",
    school: "St. Xavier's College (Autonomous), Kolkata",
    period: "2016 – 2019",
  },
];

// ── Skill chip ────────────────────────────────────────────────────────────────
const CHIP_COLORS = {
  blue:    "border-blue-500/20    bg-blue-500/[0.07]    text-blue-300/80",
  orange:  "border-orange-500/20  bg-orange-500/[0.07]  text-orange-300/80",
  violet:  "border-violet-500/20  bg-violet-500/[0.07]  text-violet-300/80",
  emerald: "border-emerald-500/20 bg-emerald-500/[0.07] text-emerald-300/80",
  rose:    "border-rose-500/20    bg-rose-500/[0.07]    text-rose-300/80",
};

function SkillChip({ name, slug, color }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs transition-opacity hover:opacity-100 ${CHIP_COLORS[color]}`}
    >
      {slug && <SocialIcon slug={slug} size={11} color="currentColor" />}
      {name}
    </span>
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

export default function AboutMe() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Active section via IntersectionObserver
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

  // Back-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ⌘K / Ctrl+K shortcut
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

  const filteredProjects =
    activeCategory === "All"
      ? profile.projects
      : profile.projects.filter((p) => p.category === activeCategory);

  return (
    <>
    <div id="resume-root" className="min-h-screen bg-[#0d0d10] text-[#f0ece8]">
      {/* Amber gradient line at very top */}
      <div className="fixed left-0 right-0 top-0 z-50 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      {/* ── Header ───────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0d0d10]/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-4 w-[2px] bg-amber-400" />
            <span className="font-mono text-sm tracking-wide text-white/75">{profile.name}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop nav */}
            <nav className="hidden gap-8 md:flex">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`relative font-mono text-[11px] uppercase tracking-widest transition-colors duration-200 ${
                      isActive ? "text-amber-400" : "text-white/30 hover:text-white/60"
                    }`}
                  >
                    {item}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-[17px] left-0 right-0 h-px bg-amber-400"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Search button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-white/30 transition-colors hover:border-white/[0.15] hover:text-white/55"
              aria-label="Search"
            >
              <Search size={13} />
              <span className="hidden font-mono text-[11px] md:inline">Search</span>
              <kbd className="hidden rounded border border-white/[0.08] px-1 py-px font-mono text-[10px] md:inline">
                ⌘K
              </kbd>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-white/[0.08] text-white/40 transition-colors hover:border-white/20 hover:text-white/70 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile nav drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/[0.06] md:hidden"
            >
              <nav className="flex flex-col gap-1 px-6 py-3">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.toLowerCase();
                  return (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => { e.preventDefault(); handleNavClick(`#${item.toLowerCase()}`); }}
                      className={`rounded-md px-3 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors ${
                        isActive ? "bg-amber-400/10 text-amber-400" : "text-white/40 hover:bg-white/[0.04] hover:text-white/70"
                      }`}
                    >
                      {item}
                    </a>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Main ─────────────────────────────────────── */}
      <main className="mx-auto max-w-5xl px-6">

        {/* ── Hero / About ─────────────────────────── */}
        <motion.section
          id="about"
          className="scroll-mt-20 grid gap-12 py-20 md:grid-cols-[200px_1fr]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="relative">
              <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-amber-400/20 via-amber-400/5 to-transparent" />
              <img src={profile.avatar} alt={profile.name} className="relative h-44 w-44 rounded-2xl object-cover" />
            </div>
            <button
              onClick={handleDownload}
              className="flex w-44 items-center justify-center gap-2 rounded-lg border border-amber-400/25 bg-amber-400/[0.06] px-4 py-2.5 font-mono text-xs text-amber-400 transition-all hover:border-amber-400/45 hover:bg-amber-400/10"
            >
              <Download size={12} /> Download Résumé
            </button>
          </div>

          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-amber-400/65">{profile.title}</p>
            <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-6xl">{profile.name}</h1>
            <div className="mb-7 mt-2.5 flex items-center gap-1.5 font-mono text-xs text-white/30">
              <MapPin size={11} /><span>{profile.location}</span>
            </div>
            <p className="max-w-xl text-[15px] leading-relaxed text-white/55">{profile.summary}</p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {profile.highlights.map((h) => (
                <div key={h.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <div className="font-display text-3xl font-bold text-amber-400">{h.value}</div>
                  <div className="mt-1 font-mono text-[10px] leading-snug text-white/30">{h.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {profile.socials.map(({ name, href, slug }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs text-white/50 transition-all hover:border-white/[0.18] hover:text-white/80">
                  <SocialIcon slug={slug} size={13} color={ICON_COLOR} />{name}
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── Skills ───────────────────────────────── */}
        <Section id="skills" title="Skills" icon={Code2}>
          <div className="divide-y divide-white/[0.04]">
            {profile.skillGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col gap-3 py-4 sm:flex-row sm:items-start sm:gap-6"
              >
                {/* Number + label */}
                <div className="flex shrink-0 items-center gap-3 sm:w-52 sm:flex-col sm:items-start sm:gap-1">
                  <span className="font-mono text-[10px] text-white/18">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/38">
                    {group.label}
                  </span>
                </div>
                {/* Chips */}
                <div className="flex flex-wrap gap-2">
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
          <div>
            {profile.experience.map((job, i) => (
              <div key={i} className="relative pl-6 pb-5 last:pb-0">
                {i < profile.experience.length - 1 && (
                  <div className="absolute bottom-0 left-0 top-3 w-px bg-white/[0.06]" />
                )}
                <div className="absolute left-0 top-[13px] h-[7px] w-[7px] -translate-x-[3px] rounded-full border border-amber-400/45 bg-amber-400/15" />
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-white/[0.10] hover:bg-white/[0.03]">
                  <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex flex-wrap items-baseline gap-2.5">
                      <span className="text-sm font-semibold text-white/90">{job.role}</span>
                      <span className="font-mono text-xs text-amber-400/70">{job.company}</span>
                    </div>
                    <span className="font-mono text-xs text-white/25">{job.period}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {job.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-white/48">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400/35" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Certifications ───────────────────────── */}
        <Section id="certifications" title="Certifications" icon={Award}>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                    cert.badgeColor === "orange"
                      ? "bg-orange-400/10 text-orange-400"
                      : "bg-blue-400/10 text-blue-400"
                  }`}
                >
                  {cert.abbr}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold leading-snug text-white/80">{cert.name}</div>
                  <div className="mt-1 font-mono text-xs text-white/35">{cert.issuer}</div>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[10px] text-white/25">{cert.issued}</span>
                    {cert.credentialId && (
                      <span className="font-mono text-[10px] text-white/25">
                        ID: {cert.credentialId}
                      </span>
                    )}
                    {cert.verifyUrl !== "#" && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] text-amber-400/60 transition-colors hover:text-amber-400"
                      >
                        Verify ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Projects ─────────────────────────────── */}
        <Section id="projects" title="Selected Projects" icon={Globe}>
          {/* Category filter tabs */}
          <div className="mb-5 flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "border-amber-400/40 bg-amber-400/10 text-amber-400"
                    : "border-white/[0.07] bg-white/[0.02] text-white/35 hover:border-white/[0.15] hover:text-white/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((p) => (
              <a
                key={p.name}
                href={p.link}
                className="group flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-amber-400/20 hover:bg-white/[0.04]"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <span className="text-sm font-semibold leading-snug text-white/80 transition-colors group-hover:text-amber-300">
                    {p.name}
                  </span>
                  <ArrowUpRight size={14} className="mt-0.5 shrink-0 text-white/15 transition-colors group-hover:text-amber-400/55" />
                </div>
                <p className="mb-3 flex-1 text-xs leading-relaxed text-white/38">{p.tagline}</p>
                {p.tags && (
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                  </div>
                )}
              </a>
            ))}
          </motion.div>
        </Section>

        {/* ── Open Source ──────────────────────────── */}
        <Section id="open-source" title="Open Source" icon={GitBranch}>
          <div className="space-y-3">
            {profile.contributions.map((c) => (
              <a
                key={c.project}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-amber-400/20 hover:bg-white/[0.04]"
              >
                <GitBranch
                  size={15}
                  className="mt-0.5 shrink-0 text-white/22 transition-colors group-hover:text-amber-400/55"
                />
                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-white/80 transition-colors group-hover:text-amber-300">
                      {c.project}
                    </span>
                    <span className="rounded border border-white/[0.07] px-1.5 py-0.5 font-mono text-[10px] text-white/28">
                      {c.role}
                    </span>
                  </div>
                  <p className="mb-3 text-xs leading-relaxed text-white/45">{c.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="mt-0.5 shrink-0 text-white/15 transition-colors group-hover:text-amber-400/55"
                />
              </a>
            ))}
          </div>
        </Section>

        {/* ── Publications ─────────────────────────── */}
        <Section id="publications" title="Publications & Writing" icon={FileText}>
          <div className="space-y-3">
            {profile.writings.map((w) => (
              <a
                key={w.title}
                href={w.url}
                className="group flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-amber-400/20 hover:bg-white/[0.04]"
              >
                <FileText
                  size={15}
                  className="mt-0.5 shrink-0 text-white/22 transition-colors group-hover:text-amber-400/55"
                />
                <div className="min-w-0 flex-1">
                  <div className="mb-1 text-sm font-semibold leading-snug text-white/80 transition-colors group-hover:text-amber-300">
                    {w.title}
                  </div>
                  <div className="mb-2.5 flex items-center gap-2">
                    <span className="font-mono text-[10px] text-amber-400/50">{w.type}</span>
                    <span className="text-white/15">·</span>
                    <span className="font-mono text-[10px] text-white/25">{w.date}</span>
                  </div>
                  <p className="mb-3 text-xs leading-relaxed text-white/45">{w.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {w.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="mt-0.5 shrink-0 text-white/15 transition-colors group-hover:text-amber-400/55"
                />
              </a>
            ))}
          </div>
        </Section>

        {/* ── Education ────────────────────────────── */}
        <Section id="education" title="Education" icon={GraduationCap}>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.degree} className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
                <div>
                  <div className="text-sm font-semibold text-white/80">{edu.degree}</div>
                  <div className="mt-0.5 text-xs text-white/38">{edu.school}</div>
                </div>
                <span className="font-mono text-xs text-white/25">{edu.period}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Contact ──────────────────────────────── */}
        <Section id="contact" title="Get in Touch" icon={Mail}>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8">
            <p className="mb-6 max-w-md text-sm leading-relaxed text-white/48">
              Open to collaborations, consultations, or just a good chat about databases and cloud architecture.
            </p>

            {/* Contact details */}
            <div className="mb-6 space-y-3">
            {/* Email with copy */}
            <div className="flex items-center gap-3">
              <Mail size={13} className="shrink-0 text-white/25" />
              <code className="font-mono text-sm text-white/60">rajarsi3997@gmail.com</code>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 font-mono text-[11px] text-white/35 transition-all hover:border-white/[0.18] hover:text-white/65"
                aria-label="Copy email"
              >
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

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone size={13} className="shrink-0 text-white/25" />
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="font-mono text-sm text-white/60 transition-colors hover:text-white/80">
                {profile.phone}
              </a>
              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 font-mono text-[11px] text-white/35 transition-all hover:border-white/[0.18] hover:text-white/65"
                aria-label="Copy phone number"
              >
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
              <a href="mailto:rajarsi3997@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-amber-300">
                <Mail size={14} /> Email me
              </a>
              <button onClick={handleDownload}
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm text-white/50 transition-colors hover:border-white/[0.18] hover:text-white/70">
                <Download size={14} /> Download Résumé
              </button>
            </div>
          </div>
        </Section>

        {/* ── Footer ───────────────────────────────── */}
        <footer className="mb-12 border-t border-white/[0.05] pt-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-white/22">© {new Date().getFullYear()} {profile.name}</span>
            <span className="font-mono text-xs text-white/18">Built with React · Tailwind CSS</span>
          </div>
        </footer>
      </main>

      {/* ── Back to top ──────────────────────────────── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/30 bg-[#0d0d10]/90 text-amber-400 backdrop-blur-sm transition-colors hover:border-amber-400/60 hover:bg-amber-400/10"
            aria-label="Back to top"
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>

    {/* Outside resume-root so they're excluded from PDF */}
    <ChatBot />
    <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
