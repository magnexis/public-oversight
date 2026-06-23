import { Sparkles } from "lucide-react";
import { getFeaturedArticles } from "@/data/article-records";
import { PageHero } from "@/components/page-hero";
import { RouteCard } from "@/components/route-card";
import { ArticleCard } from "@/components/article-card";
import { CTAButton } from "@/components/cta-button";

const routeCards = [
  {
    title: "Surveillance Tracker",
    description:
      "Search curated ALPR, Flock, drone, and camera-network records by vendor, state, policy availability, and contract status.",
    href: "/surveillance-tracker",
    icon: "radar" as const,
    meta: "Live tracker",
    highlights: [
      "Open the DeFlock map as an external lead source.",
      "Compare public policy language against the contract trail.",
    ],
  },
  {
    title: "Data Center Accountability",
    description:
      "Review power demand, water use, generators, land use, incentives, and community benefit commitments.",
    href: "/data-center-accountability",
    icon: "mapPinned" as const,
    meta: "Infrastructure",
    highlights: [
      "Cross-check against Cleanview's U.S. map.",
      "Use the checklist before a hearing or vote.",
    ],
  },
  {
    title: "Document Library",
    description:
      "Browse contracts, invoices, policies, audits, minutes, and vendor records by category and source type.",
    href: "/document-library",
    icon: "archive" as const,
    meta: "Records archive",
    highlights: [
      "Filter by status to see what is available, missing, or requested.",
      "Use the detail pages for deeper document context.",
    ],
  },
  {
    title: "Records Request Generator",
    description:
      "Turn a topic, date range, and agency into a professional public records request you can copy or download.",
    href: "/records-request",
    icon: "fileSearch" as const,
    meta: "Workflow",
    highlights: [
      "Built for residents, reporters, and local advocates.",
      "Generates text entirely on the frontend.",
    ],
  },
];

export default function ResearchDeskPage() {
  const featuredArticles = getFeaturedArticles(3);

  return (
    <>
      <PageHero
        eyebrow="Civic Research Desk"
        title="A deeper route map for documents, trackers, and oversight workflows"
        description="Use this hub to move between local surveillance records, data center review materials, article briefings, and the practical tools residents need to ask better questions."
        aside={
          <div className="space-y-3 text-sm leading-6 text-slate-300">
            <p className="data-label">Research workflow</p>
            <p>
              Start with the map or tracker, move into the record library, then turn gaps into a
              records request or a meeting question.
            </p>
          </div>
        }
      />

      <div className="shell space-y-10 py-12 md:py-16">
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {routeCards.map((card) => (
            <RouteCard key={card.title} {...card} />
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.82fr]">
          <div className="glass-panel-strong p-6">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-200">
              <Sparkles className="h-4 w-4" />
              Research summary
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              The hub is designed like a working notebook, not a news feed
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              Each route is meant to reduce the distance between a public question and the document
              that can answer it. That is why the site now separates trackers, records, articles,
              and outreach tools into clearer route-level experiences.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="soft-grid-panel p-4">
                <p className="data-label">Maps</p>
                <p className="mt-2 text-sm text-slate-200">Cleanview and DeFlock as external leads</p>
              </div>
              <div className="soft-grid-panel p-4">
                <p className="data-label">Records</p>
                <p className="mt-2 text-sm text-slate-200">Contracts, logs, policies, minutes, and audits</p>
              </div>
              <div className="soft-grid-panel p-4">
                <p className="data-label">Action</p>
                <p className="mt-2 text-sm text-slate-200">Requests, questions, and follow-up documentation</p>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong p-6">
            <p className="data-label">Quick access</p>
            <div className="mt-4 grid gap-3">
              <CTAButton href="/surveillance-tracker">Open Tracker</CTAButton>
              <CTAButton href="/data-center-accountability" variant="secondary">
                Review Data Centers
              </CTAButton>
              <CTAButton href="/document-library" variant="secondary">
                Browse Documents
              </CTAButton>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Featured Briefs</p>
              <h2 className="text-3xl font-semibold text-white">Recent explainers and oversight notes</h2>
            </div>
            <CTAButton href="/articles" variant="secondary">
              View all articles
            </CTAButton>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} compact />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
