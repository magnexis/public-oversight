"use client";

import { Archive, DatabaseZap, FileSearch, Radar } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";

const features = [
  {
    title: "Surveillance Oversight",
    description:
      "Track ALPRs, Flock cameras, drones, camera networks, and related public contracts.",
    icon: Radar,
  },
  {
    title: "Data Center Accountability",
    description:
      "Understand energy use, water use, land use, tax incentives, and community impact.",
    icon: DatabaseZap,
  },
  {
    title: "Public Records Tools",
    description:
      "Generate clear, professional records requests residents can copy and send.",
    icon: FileSearch,
  },
  {
    title: "Document Transparency",
    description:
      "Organize contracts, invoices, policies, audits, meeting minutes, and vendor communications.",
    icon: Archive,
  },
];

export function HomeFeatureGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}
