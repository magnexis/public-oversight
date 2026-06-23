import Link from "next/link";
import { ArrowRight, ExternalLink, FileText, Mail, MessageSquareQuote, Scale, ShieldCheck } from "lucide-react";
import { publicMeetingQuestions, publicResourceLinks, toolkitSections } from "@/data/toolkit-content";
import { PageHero } from "@/components/page-hero";
import { ToolkitCard } from "@/components/toolkit-card";

export default function PublicMeetingToolkitPage() {
  return (
    <>
      <PageHero
        eyebrow="Public Meeting Toolkit"
        title="Prepare focused questions, comments, and follow-up"
        description="Use practical, source-led tools to stay calm, specific, and evidence-based when discussing surveillance systems, vendor contracts, or proposed data center projects at a public meeting."
        aside={
          <div className="grid gap-3 text-sm leading-6 text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="data-label">Best practice</p>
              <p className="mt-2">
                Keep comments short, request the document, and ask for the date, vendor, and
                policy that supports the decision.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Questions", value: "8" },
                { label: "Templates", value: "4" },
                { label: "Real sources", value: "3" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
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
        <section className="glass-panel-strong overflow-hidden p-5 sm:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-start">
            <div className="space-y-4">
              <p className="eyebrow">Meeting field guide</p>
              <h2 className="section-title max-w-3xl">
                Ask for the record, the policy, and the public rationale
              </h2>
              <p className="section-copy">
                These prompts are designed to keep the discussion grounded in documents and
                decision-making. They work best when you bring them to the podium, leave them on
                the record, and follow up in writing.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/records-request" className="action-button-primary">
                  <FileText className="h-4 w-4" />
                  Generate a records request
                </Link>
                <a
                  href="https://www.foia.gov/"
                  target="_blank"
                  rel="noreferrer"
                  className="action-button"
                >
                  <ExternalLink className="h-4 w-4" />
                  FOIA.gov
                </a>
              </div>
            </div>

            <div className="panel-muted space-y-4 p-5">
              <p className="data-label">Why this works</p>
              <div className="grid gap-3">
                {[
                  "Specific questions are easier for officials to answer on the record.",
                  "Written follow-up helps preserve the paper trail for future review.",
                  "Documents usually reveal more than a verbal summary ever will.",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Public comment",
              icon: MessageSquareQuote,
              copy: "Lead with one clear point, one specific ask, and one document you want published.",
            },
            {
              title: "Email follow-up",
              icon: Mail,
              copy: "Send a short note after the meeting so your request is timestamped and easy to track.",
            },
            {
              title: "Evidence first",
              icon: ShieldCheck,
              copy: "Refer to contracts, policies, hearing packets, or environmental review before opinions.",
            },
            {
              title: "Legal context",
              icon: Scale,
              copy: "Use FOIA and state public records processes to ground your questions in procedure.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="glass-panel-strong p-5 sm:p-6">
                <div className="inline-flex rounded-2xl border border-amber-400/20 bg-amber-400/10 p-3 text-amber-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.copy}</p>
              </article>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Questions to ask</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Questions to ask at a town meeting</h2>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-300">
                Ready to use
              </div>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {publicMeetingQuestions.map((question, index) => (
                <div
                  key={question}
                  className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm text-slate-200 transition-colors hover:border-amber-300/25 hover:bg-slate-950/65"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-200/80">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 leading-6">{question}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel-strong space-y-4 p-6 sm:p-7">
            <p className="eyebrow">Real sources</p>
            <h2 className="text-2xl font-semibold text-white">
              Reference public guidance before you speak
            </h2>
            <p className="text-sm leading-6 text-slate-300">
              These links keep the toolkit tied to real public resources instead of generic
              placeholders.
            </p>
            <div className="grid gap-3">
              {publicResourceLinks.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-amber-300/25 hover:bg-white/8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-white">{resource.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{resource.description}</p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-amber-200" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          {toolkitSections.map((section) => (
            <ToolkitCard key={section.title} section={section} />
          ))}
        </div>
      </div>
    </>
  );
}
