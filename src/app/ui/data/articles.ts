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

export type NewsData = {
  id: string;
  type?: string;
  title?: string;
  description?: string;
  author?: string;
  date?: string;
  categories: string[];
  fullText?: string; // New field for extra text
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

export const newsData: NewsData[] = [
  {
    id: "Amazon-refuses-Microsoft-365 ",
    type: "News",
    title:
      "Amazon refuses Microsoft 365 deployment because of lax cybersecurity",
    description:
      "Security executives applaud Amazon for publicly shaming Microsoft security, although some suspect it is a thinly veiled AWS sales pitch.",
    author: "Evan Schuman",
    date: "16 Dec 2024 • 5 mins",
    categories: ["Access Control", "Application Security", "Cloud Security"],
    fullText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. ...", // New 200-word content
  },
  {
    id: "Rhode-Island-suffers-major-cyberattack",
    type: "News",
    title:
      "Rhode Island suffers major cyberattack, exposing personal data of thousands",
    description:
      "With government systems targeted in the state, Deloitte, law enforcement, and IT experts are racing to contain the breach.",
    author: "Gyana Swain",
    date: "16 Dec 2024 • 5 mins",
    categories: ["Cyberattacks", "Malware", "Security"],
    fullText:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius. Nulla facilisi. Pellentesque lobortis. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Nulla aliquet. Vivamus euismod mauris. Cras vel lorem. Etiam eu ante. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. ...", // New 200-word content
  },
  {
    id: "Amazon-refuses-Microsoft-365-deployment-because",
    type: "News",
    title:
      "Amazon refuses Microsoft 365 deployment because of lax cybersecurity",
    description:
      "Security executives applaud Amazon for publicly shaming Microsoft security, although some suspect it is a thinly veiled AWS sales pitch.",
    author: "Evan Schuman",
    date: "16 Dec 2024 • 5 mins",
    categories: ["Access Control", "Application Security", "Cloud Security"],
    fullText:
      "Sed libero. Curabitur tristique, libero et volutpat pellentesque, felis ipsum faucibus metus, ut hendrerit mi erat eu tortor. Sed tristique suscipit justo, quis venenatis erat iaculis a. Mauris tristique euismod nunc, eget cursus sem. Curabitur ullamcorper, sapien id dictum varius, eros libero fermentum neque, nec pretium eros est id libero. ...", // New 200-word content
  },
];
