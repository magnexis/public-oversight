"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileSearch, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/research-desk", label: "Research Desk" },
  { href: "/articles", label: "Articles" },
  { href: "/records-request", label: "Generator" },
  { href: "/surveillance-tracker", label: "Tracker" },
  { href: "/data-center-accountability", label: "Data Centers" },
  { href: "/document-library", label: "Library" },
  { href: "/public-meeting-toolkit", label: "Toolkit" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-xl backdrop-blur-xl">
        <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-amber-500/20 bg-slate-950/50 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/magnexis-logo.png"
                alt="Magnexis logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <span className="text-sm font-bold tracking-tight text-white">
              The Public Oversight Hub
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-xl border border-white/5 bg-slate-950/40 p-1 lg:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200",
                    isActive ? "text-slate-950" : "text-slate-400 hover:text-white"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navActiveTab"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <Link
              href="/records-request"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md shadow-amber-500/10 transition duration-200 hover:bg-amber-400"
            >
              <FileSearch className="h-3.5 w-3.5 stroke-[2.5]" />
              Generate Request
            </Link>
          </div>

          <button
            type="button"
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 hover:bg-white/10 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 w-full max-w-7xl lg:hidden"
          >
            <div className="rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl">
              <nav className="flex flex-col gap-1.5">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200",
                        isActive
                          ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                          : "border-transparent text-slate-400 hover:bg-white/5 hover:text-white"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <Link
                  href="/records-request"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-amber-400"
                  onClick={() => setOpen(false)}
                >
                  <FileSearch className="h-4 w-4 stroke-[2.5]" />
                  Generate Request
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
