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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "./data/profile";
import Section from "./components/Section";
import SocialIcon from "./components/SocialIcon";
import ChatBot from "./components/ChatBot";
import SearchModal from "./components/SearchModal";
import PageLoader from "./components/PageLoader";
import AnimatedStat from "./components/AnimatedStat";
import TiltAvatar from "./components/TiltAvatar";
import TiltCard from "./components/TiltCard";
import FlipCertCard from "./components/FlipCertCard";
import SkillChip, { ROW_GLOW, GLOW_COLOR } from "./components/SkillChip";
import Tag from "./components/Tag";
import ExpandableCard from "./components/ExpandableCard";
import OfflineBanner from "./components/OfflineBanner";
import { downloadAsPdf } from "./utils/downloadAsPdf";

const ICON_COLOR = "rgba(255,255,255,0.5)";
const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Leadership", "Contact"];
const MORE_NAV_ITEMS = ["Certifications", "Open Source", "Publications", "Education"];
const ALL_NAV_ITEMS = [...NAV_ITEMS, ...MORE_NAV_ITEMS];
const toId = (item) => item.toLowerCase().replace(/\s+/g, "-");
const PROJECT_CATEGORIES = ["All", ...Array.from(new Set(profile.projects.map((p) => p.category)))];

const education = [
  { degree: "Master of Science — Computer Science", school: "Pondicherry University", period: "2019 – 2021" },
  { degree: "Bachelor of Science — Computer Science", school: "St. Xavier's College (Autonomous), Kolkata", period: "2016 – 2019" },
];

function NavMoreDropdown({ activeSection }) {
  const [open, setOpen] = useState(false);
  const isAnyActive = MORE_NAV_ITEMS.some((item) => activeSection === toId(item));

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest transition-colors duration-200 ${isAnyActive ? "text-amber-400" : "text-white/30 hover:text-white/60"}`}
      >
        More
        <ChevronDown size={10} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            className="absolute right-0 top-[calc(100%+4px)] z-50 min-w-[160px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#0f0f14] py-1.5 shadow-2xl shadow-black/60"
          >
            {MORE_NAV_ITEMS.map((item) => {
              const isActive = activeSection === toId(item);
              return (
                <a
                  key={item}
                  href={`#${toId(item)}`}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest transition-colors ${isActive ? "bg-amber-400/10 text-amber-400" : "text-white/40 hover:bg-white/[0.04] hover:text-white/70"}`}
                >
                  {item}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutMe() {
  const [activeSection, setActiveSection] = useState("about");
  const [loading, setLoading] = useState(true);
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
    const ids = ALL_NAV_ITEMS.map(toId);
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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
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
    <AnimatePresence>{loading && <PageLoader />}</AnimatePresence>
    <OfflineBanner />
    <div id="resume-root" className="min-h-screen bg-[#0d0d10] text-[#f0ece8]">
      <div className="fixed left-0 right-0 top-0 z-50 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      {/* ── Header ───────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0d0d10]/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/[0.05] shadow-[0_0_10px_rgba(251,191,36,0.06)]">
              <span className="font-display text-xs font-bold text-amber-400">RS</span>
            </div>
            <span className="whitespace-nowrap font-mono text-sm tracking-wide text-white/75">{profile.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 md:flex">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === toId(item);
                return (
                  <a key={item} href={`#${toId(item)}`}
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
              <NavMoreDropdown activeSection={activeSection} />
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
                {ALL_NAV_ITEMS.map((item) => {
                  const isActive = activeSection === toId(item);
                  return (
                    <a key={item} href={`#${toId(item)}`}
                      onClick={(e) => { e.preventDefault(); handleNavClick(`#${toId(item)}`); }}
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
              <motion.a href={profile.socials.find((s) => s.name === "LinkedIn")?.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm text-white/50 transition-colors hover:border-white/[0.18] hover:text-white/70">
                <ExternalLink size={14} /> LinkedIn
              </motion.a>
              <motion.a href={profile.portfolioUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm text-white/50 transition-colors hover:border-white/[0.18] hover:text-white/70">
                <Globe size={14} /> View my personal portfolio
              </motion.a>
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
