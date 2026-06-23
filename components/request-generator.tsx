"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Copy, Download, RotateCcw, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GeneratedRequestPreview } from "@/components/generated-request-preview";
import { StatusPill } from "@/components/status-pill";

const topics = [
  "Flock Safety cameras",
  "Automated license plate readers",
  "Surveillance cameras",
  "Drones",
  "Data centers",
  "Vendor contracts",
  "Data retention policies",
  "Data-sharing agreements",
  "Environmental impact documents",
  "Public meeting records",
] as const;

const requesterTypes = ["Resident", "Journalist", "Community advocate", "Researcher"] as const;
const deliveryMethods = ["Email", "Public portal", "Certified mail", "Hand delivery"] as const;
const requestStyles = ["Comprehensive", "Focused", "Narrow follow-up", "Quick records check"] as const;
const responsePreferences = ["Any responsive records", "Electronic format preferred", "Rolling production welcomed"] as const;

type Topic = (typeof topics)[number];

type FormState = {
  residentName: string;
  email: string;
  city: string;
  state: string;
  agency: string;
  topic: Topic;
  dateRange: string;
  notes: string;
  requesterType: (typeof requesterTypes)[number];
  deliveryMethod: (typeof deliveryMethods)[number];
  requestStyle: (typeof requestStyles)[number];
  responsePreference: (typeof responsePreferences)[number];
  searchTerms: string;
  feeWaiver: boolean;
};

const initialState: FormState = {
  residentName: "",
  email: "",
  city: "",
  state: "",
  agency: "",
  topic: "Flock Safety cameras",
  dateRange: "",
  notes: "",
  requesterType: "Resident",
  deliveryMethod: "Email",
  requestStyle: "Comprehensive",
  responsePreference: "Electronic format preferred",
  searchTerms: "",
  feeWaiver: true,
};

const topicGuidance: Record<Topic, string[]> = {
  "Flock Safety cameras": [
    "Vendor contract and amendments",
    "Camera locations and installation approvals",
    "Search logs, alerts, and audit rules",
  ],
  "Automated license plate readers": [
    "Retention schedule and deletion rules",
    "Sharing agreements with outside agencies",
    "Procurement and usage reports",
  ],
  "Surveillance cameras": [
    "Camera placement plans",
    "Access permissions and user roles",
    "Policies for footage retention",
  ],
  Drones: [
    "Flight logs and mission approvals",
    "Training and operating policies",
    "Image retention and release rules",
  ],
  "Data centers": [
    "Development proposal and hearing materials",
    "Power and water demand disclosures",
    "Incentive agreements and environmental review",
  ],
  "Vendor contracts": [
    "Executed contract and amendments",
    "Invoices, statements of work, and renewals",
    "Evaluation and scoring sheets",
  ],
  "Data retention policies": [
    "Written retention schedule",
    "Deletion rules and exceptions",
    "Audit and compliance reviews",
  ],
  "Data-sharing agreements": [
    "MOUs and platform sharing settings",
    "Outside agency access approvals",
    "Logging and audit controls",
  ],
  "Environmental impact documents": [
    "Impact studies and appendices",
    "Permit correspondence",
    "Mitigation and public comment records",
  ],
  "Public meeting records": [
    "Agendas, minutes, and packets",
    "Staff reports and presentations",
    "Public hearing notices and testimony summaries",
  ],
};

const topicKeywords: Record<Topic, string[]> = {
  "Flock Safety cameras": ["Flock", "camera locations", "search logs", "audit logs"],
  "Automated license plate readers": ["ALPR", "plate reads", "search access", "retention"],
  "Surveillance cameras": ["CCTV", "camera network", "retention", "access controls"],
  Drones: ["UAS", "flight logs", "mission approvals", "incident reports"],
  "Data centers": ["power demand", "water use", "incentive agreements", "environmental review"],
  "Vendor contracts": ["contract", "amendment", "invoice", "statement of work"],
  "Data retention policies": ["retention schedule", "deletion rules", "exception log", "audit"],
  "Data-sharing agreements": ["MOU", "sharing agreement", "access matrix", "outside agency"],
  "Environmental impact documents": ["impact study", "permit", "mitigation", "public hearing"],
  "Public meeting records": ["agenda", "minutes", "packet", "staff report"],
};

export function RequestGenerator() {
  const [form, setForm] = useState<FormState>(initialState);
  const [copied, setCopied] = useState(false);
  const [downloadedDocx, setDownloadedDocx] = useState(false);
  const [today, setToday] = useState("[Date]");

  useEffect(() => {
    setToday(
      new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date()),
    );
  }, []);

  const keywordList = useMemo(() => {
    const userTerms = form.searchTerms
      .split(",")
      .map((term) => term.trim())
      .filter(Boolean);

    return userTerms.length ? userTerms : topicKeywords[form.topic];
  }, [form.searchTerms, form.topic]);

  const generatedRequest = useMemo(() => {
    const residentName = form.residentName || "[Resident Name]";
    const email = form.email || "[Email Address]";
    const city = form.city || "[Town / City]";
    const state = form.state || "[State]";
    const agency = form.agency || "[Agency or Department]";
    const dateRange = form.dateRange || "[Relevant Date Range]";
    const optionalNotes = form.notes.trim()
      ? `\nAdditional context:\n${form.notes.trim()}\n`
      : "";

    return `${today}

Subject: Public Records Request Regarding ${form.topic}

To: ${agency}

Hello,

My name is ${residentName}. I am a ${form.requesterType.toLowerCase()} from ${city}, ${state}. I am requesting access to public records related to ${form.topic}.

Request type: ${form.requestStyle}
Preferred delivery: ${form.deliveryMethod}
Response preference: ${form.responsePreference}
Fee waiver request: ${form.feeWaiver ? "Requested if available" : "Not requested"}

Please provide records created, received, or maintained by ${agency} concerning this topic for the following date range: ${dateRange}.

Please search for records using the following likely terms and related variants:
${keywordList.map((term) => `- ${term}`).join("\n")}

Requested records may include, as applicable:
- Contracts, amendments, purchase orders, invoices, or procurement materials
- Policies, standard operating procedures, training materials, or access rules
- Data retention schedules, audit requirements, and usage logs
- Data-sharing agreements, memoranda of understanding, or outside agency access rules
- Meeting agendas, staff reports, presentations, or public hearing materials
- Environmental review documents, permits, or impact assessments

Suggested focus for this topic:
${topicGuidance[form.topic].map((item) => `- ${item}`).join("\n")}

If any portion of this request is unclear, I welcome a reasonable narrowing discussion so the request can be processed efficiently. If any responsive records are withheld, please identify the legal basis for each withholding and release any reasonably segregable portions.
${optionalNotes}
Please provide records in electronic format if available. You may contact me at ${email} with any questions regarding this request.

Thank you for your time and public service.

Sincerely,
${residentName}
${city}, ${state}`;
  }, [form, keywordList, today]);

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setCopied(false);
    setDownloadedDocx(false);
  };

  const copyRequest = async () => {
    await navigator.clipboard.writeText(generatedRequest);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const downloadTxt = () => {
    const blob = new Blob([generatedRequest], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "public-records-request.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadDocx = async () => {
    const { Document, HeadingLevel, Packer, Paragraph, TextRun } = await import("docx");
    const requesterName = form.residentName || "[Resident Name]";
    const location = `${form.city || "[Town / City]"}, ${form.state || "[State]"}`;
    const agency = form.agency || "[Agency or Department]";

    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({ text: "Public Records Request", heading: HeadingLevel.TITLE }),
            new Paragraph({ children: [new TextRun({ text: today, italics: true })] }),
            new Paragraph({ text: `To: ${agency}` }),
            new Paragraph({ text: `From: ${requesterName} | ${location}` }),
            new Paragraph({ text: `Topic: ${form.topic}` }),
            new Paragraph({ text: `Requester type: ${form.requesterType}` }),
            new Paragraph({ text: `Delivery preference: ${form.deliveryMethod}` }),
            new Paragraph({ text: `Response preference: ${form.responsePreference}` }),
            new Paragraph({ text: `Fee waiver request: ${form.feeWaiver ? "Requested if available" : "Not requested"}` }),
            new Paragraph({ text: "" }),
            new Paragraph({
              text: `My name is ${requesterName}. I am requesting access to public records related to ${form.topic}.`,
            }),
            new Paragraph({
              text: `Please provide responsive records created, received, or maintained by ${agency} for the date range ${form.dateRange || "[Relevant Date Range]"}.`,
            }),
            new Paragraph({ text: "Search terms and related variants:", heading: HeadingLevel.HEADING_2 }),
            ...keywordList.map((term) => new Paragraph({ text: term, bullet: { level: 0 } })),
            new Paragraph({ text: "Suggested record categories:", heading: HeadingLevel.HEADING_2 }),
            ...topicGuidance[form.topic].map((item) => new Paragraph({ text: item, bullet: { level: 0 } })),
            new Paragraph({
              text: "Please provide records in electronic format if available. If any records are withheld, please identify the legal basis for each withholding and release any reasonably segregable portions.",
            }),
            form.notes.trim()
              ? new Paragraph({ text: `Additional context: ${form.notes.trim()}` })
              : new Paragraph({ text: "" }),
            new Paragraph({ text: "Thank you for your time and public service." }),
            new Paragraph({ text: "" }),
            new Paragraph({ text: "Sincerely," }),
            new Paragraph({ text: requesterName }),
            new Paragraph({ text: location }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "public-records-request.docx";
    link.click();
    URL.revokeObjectURL(url);
    setDownloadedDocx(true);
    window.setTimeout(() => setDownloadedDocx(false), 1800);
  };

  const resetForm = () => {
    setForm(initialState);
    setCopied(false);
    setDownloadedDocx(false);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="glass-panel-strong p-6"
      >
        <div className="mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="h-4 w-4" />
            Interactive Generator
          </div>
          <h2 className="text-2xl font-semibold text-white">Records Request Generator</h2>
          <p className="text-sm leading-6 text-slate-300">
            Create a professional request residents can copy, refine, and send to a public agency.
          </p>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Style" value={form.requestStyle} />
          <StatCard label="Delivery" value={form.deliveryMethod} />
          <StatCard label="Requester" value={form.requesterType} />
          <StatCard label="Fee waiver" value={form.feeWaiver ? "Requested" : "Not requested"} />
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {topicGuidance[form.topic].map((item) => (
            <div key={item} className="soft-grid-panel px-4 py-3">
              <p className="data-label">Include</p>
              <p className="mt-1 text-sm text-slate-200">{item}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Resident name">
            <input
              value={form.residentName}
              onChange={(event) => updateField("residentName", event.target.value)}
              className="input"
              placeholder="Jordan Rivera"
            />
          </Field>
          <Field label="Email">
            <input
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="input"
              placeholder="jordan@example.com"
              type="email"
            />
          </Field>
          <Field label="Town / city">
            <input
              value={form.city}
              onChange={(event) => updateField("city", event.target.value)}
              className="input"
              placeholder="Richmond"
            />
          </Field>
          <Field label="State">
            <input
              value={form.state}
              onChange={(event) => updateField("state", event.target.value)}
              className="input"
              placeholder="VA"
            />
          </Field>
          <Field label="Requester type">
            <select
              value={form.requesterType}
              onChange={(event) =>
                updateField("requesterType", event.target.value as FormState["requesterType"])
              }
              className="input"
            >
              {requesterTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Delivery method">
            <select
              value={form.deliveryMethod}
              onChange={(event) =>
                updateField("deliveryMethod", event.target.value as FormState["deliveryMethod"])
              }
              className="input"
            >
              {deliveryMethods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-4 grid gap-4">
          <Field label="Agency or department">
            <input
              value={form.agency}
              onChange={(event) => updateField("agency", event.target.value)}
              className="input"
              placeholder="Police Department"
            />
          </Field>
          <Field label="Topic">
            <select
              value={form.topic}
              onChange={(event) => updateField("topic", event.target.value as Topic)}
              className="input"
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Date range">
            <input
              value={form.dateRange}
              onChange={(event) => updateField("dateRange", event.target.value)}
              className="input"
              placeholder="January 2025 to June 2026"
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Request style">
              <select
                value={form.requestStyle}
                onChange={(event) =>
                  updateField("requestStyle", event.target.value as FormState["requestStyle"])
                }
                className="input"
              >
                {requestStyles.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Response preference">
              <select
                value={form.responsePreference}
                onChange={(event) =>
                  updateField(
                    "responsePreference",
                    event.target.value as FormState["responsePreference"],
                  )
                }
                className="input"
              >
                {responsePreferences.map((responsePreference) => (
                  <option key={responsePreference} value={responsePreference}>
                    {responsePreference}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Search terms">
            <input
              value={form.searchTerms}
              onChange={(event) => updateField("searchTerms", event.target.value)}
              className="input"
              placeholder="Flock, camera locations, audit logs"
            />
          </Field>
          <Field label="Optional notes">
            <textarea
              value={form.notes}
              onChange={(event) => updateField("notes", event.target.value)}
              className="input min-h-32"
              placeholder="Include vendor names, project names, agenda dates, or other context."
            />
          </Field>
        </div>

        <label className="mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
          <input
            type="checkbox"
            checked={form.feeWaiver}
            onChange={(event) => updateField("feeWaiver", event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-950/70 text-rose-500"
          />
          <span>
            Request a fee waiver if available. This is commonly useful for civic, media, or
            public-interest requests.
          </span>
        </label>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={copyRequest} className="action-button">
            <Copy className="h-4 w-4" />
            {copied ? "Copied" : "Copy Request"}
          </button>
          <button type="button" onClick={resetForm} className="action-button">
            <RotateCcw className="h-4 w-4" />
            Reset Form
          </button>
          <button type="button" onClick={downloadTxt} className="action-button-primary">
            <Download className="h-4 w-4" />
            Download as TXT
          </button>
          <button type="button" onClick={downloadDocx} className="action-button-primary">
            <Download className="h-4 w-4" />
            Download as DOCX
          </button>
        </div>
        <a
          href="https://www.muckrock.com/"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center text-sm font-semibold text-orange-300 transition hover:text-orange-200"
        >
          Too complicated? Try this.
        </a>

        <AnimatePresence>
          {copied ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100"
            >
              <CheckCircle2 className="h-4 w-4" />
              Request copied to clipboard
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {downloadedDocx ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-rose-300/20 bg-rose-300/10 px-4 py-2 text-sm text-rose-100"
            >
              <CheckCircle2 className="h-4 w-4" />
              DOCX downloaded
            </motion.div>
          ) : null}
        </AnimatePresence>

        <p className="mt-6 rounded-2xl border border-amber-300/15 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100/90">
          This tool is for civic education and transparency support only. It is not legal advice.
          Public records laws vary by state.
        </p>
      </motion.div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <StatusPill tone="blue">{form.topic}</StatusPill>
          <StatusPill tone="slate">{form.city || "Town / City"}</StatusPill>
          <StatusPill tone="slate">{form.state || "State"}</StatusPill>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <StatCard label="Requester" value={form.requesterType} />
          <StatCard label="Fee waiver" value={form.feeWaiver ? "Requested" : "Not requested"} />
        </div>
        <GeneratedRequestPreview text={generatedRequest} />
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm text-slate-200">
      <span className="font-medium">{label}</span>
      {children}
    </label>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="soft-grid-panel px-4 py-3">
      <p className="data-label">{label}</p>
      <p className="mt-1 text-sm text-slate-200">{value}</p>
    </div>
  );
}
