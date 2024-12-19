export interface News1Item {
  id: string;
  type: "news" | "sponsored" | "news-analysis";
  title: string;
  description: string;
  author?: string;
  date: string;
  duration?: string; // for sponsored or news content
}

export interface Feature1 {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  categories: string[];
  videoUrl: string; // URL for video
}

export const featureData1: Feature1 = {
  id: "2024-BUDGET:-GOV-UMO-ENO-HAS",
  title: "2024 BUDGET: GOV UMO ENO HAS NOT DEVIATED FROM ARISE AGENDA - CHRAN ",
  description:
    "BEING A PRESENTATION BY THE CENTER FOR HUMAN RIGHTS & ACCOUNTABILITY NETWORK (CHRAN)",
  author: "By Chran Admin",
  date: "16 Dec 2024 • 11 mins",
  categories: ["Chran and CISO Chran", "IT Leadership"],
  videoUrl:
    "https://res.cloudinary.com/dg8cmo2gb/video/upload/v1734263503/youtubecharn1_kk3sli.mp4",
};

export const newsItems1: News1Item[] = [
  {
    id: "By-a-letter-dated-29th-November",
    type: "news",
    title:
      "A frontline good governance cum human rights organisation in Nigeria under the auspices of the Center for Human Rights and Accountability Network (CHRAN) ",
    description:
      "A frontline good governance cum human rights organisation in Nigeria under the auspices of the Center for Human Rights and Accountability Network (CHRAN) stated that the Akwa Ibom State Governor, Pastor Umo Eno, PhD., has not deviated from his vision for the State and its people as encapsulated in his ARISE Agenda",
    author: "By John Leyden",
    date: "12 Dec 2024 • 3 mins",
  },
  {
    id: "To-make-the-most-of-Cisco-HyperShield",
    type: "sponsored",
    title:
      "The Center made the statement through its Director, Otuekong Franklyn Isong, while fielding questions in a live-phone-in ",
    description:
      "The Center made the statement through its Director, Otuekong Franklyn Isong, while fielding questions in a live-phone-in Radio programme on Passion 94.5 FM, Uyo, tagged, The Morning Flight with Captain Ikechukwu Juwe, on Wednesday, 11th December, 2024. ",
    author: "Cyber NewsWire",
    date: "",
  },
  {
    id: "Salt-Typhoon-poses-a-serious",
    type: "news-analysis",
    title:
      "The Center appraised the implementation of the 2024 Appropriation Law of Akwa Ibom State ",
    description:
      "The Center appraised the implementation of the 2024 Appropriation Law of Akwa Ibom State and lauded the governor on its implementation",
    author: "By Cynthia Brumfield",
    date: "11 Dec 2024 • 12 mins",
  },
];
