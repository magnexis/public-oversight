import Link from "next/link";
import { ArrowRight, BookOpenText, Globe, Leaf, Scale, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";

const principles = [
  {
    title: "Transparency",
    description: "Make public technology easier to understand through contracts, policies, and plain-language summaries.",
    icon: ShieldCheck,
  },
  {
    title: "Public records",
    description: "Center the work on records, not rumors, so residents can follow the paper trail themselves.",
    icon: BookOpenText,
  },
  {
    title: "Responsible technology",
    description: "Focus on retention limits, auditability, access controls, and documented oversight.",
    icon: Scale,
  },
  {
    title: "Community oversight",
    description: "Support residents who want to ask better questions before projects move forward.",
    icon: Users,
  },
  {
    title: "Environmental accountability",
    description: "Track land use, water use, energy demand, tax incentives, and public review for infrastructure projects.",
    icon: Leaf,
  },
  {
    title: "Nonpartisan participation",
    description: "Keep the platform open to anyone who wants a more complete civic record.",
    icon: Globe,
  },
];

const sourceLinks = [
  {
    title: "FOIA.gov",
    href: "https://www.foia.gov/",
    copy: "A central public records starting point for request guidance and FOIA basics.",
  },
  {
    title: "DeFlock",
    href: "https://deflock.org/",
    copy: "A community map and resource hub for ALPR visibility and public awareness.",
  },
  {
    title: "NoALPRS",
    href: "https://www.noalprs.com/",
    copy: "A public education and organizing resource tied to ALPR oversight and action.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About / Mission"
        title="The Public Oversight Hub exists to make local government technology and infrastructure decisions easier for residents to understand, question, and review."
        description="This project is built around transparency, public records, open documents, responsible technology, environmental accountability, and nonpartisan civic participation."
        aside={
          <div className="grid gap-3 text-sm leading-6 text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="data-label">Mission</p>
              <p className="mt-2">
                We turn civic questions into a usable paper trail: records, policies, timelines,
                and meeting context that residents can actually inspect.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Focus", value: "Oversight" },
                { label: "Tone", value: "Neutral" },
                { label: "Method", value: "Source-led" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <div className="shell page-grid">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel-strong relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(135deg,rgba(253,186,116,0.18),transparent_60%)]" />
            <div className="relative space-y-5">
              <p className="eyebrow">Why this exists</p>
              <h2 className="section-title max-w-3xl">
                Residents deserve a clear, non-alarmist way to inspect public technology decisions
              </h2>
              <p className="section-copy">
                The site is designed to lower the friction between a public concern and the
                records, meeting materials, and policy language needed to evaluate it.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "Locate the record",
                  "Read the policy",
                  "Ask the next question",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="glass-panel p-6">
              <p className="eyebrow">What this is</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                A source-led front end for tracking surveillance technology, document
                requests, data center accountability, and the public review process.
              </p>
            </div>
            <div className="glass-panel p-6">
              <p className="eyebrow">What this is not</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Not a substitute for official records, not a legal service, and not a place to
                shortcut evidence or inflate claims.
              </p>
            </div>
            <div className="glass-panel p-6">
              <p className="eyebrow">How we keep it grounded</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                We connect residents to public resources, local documents, and structured tools so
                the conversation stays anchored in verifiable information.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <article key={principle.title} className="glass-panel-strong p-6">
                <div className="inline-flex rounded-2xl border border-amber-400/20 bg-amber-400/10 p-3 text-amber-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{principle.description}</p>
              </article>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel-strong p-6">
            <p className="eyebrow">Public source base</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              The site stays tied to real public resources
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              These resources help keep the project grounded in actual public guidance and
              community mapping work.
            </p>
            <Link href="/public-meeting-toolkit" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-amber-100 underline decoration-amber-300/40 underline-offset-4">
              Open the meeting toolkit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3">
            {sourceLinks.map((source) => (
              <a
                key={source.title}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="group glass-panel-strong flex items-start justify-between gap-4 p-5 transition hover:border-amber-300/30"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{source.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{source.copy}</p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-amber-200" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
