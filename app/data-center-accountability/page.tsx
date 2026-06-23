import { DataCenterChecklist } from "@/components/data-center-checklist";
import { DataCenterMapEmbed } from "@/components/data-center-map-embed";
import { DataCenterTopicGrid } from "@/components/data-center-topic-grid";
import { PageHero } from "@/components/page-hero";

export default function DataCenterAccountabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Data Center Accountability Hub"
        title="Review major infrastructure projects with public-interest questions in mind"
        description="Proposed or existing data centers can affect land use, utility demand, environmental review, and public budgets. This page organizes the key issues residents often need to document and ask about before approvals move forward."
        aside={
          <div className="space-y-3 text-sm leading-6 text-slate-300">
            <p className="data-label">Why this matters</p>
            <p>
              Large facilities can move quickly from concept to incentive package. A clear review
              process helps residents connect utility demand, land use, environmental impacts, and
              public subsidies before the decision is locked in.
            </p>
          </div>
        }
      />
      <div className="shell page-grid">
        <DataCenterMapEmbed />
        <DataCenterTopicGrid />

        <DataCenterChecklist />
      </div>
    </>
  );
}
