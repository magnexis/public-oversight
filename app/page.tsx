import { Newspaper, Sparkles } from "lucide-react";
import { getFeaturedArticles } from "@/data/article-records";
import { ArticleCard } from "@/components/article-card";
import { HomeFeatureGrid } from "@/components/home-feature-grid";
import { HeroSection } from "@/components/hero-section";
import { CTAButton } from "@/components/cta-button";
import { RouteCard } from "@/components/route-card";
import { AlprActionNotice } from "@/components/alpr-action-notice";

export default function HomePage() {
  const featuredArticles = getFeaturedArticles(3);

  return (
    <div className="pb-20">
      <HeroSection />

      <section className="shell py-8 md:py-12">
        <AlprActionNotice />
      </section>

      <section className="shell py-8 md:py-12">
        <div className="mb-8 space-y-3">
          <h2 className="section-title">Open the main pages</h2>
          <p className="section-copy">
            The homepage is now a true starting point. Each major area lives on its own route,
            so you can move directly into the tracker, records tools, library, toolkit, or mission pages.
          </p>
        </div>
        <HomeFeatureGrid />
      </section>

      <section className="shell py-8 md:py-16">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <h2 className="section-title">Route map</h2>
            <p className="section-copy">
              These cards take you to separate pages, not just deeper spots on the homepage.
            </p>
          </div>
          <CTAButton href="/research-desk" variant="secondary">
            <Sparkles className="h-4 w-4" />
            Open Research Desk
          </CTAButton>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <RouteCard
            title="Research Desk"
            description="A central route map for trackers, documents, articles, and action tools."
            href="/research-desk"
            icon="sparkles"
            meta="Hub"
            highlights={["Route-level navigation", "Quick links to maps and records"]}
          />
          <RouteCard
            title="Topic Index"
            description="Browse articles by oversight theme and jump into focused explainers."
            href="/articles/topics"
            icon="newspaper"
            meta="Editorial"
            highlights={["Surveillance", "Data centers", "Public records"]}
          />
          <RouteCard
            title="Tracker Detail"
            description="Open the surveillance tracker and drill into any record for more context."
            href="/surveillance-tracker"
            icon="radar"
            meta="Records"
            highlights={["ALPR and Flock records", "Policy and retention details"]}
          />
          <RouteCard
            title="Document Detail"
            description="Browse the library, then open a document page for deeper source context."
            href="/document-library"
            icon="archive"
            meta="Archive"
            highlights={["Contracts", "Policies", "Audits", "Minutes"]}
          />
        </div>
      </section>

      <section className="shell py-8 md:py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <h2 className="section-title">Recent explainers</h2>
            <p className="section-copy">
              Practical articles on ALPR sharing, Flock policy review, procurement trails, data
              center incentives, and public meeting prep.
            </p>
          </div>
          <CTAButton href="/articles" variant="secondary">
            Browse All Articles
          </CTAButton>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} compact />
          ))}
        </div>
      </section>

      <section className="shell py-8 md:py-16">
        <div className="glass-panel-strong flex flex-col items-start justify-between gap-6 p-5 sm:p-6 md:flex-row md:items-center md:p-8">
          <h2 className="text-3xl font-semibold text-white">
            Move from questions to documents to public action
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/records-request">Generate a Records Request</CTAButton>
            <CTAButton href="/public-meeting-toolkit" variant="secondary">
              Open the Meeting Toolkit
            </CTAButton>
            <CTAButton href="/articles" variant="secondary">
              <Newspaper className="h-4 w-4" />
              Read Articles
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
