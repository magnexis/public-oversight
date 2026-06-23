import { motion } from "framer-motion";

type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="panel-muted group relative overflow-hidden p-5"
    >
      <div className="absolute inset-x-0 top-0 h-10 bg-[linear-gradient(135deg,rgba(125,211,252,0.12),transparent)]" />
      <div className="absolute -right-10 top-8 h-20 w-20 rounded-full bg-amber-400/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <p className="relative font-mono text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
    </motion.div>
  );
}
