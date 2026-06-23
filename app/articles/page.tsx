import { ArticleExplorer } from "@/components/article-explorer";
import { PageHero } from "@/components/page-hero";
import { CTAButton } from "@/components/cta-button";

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Articles"
        title="Research, explainers, and civic oversight workflows"
        description="Browse a growing library of civic explainers covering surveillance technology, public records, procurement, data centers, and practical public meeting strategy."
        aside={
          <div className="space-y-3 text-sm leading-6 text-slate-300">
            <p className="data-label">Content direction</p>
            <p>
              These articles are written to feel useful, serious, and procedural. They are meant
              to help residents understand what to read, what to ask for, and what to verify in
              official records.
            </p>
            <CTAButton href="/articles/topics" variant="secondary">
              Browse topic lanes
            </CTAButton>
          </div>
        }
      />
      <div className="page-grid">
        <ArticleExplorer />
      </div>
    </>
  );
}
