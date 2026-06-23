export type SurveillanceRecord = {
  id: string;
  town: string;
  state: string;
  technology: string;
  vendor: string;
  agency: string;
  contractStatus: "Active" | "Pending Review" | "Expired" | "Under Procurement";
  policyAvailable: "Yes" | "No" | "Unknown";
  retentionPeriod: string;
  lastUpdated: string;
  documents: string[];
  summary: string;
  questions: string[];
  recordsTopics: string[];
  sourceLinks: { label: string; href: string }[];
};

export type CameraRecord = {
  id: string;
  osmId: number | null;
  osmType: string;
  brand: string;
  locationLabel: string;
  operator: string | null;
  ref: string;
  route: string;
  stateHint: string | null;
  direction: number | null;
  directions: string | null;
  surveillanceZone: string | null;
  mountType: string | null;
  startDate: string | null;
  osmTimestamp: string | null;
  osmVersion: number | null;
  latitude: number | null;
  longitude: number | null;
  sourceHref: string;
};

export type DocumentRecord = {
  id: string;
  title: string;
  category:
    | "Contracts"
    | "Invoices"
    | "Policies"
    | "Audits"
    | "Meeting Minutes"
    | "Vendor Emails"
    | "Environmental Reports"
    | "Tax Agreements";
  town: string;
  date: string;
  sourceType: string;
  status: "Available" | "Requested" | "Missing" | "Under Review";
  summary: string;
};

export type ChecklistItem = {
  id: string;
  label: string;
  description?: string;
};

export type ToolkitSection = {
  title: string;
  description: string;
  items: string[];
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleRecord = {
  slug: string;
  title: string;
  category:
    | "Surveillance Oversight"
    | "Data Centers"
    | "Public Records"
    | "Procurement"
    | "Meeting Strategy";
  date: string;
  readTime: string;
  summary: string;
  excerpt: string;
  featured?: boolean;
  tags: string[];
  takeaways: string[];
  sections: ArticleSection[];
};
