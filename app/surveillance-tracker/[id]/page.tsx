import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FileSearch, Radar, ShieldCheck } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { PageHero } from "@/components/page-hero";
import { deflockCameraRecords } from "@/data/deflock-camera-records";

export function generateStaticParams() {
  return deflockCameraRecords.map((record) => ({ id: record.id }));
}

export default async function SurveillanceRecordPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const record = deflockCameraRecords.find((item) => item.id === resolvedParams.id);

  if (!record) {
    notFound();
  }

  const relatedRecords = deflockCameraRecords
    .filter(
      (item) =>
        item.id !== record.id &&
        (item.brand === record.brand || item.surveillanceZone === record.surveillanceZone),
    )
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Camera Record"
        title={`${record.brand} • ${record.locationLabel}`}
        description={`Public map record last updated ${record.osmTimestamp ? record.osmTimestamp.slice(0, 10) : "unknown date"}.`}
        aside={
          <div className="space-y-3 text-sm leading-6 text-slate-300">
            <p className="data-label">Record snapshot</p>
            <p>
              This page shows the public OpenStreetMap record and the location metadata exposed
              by the DeFlock camera feed.
            </p>
          </div>
        }
      />

      <div className="shell space-y-8 py-12 md:py-16">
        <Link
          href="/surveillance-tracker"
          className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to tracker
        </Link>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="glass-panel-strong p-6">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                {record.osmType}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                {record.brand}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                {record.operator ?? "Operator unlisted"}
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">{record.locationLabel}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              This entry is pulled from the public bulk map feed. The record is accurate to the
              published source fields, so fields that are not present in the feed are left blank
              rather than guessed.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <InfoStat label="OSM ID" value={record.osmId ? String(record.osmId) : "Unknown"} />
              <InfoStat label="Zone" value={record.surveillanceZone ?? "Unspecified"} />
              <InfoStat label="Mount" value={record.mountType ?? "Unspecified"} />
              <InfoStat
                label="Last updated"
                value={record.osmTimestamp ? record.osmTimestamp.slice(0, 10) : "Unknown"}
              />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <InfoList
                title="Source fields"
                items={[
                  record.route,
                  record.ref,
                  record.osmType,
                  record.brand,
                  record.operator ?? "Operator unlisted",
                ]}
              />
              <InfoList
                title="Coordinate context"
                items={[
                  record.latitude !== null && record.longitude !== null
                    ? `Latitude ${record.latitude.toFixed(5)}`
                    : "Latitude unavailable",
                  record.latitude !== null && record.longitude !== null
                    ? `Longitude ${record.longitude.toFixed(5)}`
                    : "Longitude unavailable",
                  record.stateHint ? `Hint: ${record.stateHint}` : "No state hint in source",
                ]}
              />
            </div>
          </article>

          <aside className="space-y-4">
            <div className="glass-panel-strong p-6">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-200">
                <ShieldCheck className="h-4 w-4" />
                Action panel
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Use the tracker to identify public camera records, then compare them against local
                policy, meeting packets, and records requests if you need the oversight trail.
              </p>
              <div className="mt-5 grid gap-3">
                <CTAButton href="/records-request">
                  <FileSearch className="h-4 w-4" />
                  Build a request
                </CTAButton>
                <a
                  href={record.sourceHref}
                  target="_blank"
                  rel="noreferrer"
                  className="action-button w-fit"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open source record
                </a>
              </div>
            </div>

            <div className="glass-panel-strong p-6">
              <p className="data-label">Related records</p>
              <div className="mt-4 grid gap-3">
                {relatedRecords.length ? (
                  relatedRecords.map((item) => (
                    <Link
                      key={item.id}
                      href={`/surveillance-tracker/${item.id}`}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-amber-300/30 hover:bg-amber-300/10"
                    >
                      <p className="text-sm font-semibold text-white">{item.route}</p>
                      <p className="mt-1 text-xs text-slate-400">
                        {item.brand} {item.operator ? `| ${item.operator}` : ""}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-slate-400">No closely related records in the bulk feed yet.</p>
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
