export const profile = {
  name: "Hung-Che (Jeremy) Liao",
  short: "Jeremy Liao",
  role: "Business & data analyst",
  intro:
    "I turn messy operational data into decisions that teams actually use, from pricing and inventory to factory lead times.",
  headed:
    "Finishing my MS in Business Analytics at USC in December 2026, and looking for analyst roles in Taiwan's tech and manufacturing industry.",
  email: "hungcheliao@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeremyliao",
  github: "https://github.com/jeremyliao0411",
};

export const work = [
  {
    slug: "pricing-inventory-system",
    title: "Building a pricing and inventory system from scratch",
    org: "Pricing Analyst intern, DTC e-commerce brand",
    year: "2026",
    after: "+7.5 pts",
    metricLabel: "gross margin on repriced products",
    summary:
      "The company priced and restocked by feel. I built its first pricing and inventory system on live store data, and the repricing it drove raised gross margin on the affected products by about 7.5 points.",
    tools: ["Python", "ShopifyQL", "Gemini API", "Significance testing"],
    sections: [
      {
        heading: "The problem",
        body: [
          "Products were sourced through four different supply routes, each with its own freight, duty and handling costs. Nobody knew what a product really cost once it landed, so prices and reorder decisions were set by intuition.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "Audited landed cost route by route and corrected inaccurate cost data before touching a single price, since repricing on wrong costs would only move the error.",
          "Ran a catalog-wide review of inventory health and capital efficiency. Roughly one in four stocked products earned back less than a dollar of annual gross margin per dollar of inventory, and one category tied up far more capital than its share of revenue.",
          "Used Gemini to fill gaps in the store's product data, with a human review step for uncertain calls, and stress-tested the system before launch to catch errors that looked like normal output.",
        ],
      },
      {
        heading: "Result",
        body: [
          "Gross margin on repriced products rose by about 7.5 points, a result that held up under significance testing. The inventory findings became the new basis for choosing hero products and setting reorder priorities.",
          "I handed the system off with an operator manual, so sourcing, finance and marketing now run it without me.",
        ],
      },
    ],
    note: "Company data, product details and absolute figures are covered by an NDA and are not shown.",
  },
  {
    slug: "factory-lead-time",
    title: "Replacing gut-feel delivery quotes at an aluminum plant",
    org: "Product Operations Specialist, Tung Shin Aluminum (Vietnam)",
    year: "2024–2025",
    before: "71%",
    after: "90%",
    metricLabel: "quote accuracy",
    summary:
      "Sales quoted delivery dates from experience. I modeled lead time on three years of order data, raising quote accuracy from 71% to 90%, and found a routing rule that moved volume off costlier equipment.",
    tools: ["Python", "Regression", "Production data analysis"],
    sections: [
      {
        heading: "The problem",
        body: [
          "Customers were given delivery dates based on what experienced staff expected. When those quotes missed, the plant either rushed orders at extra cost or disappointed customers.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "Modeled lead time on three years of order history in Python and replaced single-date guesses with data-backed delivery ranges.",
          "Compared two years of output data across machines and found that 18% of volume ran on higher-cost equipment with no difference in quality.",
          "When a product trial failed, I compared dimensional data against production logs across 60 samples and traced the cause to a process setting rather than tooling, which avoided a week of rework.",
        ],
      },
      {
        heading: "Result",
        body: [
          "Quote accuracy rose from 71% to 90%. The equipment finding became a plant-wide routing guideline.",
          "I also mapped our position against regional competitors from 20+ booths and 40+ visitor conversations at ALUMINIUM 2024 in Düsseldorf.",
        ],
      },
    ],
  },
  {
    slug: "mlb-payroll-wins",
    title: "Does money buy wins in baseball?",
    org: "USC team project, then my own re-analysis",
    year: "2025–2026",
    after: "$21M",
    metricLabel: "per extra win, in 2024 dollars",
    summary:
      "Our class model said payroll matters, but its two strongest predictors were partly caused by winning. I rebuilt it on 720 team-seasons with inflation-adjusted payroll: each extra win costs about $21M.",
    tools: ["Python", "statsmodels", "Causal reasoning"],
    image: { src: "/mlb-drivers.png", alt: "Final model, 720 team-seasons: one standard deviation more roster churn costs about 3.1 wins; payroll and age each add about 2.9." },
    sections: [
      {
        heading: "The question",
        body: [
          "Do high-payroll teams win because they spend more? We regressed wins on payroll, attendance, roster churn, player age and a manager-quality score across MLB seasons from 2000 to 2024. The model explained 48% of the variation in wins.",
        ],
      },
      {
        heading: "What was wrong with it",
        body: [
          "The two strongest variables were partly outcomes, not causes. Manager quality came from Manager of the Year votes, which are cast after the season and mostly reward teams that won. Attendance rises when a team is winning.",
          "Payroll was also in nominal dollars, even though the league-average payroll nearly tripled from $55.7M to $153.7M over the period. I also found a duplicated team-season in the data.",
        ],
      },
      {
        heading: "What I changed",
        body: [
          "I expressed payroll relative to each season's league average, removed the duplicate, and kept only variables not driven by the result: payroll, roster churn and age.",
          "Every 10% of payroll above the league average adds about 0.72 wins (95% CI 0.48 to 0.96), roughly $21M per win. Roster stability and age matter about as much as money, and 73% of what decides a season is still unexplained.",
        ],
      },
    ],
    links: [{ label: "Code and data on GitHub", href: "https://github.com/jeremyliao0411/mlb-payroll-wins" }],
  },
];

export const experience = [
  { when: "2026", what: "Pricing Analyst intern", where: "Ding-go, Los Angeles (remote)" },
  { when: "2025–2026", what: "MS Business Analytics", where: "USC Marshall School of Business" },
  { when: "2024–2025", what: "Product Operations Specialist", where: "Tung Shin Aluminum, Ho Chi Minh City" },
  {
    when: "2023–2024",
    what: "Digital Implementation Specialist",
    where: "Gournay Consulting, Pennsylvania",
    detail:
      "Delivered Salsify implementations for 25+ consumer brands, getting their product content live on major US retailers, and built a Python data pipeline a client still uses company-wide.",
  },
  { when: "Before 2023", what: "Undergraduate degree", where: "Penn State University" },
];

export const offField = {
  heading: "Off the field? Rarely.",
  body: "I've played competitive sports since I was a kid: soccer, badminton, baseball, basketball and swimming. Team sports taught me most of what I know about working with people, and the stats behind the game are what pulled me into analytics. If you play anything on that list, let's get a game in sometime.",
  sports: ["Soccer", "Badminton", "Baseball", "Basketball", "Swimming"],
};
