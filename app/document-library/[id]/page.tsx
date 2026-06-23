import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText, FileSearch, FolderOpen } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { PageHero } from "@/components/page-hero";
import { StatusPill } from "@/components/status-pill";
import { documentRecords } from "@/data/document-records";

export function generateStaticParams() {
  return documentRecords.map((record) => ({ id: record.id }));
}

export default async function DocumentRecordPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const record = documentRecords.find((item) => item.id === resolvedParams.id);

  if (!record) {
    notFound();
  }

  const relatedDocuments = documentRecords
    .filter((item) => item.id !== record.id && item.category === record.category)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Document Record"
        title={record.title}
        description={record.summary}
        aside={
          <div className="space-y-3 text-sm leading-6 text-slate-300">
            <p className="data-label">Library context</p>
            <p>
              This detail page surfaces the document&apos;s source type, current status, and the
              kinds of follow-up material residents may want to request next.
            </p>
          </div>
        }
      />

      <div className="shell space-y-8 py-12 md:py-16">
        <Link
          href="/document-library"
          className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to document library
        </Link>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="glass-panel-strong p-6">
            <div className="flex flex-wrap gap-2">
              <StatusPill tone="blue">{record.category}</StatusPill>
              <StatusPill tone="slate">{record.town}</StatusPill>
              <StatusPill
                tone={
                  record.status === "Available"
                    ? "teal"
                    : record.status === "Requested"
                      ? "blue"
                      : record.status === "Missing"
                        ? "red"
                        : "amber"
                }
              >
                {record.status}
              </StatusPill>
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">{record.title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{record.summary}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <InfoStat label="Town" value={record.town} />
              <InfoStat label="Date" value={record.date} />
              <InfoStat label="Source type" value={record.sourceType} />
              <InfoStat label="Status" value={record.status} />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <InfoList
                title="What this record could support"
                items={[
                  "A public explanation of how the record was created or approved.",
                  "A follow-up request if an attachment or annex is missing.",
                  "A review of whether the record matches the official public narrative.",
                ]}
              />
              <InfoList
                title="Related document categories"
                items={[
                  "Contracts and amendments",
                  "Invoices and line-item charges",
                  "Policies, audits, and meeting records",
                ]}
              />
            </div>

            <div className="mt-6">
              <InfoList
                title="Suggested follow-up request ideas"
                items={[
                  `Ask for the complete file set around ${record.title}.`,
                  "Request any related emails, notes, or redlined drafts.",
                  "Ask whether this record was discussed in a public meeting.",
                ]}
              />
            </div>
          </article>

          <aside className="space-y-4">
            <div className="glass-panel-strong p-6">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-200">
                <FolderOpen className="h-4 w-4" />
                Next steps
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                The library is designed to help residents see what is available, what has been
                requested, and what still needs to be asked for in order to build a complete public
                record.
              </p>
              <div className="mt-5 grid gap-3">
                <CTAButton href="/records-request">
                  <FileSearch className="h-4 w-4" />
                  Build a follow-up request
                </CTAButton>
                <CTAButton href="/document-library" variant="secondary">
                  <FileText className="h-4 w-4" />
                  Return to library
                </CTAButton>
              </div>
            </div>

            <div className="glass-panel-strong p-6">
              <p className="data-label">Related documents</p>
              <div className="mt-4 grid gap-3">
                {relatedDocuments.length ? (
                  relatedDocuments.map((item) => (
                    <Link
                      key={item.id}
                      href={`/document-library/${item.id}`}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-amber-300/30 hover:bg-amber-300/10"
                    >
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-400">
                        {item.town} | {item.status}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-slate-400">No related documents available in this curated set.</p>
                )}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </>
  );
}

function InfoStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="soft-grid-panel p-4">
      <p className="data-label">{label}</p>
      <p className="mt-2 text-sm font-medium text-slate-100">{value}</p>
    </div>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="soft-grid-panel p-4">
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-100">{title}</h3>
      <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
