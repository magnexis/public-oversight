"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigationLinks = [
  { href: "/articles", label: "Articles" },
  { href: "/records-request", label: "Records Request" },
  { href: "/surveillance-tracker", label: "Tracker" },
  { href: "/document-library", label: "Library" },
  { href: "/about", label: "About" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 pb-6 pt-12 md:px-8 border-t border-white/5 bg-slate-950/20 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 pb-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-amber-500/20 bg-slate-950/50">
                <Image
                  src="/magnexis-logo.png"
                  alt="Magnexis logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  The Public Oversight Hub
                </h2>
              </div>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-slate-400">
              A frontend-only source-led platform built to help residents understand
              surveillance technology, data centers, contracts, public records, and oversight
              processes with clarity.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid gap-2 sm:grid-cols-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-slate-900/30 px-4 py-3 text-sm text-slate-400 transition-all duration-200 hover:border-amber-500/30 hover:bg-amber-500/5 hover:text-amber-400"
                >
                  <span className="truncate">{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-slate-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl leading-relaxed">
            &copy; {currentYear} Public Oversight Hub.
          </p>
        </div>
      </div>
    </footer>
  );
}
