"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Search, Library, FileQuestion } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { articleCategories, articleRecords } from "@/data/article-records";
import { ArticleCard } from "@/components/article-card";

export function ArticleExplorer() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<(typeof articleCategories)[number]>("All");
  const deferredSearch = useDeferredValue(search);

  const filteredArticles = useMemo(() => {
    const query = deferredSearch.toLowerCase().trim();

    return articleRecords.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesSearch =
        !query ||
        [article.title, article.excerpt, article.summary, ...article.tags]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, deferredSearch]);

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header Section */}
      <div className="relative border border-white/10 bg-slate-900/50 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent opacity-30" />
        
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-widest uppercase">
              <Library className="h-4 w-4" />
              <span>Editorial Library</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Research & Explainer Articles
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
              Mock editorial content for public-records workflows, contract review, surveillance
              oversight, data center accountability, and public meeting preparation.
            </p>
          </div>
          
          <div className="flex items-center self-start lg:self-center bg-slate-800/80 border border-slate-700/50 px-4 py-2 rounded-full text-xs font-medium text-slate-300">
            <span className="text-amber-400 font-bold mr-1">{filteredArticles.length}</span> articles available
          </div>
        </div>

        {/* Search Input */}
        <div className="mt-8 relative max-w-xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-amber-400 transition-colors" />
          </div>
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full bg-slate-950/60 text-white placeholder-slate-500 text-sm rounded-xl border border-white/10 pl-12 pr-4 py-3.5 outline-none transition-all duration-300 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20"
            placeholder="Search titles, tags, or article summaries..."
          />
        </div>
      </div>

      {/* Modern Filter Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-white/5">
        {articleCategories.map((cat) => {
          const isActive = category === cat;
          return (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`relative rounded-lg px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                isActive 
                  ? "text-slate-950 z-10" 
                  : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              <span className="relative z-20">{cat}</span>
              {isActive && (
                <motion.div
                  layoutId="activeCategoryTab"
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Articles Grid View */}
      <motion.div 
        layout
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.slug}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
            >
              <ArticleCard article={article} compact />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Clean Empty State */}
      <AnimatePresence>
        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex flex-col items-center justify-center py-16 px-4 text-center border border-dashed border-white/10 rounded-2xl bg-slate-900/20"
          >
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-full text-slate-500 mb-4">
              <FileQuestion className="h-6 w-6 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-medium text-white">No articles match your search</h3>
            <p className="text-sm text-slate-400 max-w-xs mt-1">
              Try adjusting your keywords or switching to a different library category.
            </p>
            <button
              onClick={() => { setSearch(""); setCategory("All"); }}
              className="mt-5 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
