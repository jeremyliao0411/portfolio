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
    "Hung-Che (Jeremy) Liao turns messy operational data into decisions teams use, from pricing and inventory to factory lead times.",
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
  body: "I’m Jeremy. I turn messy operational data into decisions teams actually use, from pricing and inventory to factory lead times.",
  intent:
    "Finishing my MS in Business Analytics at USC in December 2026. Looking for analyst roles in Taiwan’s tech and manufacturing industries.",
};

export const credibility = [
  { title: "USC Marshall", note: "MS Business Analytics, completing Dec 2026" },
  { title: "Ding-go", note: "Built the first pricing and inventory system" },
  { title: "Gournay Consulting", note: "Salsify implementations for 25+ consumer brands" },
];

export const work = {
  eyebrow: "Work / Four problems worth solving",
  title: "Selected work.",
  projects: [
    {
      org: "Ding-go",
      role: "Pricing Analyst intern, 2026",
      metric: "+7.5 pts",
      metricNote: "gross margin on repriced products",
      title: ["The shelf and the price", "tell one story."],
      body: [
        "Products arrived through four supply routes, each with its own freight, duty and handling costs. Nobody knew what a product really cost once it landed, so prices and reorders were set by feel.",
        "I built the company’s first pricing and inventory system on live store data. I fixed the cost data before touching a single price, then reviewed the catalog for how hard each dollar of inventory was working. Repricing raised gross margin on the affected products by about 7.5 points, a result that held up under significance testing.",
      ],
      focus:
        "Python, ShopifyQL and Gemini, with a person reviewing uncertain calls. Handed off with an operator manual; sourcing, finance and marketing run it today. Company data is under NDA.",
    },
    {
      org: "Gournay Consulting",
      role: "Digital Implementation Specialist, 2023–2024",
      metric: "25+",
      metricNote: "consumer brands implemented on Salsify",
      title: ["Information needs", "a shared meaning."],
      body: [
        "A product field can be filled in and still be wrong. For consumer brands selling through Walmart, Target and Costco, product data lived in ERP systems, data pools, asset libraries and spreadsheets, and the sources often disagreed.",
        "I sat with marketing, master data and regulatory teams to agree on what each field meant and who owned it, designed the data model, and checked every retailer channel before launch. A Python pipeline I built for testing is still used company-wide by one client.",
      ],
      focus: "Salsify, Python, data modeling and retailer QA.",
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
    {
      org: "Tung Shin Aluminum",
      role: "Product Operations Specialist, Vietnam, 2024–2025",
      metric: "71% → 90%",
      metricNote: "delivery quote accuracy",
      title: ["A delivery date", "is a promise."],
      body: [
        "At an aluminum plant in Vietnam, delivery dates were quoted from experience. When they slipped, the plant paid for rush work or lost a customer’s trust.",
        "I modeled lead time on three years of order data and replaced single-date guesses with realistic ranges, raising quote accuracy from 71% to 90%. Along the way I found that 18% of volume ran on costlier machines with no difference in quality, which became a plant-wide routing rule.",
      ],
      focus: "Python, regression and production data.",
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
    { title: "Manufacturing", body: "Lead times, machine constraints and the promises made to customers.", where: "Tung Shin Aluminum, Ho Chi Minh City, 2024–2025" },
    { title: "Product data systems", body: "The care it takes to define, validate and pass information between teams.", where: "Gournay Consulting, 2023–2024" },
  ],
  education: [
    "MS Business Analytics, USC Marshall School of Business, Dec 2026",
    "Undergraduate degree, Penn State University",
  ],
};

export const contact = {
  title: "Begin with a conversation.",
  body: "If you’re building a team in Taiwan, I’d be glad to hear what you’re working on and where I might help. Email is the fastest way to reach me.",
};

export const footer = { tagline: "Clear thinking. People first." };
