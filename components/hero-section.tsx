"use client";

import { motion } from "framer-motion";
import { FileSearch, Shield, Waypoints } from "lucide-react";
import { CTAButton } from "@/components/cta-button";

export function HeroSection() {
  return (
    <section className="shell grid gap-10 py-12 md:py-18 lg:grid-cols-[1.06fr_0.94fr] lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="space-y-5">
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            The Public Oversight Hub
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            A source-led site for tracking surveillance technology, data centers, public
            contracts, and local government accountability.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/records-request">Generate a Records Request</CTAButton>
          <CTAButton href="/surveillance-tracker" variant="secondary">
            Explore the Oversight Tracker
          </CTAButton>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="glass-panel-strong flex items-start gap-3 p-4">
            <Shield className="mt-0.5 h-5 w-5 text-amber-100" />
            <div>
              <p className="mt-1 text-sm text-slate-200">Retention, access controls, audits</p>
            </div>
          </div>
          <div className="glass-panel-strong flex items-start gap-3 p-4">
            <Waypoints className="mt-0.5 h-5 w-5 text-amber-100" />
            <div>
              <p className="mt-1 text-sm text-slate-200">Grid strain, water, land, tax deals</p>
            </div>
          </div>
          <div className="glass-panel-strong flex items-start gap-3 p-4">
            <FileSearch className="mt-0.5 h-5 w-5 text-amber-100" />
            <div>
              <p className="mt-1 text-sm text-slate-200">Requests residents can use immediately</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="glass-panel-strong relative overflow-hidden p-6"
      >
        <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(135deg,rgba(125,211,252,0.2),transparent)]" />
        <div className="absolute -right-12 top-10 h-32 w-32 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="relative grid gap-5">
          <div className="panel-muted p-6">
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Track camera deployments, retention policies, contracts, environmental reviews,
              and public meeting records in one clear place designed for residents, reporters,
              and community advocates.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
