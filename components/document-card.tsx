"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, X, MapPin, Calendar, FileCheck, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DocumentRecord } from "@/lib/types";
import { StatusPill } from "@/components/status-pill";

export function DocumentCard({ document: record }: { document: DocumentRecord }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Document Card Card Surface */}
      <motion.article 
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="glass-panel-strong group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-amber-500/30"
      >
        <div>
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-2.5 text-amber-300 group-hover:bg-amber-500/20 transition-colors duration-300">
              <FileText className="h-5 w-5" />
            </div>
            <StatusPill tone={getStatusTone(record.status)}>{record.status}</StatusPill>
          </div>

          <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-amber-300 transition-colors duration-300">
            {record.title}
          </h3>

          {/* Clean Key-Value Layout Grid */}
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-y border-white/5 py-3 text-xs text-slate-400">
            <MetaRow icon={<Info className="h-3.5 w-3.5" />} label="Category" value={record.category} />
            <MetaRow icon={<MapPin className="h-3.5 w-3.5" />} label="Town" value={record.town} />
            <MetaRow icon={<Calendar className="h-3.5 w-3.5" />} label="Date" value={record.date} />
            <MetaRow icon={<FileCheck className="h-3.5 w-3.5" />} label="Source" value={record.sourceType} />
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-400 line-clamp-2">
            {record.summary}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="mt-6 w-full rounded-xl border border-white/10 bg-slate-950/40 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-300 transition-all duration-300 hover:border-amber-500/30 hover:bg-amber-500/10 hover:text-amber-300"
        >
          View Details
        </button>
      </motion.article>

      {/* Animated Premium Overlay & Backdrop modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Box Scale Up */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", duration: 0.4 }}
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-slate-900/90 p-6 md:p-8 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                    {record.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {record.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-white/5 bg-white/5 p-2 text-slate-400 hover:bg-white/10 hover:text-white transition duration-200"
                  aria-label="Close document details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Extended Metadata Matrix */}
              <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-white/5 bg-slate-950/40 p-4 text-sm text-slate-300">
                <MetaRow icon={<MapPin className="h-4 w-4" />} label="Township Jurisdiction" value={record.town} />
                <MetaRow icon={<Calendar className="h-4 w-4" />} label="Filing/Disclosure Date" value={record.date} />
                <MetaRow icon={<FileCheck className="h-4 w-4" />} label="Source Classification" value={record.sourceType} />
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-medium">Status</span>
                  <div className="mt-1 flex">
                    <StatusPill tone={getStatusTone(record.status)}>{record.status}</StatusPill>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Document Summary</h4>
                <p className="text-sm leading-relaxed text-slate-300 bg-slate-950/20 border border-white/5 p-4 rounded-xl">
                  {record.summary}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/document-library/${record.id}`}
                  className="rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition hover:bg-amber-400"
                >
                  Open detail page
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function getStatusTone(status: DocumentRecord["status"]) {
  switch (status) {
    case "Available": return "teal";
    case "Requested": return "blue";
    case "Missing": return "red";
    case "Under Review": return "amber";
    default: return "slate";
  }
}

interface MetaRowProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

function MetaRow({ label, value, icon }: MetaRowProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] md:text-[11px] uppercase tracking-wider text-slate-500 font-medium flex items-center gap-1">
        {icon}
        {label}
      </span>
      <span className="font-medium text-slate-200 truncate">{value}</span>
    </div>
  );
}
