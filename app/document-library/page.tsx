import { DocumentLibraryExplorer } from "@/components/document-library-explorer";
import { DocumentCollectionPreview } from "@/components/document-collection-preview";
import { PageHero } from "@/components/page-hero";

export default function DocumentLibraryPage() {
  return (
    <>
      <PageHero
        eyebrow="Document Library"
        title="Contracts, policies, invoices, audits, and meeting records"
        description="This frontend-only library uses curated sample records to model how documents can be organized by category, source, status, and town."
        aside={
          <div className="space-y-3 text-sm leading-6 text-slate-300">
            <p className="data-label">Future-ready</p>
            <p>
              Backend storage can be added later with Supabase Storage or another document system
              without changing the information architecture residents already use.
            </p>
            <p>
              A plain-language FOIA guide has been added so residents have a real starting
              point for request wording and follow-up.
            </p>
            <p>
              The library now also surfaces a starter document collection so the highest-value
              records are easier to find on first visit.
            </p>
          </div>
        }
      />
      <div className="shell py-6 md:py-10">
        <DocumentCollectionPreview />
      </div>
      <div className="page-grid">
        <DocumentLibraryExplorer />
      </div>
    </>
  );
}
