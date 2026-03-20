import {
  Mail,
  MapPin,
  Download,
  Briefcase,
  Code2,
  GraduationCap,
  Globe,
  Sparkles,
} from "lucide-react";
import profile from "./data/profile";
import Chip from "./components/Chip";
import Section from "./components/Section";
import SocialIcon from "./components/SocialIcon";
import { downloadAsPdf } from "./utils/downloadAsPdf";

export default function AboutMe() {
  const handleDownload = (e) => {
    e.preventDefault();
    downloadAsPdf("resume-root", "Rajarsi_Saha_Resume.pdf");
  };

  return (
    <div id="resume-root" className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold">{profile.name}</span>
          </div>
          <nav className="hidden gap-4 md:flex">
            <a className="text-sm text-slate-600 hover:text-slate-900" href="#about">About</a>
            <a className="text-sm text-slate-600 hover:text-slate-900" href="#skills">Skills</a>
            <a className="text-sm text-slate-600 hover:text-slate-900" href="#experience">Experience</a>
            <a className="text-sm text-slate-600 hover:text-slate-900" href="#projects">Projects</a>
            <a className="text-sm text-slate-600 hover:text-slate-900" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-4">
        <Section id="about" className="grid gap-8 py-12 md:grid-cols-[240px_1fr]">
          <div className="flex flex-col items-center md:items-start">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-40 w-40 rounded-2xl object-cover shadow"
            />
            <button
              onClick={handleDownload}
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50"
            >
              <Download size={16} /> Download Résumé
            </button>
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
              Hi, I'm {profile.name}.
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-700">
              {profile.summary}
            </p>

            {/* Highlights */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {profile.highlights.map((h) => (
                <div key={h.label} className="rounded-2xl border bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold">{h.value}</div>
                  <div className="text-sm text-slate-600">{h.label}</div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap gap-3">
              {profile.socials.map(({ name, href, slug }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50"
                >
                  <SocialIcon slug={slug} size={16} /> {name}
                </a>
              ))}
            </div>
          </div>
        </Section>

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
              <div key={i} className="rounded-2xl border bg-white p-4 shadow-sm">
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
                <div className="text-base font-semibold group-hover:underline">{p.name}</div>
                <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
              </a>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" icon={GraduationCap}>
          <div className="space-y-3">
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="text-base font-semibold">Master of Science — Computer Science</div>
              <div className="text-sm text-slate-600">Pondicherry University · 2019 – 2021</div>
            </div>
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="text-base font-semibold">Bachelor of Science — Computer Science</div>
              <div className="text-sm text-slate-600">St. Xavier's College (Autonomous), Kolkata · 2016 – 2019</div>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Get in touch" icon={Mail}>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-slate-700">
              Open to collaborations, consultations, or just a good chat about databases and cloud architecture.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:rajarsi3997@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                <Mail size={16} /> Email me
              </a>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50"
              >
                <Download size={16} /> Download Résumé
              </button>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="my-10 border-t pt-6 text-sm text-slate-500">
          <div className="flex items-center justify-between">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>Built with React • Tailwind CSS</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
