import { ExternalLink, MapPinned, ShieldAlert } from "lucide-react";

const deflockHighlights = [
  {
    label: "Use case",
    value: "External Flock / ALPR reference",
  },
  {
    label: "Best paired with",
    value: "Contracts, site approvals, and policies",
  },
  {
    label: "Workflow",
    value: "Map first, records second, verification always",
  },
  {
    label: "Status",
    value: "Community mapping resource",
  },
];

export function SurveillanceMapEmbed() {
  return (
    <section className="glass-panel-strong overflow-hidden p-5 sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <MapPinned className="h-4 w-4" />
            External Tracking Map
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            DeFlock surveillance tracking map
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Use the DeFlock map as an external lead source for possible Flock camera and related
            surveillance locations, then verify what you find through official contracts, agency
            policies, meeting packets, and public records responses.
          </p>
        </div>
        <a
          href="https://deflock.org/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md shadow-amber-500/10 transition duration-200 hover:bg-amber-400"
        >
          <ExternalLink className="h-4 w-4" />
          Open DeFlock
        </a>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {deflockHighlights.map((item) => (
          <div key={item.label} className="soft-grid-panel px-4 py-4">
            <p className="data-label">{item.label}</p>
            <p className="mt-2 text-sm font-medium text-slate-100">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
        <div className="aspect-[4/5] w-full sm:aspect-[16/11] lg:aspect-[16/8]">
          <iframe
            src="https://deflock.org/"
            title="DeFlock Tracking Map"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-amber-300/15 bg-amber-300/10 px-4 py-4 text-sm leading-6 text-amber-100/90">
        <div className="flex items-start gap-3">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            <p className="font-medium text-amber-50">Verification note</p>
            <p className="mt-1">
              DeFlock is an external community reference, not the official local record. If the
              embed is blocked by browser or site policy, use the button above to open the full
              tracker directly and cross-check it with local documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
