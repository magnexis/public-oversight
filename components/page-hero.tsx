import { ArrowUpRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="shell pt-10 md:pt-14">
      <div className="glass-panel-strong relative grid gap-8 overflow-hidden p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(135deg,rgba(125,211,252,0.16),transparent_60%)]" />
        <div className="absolute -right-16 top-12 h-40 w-40 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="relative space-y-5">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="section-title max-w-4xl">{title}</h1>
          <p className="section-copy">{description}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-2 rounded-xl border border-amber-500/15 bg-amber-500/8 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
              Civic analysis
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
              Frontend-only prototype
            </span>
          </div>
        </div>
        <div className="panel-muted relative p-5">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />
          <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-400">
            Briefing Panel
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
