export type FeatureData = {
  id: string;
  imageUrl?: string;
  category: string;
  title: string;
  description?: string;
  author?: string;
  date?: string;
  content?: string;
};

export interface NewsItem {
  id: string;
  type: "news" | "sponsored" | "news-analysis";
  title: string;
  description: string;
  author?: string;
  date: string;
  duration?: string; // for sponsored or news content
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  categories: string[];
  videoUrl: string; // URL for video
}

export const articles: FeatureData[] = [
  {
    id: "Presentation-by-the-Center-for-Human-Rights",
    imageUrl:
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734376240/chran1_kgdvmk.jpg",
    category: "Feature",
    title:
      "Presentation by the Center for Human Rights & Accountability Network (CHRAN)",
    description:
      "Presentation by the Center for Human Rights & Accountability Network (CHRAN) at the Akwa Ibom State House of Assembly Public Hearing on the 2025 Budget of Akwa Ibom State on Monday, 9th December, 2024.",
    author: "Chran director",
    date: "9 Dec 2024",
    content:
      "This is the full article content that would be displayed on the details page...",
  },
  {
    id: "SAP-systems-increasingly-targeted",
    category: "News",
    title: "SAP systems increasingly targeted by cyber attackers",
    description: "By John Leyden • 13 Dec 2024 • 4 mins",
    content: "Full details about SAP systems and cyber attacker trends...",
  },
  {
    id: "To-make-the-most-of-Cisco-HyperShield",
    category: "Sponsored Content",
    title: "To make the most of Cisco HyperShield, upskill your IT team",
    description: "By Cyber NewsWire • 20 Aug 2024",
    content: "Sponsored content about Cisco HyperShield and IT upskilling...",
  },
  {
    id: "To-make-the-most-of-Cisco-HyperShield",
    category: "Sponsored Content",
    title: "To make the most of Cisco HyperShield, upskill your IT team",
    description: "By Cyber NewsWire • 20 Aug 2024",
    content: "Sponsored content about Cisco HyperShield and IT upskilling...",
  },
];

export const featureData: Feature = {
  id: "Security-leaders-top-10-takeaways-for-2024",
  title:
    "AT THE PUBLIC HEARING ON THE 2025 APPROPRIATION BILL HELD AT THE AKWA IBOM STATE HOUSE OF ASSEMBLY ON MONDAY, 9th DECEMBER, 2024 AT THE OLD CHAPEL, HOUSE OF ASSEMBLY, UYO.",
  description:
    "BEING A PRESENTATION BY THE CENTER FOR HUMAN RIGHTS & ACCOUNTABILITY NETWORK (CHRAN)",
  author: "By Rosalyn Page",
  date: "16 Dec 2024 • 11 mins",
  categories: ["CSO and CISO", "IT Leadership"],
  videoUrl:
    "https://res.cloudinary.com/dg8cmo2gb/video/upload/v1734243728/daddy_speech2_xtszxt.mp4",
};

export const newsItems: NewsItem[] = [
  {
    id: "By-a-letter-dated-29th-November",
    type: "news",
    title:
      "By a letter dated 29th November, 2024 with reference number AKHA/S/61/Vol. IX/315 signed by Unyime Ekpenyong (Mrs.) for Chairman, House Committee on Appropriation and Finance, the CHRAN was invited",
    description: "Deep flaws found in CVSS scoring system",
    author: "By John Leyden",
    date: "12 Dec 2024 • 3 mins",
  },
  {
    id: "To-make-the-most-of-Cisco-HyperShield",
    type: "sponsored",
    title:
      "On receipt of the invitation letter, the Center took time to study the 2025 Appropriation Bill, bearing in mind the policy thrust and objectives of the Budget, and reviewed the implementation of the 2024 Appropriation Law.",
    description: "Sponsored content by Cyber NewsWire",
    author: "Cyber NewsWire",
    date: "",
  },
  {
    id: "Salt-Typhoon-poses-a-serious",
    type: "news-analysis",
    title:
      "This presentation represents the position of our Center on the 2025 Appropriation Bill.",
    description: "Analysis of the latest Salt Typhoon supply chain risk.",
    author: "By Cynthia Brumfield",
    date: "11 Dec 2024 • 12 mins",
  },
];
