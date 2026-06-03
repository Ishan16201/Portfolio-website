export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#books", label: "Books" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
] as const;

export const heroPhrases = [
  "Trader.",
  "Researcher.",
  "Developer.",
  "Author.",
  "Musician.",
] as const;

export const socialLinks = [
  {
    href: "https://github.com/Ishan16201",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://www.linkedin.com/in/ishan-saraf-b6a2b933b/",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://www.instagram.com/ishan402s",
    label: "Instagram",
    icon: "instagram",
  },
  {
    href: "https://thetradingmind.substack.com",
    label: "Substack",
    icon: "substack",
  },
] as const;

export const aboutParagraphs = [
  "I'm Ishan Saraf — 19 years old, based in India. I trade XAUUSD and USDJPY using ICT and Smart Money concepts, build quantitative trading systems, publish books on finance and markets, conduct academic research, and make music when the charts are closed.",
  "I operate at the intersection of financial markets, systems architecture, and original research. I don't dabble — I build, ship, and publish. Four books on Amazon, three papers on SSRN, trading infrastructure that runs live, and a Substack where I write about the mental game of markets.",
  "I'm interested in anything that compounds: skill, knowledge, capital, and conviction.",
] as const;

export const books = [
  {
    id: "book-liquidity",
    title: "The Liquidity Blueprint",
    description:
      "A systematic breakdown of how institutional liquidity shapes price delivery. Order flow mechanics, liquidity sweeps, and the structural anatomy of high-probability setups.",
    href: "https://amzn.in/d/0fnwh85f",
  },
  {
    id: "book-fundamentals",
    title: "Fundamentals Unfiltered",
    description:
      "Macro-driven fundamental analysis stripped of noise. Central bank policy, inflation dynamics, and the data points that actually move markets — no fluff, no filler.",
    href: "https://amzn.in/d/0cIj9SZM",
  },
  {
    id: "book-letters",
    title: "Letters to a Young Trader",
    description:
      "The psychological playbook for surviving your first years in the market. Discipline frameworks, emotional regulation, and the hard truths nobody tells you early enough.",
    href: "https://amzn.in/d/0eg09efC",
  },
  {
    id: "book-derivatives",
    title: "The Derivatives Playbook",
    description:
      "Options, futures, and structured products demystified. Pricing models, risk Greeks, and real-world hedging strategies built for the practitioner, not the textbook.",
    href: "https://amzn.in/d/0bFmNXbV",
  },
] as const;

export const researchPapers = [
  {
    id: "paper-1",
    title: "Research Paper I",
    description:
      "Exploring quantitative models and market microstructure dynamics through empirical analysis and original data-driven frameworks.",
    href: "https://ssrn.com/abstract=6427863",
  },
  {
    id: "paper-2",
    title: "Research Paper II",
    description:
      "Investigating structural shifts in liquidity provision and their implications for systematic trading strategy design.",
    href: "https://ssrn.com/abstract=6524720",
  },
  {
    id: "paper-3",
    title: "Research Paper III",
    description:
      "A cross-asset study on macroeconomic indicators and their predictive power for short-term price action in major currency pairs.",
    href: "https://ssrn.com/abstract=6764698",
  },
] as const;

export const projects = [
  {
    id: "project-infra",
    title: "Trading Infrastructure Engine",
    description:
      "Low-latency execution pipeline for live markets. Order management, position sizing, and real-time risk monitoring — built for speed and reliability.",
  },
  {
    id: "project-mt5",
    title: "MT5 Bridge Automation",
    description:
      "Automated bridge connecting custom strategy signals to MetaTrader 5 for seamless live execution across forex and commodities.",
  },
  {
    id: "project-quant",
    title: "Quant Signal Systems",
    description:
      "Multi-factor quantitative signal generation platform. Backtesting engine, walk-forward optimization, and production-grade alert dispatch.",
  },
] as const;
