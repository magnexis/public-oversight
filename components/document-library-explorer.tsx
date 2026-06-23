"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Search, SlidersHorizontal, FolderOpen, AlertCircle, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { documentRecords } from "@/data/document-records";
import { DocumentCard } from "@/components/document-card";

const ALL_FILTER = "All";

export function DocumentLibraryExplorer() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(ALL_FILTER);
  const [status, setStatus] = useState(ALL_FILTER);
  const deferredSearch = useDeferredValue(search);

  // Memoize unique filters to prevent recalculation on every keypress
  const categories = useMemo(() => {
    return [ALL_FILTER, ...Array.from(new Set(documentRecords.map((d) => d.category)))];
  }, []);

  const statuses = useMemo(() => {
    return [ALL_FILTER, ...Array.from(new Set(documentRecords.map((d) => d.status)))];
  }, []);

  const filteredDocuments = useMemo(() => {
    const query = deferredSearch.toLowerCase().trim();

    return documentRecords.filter((doc) => {
      const matchesSearch =
        !query ||
        [doc.title, doc.category, doc.town, doc.sourceType, doc.summary]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesCategory = category === ALL_FILTER || doc.category === category;
      const matchesStatus = status === ALL_FILTER || doc.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [category, deferredSearch, status]);

  const hasActiveFilters = search !== "" || category !== ALL_FILTER || status !== ALL_FILTER;

  const handleResetFilters = () => {
    setSearch("");
    setCategory(ALL_FILTER);
    setStatus(ALL_FILTER);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Title & Metadata Panel */}
      <div className="relative border border-white/10 bg-slate-900/50 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-40" />

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-widest uppercase">
              <FolderOpen className="h-4 w-4" />
              <span>Data Center Disclosure Archives</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Searchable Document Catalog
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
              Organize contracts, invoices, policies, audits, meeting minutes, vendor emails,
              environmental reports, and tax agreements seamlessly.
            </p>
          </div>

          <div className="flex items-center self-start lg:self-center bg-slate-950/60 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-300">
            Records Found: <span className="text-amber-400 font-bold ml-1.5">{filteredDocuments.length}</span>
          </div>
        </div>

        {/* Action Controls Input Strip */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Main Input search field */}
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full bg-slate-950/50 text-white placeholder-slate-500 text-sm rounded-xl border border-white/10 pl-11 pr-4 py-3 outline-none transition-all duration-300 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10"
              placeholder="Search title, town, category, or source..."
            />
          </div>

          {/* Category Dropdown */}
          <FilterSelect
            label="Category"
            value={category}
            onChange={setCategory}
            options={categories}
          />

          {/* Status Dropdown */}
          <FilterSelect
            label="Filing Status"
            value={status}
            onChange={setStatus}
            options={statuses}
          />
        </div>

        {/* Active Filter Clear Prompt Badge */}
        {hasActiveFilters && (
          <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
            <p className="text-xs text-slate-500">Filters are narrowing down this directory.</p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
            >
              <RefreshCw className="h-3 w-3" />
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Grid Layout Cards Interface with Framer Fluidity */}
      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredDocuments.map((document) => (
            <motion.div
              key={document.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <DocumentCard document={document} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Fallback Empty State View Layout */}
      <AnimatePresence>
        {filteredDocuments.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="flex flex-col items-center justify-center py-20 px-4 text-center border border-dashed border-white/10 rounded-2xl bg-slate-900/10"
          >
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-slate-500 mb-4">
              <AlertCircle className="h-6 w-6 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-medium text-white">No entries match filters</h3>
            <p className="text-sm text-slate-400 max-w-sm mt-1">
              We couldn't find matches for your active criteria. Try broadening your keywords or clearing the category fields.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-6 rounded-xl bg-amber-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition duration-200"
            >
              Clear Workspace Filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
}

function FilterSelect({ label, value, onChange, options }: FilterSelectProps) {
  return (
    <div className="relative group">
      <div className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 flex items-center">
        <SlidersHorizontal className="h-3.5 w-3.5" />
      </div>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full appearance-none bg-slate-950/50 text-white text-sm rounded-xl border border-white/10 pl-11 pr-10 py-3 outline-none cursor-pointer transition-all duration-300 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 hover:border-white/15"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-slate-950 text-white">
            {option === ALL_FILTER ? `All ${label}s` : option}
          </option>
        ))}
      </select>
      {/* Custom Chevron Indicator */}
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
        ▼
      </div>
    </div>
  );
}
