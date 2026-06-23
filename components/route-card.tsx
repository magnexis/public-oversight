"use client";

import Link from "next/link";
import {
  ArrowRight,
  Archive,
  FileSearch,
  MapPinned,
  Newspaper,
  Radar,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import type { ComponentType } from "react";

type RouteCardProps = {
  title: string;
  description: string;
  href: string;
  icon: RouteIconKey;
  meta?: string;
  highlights?: string[];
};

type RouteIconKey = "sparkles" | "newspaper" | "radar" | "mapPinned" | "archive" | "fileSearch";

const routeIcons: Record<RouteIconKey, ComponentType<{ className?: string }>> = {
  sparkles: Sparkles,
  newspaper: Newspaper,
  radar: Radar,
  mapPinned: MapPinned,
  archive: Archive,
  fileSearch: FileSearch,
};

export function RouteCard({ title, description, href, icon: Icon, meta, highlights = [] }: RouteCardProps) {
  const RouteIcon = routeIcons[Icon];

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="glass-panel-strong group relative overflow-hidden p-6"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(135deg,rgba(251,191,36,0.16),transparent)] opacity-70" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="inline-flex rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-amber-300">
          <RouteIcon className="h-5 w-5" />
        </div>
        {meta ? (
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
            {meta}
          </span>
        ) : null}
      </div>

      <h3 className="relative mt-5 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-amber-200">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-6 text-slate-300">{description}</p>

      {highlights.length ? (
        <ul className="relative mt-4 grid gap-2 text-xs leading-5 text-slate-300">
          {highlights.map((highlight) => (
            <li key={highlight} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="relative mt-6">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-amber-100"
        >
          Open route
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
