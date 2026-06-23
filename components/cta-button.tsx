"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function CTAButton({ href, children, variant = "primary" }: CTAButtonProps) {
  return (
    <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="inline-flex">
      <Link
      href={href}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition duration-200",
        variant === "primary"
          ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-300 text-slate-950 shadow-lg shadow-amber-500/20"
          : "border border-white/10 bg-white/5 text-white hover:border-amber-300/40 hover:bg-amber-500/10",
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
