import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articleRecords, getArticleBySlug } from "@/data/article-records";
import { ArticleCard } from "@/components/article-card";
import { StatusPill } from "@/components/status-pill";

export function generateStaticParams() {
  return articleRecords.map((article) => ({ slug: article.slug }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articleRecords
    .filter(
      (candidate) =>
        candidate.slug !== article.slug && candidate.category === article.category,
    )
    .slice(0, 3);

  return (
    <div className="shell page-grid">
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Articles
      </Link>

      <article className="glass-panel overflow-hidden p-8 lg:p-10">
        <div className="max-w-4xl space-y-5">
          <div className="flex flex-wrap gap-2">
            <StatusPill tone="blue">{article.category}</StatusPill>
            <StatusPill tone="slate">{article.date}</StatusPill>
            <StatusPill tone="slate">{article.readTime}</StatusPill>
          </div>
          <h1 className="section-title max-w-5xl">{article.title}</h1>
          <p className="section-copy">{article.summary}</p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.72fr_0.28fr]">
          <div className="space-y-8">
            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
                <div className="space-y-4 text-base leading-8 text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="grid gap-3 text-sm leading-6 text-slate-200">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <aside className="space-y-5">
            <div className="panel-muted p-5">
              <p className="data-label">Key takeaways</p>
              <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-200">
                {article.takeaways.map((takeaway) => (
                  <div
                    key={takeaway}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    {takeaway}
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-muted p-5">
              <p className="data-label">Tags</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Related Articles</p>
            <h2 className="text-2xl font-semibold text-white">More on this topic</h2>
          </div>
          <Link href="/articles" className="text-sm text-amber-100 transition hover:text-white">
            View all articles
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedArticles.map((related) => (
            <ArticleCard key={related.slug} article={related} compact />
          ))}
        </div>
      </section>
    </div>
  );
}
