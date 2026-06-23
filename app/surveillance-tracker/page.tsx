import { TrackerTable } from "@/components/tracker-table";
import { PageHero } from "@/components/page-hero";
import { SurveillanceMapEmbed } from "@/components/surveillance-map-embed";

export default function SurveillanceTrackerPage() {
  return (
    <>
      <PageHero
        eyebrow="Surveillance Technology Tracker"
        title="Explore the public DeFlock camera feed"
        description="This tracker now uses a bulk public camera dataset sourced from the DeFlock map feed and OpenStreetMap records, so the results scale into the thousands without inventing fields that are not actually published."
        aside={
          <div className="space-y-4 text-sm leading-6 text-slate-300">
            <div>
              <p className="data-label">Source note</p>
              <p className="mt-2">
                The table is backed by a generated local subset of the public camera feed. Each
                record links back to its OpenStreetMap source so residents can verify it directly.
              </p>
              <p className="mt-3">
                Residents can also cross-reference the live community map at{" "}
                <a
                  href="https://deflock.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-100 underline decoration-amber-300/40 underline-offset-4"
                >
                  deflock.org
                </a>
                .
              </p>
            </div>
          </div>
        }
      />
      <div className="shell page-grid">
        <SurveillanceMapEmbed />
        <TrackerTable />
      </div>
    </>
  );
}
