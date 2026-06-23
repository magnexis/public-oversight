import { ArticleRecord } from "@/lib/types";

export const articleRecords: ArticleRecord[] = [
  {
    slug: "how-to-read-a-surveillance-contract",
    title: "How to Read a Surveillance Contract Before Public Comment",
    category: "Surveillance Oversight",
    date: "2026-06-21",
    readTime: "6 min read",
    featured: true,
    summary:
      "A step-by-step guide for residents reviewing camera, ALPR, or analytics contracts before a council vote.",
    excerpt:
      "Contracts often reveal scope, subscription structure, renewal terms, and data handling assumptions long before a public policy is posted.",
    tags: ["contracts", "ALPR", "camera systems"],
    takeaways: [
      "Read the statement of work and renewal language first.",
      "Compare product features against the public explanation given by officials.",
      "Look for retention, audit, and outside-agency access terms.",
    ],
    sections: [
      {
        heading: "Start with scope, not marketing language",
        paragraphs: [
          "Residents often hear a project described in broad public-safety terms, but the contract usually lists the exact software modules, data-sharing features, and service commitments being purchased.",
          "The first question is not whether the vendor sounds reassuring. It is whether the written scope matches what the public has actually been told.",
        ],
        bullets: [
          "Check every listed module and add-on.",
          "Flag references to analytics, alerts, or regional sharing.",
          "Look for pilot language that can quietly convert into a longer term.",
        ],
      },
      {
        heading: "Follow the money and the renewals",
        paragraphs: [
          "Subscription systems are often easier to expand than to unwind. Auto-renewal terms, annual increases, and bundled maintenance language can matter as much as the initial approval.",
          "If the public presentation focuses only on the first-year price, residents should ask for the full contract horizon and any expected increase schedule.",
        ],
      },
      {
        heading: "Compare contract language to the stated policy",
        paragraphs: [
          "Sometimes an agency says searches will be limited, but the contract gives the platform far broader administrative capabilities.",
          "That mismatch is not proof of misuse, but it is a strong reason to ask for written policy, logs, and audit procedures before approval.",
        ],
      },
    ],
  },
  {
    slug: "questions-to-ask-about-alpr-data-sharing",
    title: "Questions to Ask About ALPR Data Sharing",
    category: "Surveillance Oversight",
    date: "2026-06-19",
    readTime: "5 min read",
    summary:
      "A practical framework for asking how automated license plate reader data is shared, searched, and audited.",
    excerpt:
      "The most important oversight questions are often about access, search authority, and outside-agency sharing rather than the hardware itself.",
    tags: ["ALPR", "data-sharing", "audits"],
    takeaways: [
      "Ask who can search and who can approve search access.",
      "Request the written sharing rules, not just verbal descriptions.",
      "Look for audit logs and exception handling.",
    ],
    sections: [
      {
        heading: "Sharing rules should be written and public",
        paragraphs: [
          "A broad promise that only authorized users can search the system does not explain whether outside agencies can query the data or receive alerts.",
          "Residents should ask whether the city participates in a regional network, whether individual users can invite partner agencies, and whether leadership receives regular audit reports.",
        ],
      },
      {
        heading: "Retention controls matter because sharing magnifies impact",
        paragraphs: [
          "A short retention window can be an important safeguard, but it only helps if it is actually enforced and exceptions are documented.",
          "If the retention schedule is not public, the records request should ask for the written schedule, deletion procedures, and any policy exceptions.",
        ],
      },
    ],
  },
  {
    slug: "what-a-flock-policy-should-disclose",
    title: "What a Flock Camera Policy Should Disclose",
    category: "Surveillance Oversight",
    date: "2026-06-17",
    readTime: "6 min read",
    summary:
      "Core policy elements residents should expect before roadside camera systems are expanded.",
    excerpt:
      "A serious public policy should explain purpose, search authority, retention, access, reporting, and complaint pathways in plain language.",
    tags: ["Flock Safety", "policy", "retention"],
    takeaways: [
      "Purpose and authorized use should be explicit.",
      "Search logging and audits should be routine, not optional.",
      "The policy should state how residents can review or challenge the program.",
    ],
    sections: [
      {
        heading: "Purpose creep is a policy problem",
        paragraphs: [
          "The same system can be described as a narrow investigative tool or as a platform for broader monitoring depending on how the rules are written.",
          "That is why the policy should identify the authorized use cases and who can approve exceptions.",
        ],
      },
      {
        heading: "Good policies disclose governance, not just technology",
        paragraphs: [
          "Residents should be able to tell who owns the program, who administers the platform, and how violations are reviewed.",
          "If the public policy does not mention audit review, outside-agency access, or complaint handling, the oversight structure is incomplete.",
        ],
      },
    ],
  },
  {
    slug: "reading-a-data-center-incentive-agreement",
    title: "Reading a Data Center Incentive Agreement",
    category: "Data Centers",
    date: "2026-06-15",
    readTime: "7 min read",
    featured: true,
    summary:
      "How to review tax abatements, performance thresholds, and clawback language when a locality negotiates with a data center developer.",
    excerpt:
      "Public conversations often focus on jobs and investment totals, but the agreement itself shows what the locality is giving up and what it can enforce later.",
    tags: ["tax incentives", "development", "clawbacks"],
    takeaways: [
      "Read the trigger conditions for incentives.",
      "Check whether utility and infrastructure costs are excluded from the headline numbers.",
      "Look for clawback enforcement that is specific and measurable.",
    ],
    sections: [
      {
        heading: "Headline investment numbers can hide tradeoffs",
        paragraphs: [
          "Large projects are often described in terms of total capital investment, but that figure does not automatically reveal how much public value the community receives in exchange for abatements or discounted infrastructure support.",
          "Residents should ask whether the public packet includes the actual agreement text, staff analysis, and any estimated revenue impact over time.",
        ],
      },
      {
        heading: "Clawbacks only matter if they are measurable",
        paragraphs: [
          "A vague performance standard is difficult to enforce after a project is approved. Stronger agreements specify what must happen, by when, and what the remedy will be if it does not.",
        ],
      },
    ],
  },
  {
    slug: "what-to-look-for-in-environmental-review",
    title: "What to Look for in Environmental Review Documents",
    category: "Data Centers",
    date: "2026-06-13",
    readTime: "6 min read",
    summary:
      "A resident-friendly checklist for reviewing environmental impact documents tied to major technology or infrastructure projects.",
    excerpt:
      "Environmental review is often dense, but there are repeat questions that help residents locate the most important assumptions quickly.",
    tags: ["environmental review", "water use", "noise"],
    takeaways: [
      "Find the assumptions section before the conclusions section.",
      "Check whether mitigation depends on future studies that are not yet public.",
      "Ask whether cumulative impacts are discussed plainly.",
    ],
    sections: [
      {
        heading: "Assumptions drive the outcome",
        paragraphs: [
          "The most important details are often the baseline assumptions for traffic, power demand, water use, noise, or backup generation, because the rest of the analysis flows from them.",
          "If residents do not know those assumptions, it is hard to tell whether the review is conservative, incomplete, or simply unclear.",
        ],
      },
      {
        heading: "Look for what is deferred",
        paragraphs: [
          "Sometimes a document says a future permit stage will handle emissions, acoustics, or utility coordination. That does not necessarily mean the concern is solved.",
          "Deferred review is often the right place for a meeting question or follow-up records request.",
        ],
      },
    ],
  },
  {
    slug: "how-to-compare-deflock-with-official-records",
    title: "How to Compare the DeFlock Map With Official Local Records",
    category: "Public Records",
    date: "2026-06-12",
    readTime: "5 min read",
    featured: true,
    summary:
      "A careful workflow for using the deflock.org map as an external lead while keeping official records at the center of review.",
    excerpt:
      "Community maps can help residents identify questions, but official contracts, meeting records, and agency policies are still the documents that govern public programs.",
    tags: ["deflock.org", "maps", "verification"],
    takeaways: [
      "Use external maps to form questions, not conclusions.",
      "Verify locations and program scope through official records.",
      "Keep a clean paper trail between map observations and public documents.",
    ],
    sections: [
      {
        heading: "Treat external maps as a lead source",
        paragraphs: [
          "A community-generated map can be useful when residents are trying to understand where to start, especially if a locality has not published a clear list of camera sites or deployment status.",
          "The right move is to use the map to identify specific follow-up requests such as installation approvals, contracts, site lists, agenda packets, or policy manuals.",
        ],
      },
      {
        heading: "Verification should always come from the public record",
        paragraphs: [
          "The map may point to a possible location or vendor footprint, but it does not replace what the locality is obligated to disclose.",
          "That is why the strongest oversight workflow pairs external reference material with official meeting packets, procurement files, and written agency rules.",
        ],
      },
    ],
  },
  {
    slug: "public-meeting-packet-review-workflow",
    title: "A Fast Workflow for Reviewing Public Meeting Packets",
    category: "Meeting Strategy",
    date: "2026-06-10",
    readTime: "4 min read",
    summary:
      "A lightweight process for scanning agendas and packets before a hearing, workshop, or council vote.",
    excerpt:
      "Most residents do not have hours to review every page, so a repeat workflow helps surface the key documents quickly.",
    tags: ["meeting packets", "agendas", "prep"],
    takeaways: [
      "Find attachments, staff memos, and contract summaries first.",
      "Write down unknown vendor names and missing attachments.",
      "Turn each gap into one precise meeting question.",
    ],
    sections: [
      {
        heading: "Look for the attachment trail",
        paragraphs: [
          "A short agenda item may point to a contract summary, a staff recommendation, a vendor presentation, or a technical appendix. Those attachments usually contain the details that shape the decision.",
          "Even when you cannot read everything, knowing what is attached and what is missing makes your follow-up more effective.",
        ],
      },
    ],
  },
  {
    slug: "understanding-retention-schedules",
    title: "Understanding Retention Schedules Without Legal Jargon",
    category: "Public Records",
    date: "2026-06-08",
    readTime: "5 min read",
    summary:
      "How residents can interpret data retention language and identify the questions that matter most.",
    excerpt:
      "Retention schedules are often buried in policy or contract language, but they shape how long search history, footage, or logs remain available.",
    tags: ["retention", "policy", "records"],
    takeaways: [
      "Ask whether the retention rule is in policy, contract, or software settings.",
      "Look for exceptions to normal deletion timelines.",
      "Request audit or compliance review materials when the rule is unclear.",
    ],
    sections: [
      {
        heading: "A retention number alone is not enough",
        paragraphs: [
          "Residents should know where the retention rule is written, whether it applies to every data type, and who can override it.",
          "A public statement that data is retained for a certain number of days is useful, but it becomes more meaningful when paired with deletion procedures and exception logs.",
        ],
      },
    ],
  },
  {
    slug: "following-vendor-emails-and-procurement-trails",
    title: "Following Vendor Emails and Procurement Trails",
    category: "Procurement",
    date: "2026-06-06",
    readTime: "6 min read",
    summary:
      "Why vendor communications, scoring sheets, and procurement memos can be critical oversight documents.",
    excerpt:
      "Public oversight often improves when residents can see how a project moved from conversation to purchase, and who shaped that process.",
    tags: ["procurement", "vendor emails", "contracts"],
    takeaways: [
      "Vendor email threads can reveal scope changes before approval.",
      "Scoring sheets help explain how a vendor was selected.",
      "Procurement files often connect technical claims to actual deliverables.",
    ],
    sections: [
      {
        heading: "Procurement records tell a chronology",
        paragraphs: [
          "A contract is only one part of the oversight trail. Procurement questions, vendor responses, scoring sheets, and internal finance memos can show how the project was framed and evaluated.",
          "That chronology is often what residents need when a public explanation feels thinner than the actual purchase record.",
        ],
      },
    ],
  },
  {
    slug: "following-a-drone-program-expansion",
    title: "Following a Drone Program Expansion",
    category: "Surveillance Oversight",
    date: "2026-06-03",
    readTime: "5 min read",
    summary:
      "What to request and what to ask when an agency expands from occasional drone use to a more formal program.",
    excerpt:
      "The oversight questions around drones usually involve use cases, flight logging, retention, and how emergency exceptions are handled.",
    tags: ["drones", "flight logs", "policy"],
    takeaways: [
      "Ask for flight logs, training rules, and mission approvals.",
      "Separate emergency response uses from broader operational expansion.",
      "Check how images are retained when no case file is created.",
    ],
    sections: [
      {
        heading: "Expansion often happens through operations language",
        paragraphs: [
          "A drone program may begin with narrow public-interest examples such as search-and-rescue or fire response, but the written procedures determine whether the program stays narrow over time.",
          "That is why residents should ask for operating manuals, training materials, and post-flight review requirements.",
        ],
      },
    ],
  },
  {
    slug: "audits-logs-and-oversight-reports",
    title: "Audits, Logs, and Oversight Reports: What to Ask For",
    category: "Public Records",
    date: "2026-06-01",
    readTime: "5 min read",
    summary:
      "The oversight documents that show whether a surveillance or infrastructure policy is being followed in practice.",
    excerpt:
      "Programs are easier to evaluate when residents can see the logs, audits, annual summaries, or review memos that explain real-world use.",
    tags: ["audits", "logs", "oversight reports"],
    takeaways: [
      "Ask for annual summaries, exception logs, and audit findings.",
      "Written policy is only the starting point.",
      "Look for disciplinary or corrective-action records when rules were not followed.",
    ],
    sections: [
      {
        heading: "Operational accountability requires evidence",
        paragraphs: [
          "A locality may publish a strong policy, but residents still need evidence that the rules are being followed. That evidence often lives in audit reviews, access logs, annual reports, and management summaries.",
          "Even a short annual report can be valuable if it explains usage volume, outside-agency access, exceptions, and review findings.",
        ],
      },
    ],
  },
  {
    slug: "what-to-request-before-a-tech-pilot-expands",
    title: "What to Request Before a Technology Pilot Expands",
    category: "Public Records",
    date: "2026-05-29",
    readTime: "4 min read",
    summary:
      "A pre-expansion checklist for residents when a pilot program is presented as ready for wider deployment.",
    excerpt:
      "Pilot projects often generate the records that matter most for oversight, especially when expansion is framed as a routine next step.",
    tags: ["pilots", "expansion", "evaluation"],
    takeaways: [
      "Request evaluation metrics and any internal recommendation memo.",
      "Ask what complaints, incidents, or exceptions were documented during the pilot.",
      "Compare pilot scope with the proposed expansion scope.",
    ],
    sections: [
      {
        heading: "Pilots should produce measurable review material",
        paragraphs: [
          "If a locality wants to expand a pilot, it should be able to explain what happened during the pilot, what metrics were used, and what safeguards changed before expansion.",
          "Residents should not have to treat expansion as automatic when the review material has not been published clearly.",
        ],
      },
    ],
  },
  {
    slug: "how-to-track-data-center-water-disclosures",
    title: "How to Track Data Center Water Disclosures",
    category: "Data Centers",
    date: "2026-05-25",
    readTime: "5 min read",
    summary:
      "A focused guide to locating water-use projections, cooling assumptions, and mitigation commitments in data center review materials.",
    excerpt:
      "Water questions become easier to discuss when residents can connect utility projections, environmental documents, and hearing materials in one timeline.",
    tags: ["water use", "cooling", "environmental review"],
    takeaways: [
      "Ask where the water-use number comes from and what assumptions support it.",
      "Check whether drought conditions change the project’s operating assumptions.",
      "Look for how mitigation is described and who tracks it over time.",
    ],
    sections: [
      {
        heading: "Water demand is often split across documents",
        paragraphs: [
          "A headline projection may appear in one packet while cooling assumptions or utility correspondence sit in an appendix or separate hearing record.",
          "Residents benefit from building a timeline that connects every disclosure back to its source document and date.",
        ],
      },
    ],
  },
  {
    slug: "how-to-read-a-community-benefits-agreement",
    title: "How to Read a Community Benefits Agreement",
    category: "Data Centers",
    date: "2026-05-20",
    readTime: "5 min read",
    summary:
      "A practical overview of the commitments communities should look for when a large project promises jobs, infrastructure support, or local investments.",
    excerpt:
      "A benefits agreement is only meaningful when the obligations are specific, measurable, and tracked over time.",
    tags: ["community benefits", "agreements", "accountability"],
    takeaways: [
      "Look for measurable commitments, not broad promises.",
      "Check who verifies compliance and how often.",
      "Ask what happens if milestones are missed.",
    ],
    sections: [
      {
        heading: "Specific terms matter more than broad assurances",
        paragraphs: [
          "A community benefits agreement should name the obligation, the timeline, the reporting mechanism, and the remedy if the commitment is not met.",
          "If the language is vague, it becomes difficult for residents to tell whether the agreement is a genuine accountability tool or only a communications document.",
        ],
      },
    ],
  },
  {
    slug: "what-to-request-about-search-logging",
    title: "What to Request About Search Logging and Audit Trails",
    category: "Surveillance Oversight",
    date: "2026-05-18",
    readTime: "6 min read",
    summary:
      "A resident-friendly explanation of why logs, search history, and audit reports are crucial in modern surveillance oversight.",
    excerpt:
      "Policies should state whether searches are logged, who can review them, and how exceptions are handled.",
    tags: ["search logs", "audit trails", "oversight"],
    takeaways: [
      "Ask for a sample log or redacted log format if available.",
      "Review who can search, who can approve exceptions, and who audits the audits.",
      "Request the written retention rules for logs themselves.",
    ],
    sections: [
      {
        heading: "A policy without logging is incomplete",
        paragraphs: [
          "When a system can be searched, reviewed, or shared, the public needs to know whether those actions are recorded and whether the records are retained long enough for oversight.",
          "Logging is not a cure-all, but without it, the public has little way to verify whether a policy is being followed in practice.",
        ],
      },
    ],
  },
  {
    slug: "when-a-records-response-feels-incomplete",
    title: "When a Records Response Feels Incomplete",
    category: "Public Records",
    date: "2026-05-16",
    readTime: "4 min read",
    summary:
      "How to identify a response that is missing attachments, key search terms, or obvious follow-up records.",
    excerpt:
      "An incomplete response is often a sign to narrow the request, ask for a search description, or request a second production.",
    tags: ["records response", "follow-up", "search terms"],
    takeaways: [
      "Check for missing attachments or references to withheld records.",
      "Ask what search terms, custodians, and date ranges were used.",
      "Submit a focused follow-up when the first production is partial.",
    ],
    sections: [
      {
        heading: "Partial productions are common, but they should be explainable",
        paragraphs: [
          "A short response does not necessarily mean the agency ignored the request, but a good records process should still let residents understand what was searched and what was withheld.",
          "The follow-up should ask for the search description, a list of record custodians, and any reason the production may be incomplete.",
        ],
      },
    ],
  },
  {
    slug: "reading-an-utility-interconnection-letter",
    title: "Reading a Utility Interconnection Letter",
    category: "Data Centers",
    date: "2026-05-14",
    readTime: "5 min read",
    summary:
      "How utility correspondence can reveal power demand assumptions, equipment needs, and timing risks for major facilities.",
    excerpt:
      "Interconnection letters often contain the first concrete hints about load, schedule, and infrastructure constraints.",
    tags: ["utility", "interconnection", "grid"],
    takeaways: [
      "Look for estimated load and phase timing.",
      "Check whether infrastructure upgrades are public or only implied.",
      "Compare the letter to staff reports and hearing materials.",
    ],
    sections: [
      {
        heading: "Utility letters can reveal the real scale early",
        paragraphs: [
          "Even a short utility letter may show projected demand, service class, or infrastructure timing in a way that helps residents understand the project more clearly.",
          "Those details are worth cross-referencing with environmental review, zoning materials, and any incentives being considered by the locality.",
        ],
      },
    ],
  },
];

export const articleCategories = [
  "All",
  "Surveillance Oversight",
  "Data Centers",
  "Public Records",
  "Procurement",
  "Meeting Strategy",
] as const;

export const articleTopicRoutes = [
  {
    slug: "surveillance-oversight",
    label: "Surveillance Oversight",
    description:
      "Contracts, access rules, retention standards, audits, and public accountability for camera systems and ALPR programs.",
  },
  {
    slug: "data-centers",
    label: "Data Centers",
    description:
      "Energy demand, water use, land use, tax incentives, environmental review, and local community impact.",
  },
  {
    slug: "public-records",
    label: "Public Records",
    description:
      "Records request strategy, retention schedules, logs, and the documents that make oversight possible.",
  },
  {
    slug: "procurement",
    label: "Procurement",
    description:
      "How to read vendor agreements, evaluation files, and purchasing records before a vote is final.",
  },
  {
    slug: "meeting-strategy",
    label: "Meeting Strategy",
    description:
      "Practical preparation for public comment, packet review, and evidence-based questions in a public hearing.",
  },
] as const;

export function getArticleBySlug(slug: string) {
  return articleRecords.find((article) => article.slug === slug);
}

export function getFeaturedArticles(limit = 3) {
  return articleRecords.filter((article) => article.featured).slice(0, limit);
}

export function getArticlesByCategory(category: (typeof articleCategories)[number] | string) {
  return articleRecords.filter((article) => article.category === category);
}
