import { SurveillanceRecord } from "@/lib/types";

export const surveillanceRecords: SurveillanceRecord[] = [
  {
    id: "1",
    town: "Alameda",
    state: "CA",
    technology: "Automated license plate readers",
    vendor: "Vendor not listed",
    agency: "Police Department",
    contractStatus: "Active",
    policyAvailable: "Yes",
    retentionPeriod: "60 days",
    lastUpdated: "2026-06-23",
    documents: ["ALPR policy", "City policy manual"],
    summary:
      "The Alameda Police Department policy states that ALPR systems may be used for official law-enforcement purposes, that access is audited, and that ALPR data may be retained for up to 60 days before purge unless it becomes evidence or is otherwise legally preserved.",
    questions: [
      "Is access to ALPR data limited to trained users with individual credentials?",
      "Are retention and destruction procedures being followed as written?",
      "Has the city published any public review of ALPR efficacy and oversight?",
    ],
    recordsTopics: [
      "ALPR retention and purge practices",
      "Access logs and audit trails",
      "Annual policy review materials",
    ],
    sourceLinks: [
      {
        label: "Alameda ALPR policy PDF",
        href: "https://www.alamedaca.gov/files/assets/public/v/2/departments/alameda/police/fixed-alpr-policy.pdf",
      },
    ],
  },
  {
    id: "2",
    town: "Culver City",
    state: "CA",
    technology: "Automated license plate readers",
    vendor: "Vendor not listed",
    agency: "Police Department",
    contractStatus: "Active",
    policyAvailable: "Yes",
    retentionPeriod: "30 days",
    lastUpdated: "2026-06-23",
    documents: ["ALPR policy"],
    summary:
      "The Culver City Police Department policy says downloaded ALPR data should be stored no longer than 30 days before purge, with vendor data purged at the end of the same storage window unless the data is preserved for a lawful purpose.",
    questions: [
      "What internal review exists for ALPR searches and access?",
      "Are data retention and purge schedules automatically enforced?",
      "Are non-law-enforcement requests processed under a published procedure?",
    ],
    recordsTopics: [
      "ALPR storage and purge practices",
      "Access logging and accountability",
      "Non-law-enforcement request handling",
    ],
    sourceLinks: [
      {
        label: "Culver City ALPR policy PDF",
        href: "https://www.culvercitypd.gov/files/assets/police/v/1/documents/ripa-reports/policies/alpr-policy.pdf",
      },
    ],
  },
  {
    id: "3",
    town: "Sierra Vista",
    state: "AZ",
    technology: "Flock Safety cameras",
    vendor: "Flock Safety",
    agency: "Police Department",
    contractStatus: "Active",
    policyAvailable: "Yes",
    retentionPeriod: "30 days",
    lastUpdated: "2026-06-23",
    documents: ["Flock transparency portal", "SVPD news release", "Policy page"],
    summary:
      "The city’s transparency portal says residents can review what the ALPR cameras detect, which organizations have access, and usage details including retention timelines, camera counts, hot-list alerts, and searches conducted in the past 30 days.",
    questions: [
      "Which agencies currently have access to the city’s ALPR data?",
      "Are the posted retention timelines still aligned with city policy?",
      "How often are usage and access summaries updated in the portal?",
    ],
    recordsTopics: [
      "Portal usage statistics",
      "Access permissions",
      "Department policy language",
    ],
    sourceLinks: [
      {
        label: "Sierra Vista Flock portal page",
        href: "https://www.sierravistaaz.gov/our-city/departments/police/flock-transparency-portal",
      },
      {
        label: "SVPD news release",
        href: "https://www.sierravistaaz.gov/Home/Components/News/News/824/15",
      },
    ],
  },
  {
    id: "4",
    town: "Renton",
    state: "WA",
    technology: "Flock Safety cameras",
    vendor: "Flock Safety",
    agency: "Police Department",
    contractStatus: "Active",
    policyAvailable: "Yes",
    retentionPeriod: "30 days",
    lastUpdated: "2026-06-23",
    documents: ["Transparency page", "Automated license plate reader policy", "Flock portal"],
    summary:
      "The City of Renton reports that 24 Flock cameras are installed, searches require a legitimate crime-related justification, searches are logged, and data is stored in the cloud for 30 days before automatic deletion unless it becomes part of an active criminal investigation.",
    questions: [
      "How are search justifications reviewed and audited?",
      "Which neighboring agencies can access the Flock network?",
      "When is data preserved beyond the standard 30-day window?",
    ],
    recordsTopics: [
      "Search logging and accountability",
      "Data retention and deletion",
      "Interagency access rules",
    ],
    sourceLinks: [
      {
        label: "Renton Flock transparency page",
        href: "https://www.rentonwa.gov/Government/Departments-and-Offices/Police/Police-Transparency/Flock-Safety-Transparency",
      },
      {
        label: "Flock Safety transparency portal",
        href: "https://transparency.flocksafety.com/",
      },
    ],
  },
  {
    id: "5",
    town: "Aransas Pass",
    state: "TX",
    technology: "Flock Safety cameras",
    vendor: "Flock Safety",
    agency: "Police Department",
    contractStatus: "Active",
    policyAvailable: "Yes",
    retentionPeriod: "30 days / 7 days Wing Replay",
    lastUpdated: "2026-06-23",
    documents: ["Council minutes", "Grant-funded contract", "LPR policy"],
    summary:
      "City council minutes show approval of a five-year renewal and expansion of the Flock LPR program funded by the Crime Control & Prevention District, while the contract materials describe a 30-day retention window for most products and a 7-day retention window for Wing Replay.",
    questions: [
      "How were the original grant funds converted into the renewal and expansion agreement?",
      "What reporting exists on recovered vehicles or program outcomes?",
      "Which parts of the Flock suite are currently active in the city?",
    ],
    recordsTopics: [
      "Contract renewal and expansion",
      "Grant funding records",
      "Program performance reporting",
    ],
    sourceLinks: [
      {
        label: "Council minutes approving the renewal",
        href: "https://aptx.gov/AgendaCenter/ViewFile/Item/14313?fileID=7327",
      },
      {
        label: "Flock Safety contract materials",
        href: "https://aptx.gov/AgendaCenter/ViewFile/Item/11806?fileID=5732",
      },
      {
        label: "APPD LPR policy",
        href: "https://police.aptx.gov/wp-content/uploads/2023/05/LPR-Policy.pdf",
      },
    ],
  },
  {
    id: "6",
    town: "Ventura",
    state: "CA",
    technology: "Camera networks",
    vendor: "Axis Communications / Hikvision",
    agency: "City of Ventura",
    contractStatus: "Under Procurement",
    policyAvailable: "Unknown",
    retentionPeriod: "Not disclosed",
    lastUpdated: "2026-06-23",
    documents: ["Security camera RFP", "Inventory sheet reference"],
    summary:
      "A city RFP says Ventura was already managing 143 security cameras, mostly Axis and Hikvision, and expected to exceed 175 cameras shortly, making this a useful example of a broader municipal camera network rather than a single ALPR deployment.",
    questions: [
      "What retention rules apply to footage from the citywide camera network?",
      "Will the final contract include public reporting or oversight language?",
      "How are vendor responsibilities divided between cameras, encoders, and storage?",
    ],
    recordsTopics: [
      "Camera inventory and expansion",
      "Vendor responsibility split",
      "Footage retention rules",
    ],
    sourceLinks: [
      {
        label: "Ventura security camera RFP",
        href: "https://www.cityofventura.ca.gov/DocumentCenter/View/29399/RFP-No-P-130000668?bidId=",
      },
    ],
  },
  {
    id: "7",
    town: "St. Charles",
    state: "IL",
    technology: "Drones",
    vendor: "Vendor not listed",
    agency: "Police Department",
    contractStatus: "Active",
    policyAvailable: "Yes",
    retentionPeriod: "Policy governs storage/retrieval/dissemination",
    lastUpdated: "2026-06-23",
    documents: ["Drone policy"],
    summary:
      "The St. Charles Police Department drone policy sets guidelines for when a small unmanned aircraft may be used and how images and data are stored, retrieved, and disseminated, while requiring compliance with FAA rules and state law.",
    questions: [
      "When are drone deployments authorized instead of other tools?",
      "How long are images and data kept under the department policy?",
      "Are drone flights and after-action records available for public review?",
    ],
    recordsTopics: [
      "Drone deployment policy",
      "Image and data handling",
      "FAA and state law compliance",
    ],
    sourceLinks: [
      {
        label: "St. Charles drone policy PDF",
        href: "https://www.stcharlesil.gov/files/assets/city/v/1/docs/police/misc-documents/drone-policy.pdf",
      },
    ],
  },
];
