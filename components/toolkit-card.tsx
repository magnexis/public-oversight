"use client";

import { motion } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";
import { ToolkitSection } from "@/lib/types";

export function ToolkitCard({ section }: { section: ToolkitSection }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="glass-panel-strong relative overflow-hidden p-6 shadow-[0_18px_48px_rgba(15,23,42,0.28)]"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(135deg,rgba(125,211,252,0.18),transparent_62%)]" />
      <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="relative inline-flex rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-amber-300">
        <MessageSquareQuote className="h-4 w-4" />
      </div>
      <h3 className="relative mt-4 text-xl font-semibold text-white">{section.title}</h3>
      <p className="relative mt-3 text-sm leading-6 text-slate-300">{section.description}</p>
      <ul className="relative mt-5 grid gap-3 text-sm leading-6 text-slate-200">
        {section.items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 transition hover:border-amber-300/20 hover:bg-slate-950/65"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
