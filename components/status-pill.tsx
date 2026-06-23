import { cn } from "@/lib/utils";

type StatusPillProps = {
  tone?: "teal" | "blue" | "amber" | "red" | "slate";
  children: React.ReactNode;
};

const tones: Record<NonNullable<StatusPillProps["tone"]>, string> = {
  teal: "border-emerald-300/20 bg-emerald-300/10 text-emerald-100",
  blue: "border-amber-300/20 bg-amber-300/10 text-amber-100",
  amber: "border-amber-300/20 bg-amber-300/10 text-amber-100",
  red: "border-rose-300/20 bg-rose-300/10 text-rose-100",
  slate: "border-white/10 bg-white/5 text-slate-200",
};

export function StatusPill({ tone = "slate", children }: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}
