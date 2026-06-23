import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { PageHero } from "@/components/page-hero";
import { articleTopicRoutes, getArticlesByCategory } from "@/data/article-records";

const topicSlugToLabel = new Map(articleTopicRoutes.map((topic) => [topic.slug, topic.label]));

export function generateStaticParams() {
  return articleTopicRoutes.map((topic) => ({ topic: topic.slug }));
}

export default async function ArticleTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const resolvedParams = await params;
  const topicSlug = resolvedParams.topic as (typeof articleTopicRoutes)[number]["slug"];
  const label = topicSlugToLabel.get(topicSlug);

  if (!label) {
    notFound();
  }

  const articles = getArticlesByCategory(label);
  const topicInfo = articleTopicRoutes.find((topic) => topic.slug === topicSlug);

  return (
    <>
      <PageHero
        eyebrow="Article Topic"
        title={label}
        description={topicInfo?.description ?? "Focused article coverage for this oversight theme."}
        aside={
          <div className="space-y-3 text-sm leading-6 text-slate-300">
            <p className="data-label">Topic pages</p>
            <p>
              These pages group explainers and workflows by subject so residents can move from
              broad context into the specific record requests and questions that matter most.
            </p>
          </div>
        }
      />

      <div className="shell space-y-8 py-12 md:py-16">
        <Link href="/articles/topics" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to topic index
        </Link>

        <section className="glass-panel-strong p-6">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-200">
            <Sparkles className="h-4 w-4" />
            {articles.length} article{articles.length === 1 ? "" : "s"} found
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} compact />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
