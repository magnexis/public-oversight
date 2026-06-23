"use client";

import {
  Activity,
  Droplets,
  Factory,
  LandPlot,
  Leaf,
  Megaphone,
  Power,
  ReceiptText,
} from "lucide-react";
import { FeatureCard } from "@/components/feature-card";

const topics = [
  {
    title: "Electricity demand",
    description:
      "Ask for projected megawatt demand, substation needs, and long-term grid planning.",
    icon: Power,
  },
  {
    title: "Water usage",
    description: "Review cooling assumptions, drought contingency plans, and source disclosures.",
    icon: Droplets,
  },
  {
    title: "Backup generators",
    description: "Check permit filings, emissions assumptions, and emergency operating limits.",
    icon: Factory,
  },
  {
    title: "Land use",
    description:
      "Understand rezoning, setbacks, logistics traffic, and site compatibility with nearby uses.",
    icon: LandPlot,
  },
  {
    title: "Noise impact",
    description:
      "Request acoustic studies, mitigation plans, and post-construction monitoring commitments.",
    icon: Activity,
  },
  {
    title: "Tax incentives",
    description: "Look for abatement schedules, performance obligations, and clawback provisions.",
    icon: ReceiptText,
  },
  {
    title: "Grid strain",
    description:
      "Review utility correspondence on transmission constraints and infrastructure costs.",
    icon: Megaphone,
  },
  {
    title: "Community benefit agreements",
    description:
      "Ask what measurable local benefits are documented and how they will be tracked.",
    icon: Leaf,
  },
  {
    title: "Environmental review",
    description:
      "Identify what environmental documents exist, what is still pending, and when residents can comment.",
    icon: Leaf,
  },
];

export function DataCenterTopicGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {topics.map((topic) => (
        <FeatureCard key={topic.title} {...topic} />
      ))}
    </div>
  );
}
