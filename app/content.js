// All site copy lives here. Change wording or links without touching layout or styles.

export const profile = {
  name: "Jeremy Liao",
  fullName: "Hung-Che (Jeremy) Liao",
  email: "hungcheliao@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeremyliao",
  github: "https://github.com/jeremyliao0411",
  // Add a resume link (e.g. "/resume.pdf" placed in /public) to show it in the hero and contact sections.
  resume: "",
  portrait: { src: "/jeremy-portrait.jpg", alt: "Hung-Che (Jeremy) Liao", width: 800, height: 1000 },
  metaDescription:
    "Hung-Che (Jeremy) Liao turns messy operational data into decisions teams use, from pricing and inventory to capacity planning.",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Story", href: "#story" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  title: ["Clear thinking.", "Useful decisions.", "People first."],
  lead: ["Operational data is messy.", "The next step doesn’t have to be."],
  body: "I’m Jeremy. I turn messy operational data into decisions teams actually use, from pricing and inventory to capacity planning.",
  intent:
    "Finishing my MS in Business Analytics at USC in December 2026. Looking for analyst roles in Taiwan’s tech and manufacturing industries.",
};

export const credibility = [
  { title: "USC Marshall", note: "MS Business Analytics, completing Dec 2026" },
  { title: "Ding-go", note: "Built the pricing system, still in use after I left" },
  { title: "Gournay Consulting", note: "Salsify implementations for 30+ consumer brands" },
];

export const work = {
  eyebrow: "Work / Four problems worth solving",
  title: "Selected work.",
  projects: [
    {
      org: "TSMC capacity",
      role: "Independent project, public data, 2026",
      metric: "+5% to +9.5%",
      metricNote: "capacity to add next year, centered around +7%",
      title: ["Build too few,", "or build too many."],
      body: [
        "TSMC stopped publishing fab utilization after 2020, right when AI demand took off. I rebuilt it from 71 quarterly reports and 20-F filings, checked it against 16 quarters where the real numbers are known (about 2% error), and reported the test it failed.",
        "Then I measured how much utilization moves gross margin, simulated 10,000 possible demand years, and priced a shortage against idle machines. A lost wafer costs about 5× a year of idle capacity, which puts the cheapest add at about +7%.",
      ],
      focus: "Python, regression, Monte Carlo simulation and cost modeling.",
      link: { label: "Read the full analysis ↗", href: "/tsmc" },
    },
    {
      org: "Ding-go",
      role: "Pricing Analyst intern, 2026",
      metric: "+4.6 pts",
      metricNote: "gross margin on 23 products I recommended repricing",
      title: ["The shelf and the price", "tell one story."],
      body: [
        "Products arrived through four supply routes, each with its own freight, duty and handling costs. Nobody knew what a product really cost once it landed, so prices and reorders were set by feel.",
        "I built a pricing system on live store data. I fixed the cost data before touching a single price, then reviewed the catalog for how hard each dollar of inventory was working. I recommended price increases on 23 products, and gross margin on them rose about 4.6 points, a result that held up under a paired t-test.",
      ],
      focus:
        "ShopifyQL, Apps Script, Shopify Admin API and Gemini. Used by sourcing, finance and marketing, and still in use after I left. Company data is under NDA.",
    },
    {
      org: "Gournay Consulting",
      role: "Digital Implementation Analyst, 2023–2024",
      metric: "30+",
      metricNote: "consumer brands implemented on Salsify",
      title: ["Information needs", "a shared meaning."],
      body: [
        "A product field can be filled in and still be wrong. For consumer brands selling through Walmart, Target and Costco, product data lived in ERP systems, data pools, asset libraries and spreadsheets, and the sources often disagreed.",
        "I cleaned and consolidated thousands of product records from 1WorldSync and 10+ client spreadsheets into one Salsify import, with a taxonomy and parent–child hierarchy, then set up validation rules so data was checked against each retailer’s requirements before it went out. The West Madison Foods pipeline I set up was still running a year after I left.",
      ],
      focus: "Salsify (PXM), GDSN data, data modeling and retailer validation.",
    },
    {
      org: "Baseball payroll",
      role: "USC team project, then my own re-analysis, 2025–2026",
      metric: "$21M",
      metricNote: "per extra win, in 2024 dollars",
      title: ["Some questions begin", "with a game."],
      body: [
        "Does money buy wins? Our class model said yes, but its two strongest predictors, attendance and Manager of the Year votes, partly follow from winning. Payroll was also left in nominal dollars from 2000 to 2024.",
        "I rebuilt the model on 720 team-seasons with inflation-adjusted payroll and only variables that come before the result. Each extra win costs about $21M, and roster stability matters about as much as money. The honest answer was smaller than the first one, and more useful.",
      ],
      focus: "Python and statsmodels.",
      link: { label: "Code and data on GitHub ↗", href: "https://github.com/jeremyliao0411/mlb-payroll-wins" },
    },
  ],
};

export const story = {
  eyebrow: "Story / What sport left with me",
  title: ["Pay attention.", "Make room for others.", "Do your part."],
  body: [
    "I grew up playing soccer, badminton, baseball, basketball and swimming, almost always on a team. Sport taught me that performance is rarely a solo story. Your choices shape the next person’s options, and listening matters as much as speaking.",
    "It’s also where I first noticed numbers. Box scores made me curious about what actually wins, and that curiosity became analytics. I want numbers to start a better conversation, not end one.",
  ],
  principle: "A useful answer makes room for people.",
};

export const experience = {
  eyebrow: "Experience / Where I’ve learned to look",
  title: "Different kinds of complexity.",
  areas: [
    { title: "E-commerce", body: "How price, demand and stock pull on each other.", where: "Ding-go, Los Angeles, 2026" },
    { title: "Semiconductors", body: "How utilization, demand and cost decide how much capacity to build.", where: "TSMC capacity project (public data), 2026" },
    { title: "Product data systems", body: "The care it takes to define, validate and pass information between teams.", where: "Gournay Consulting, 2023–2024" },
  ],
  education: [
    "MS Business Analytics, USC Marshall School of Business, Dec 2026",
    "BS Marketing, Minor in MIS, Penn State University",
  ],
};

export const contact = {
  title: "Begin with a conversation.",
  body: "If you’re building a team in Taiwan, I’d be glad to hear what you’re working on and where I might help. Email is the fastest way to reach me.",
};

export const footer = { tagline: "Clear thinking. People first." };
