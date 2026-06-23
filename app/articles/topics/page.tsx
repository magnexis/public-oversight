import { ArrowRight, LibraryBig } from "lucide-react";
import Link from "next/link";
import { articleTopicRoutes } from "@/data/article-records";
import { PageHero } from "@/components/page-hero";

export default function ArticleTopicsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Article Topics"
        title="Browse article lanes by oversight theme"
        description="Use these topic pages when you want a tighter editorial view of surveillance oversight, data center accountability, public records, procurement, or meeting strategy."
        aside={
          <div className="space-y-3 text-sm leading-6 text-slate-300">
            <p className="data-label">Why this view exists</p>
            <p>
              Topic pages make it easier to move from general research into a focused set of
              explainers, questions, and records request ideas.
            </p>
          </div>
        }
      />

      <div className="shell py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articleTopicRoutes.map((topic) => (
            <article key={topic.slug} className="glass-panel-strong p-6">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-200">
                <LibraryBig className="h-4 w-4" />
                Topic route
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">{topic.label}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{topic.description}</p>
              <Link
                href={`/articles/topics/${topic.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-amber-100"
              >
                Open topic page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
