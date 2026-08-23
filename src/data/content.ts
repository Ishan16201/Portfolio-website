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
  "I operate at the intersection of financial markets, systems architecture, and original research. I don't dabble — I build, ship, and publish. Five books on Amazon, five papers on SSRN, trading infrastructure that runs live, and a Substack where I write about the mental game of markets.",
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
  {
    id: "book-quant-edge",
    title: "The Quantitative Edge",
    description:
      "A full-spectrum treatment of modern quantitative finance: stochastic calculus, derivative pricing, algorithmic strategy construction, market microstructure, volatility trading, and machine learning — with Hidden Markov Models woven throughout as a practical regime framework.",
    href: "https://amzn.in/d/05yZsez2",
  },
] as const;

export const researchPapers = [
  {
    id: "paper-1",
    title: "RADIANT",
    description:
      "A regime-adaptive trading architecture for XAUUSD that combines LSTM regime inference, Bayesian filtering, hysteresis gating, and Kelly-style allocation.",
    href: "https://ssrn.com/abstract=6427863",
  },
  {
    id: "paper-2",
    title: "CIRT",
    description:
      "A theoretical framework for conscious recurrence, formalizing causal integration, predictive precision, entropy, and substrate-independent identity thresholds.",
    href: "https://ssrn.com/abstract=6524720",
  },
  {
    id: "paper-3",
    title: "Path Integral Option Pricing",
    description:
      "A physics-inspired extension of option pricing beyond Black-Scholes, using path integrals for jump-diffusion and rough volatility dynamics.",
    href: "https://ssrn.com/abstract=6764698",
  },
  {
    id: "paper-4",
    title: "CARA",
    description:
      "A unified AGI architecture based on Hierarchical Predictive Agency, global workspace coordination, continual learning, and recursive self-modeling.",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6873342",
  },
  {
    id: "paper-5",
    title: "NH-SOR",
    description:
      "A neuromorphic, photonic–FPGA architecture for ultra-low-latency smart order routing in financial markets.",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7306798",
  },
] as const;

export const projects = [
  {
    id: "project-radiant",
    title: "RADIANT",
    description:
      "A multi-stage XAUUSD regime engine with density-matrix features, dual-layer LSTM classification, recursive Bayesian hysteresis, MT5 execution, and startup self-calibration.",
    href: "https://github.com/Ishan16201/RADIANT",
  },
  {
    id: "project-hft",
    title: "HFT Market Maker",
    description:
      "A low-latency MT5 market-making system with Bayesian fair-value estimation, order-flow imbalance signals, adverse-selection detection, Avellaneda-Stoikov quoting, and pre-trade risk gates.",
    href: "https://github.com/Ishan16201/HFT",
  },
  {
    id: "project-cara",
    title: "CARA",
    description:
      "An AGI architecture concept translating the CARA paper into a prototype direction: hierarchical predictive agency, global workspace routing, world modeling, self-modeling, and meta-cognitive control.",
    href: "https://github.com/Ishan16201/CARA",
  },
] as const;
