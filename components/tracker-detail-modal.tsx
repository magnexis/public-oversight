"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileStack, ScrollText, ShieldAlert, X } from "lucide-react";
import { CameraRecord } from "@/lib/types";
import { StatusPill } from "@/components/status-pill";

type TrackerDetailModalProps = {
  record: CameraRecord | null;
  onClose: () => void;
};

export function TrackerDetailModal({ record, onClose }: TrackerDetailModalProps) {
  useEffect(() => {
    if (!record) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, record]);

  if (!record) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.24 }}
          className="glass-panel-strong max-h-[90vh] w-full max-w-4xl overflow-y-auto p-6"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow">{record.locationLabel}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{record.brand}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <StatusPill tone="blue">{record.osmType}</StatusPill>
                <StatusPill tone="slate">{record.operator ?? "Operator unlisted"}</StatusPill>
                <StatusPill tone={record.mountType ? "teal" : "amber"}>
                  {record.mountType ?? "Mount unspecified"}
                </StatusPill>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl border border-white/10 p-2 text-slate-200 transition hover:bg-white/10"
              aria-label="Close details"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-4">
            <Metric label="OSM ID" value={record.osmId ? String(record.osmId) : "Unknown"} />
            <Metric label="Last updated" value={record.osmTimestamp ? record.osmTimestamp.slice(0, 10) : "Unknown"} />
            <Metric label="Zone" value={record.surveillanceZone ?? "Unspecified"} />
            <Metric label="Mount" value={record.mountType ?? "Unspecified"} />
          </div>

          <div className="grid gap-6">
              <InfoBlock icon={ShieldAlert} title="Reference" items={[record.ref, record.route]} />
            <InfoBlock
              icon={FileStack}
              title="Location and source"
              items={[
                record.latitude !== null && record.longitude !== null
                  ? `Coordinates: ${record.latitude.toFixed(5)}, ${record.longitude.toFixed(5)}`
                  : "Coordinates not available",
                `OSM type: ${record.osmType}`,
                `OSM version: ${record.osmVersion ?? "Unknown"}`,
              ]}
            />
            <InfoBlock
              icon={ScrollText}
              title="What residents should ask"
              items={[
                "Is this installation part of a public program or a private deployment?",
                "What local policy or public notice explains its presence?",
                "What retention or access rules apply in this jurisdiction?",
              ]}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={record.sourceHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition hover:bg-amber-400"
            >
              <ExternalLink className="mr-2 inline h-4 w-4" />
              Open source record
            </a>
            <Link
              href="/surveillance-tracker"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              Back to tracker
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function InfoBlock({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: string[];
  icon: typeof ShieldAlert;
}) {
  return (
    <section className="soft-grid-panel p-5">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-amber-400" />
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <ul className="mt-3 grid gap-3 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="soft-grid-panel p-4">
      <p className="data-label">{label}</p>
      <p className="mt-2 text-sm text-slate-100">{value}</p>
    </div>
  );
}
