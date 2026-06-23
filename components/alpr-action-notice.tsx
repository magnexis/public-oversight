import { ExternalLink, Megaphone, ShieldAlert } from "lucide-react";

export function AlprActionNotice() {
  return (
    <section className="glass-panel-strong overflow-hidden p-5 sm:p-6 lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-rose-200">
            <Megaphone className="h-4 w-4" />
            External ALPR action notice
          </div>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            National Week of Action Against ALPRs
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            noalprs.com is a public-facing ALPR organizing resource from DeFlock. Use it as an
            external reference point for public education and civic action, then return to local
            contracts, policies, and records for verification.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="soft-grid-panel p-4">
              <p className="data-label">Focus</p>
              <p className="mt-2 text-sm text-slate-100">ALPR accountability and civic action</p>
            </div>
            <div className="soft-grid-panel p-4">
              <p className="data-label">Use case</p>
              <p className="mt-2 text-sm text-slate-100">Organizing context, not official records</p>
            </div>
            <div className="soft-grid-panel p-4">
              <p className="data-label">Best paired with</p>
              <p className="mt-2 text-sm text-slate-100">Contracts, policies, logs, and meeting packets</p>
            </div>
          </div>

          <div className="panel-muted space-y-3 p-5">
            <div className="inline-flex rounded-xl border border-rose-400/20 bg-rose-400/10 p-3 text-rose-200">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <p className="text-sm leading-6 text-slate-300">
              The embedded window is meant to feel like a live reference surface. If the site
              blocks embedding in your browser, use the open button and keep the local records
              front and center.
            </p>
            <a
              href="https://www.noalprs.com/"
              target="_blank"
              rel="noreferrer"
              className="action-button-primary w-fit"
            >
              <ExternalLink className="h-4 w-4" />
              Open noalprs.com
            </a>
          </div>
        </div>

        <div className="glass-panel relative overflow-hidden border-white/10 bg-slate-950/70 p-3 sm:p-4">
          <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(135deg,rgba(251,113,133,0.18),transparent_70%)]" />
          <div className="relative mb-3 flex items-center justify-between gap-3 px-2 pt-1">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-rose-200">
                Integrated window
              </p>
              <p className="mt-1 text-sm text-slate-300">Live reference surface for noalprs.com</p>
            </div>
            <a
              href="https://www.noalprs.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-rose-300/30 hover:bg-rose-300/10 hover:text-white"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              New tab
            </a>
          </div>
          <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-slate-950">
            <div className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[4/5]">
              <iframe
                src="https://www.noalprs.com/"
                title="NoALPRS integrated window"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
