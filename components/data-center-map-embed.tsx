import { ExternalLink, MapPinned } from "lucide-react";

const cleanviewStats = [
  { label: "Total projects listed", value: "2,249" },
  { label: "Operating facilities", value: "954" },
  { label: "Planned facilities", value: "1,254" },
  { label: "Unique developers", value: "440" },
];

export function DataCenterMapEmbed() {
  return (
    <section className="glass-panel-strong overflow-hidden p-5 sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <MapPinned className="h-4 w-4" />
            External Tracking Map
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Cleanview U.S. data center tracker
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Use Cleanview&apos;s public U.S. data center map to scan operating and planned
            facilities, then bring that context back into local records, environmental review,
            permit filings, and incentive documents.
          </p>
        </div>
        <a
          href="https://cleanview.co/data-centers/us"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md shadow-amber-500/10 transition duration-200 hover:bg-amber-400"
        >
          <ExternalLink className="h-4 w-4" />
          Open full tracker
        </a>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {cleanviewStats.map((stat) => (
          <div key={stat.label} className="soft-grid-panel px-4 py-4">
            <p className="data-label">{stat.label}</p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
        <div className="aspect-[4/5] w-full sm:aspect-[16/11] lg:aspect-[16/8]">
          <iframe
            src="https://cleanview.co/data-centers/us"
            title="Cleanview U.S. Data Center Map"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4 text-sm leading-6 text-slate-300">
        <p className="font-medium text-slate-100">Source note</p>
        <p className="mt-1">
          This map is an external reference from Cleanview. Their tracker reported a June 2026
          update at the time of integration. If the embed is blocked by browser or site policy,
          use the button above to open the full tracker directly.
        </p>
      </div>
    </section>
  );
}
