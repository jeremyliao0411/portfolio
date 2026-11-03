// All site copy lives here. Every number must match the resume and the fact files in
// ~/Desktop/Job search/resume facts/<company>/ — change wording here, not in the layout.

export const profile = {
  name: "Jeremy Liao",
  fullName: "Hung-Che (Jeremy) Liao",
  email: "hungcheliao@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeremyliao",
  github: "https://github.com/jeremyliao0411",
  portrait: { src: "/jeremy-portrait.jpg", alt: "Hung-Che (Jeremy) Liao", width: 800, height: 1000 },
  metaDescription:
    "Hung-Che (Jeremy) Liao turns messy operational data into decisions teams use, from pricing and inventory to capacity planning.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

// Background photos: Wikimedia Commons, CC0 / public domain (see public/bg/CREDITS.md).
export const photos = {
  port: { src: "/bg/port.jpg", alt: "Container ship being loaded at a port at night" },
  lights: { src: "/bg/lights.jpg", alt: "Light trails on a highway at night" },
};

export const logos = {
  dinggo: { src: "/logos/dinggo.png", alt: "Ding-go logo" },
  gournay: { src: "/logos/gournay.png", alt: "Gournay Consulting logo" },
  usc: { src: "/logos/usc-marshall.png", alt: "USC Marshall School of Business logo" },
  psu: { src: "/logos/penn-state.svg", alt: "Penn State logo" },
};

export const home = {
  hello: "Hi, I’m Jeremy.",
  line: "I turn messy data into decisions teams actually use.",
  sub: "MS Business Analytics at USC Marshall, graduating December 2026. Moving back to Taiwan and available from January 2027.",
  logoStrip: "Where I’ve worked and studied",
  explore: {
    title: "Take a look around",
    cards: [
      {
        href: "/experience",
        title: "Experience",
        line: "Pricing at an e-commerce company and product data for 30+ consumer brands.",
        meta: "Ding-go · Gournay Consulting · USC · Penn State",
      },
      {
        href: "/projects",
        title: "Projects",
        line: "How much capacity TSMC should add, and whether payroll buys wins in baseball.",
        meta: "TSMC capacity · MLB payroll",
      },
      {
        href: "/contact",
        title: "Contact",
        line: "Hiring an analyst in Taiwan? Email is the fastest way to reach me.",
        meta: "Email · LinkedIn · GitHub",
      },
    ],
  },
  results: {
    title: "What the work changed",
    items: [
      {
        org: "Ding-go",
        context: "Pricing Analyst Intern · 2026",
        parts: ["Recommended price increases on ", "23 products", ". Gross margin went from ", "48.8% to 53.5%", "."],
        href: "/experience",
      },
      {
        org: "Gournay Consulting",
        context: "Digital Implementation Analyst · 2023–24",
        parts: ["Implemented Salsify for ", "30+ consumer brands", ". One pipeline I set up still ran ", "a year after I left", "."],
        href: "/experience",
      },
      {
        org: "TSMC capacity",
        context: "Independent project · 2026",
        parts: ["Rebuilt fab utilization from ", "71 quarterly reports", ". Recommendation: add ", "+5% to +9.5%", " capacity next year."],
        href: "/tsmc",
      },
      {
        org: "MLB payroll",
        context: "USC team project, then my re-analysis",
        parts: ["+10% of league-average payroll buys about ", "+0.72 wins", ", roughly ", "$21.3M per win", "."],
        href: "/projects",
      },
    ],
  },
  recognition: {
    title: "Recognition",
    items: [
      { lead: "Semi-finalist", rest: "USC Marshall Global MS Business Analytics AI Case Competition, 2025 · 200+ participants from 20+ countries" },
      { lead: "Peer Mentor", rest: "Penn State business program, 2022–2023 · 5 mentees" },
    ],
  },
  highlights: {
    title: "Highlights",
    items: [
      { lead: "Semi-finalist", rest: "USC Marshall Global MS Business Analytics AI Case Competition, 2025 (200+ participants from 20+ countries)" },
      { lead: "Peer Mentor", rest: "Penn State business program, 2022–2023 (5 mentees)" },
      { lead: "Pricing system still in use", rest: "after my Ding-go internship ended" },
      { lead: "30+ consumer brands", rest: "implemented on Salsify at Gournay Consulting" },
    ],
  },
  closing: {
    title: "Heading home to Taiwan.",
    body: "Available January 2027 for analyst roles in tech and manufacturing.",
    cta: { label: "Get in touch", href: "/contact" },
  },
};

export const experience = {
  banner: {
    title: "Experience",
    sub: "Where I learned to turn data into decisions people act on.",
    photo: "port",
  },
  workTitle: "Work",
  jobs: [
    {
      logo: "dinggo",
      org: "Ding-go",
      role: "Pricing Analyst Intern",
      when: "Jun 2026 – Oct 2026",
      where: "Los Angeles, CA",
      problem:
        "Products arrived through four freight routes, each with its own costs. Nobody knew what a product really cost once it landed, so prices and reorders were set by feel.",
      did: [
        "Rebuilt landed cost and fixed costing errors, including a labeling fee the old sheet counted twice",
        "Found 53% of inventory capital in dead or overstocked products, while 94 products selling 20+ units a quarter stocked out",
        "Built one Shopify-connected pricing system (Apps Script, Admin API) used by sourcing, finance and marketing",
      ],
      result:
        "I recommended price increases on 23 products, and their gross margin rose from 48.8% to 53.5% (paired t-test, p < 0.001). The pricing system was still in use after I left.",
      tags: ["ShopifyQL", "Apps Script", "Shopify Admin API", "Gemini"],
    },
    {
      logo: "gournay",
      org: "Gournay Consulting",
      role: "Digital Implementation Analyst",
      when: "Jun 2023 – Jun 2024",
      where: "New Hope, PA",
      problem:
        "Brands selling to Walmart, Target, Costco and Meijer kept product data in ERP systems, GDSN data pools, asset libraries and spreadsheets, and the sources often disagreed.",
      did: [
        "Delivered Salsify (PXM) implementations for 30+ consumer brands across CPG, furniture and electronics",
        "Consolidated thousands of product records from 1WorldSync and 10+ client spreadsheets into one import, with a taxonomy and parent–child hierarchy",
        "Set up validation rules and readiness checks so data met each retailer’s requirements before it went out",
      ],
      result: "The West Madison Foods pipeline I set up was still running a year after I left.",
      tags: ["Salsify (PXM)", "GDSN", "Data modeling", "Retailer validation"],
    },
  ],
  educationTitle: "Education",
  schools: [
    {
      logo: "usc",
      school: "University of Southern California, Marshall School of Business",
      degree: "M.S. Business Analytics (STEM)",
      when: "Aug 2025 – Dec 2026",
    },
    {
      logo: "psu",
      school: "Penn State University, Smeal College of Business",
      degree: "B.S. Marketing, Minor in Management Information Systems · GPA 3.7 · Dean’s List",
      when: "May 2023",
    },
  ],
};

export const projects = {
  banner: {
    title: "Projects",
    sub: "Two questions I took from raw data to a recommendation.",
  },
  items: [
    {
      cover: { src: "/tsmc/img/03a_margin_vs_utilization_by_era.png", alt: "Chart: TSMC gross margin against fab utilization, with a higher line for each era", width: 1350, height: 840 },
      title: "How much should TSMC build?",
      meta: "Independent project · public data · 2026",
      problem:
        "TSMC stopped publishing fab utilization after 2020, right when AI demand took off. I rebuilt it from 71 quarterly reports and 20-F filings, then priced a shortage against idle machines.",
      result: "Add +5% to +9.5% capacity next year, centered around +7%.",
      tags: ["Python", "Regression", "Monte Carlo", "Cost modeling"],
      link: { label: "Read the full analysis", href: "/tsmc", external: false },
    },
    {
      cover: { src: "/mlb-drivers.png", alt: "Chart: extra wins per one standard deviation of average age, payroll and roster churn", width: 1400, height: 640 },
      title: "Does payroll buy wins?",
      meta: "USC team project, then my own re-analysis · 2025–2026",
      problem:
        "Our class model said yes, but its strongest predictors, attendance and Manager of the Year votes, partly follow from winning. I rebuilt it on 720 team-seasons with inflation-adjusted payroll.",
      result: "+10% of league-average payroll → +0.72 wins, about $21.3M per win.",
      tags: ["Python", "statsmodels", "Regression"],
      link: { label: "Code and data on GitHub", href: "https://github.com/jeremyliao0411/mlb-payroll-wins", external: true },
    },
  ],
};

export const contact = {
  banner: {
    title: "Contact",
    sub: "In Los Angeles until December 2026, then in Taiwan from January 2027.",
    photo: "lights",
  },
  title: "Let’s talk.",
  body: "If you’re building a team in Taiwan, I’d be glad to hear what you’re working on and where I might help. Email is the fastest way to reach me.",
};

export const footer = {
  built: "Designed and built with AI-assisted coding. Every number checked against the source data.",
  credits: "Background photos: Wikimedia Commons (CC0).",
};
