import { RequestGenerator } from "@/components/request-generator";
import { PageHero } from "@/components/page-hero";

export default function RecordsRequestPage() {
  return (
    <>
      <PageHero
        eyebrow="Public Records Tools"
        title="Records Request Generator"
        description="Build a professional request for contracts, policies, meeting records, environmental review documents, and oversight materials using local form state only."
        aside={
          <div className="space-y-3 text-sm leading-6 text-slate-300">
            <p className="data-label">What this helps with</p>
            <p>
              Residents often know what they want to understand but not how to phrase the request.
              This generator turns topics into clean, professional language that is easier to copy,
              refine, and send.
            </p>
          </div>
        }
      />
      <div className="shell page-grid">
        <RequestGenerator />
      </div>
    </>
  );
}
