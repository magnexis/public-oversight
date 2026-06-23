"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { ArticleRecord } from "@/lib/types";
import { StatusPill } from "@/components/status-pill";

interface ArticleCardProps {
  article: ArticleRecord;
  compact?: boolean;
}

export function ArticleCard({ article, compact = false }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className="glass-panel-strong group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-amber-500/30 hover:shadow-[0_12px_40px_-12px_rgba(245,158,11,0.15)]"
    >
      {/* Premium Ambient Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Decorative accent corner line */}
      <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-500 to-transparent transition-all duration-500 group-hover:w-full" />

      <div>
        {/* Top Metadata */}
        <div className="relative flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <StatusPill tone="blue">{article.category}</StatusPill>
            <StatusPill tone="slate">{article.readTime}</StatusPill>
          </div>
          
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Calendar className="h-3.5 w-3.5 stroke-[1.5]" />
            <span>{article.date}</span>
          </div>
        </div>

        {/* Title & Excerpt */}
        <h3
          className={`relative mt-4 font-semibold text-white tracking-tight transition-colors duration-300 group-hover:text-amber-300 ${
            compact ? "text-xl leading-snug" : "text-2xl leading-normal"
          }`}
        >
          {/* Entire card is clickable via this stretched-link overlay */}
          <Link href={`/articles/${article.slug}`} className="focus:outline-none">
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            {article.title}
          </Link>
        </h3>
        
        <p className="relative mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
          {article.excerpt}
        </p>
      </div>

      {/* Footer Content */}
      <div className="relative mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
        {/* Dynamic Tags */}
        <div className="flex flex-wrap gap-1.5 z-20">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-800/60 border border-slate-700/50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-400 transition-colors duration-300 hover:border-amber-500/20 hover:text-amber-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div
          className="inline-flex items-center gap-2 text-sm font-medium text-amber-300/90 transition-colors duration-300 group-hover:text-amber-200"
        >
          <span>Read article</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </div>
      </div>
    </motion.article>
  );
}
