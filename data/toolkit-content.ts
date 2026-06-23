import { ToolkitSection } from "@/lib/types";

export const publicMeetingQuestions = [
  "What data is collected?",
  "Who can access it?",
  "How long is it retained?",
  "Is there an audit process?",
  "Are searches logged?",
  "Are outside agencies allowed access?",
  "What vendor contracts are active?",
  "What environmental review exists for proposed data centers?",
];

export const toolkitSections: ToolkitSection[] = [
  {
    title: "Short Public Comment Templates",
    description: "Use concise, evidence-based comments that ask for documentation and process.",
    items: [
      "I support responsible technology only when written policies, retention limits, and public reporting are in place.",
      "Before approval, please publish the contract, data-sharing terms, and audit requirements for public review.",
      "Any major data center proposal should include transparent disclosures on power demand, water use, and community benefits.",
    ],
  },
  {
    title: "Email Templates for Officials",
    description: "Professional outreach can help keep the focus on records, policy, and accountability.",
    items: [
      "Please share any contracts, policies, or council materials related to this surveillance technology deployment.",
      "Can your office provide environmental review documents, incentive agreements, and hearing dates for the proposed facility?",
      "If a retention or access policy exists, please direct residents to the most current public version.",
    ],
  },
  {
    title: "Checklist Before Attending a Meeting",
    description: "Prepare with documents, timelines, and specific questions tied to public decisions.",
    items: [
      "Review the meeting agenda, packet, and any published staff memoranda.",
      "Bring one or two focused questions tied to contracts, policy, cost, or environmental review.",
      "Note relevant dates, vendor names, and missing documents before speaking.",
    ],
  },
  {
    title: "Tips for Staying Calm, Specific, and Evidence-Based",
    description: "A measured approach helps keep discussion grounded in public accountability.",
    items: [
      "Ask for written policies, audit logs, and timelines instead of assuming intent.",
      "Focus on records, oversight safeguards, and published commitments.",
      "Keep comments short, factual, and tied to the public decision in front of the board or council.",
    ],
  },
];

export const publicResourceLinks = [
  {
    title: "FOIA.gov",
    description:
      "The federal government’s central public records resource, with guidance on filing requests and understanding the FOIA process.",
    href: "https://www.foia.gov/",
  },
  {
    title: "DeFlock",
    description:
      "A public mapping project focused on ALPR visibility and community awareness around automated license plate readers.",
    href: "https://deflock.org/",
  },
  {
    title: "NoALPRS / Week of Action",
    description:
      "A community-facing resource hub for awareness, organizing, and public education around ALPR oversight.",
    href: "https://www.noalprs.com/",
  },
];
