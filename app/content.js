export const profile = {
  short: "Jeremy Liao",
  full: "Hung-Che (Jeremy) Liao",
  headline: "Analyst by training. Operator by habit.",
  intro:
    "I'm Jeremy, a business and data analyst who builds the systems behind better decisions: pricing, product data and operations. I finish my MS in Business Analytics at USC in December 2026 and am looking for analyst roles in Taiwan's tech industry.",
  email: "hungcheliao@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeremyliao",
  github: "https://github.com/jeremyliao0411",
};

export const strip = [
  { label: "Industries", items: ["Consumer goods", "Retail", "E-commerce", "Manufacturing"] },
  { label: "Systems", items: ["Salsify", "Shopify", "Python", "SQL", "Tableau"] },
];

export const work = [
  {
    id: "pricing",
    metric: "+7.5 pts",
    metricNote: "gross margin on repriced products",
    title: "A pricing system for a company that priced by feel",
    why: "I built a DTC e-commerce brand's first pricing and inventory system. The repricing it drove lifted margin on the affected products, and the system still runs without me.",
    details: [
      ["What was broken", "Products came in through four supply routes, each with its own freight, duty and handling costs. No one knew what a product really cost once it landed, so prices and reorders were set by intuition."],
      ["What I built", "I audited landed cost route by route and corrected bad cost data before changing any price. Then I reviewed the whole catalog for capital efficiency: roughly one in four products earned back less than a dollar of margin per dollar of inventory. Gemini filled gaps in the product data, with a person reviewing every uncertain call."],
      ["What changed", "Margin on repriced products rose about 7.5 points, and the result held up under significance testing. Sourcing, finance and marketing now run the system themselves from the operator manual I wrote."],
    ],
    tools: "Python, ShopifyQL, Gemini API, significance testing",
    note: "Company figures and product details are under NDA.",
  },
  {
    id: "salsify",
    metric: "25+",
    metricNote: "consumer brands implemented",
    title: "Getting product data right for the largest US retailers",
    why: "As a consultant, I led Salsify implementations so global food and beverage brands could publish accurate product content to retailers like Walmart, Target and Costco.",
    details: [
      ["The problem", "Big brands keep product data in many places: ERP systems, data pools, asset libraries and team spreadsheets. Each retailer wants it in a different shape, and when sources disagree, nobody knows which one is right."],
      ["What I did", "I ran discovery with each client's marketing, master data, sales and regulatory teams, mapped every upstream source and agreed on who owns each attribute. I cleaned and deduplicated thousands of records, designed data models so shared content is inherited instead of copied by hand, and owned QA against each retailer's requirements."],
      ["What lasted", "A Python pipeline I built for testing is still used company-wide by one major client. Approval workflows and training kept the data clean after launch."],
    ],
    tools: "Salsify PXM, Python, Excel, data modeling",
  },
  {
    id: "mlb",
    metric: "$21M",
    metricNote: "per extra win, in 2024 dollars",
    title: "Does money buy wins in baseball?",
    why: "Our class model said payroll matters. I found its two strongest predictors were partly caused by winning, rebuilt it, and got a more honest answer.",
    details: [
      ["The question", "We regressed wins on payroll, attendance, roster churn, player age and a manager score across 720 MLB team-seasons from 2000 to 2024. The model explained 48% of the variation in wins."],
      ["What was wrong", "Manager scores came from awards voted after the season, which mostly reward teams that won. Attendance also rises with winning. Payroll was in nominal dollars, though the league average nearly tripled over the period."],
      ["The honest answer", "With payroll adjusted for inflation and outcome-driven variables removed, every 10% above the league average adds about 0.72 wins (95% CI 0.48 to 0.96), roughly $21M per win. Roster stability and age matter just as much."],
    ],
    tools: "Python, statsmodels, causal reasoning",
    image: { src: "/mlb-drivers.png", alt: "Final model: one standard deviation more roster churn costs about 3.1 wins; payroll and age each add about 2.9." },
    link: { label: "Code and data on GitHub", href: "https://github.com/jeremyliao0411/mlb-payroll-wins" },
  },
  {
    id: "leadtime",
    small: true,
    metric: "71% → 90%",
    metricNote: "delivery quote accuracy",
    title: "Data-backed delivery quotes at an aluminum plant in Vietnam",
    why: "I replaced experience-based lead times with a model built on three years of orders, and found that 18% of volume ran on costlier machines with no quality gain.",
    details: [
      ["Also", "Traced a failed product trial to a process setting across 60 samples, avoiding a week of rework, and mapped our position against regional competitors at ALUMINIUM 2024 in Düsseldorf."],
    ],
    tools: "Python, regression, production data",
  },
];

export const about = [
  "I've played competitive sports since I was a kid: soccer, badminton, baseball, basketball and swimming. The stats behind the game are what first pulled me toward analytics, and team sports taught me most of what I know about working with people.",
  "My work has taken me from consumer brands in the US to a factory floor in Vietnam and a trade show in Düsseldorf. The common thread is simple: find the number that matters, then build something people will actually use. If you play any of those sports, I'm always up for a game.",
];

export const experience = [
  { role: "Pricing Analyst", org: "Ding-go", when: "2026" },
  { role: "MS Business Analytics", org: "USC Marshall School of Business", when: "2025–2026" },
  { role: "Product Operations Specialist", org: "Tung Shin Aluminum", when: "2024–2025" },
  { role: "Digital Implementation Specialist", org: "Gournay Consulting", when: "2023–2024" },
  { role: "Bachelor's degree", org: "Penn State University", when: "" },
];

export const exposure = "Worked across the US, Vietnam and Germany. Heading home to Taiwan.";
