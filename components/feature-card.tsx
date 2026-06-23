"use client";

import { LucideIcon } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  // Setup mouse tracking coordinates for an advanced spotlight hover effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="glass-panel-strong group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-md transition-colors duration-300 hover:border-amber-500/30"
    >
      {/* Dynamic Mouse-Tracking Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      {/* Static corner ambient color accent */}
      <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-amber-500/10 via-amber-500/0 to-transparent opacity-50" />

      {/* Icon Container with subtle scale physics on parent hover */}
      <div className="relative mb-5 inline-flex rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-amber-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:text-amber-200">
        <Icon className="h-5 w-5 stroke-[1.75]" />
      </div>

      {/* Content */}
      <h3 className="relative text-lg font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-amber-300">
        {title}
      </h3>
      
      <p className="relative mt-2.5 text-sm leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
        {description}
      </p>
    </motion.div>
  );
}
