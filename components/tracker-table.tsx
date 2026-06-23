"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { RefreshCcw, Search, Radar, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { deflockCameraRecords } from "@/data/deflock-camera-records";
import { CameraRecord } from "@/lib/types";
import { TrackerDetailModal } from "@/components/tracker-detail-modal";
import { StatusPill } from "@/components/status-pill";

const all = "All";

export function TrackerTable() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState(all);
  const [zone, setZone] = useState(all);
  const [mount, setMount] = useState(all);
  const [osmType, setOsmType] = useState(all);
  const [page, setPage] = useState(1);
  const [selectedRecord, setSelectedRecord] = useState<CameraRecord | null>(null);
  const deferredSearch = useDeferredValue(search);
  const pageSize = 24;

  const brands = [all, ...new Set(deflockCameraRecords.map((record) => record.brand))];
  const zones = [all, ...new Set(deflockCameraRecords.map((record) => record.surveillanceZone).filter(Boolean) as string[])];
  const mounts = [all, ...new Set(deflockCameraRecords.map((record) => record.mountType).filter(Boolean) as string[])];
  const types = [all, ...new Set(deflockCameraRecords.map((record) => record.osmType))];

  const filteredRecords = useMemo(() => {
    const query = deferredSearch.toLowerCase().trim();

    return deflockCameraRecords.filter((record) => {
      const matchesSearch =
        !query ||
        [
          record.brand,
          record.locationLabel,
          record.operator,
          record.ref,
          record.route,
          record.surveillanceZone,
          record.mountType,
          String(record.osmId ?? ""),
          String(record.osmVersion ?? ""),
          String(record.latitude ?? ""),
          String(record.longitude ?? ""),
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesBrand = brand === all || record.brand === brand;
      const matchesZone = zone === all || record.surveillanceZone === zone;
      const matchesMount = mount === all || record.mountType === mount;
      const matchesType = osmType === all || record.osmType === osmType;

      return matchesSearch && matchesBrand && matchesZone && matchesMount && matchesType;
    });
  }, [brand, deferredSearch, mount, osmType, zone]);

  useEffect(() => {
    setPage(1);
  }, [brand, mount, osmType, search, zone]);

  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / pageSize));

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const visibleRecords = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return filteredRecords.slice(startIndex, startIndex + pageSize);
  }, [filteredRecords, page]);

  const startIndex = filteredRecords.length === 0 ? 0 : (page - 1) * pageSize + 1;
  const endIndex = Math.min(page * pageSize, filteredRecords.length);

  const hasActiveFilters =
    Boolean(search) || brand !== all || zone !== all || mount !== all || osmType !== all;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="glass-panel-strong overflow-hidden"
      >
        <div className="grid gap-5 border-b border-white/10 p-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
                <Radar className="h-4 w-4" />
                Public map feed
              </div>
              <h2 className="text-2xl font-semibold text-white">DeFlock camera records</h2>
              <p className="max-w-3xl text-sm leading-6 text-slate-300">
                This tracker uses a local subset of the public DeFlock camera feed sourced from
                OpenStreetMap data, so the table scales to more than 800 real camera records
                without inventing town, agency, or contract details that the feed does not provide.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill tone="slate">{filteredRecords.length} records</StatusPill>
              <StatusPill tone="blue">{deflockCameraRecords.length} loaded</StatusPill>
              {hasActiveFilters ? (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setBrand(all);
                    setZone(all);
                    setMount(all);
                    setOsmType(all);
                  }}
                  className="action-button"
                >
                  <RefreshCcw className="h-4 w-4" />
                  Reset filters
                </button>
              ) : null}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
            <p>
              Showing <span className="font-semibold text-white">{startIndex}</span> to{" "}
              <span className="font-semibold text-white">{endIndex}</span> of{" "}
              <span className="font-semibold text-white">{filteredRecords.length}</span>
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                disabled={page === 1}
                className="rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 transition hover:border-amber-300/30 hover:bg-amber-300/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Prev
              </button>
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Page {page} / {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
                disabled={page === totalPages}
                className="rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 transition hover:border-amber-300/30 hover:bg-amber-300/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1.5fr_repeat(4,1fr)]">
            <label className="relative xl:col-span-1">
              <span className="mb-2 block text-sm text-slate-300">Search records</span>
              <Search className="pointer-events-none absolute left-4 top-[2.35rem] h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search brand, operator, route, ref, or OSM ID"
                className="input pl-11"
              />
            </label>
            <FilterSelect label="Brand" value={brand} onChange={setBrand} options={brands} />
            <FilterSelect label="Zone" value={zone} onChange={setZone} options={zones} />
            <FilterSelect label="Mount" value={mount} onChange={setMount} options={mounts} />
            <FilterSelect label="OSM type" value={osmType} onChange={setOsmType} options={types} />
          </div>
        </div>

        <div className="hidden overflow-x-auto xl:block">
          <table className="min-w-full text-left">
            <thead className="bg-slate-950/45 text-xs uppercase tracking-[0.22em] text-slate-400">
              <tr>
                {[
                  "Reference",
                  "Brand",
                  "Operator",
                  "Zone",
                  "Mount",
                  "OSM type",
                  "Last updated",
                  "Source",
                  "Details",
                ].map((heading) => (
                  <th key={heading} className="px-4 py-4 font-medium">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleRecords.map((record) => (
                <tr key={record.id} className="border-t border-white/10 text-sm text-slate-200">
                  <td className="px-4 py-4">
                    <p className="font-medium text-white">{record.locationLabel}</p>
                    <p className="mt-1 text-xs text-slate-400">{record.ref}</p>
                  </td>
                  <td className="px-4 py-4">{record.brand}</td>
                  <td className="px-4 py-4">{record.operator ?? "Unlisted"}</td>
                  <td className="px-4 py-4">{record.surveillanceZone ?? "Unspecified"}</td>
                  <td className="px-4 py-4">{record.mountType ?? "Unspecified"}</td>
                  <td className="px-4 py-4">{record.osmType}</td>
                  <td className="px-4 py-4">{record.osmTimestamp ? record.osmTimestamp.slice(0, 10) : "Unknown"}</td>
                  <td className="px-4 py-4">
                    <a
                      href={record.sourceHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-100 underline decoration-amber-300/40 underline-offset-4"
                    >
                      Open source
                    </a>
                  </td>
                  <td className="px-4 py-4">
                    <button
                      type="button"
                      onClick={() => setSelectedRecord(record)}
                      className="rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-xs font-medium text-amber-100 transition hover:border-amber-300/40 hover:bg-amber-300/20"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 p-4 xl:hidden">
          {visibleRecords.map((record) => (
            <motion.article key={record.id} whileHover={{ y: -3 }} className="soft-grid-panel p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="eyebrow">{record.locationLabel}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{record.brand}</h3>
                  <p className="mt-1 text-sm text-slate-300">{record.operator ?? "Operator unlisted"}</p>
                </div>
                <StatusPill tone="slate">{record.osmType}</StatusPill>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <MobileMetric label="Reference" value={record.ref} />
                <MobileMetric label="Zone" value={record.surveillanceZone ?? "Unspecified"} />
                <MobileMetric label="Mount" value={record.mountType ?? "Unspecified"} />
                <MobileMetric label="Last updated" value={record.osmTimestamp ? record.osmTimestamp.slice(0, 10) : "Unknown"} />
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <a
                  href={record.sourceHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-amber-100 underline decoration-amber-300/40 underline-offset-4"
                >
                  Open source record
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedRecord(record)}
                  className="rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-xs font-medium text-amber-100 transition hover:border-amber-300/40 hover:bg-amber-300/20"
                >
                  View Details
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {filteredRecords.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="border-t border-white/10 p-6"
            >
              <div className="soft-grid-panel flex items-center gap-3 px-4 py-4 text-sm text-slate-300">
                <ShieldAlert className="h-4 w-4 text-amber-300" />
                No records match the current search and filter combination.
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {filteredRecords.length > pageSize ? (
          <div className="border-t border-white/10 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-400">
                Browse the feed in pages of {pageSize}. The bulk dataset stays local, but we only
                render one slice at a time.
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage((current) => Math.max(1, current - 1))}
                  disabled={page === 1}
                  className="rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 transition hover:border-amber-300/30 hover:bg-amber-300/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
                  disabled={page === totalPages}
                  className="rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 transition hover:border-amber-300/30 hover:bg-amber-300/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </motion.div>

      <TrackerDetailModal record={selectedRecord} onClose={() => setSelectedRecord(null)} />
    </>
  );
}

function MobileMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <p className="data-label">{label}</p>
      <p className="mt-1 text-sm text-slate-100">{value}</p>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="grid gap-2 text-sm text-slate-300">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="input">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
