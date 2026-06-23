"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FolderOpen, ArrowRight } from "lucide-react";
import { documentRecords } from "@/data/document-records";
import { StatusPill } from "@/components/status-pill";

const featuredDocumentIds = ["doc-1", "doc-3", "doc-5", "doc-9", "doc-10", "doc-11"];

export function DocumentCollectionPreview() {
  const featuredDocuments = featuredDocumentIds
    .map((id) => documentRecords.find((document) => document.id === id))
    .filter(Boolean);

  return (
    <section className="glass-panel-strong overflow-hidden p-5 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-rose-200">
            <FolderOpen className="h-4 w-4" />
            Featured document collection
          </div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            A starter set of the records residents usually need first
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            This collection is designed to surface the most useful record types up front, including
            contracts, policies, meeting records, and the FOIA guide that helps people write
            better requests.
          </p>
        </div>
        <Link
          href="/document-library"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-rose-300/40 hover:bg-rose-300/10"
        >
          Browse library
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredDocuments.map((document) => {
          if (!document) {
            return null;
          }

          return (
            <motion.article
              key={document.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="soft-grid-panel flex h-full flex-col justify-between p-4"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <StatusPill tone="blue">{document.category}</StatusPill>
                  <StatusPill tone="slate">{document.status}</StatusPill>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{document.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{document.summary}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-slate-400">
                <span>{document.town}</span>
                <Link href={`/document-library/${document.id}`} className="text-rose-200">
                  View detail
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
