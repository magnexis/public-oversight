"use client";

import { useState } from "react";
import { Check, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { dataCenterChecklistItems } from "@/data/data-center-checklist";

export function DataCenterChecklist() {
  const [checked, setChecked] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setChecked((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  const totalItems = dataCenterChecklistItems.length;
  const completedCount = checked.length;
  const completionPercentage = totalItems > 0 ? (completedCount / totalItems) * 100 : 0;

  return (
    <div className="glass-panel-strong relative border border-white/10 bg-slate-900/40 rounded-2xl p-6 backdrop-blur-xl shadow-xl overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-transparent via-amber-500/5 to-transparent opacity-40" />

      {/* Header and Progress Indicator */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <CheckCircle2 className="h-4 w-4" />
            <span>Auditing Framework</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Data Center Review Checklist
          </h3>
          <p className="max-w-xl text-sm leading-relaxed text-slate-400">
            Keep public review focused on disclosed impacts, permits, incentives, and community safeguards.
          </p>
        </div>

        {/* Counter Badge */}
        <div className="shrink-0 flex items-center justify-between gap-3 bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 sm:flex-col sm:items-end sm:justify-center sm:gap-0.5">
          <span className="text-xs font-medium text-slate-400 sm:text-[11px] sm:uppercase sm:tracking-wider">Progress</span>
          <span className="text-sm font-bold text-white font-mono">
            <span className="text-amber-400">{completedCount}</span> / {totalItems}
          </span>
        </div>
      </div>

      {/* Progress Bar Track */}
      <div className="relative w-full h-1.5 bg-slate-950/60 rounded-full mb-8 overflow-hidden border border-white/5">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-500 to-emerald-400"
          initial={{ width: 0 }}
          animate={{ width: `${completionPercentage}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Checklist Grid */}
      <div className="grid gap-2.5">
        {dataCenterChecklistItems.map((item) => {
          const isChecked = checked.includes(item.id);

          return (
            <label
              key={item.id}
              className={`group flex cursor-pointer items-start gap-4 rounded-xl border p-4 text-sm transition-all duration-300 select-none ${
                isChecked
                  ? "border-emerald-500/20 bg-emerald-950/10"
                  : "border-white/5 bg-slate-950/30 hover:border-white/15 hover:bg-slate-950/50"
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleItem(item.id)}
                className="sr-only"
              />

              {/* Custom Animated Checkbox Indicator */}
              <div
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all duration-300 ${
                  isChecked
                    ? "border-emerald-400 bg-emerald-500/20 text-emerald-300"
                    : "border-slate-600 bg-slate-900 group-hover:border-amber-400/50"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isChecked && (
                    <motion.div
                      initial={{ scale: 0.4, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.4, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Checklist Content Text */}
              <div className="space-y-0.5">
                <motion.span
                  animate={{ 
                    color: isChecked ? "rgba(148, 163, 184, 0.6)" : "rgba(248, 250, 252, 1)"
                  }}
                  transition={{ duration: 0.2 }}
                  className={`font-medium tracking-wide ${isChecked ? "line-through decoration-slate-600/50" : ""}`}
                >
                  {item.label}
                </motion.span>
                
                {/* Fallback supporting descriptive text helper if present in records data type */}
                {item.description && (
                  <p className={`text-xs transition-colors duration-300 ${isChecked ? "text-slate-600" : "text-slate-400"}`}>
                    {item.description}
                  </p>
                )}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
