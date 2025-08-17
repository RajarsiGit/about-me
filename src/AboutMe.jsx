import React from "react";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Download,
  Briefcase,
  Code2,
  GraduationCap,
  Globe,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

// --- Simple data model you can tweak ----------------------------------------
const profile = {
  name: "Rajarsi",
  title: "Lead Engineer",
  location: "Bengaluru, India",
  summary:
    "Lead Engineer with a focus on PostgreSQL, AWS, and secure, high‑scale data platforms. I enjoy turning ambiguous problems into elegant, measurable systems.",
  avatar:
    "https://d37b3blifa5mva.cloudfront.net/000_clients/1194366/page/1194366KnvVQnPn.jpg?q=80&w=320&auto=format&fit=crop", // replace with your photo
  resumeUrl: "#", // replace with your actual resume link or file
  socials: [
    { name: "Email", href: "mailto:rajarsi@example.com", icon: Mail },
    { name: "GitHub", href: "https://github.com/your-handle", icon: Github },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/your-handle",
      icon: Linkedin,
    },
  ],
  skills: [
    "PostgreSQL",
    "Query Optimization",
    "Row‑Level Security",
    "AWS (RDS, Lambda, SQS, DynamoDB)",
    "Node.js",
    "TypeScript",
    "Terraform",
    "Grafana/Observability",
    "Security & IAM",
  ],
  highlights: [
    { label: "Years Experience", value: "10+" },
    { label: "Prod DBs Optimized", value: "50+" },
    { label: "Services on AWS", value: "20+" },
  ],
  experience: [
    {
      role: "Lead Engineer",
      company: "SysCloud",
      period: "2023 — Present",
      bullets: [
        "Designed backup & restore workflows across multi‑region RDS and DynamoDB.",
        "Drove PgBouncer & indexing strategy to cut query latency by >40%.",
        "Implemented secure OAuth 2.0 flows and KMS‑backed token encryption.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Acme Data Platforms",
      period: "2019 — 2023",
      bullets: [
        "Built event‑driven ingestion using SQS + Lambda, scaling to billions of rows.",
        "Introduced RLS and least‑privilege IAM; audited secrets rotation end‑to‑end.",
      ],
    },
  ],
  projects: [
    {
      name: "InfraConfigFramework (ICF)",
      tagline: "Config‑driven onboarding & DB provisioning across accounts.",
      link: "#",
    },
    {
      name: "pghoard PITR Setup",
      tagline: "Incremental backups for RDS PostgreSQL with PITR.",
      link: "#",
    },
    {
      name: "AI Ops Agent",
      tagline: "LLM‑assisted anomaly detection for logs and DB performance.",
      link: "#",
    },
  ],
};

// --- Small UI helpers -------------------------------------------------------
function Chip({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6 flex items-center gap-2">
        <Icon size={18} className="text-blue-600" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

// --- Page -------------------------------------------------------------------
export default function AboutMe() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold">{profile.name}</span>
          </div>
          <nav className="hidden gap-4 md:flex">
            <a
              className="text-sm text-slate-600 hover:text-slate-900"
              href="#about"
            >
              About
            </a>
            <a
              className="text-sm text-slate-600 hover:text-slate-900"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-sm text-slate-600 hover:text-slate-900"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="text-sm text-slate-600 hover:text-slate-900"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-sm text-slate-600 hover:text-slate-900"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-4">
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 py-12 md:grid-cols-[240px_1fr]"
        >
          <div className="flex flex-col items-center md:items-start">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-40 w-40 rounded-2xl object-cover shadow"
            />
            <a
              href={profile.resumeUrl}
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50"
            >
              <Download size={16} /> Download Résumé
            </a>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 text-slate-600">
              <span className="text-sm">{profile.title}</span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center text-sm">
                <MapPin size={16} className="mr-1" />
                {profile.location}
              </span>
            </div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              Hi, I’m {profile.name}.
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-700">
              {profile.summary}
            </p>

            {/* Highlights */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {profile.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border bg-white p-4 shadow-sm"
                >
                  <div className="text-2xl font-bold">{h.value}</div>
                  <div className="text-sm text-slate-600">{h.label}</div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap gap-3">
              {profile.socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50"
                >
                  <Icon size={16} /> {name}
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <Section id="skills" title="Skills" icon={Code2}>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience" icon={Briefcase}>
          <div className="space-y-4">
            {profile.experience.map((job, i) => (
              <div
                key={i}
                className="rounded-2xl border bg-white p-4 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-base font-semibold">{job.role}</div>
                    <div className="text-sm text-slate-600">{job.company}</div>
                  </div>
                  <div className="text-sm text-slate-500">{job.period}</div>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {job.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Selected Projects" icon={Globe}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.projects.map((p) => (
              <a
                key={p.name}
                href={p.link}
                className="group rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <div className="text-base font-semibold group-hover:underline">
                  {p.name}
                </div>
                <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
              </a>
            ))}
          </div>
        </Section>

        {/* Education (optional) */}
        <Section id="education" title="Education" icon={GraduationCap}>
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <div className="text-base font-semibold">
              MBA (Specialization: Research Methodology)
            </div>
            <div className="text-sm text-slate-600">Ongoing</div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Get in touch" icon={Mail}>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-slate-700">
              Open to collaborations, consultations, or just a good chat about
              databases and cloud architecture.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:rajarsi@example.com"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                <Mail size={16} /> Email me
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50"
              >
                <Download size={16} /> Download Résumé
              </a>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="my-10 border-t pt-6 text-sm text-slate-500">
          <div className="flex items-center justify-between">
            <span>
              © {new Date().getFullYear()} {profile.name}
            </span>
            <span>Built with React • Tailwind CSS</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

// --- How to use -------------------------------------------------------------
// 1) Drop this file into your React app (Vite/CRA/Next.js client component).
// 2) Import and render <AboutMe />.
// 3) Replace the profile object with your details. Update links and images.
// 4) Ensure Tailwind CSS and framer-motion are available in your project.
