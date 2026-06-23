import { motion } from "framer-motion";

type GeneratedRequestPreviewProps = {
  text: string;
};

export function GeneratedRequestPreview({ text }: GeneratedRequestPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass-panel-strong h-full p-6"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Generated Request</h3>
        <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-amber-100">
          Preview
        </span>
      </div>
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <div className="soft-grid-panel px-4 py-3">
          <p className="data-label">Tone</p>
          <p className="mt-1 text-sm text-slate-200">Professional</p>
        </div>
        <div className="soft-grid-panel px-4 py-3">
          <p className="data-label">Format</p>
          <p className="mt-1 text-sm text-slate-200">Copy / Download</p>
        </div>
        <div className="soft-grid-panel px-4 py-3">
          <p className="data-label">Use</p>
          <p className="mt-1 text-sm text-slate-200">Public records request</p>
        </div>
      </div>
      <pre className="min-h-[26rem] whitespace-pre-wrap rounded-2xl border border-white/10 bg-slate-950/75 p-5 font-mono text-[0.82rem] leading-7 text-slate-200 shadow-inner">
        {text}
      </pre>
    </motion.div>
  );
}
