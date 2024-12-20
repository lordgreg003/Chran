export type FeatureData = {
  id: string;
  imageUrl?: string;
  category: string;
  title: string;
  description?: string;
  author?: string;
  date?: string;
  content?: string;
  content1?: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  content6?: string;
  content7?: string;
  content8?: string;
  content9?: string;
  content10?: string;
  content11?: string;
  content12?: string;
  content13?: string;
  content14?: string;
};

export type NewsData = {
  id: string;
  type?: string;
  title?: string;
  description?: string;
  author?: string;
  date?: string;
  categories: string[];
  Text?: string;
  Text1?: string;
  Text2?: string;
  Text3?: string;
  Text4?: string;
  Text5?: string;
  Text6?: string;
  Observation?: string;
  Observation1?: string;
  Observation2?: string;
  Text7?: string;
  Text8?: string;
  Text9?: string;
  Text10?: string;
  Text11?: string;
  Text12?: string;
  Text13?: string;
  Text14?: string;
  Text15?: string;
  Text16?: string;
  Text17?: string;
  Text18?: string;
  Text19?: string;
  Text20?: string;
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
      "A human rights organisation in Nigeria, Center for Human Rights and Accountability Network (CHRAN), has decried the upsurge in insecurity in Akwa Ibom State",
    description:
      "A human rights organisation in Nigeria, Center for Human Rights and Accountability Network (CHRAN), has decried the upsurge in insecurity in Akwa Ibom State and called on the Nigeria Police Force and other security agencies to rise to the occasion and stem the tide",
    author: "By Otuekong Franklyn Isong	(Director)",
    date: "9 Dec 2024",
    content:
      "A human rights organisation in Nigeria, Center for Human Rights and Accountability Network (CHRAN), has decried the upsurge in insecurity in Akwa Ibom State and called on the Nigeria Police Force and other security agencies to rise to the occasion and stem the tide",
    content1:
      "This was contained in a presentation made by the Director of the Center, Otuekong Franklyn Isong, during a Critical Stakeholders Meeting with the Deputy Inspector-General of Police,  South South, DIG Daniel Sokari-Pedro, at the Conference Hall, Akwa Ibom State Police Headquarters, Ikot Akpan Abia, on Monday, 27th May, 2024.",
    content2:
      "The CHRAN commended the State Governor, Pastor Umo Eno, on efforts in tackling crime across the State since his assumption of office, elaborating that the Governor has provided patrol vehicles, gunboats and security gadgets to the security agencies in the State to boost crime fighting in Akwa Ibom. ",
    content3:
      "The CHRAN noted that the Governor has established the Ministry of Internal Security and Waterways as well as Ibom Community Watch (ICW) and appointed a Commissioner to oversee the activities of the ministry and the ICW and expressed worry over the upsurge of crime in the State.",
    content4:
      "The CHRAN lauded the Akwa Ibom State Commissioner of Police, CP Waheed Ayilara, and officers and men of the Nigeria Police Force and other security agencies in the State for their efforts in tackling crimes across the State.",
    content5:
      "The Center noted that on assumption of duty, CP Ayilara toured the 31 local government areas and held interactions with the Chairmen of the Local Government Transition Committees and the Divisional Police Officers (DPOs) to ascertain their security challenges with a view to designing strategies to combat them.",
    content6:
      "The rights group urged the security agencies in the State to redouble efforts and rely more on intelligence gathering and community policing in order to nip the menace of rising insecurity in the bud",
    content7:
      "The CHRAN advocated for improved welfare for officers and men of the Nigeria Police Force and called for improved insurance scheme for the Nigeria Police Force.",
    content8:
      "The CHRAN also made a case for improved welfare for retired police personnel. ",
    content9:
      "The Center called for regular training and retraining of officers and men of the Nigeria Police Force, urging Government at all levels to provide sufficient modern equipment to the officers and men of the Nigeria Police Force and other security agencies so as to boost crime fighting and enhance security in Akwa Ibom State",
    content10:
      "Other stakeholders who shared their thoughts at the meeting included the Assistant Inspector-General of Police Zone 6, AIG Jonathan Towuru; Deputy Inspector-General of Police (rtd) Yemi Ogunjemilusi; the Chaiman of Nigeria Union of Journalists (NUJ), Akwa Ibom State Council, Comrade Amos Etuk; the Chairman of the Nigerian Medical Association (NMA), Akwa Ibom State Branch, Professor Emem Abraham; leaders of the Police Community Relations Committee (PCRC); Coordinator of the National Human Rights Commission in Akwa Ibom State, an aide to the Akwa Ibom State Governor on Youths, among others",
    content11:
      "The Stakeholders Meeting was hosted by the Commissioner of Police, Akwa Ibom State Command, CP Waheed Ayilara, who was also in attendance. ",
    content12: "Signed Otuekong Franklyn Isong (Director)",
    content13: "Comrade (Barr.) Christopher Ekpo (Secretary)",
    content14: "Dated: Tuesday, 28 May, 2024.",
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
    "Presentation by the Center for Human Rights & Accountability Network (CHRAN) at the Akwa Ibom State House of Assembly Public Hearing on the 2025 Budget of Akwa Ibom State on Monday, 9th December, 2024.",
  description:
    "Presentation by the Center for Human Rights & Accountability Network (CHRAN) at the Akwa Ibom State House of Assembly Public Hearing on the 2025 Budget of Akwa Ibom State on Monday, 9th December, 2024.",
  author: "By Otuekong Franklyn Isong	(Director)",
  date: "16 Dec 2024 ",
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
    id: "This-presentation-represents-the",
    type: "News",
    title:
      "BEING A PRESENTATION BY THE CENTER FOR HUMAN RIGHTS & ACCOUNTABILITY NETWORK (CHRAN) AT THE PUBLIC HEARING ON THE 2025 APPROPRIATION BILL HELD AT THE AKWA IBOM STATE HOUSE OF ASSEMBLY ON MONDAY, 9th DECEMBER, 2024 AT THE OLD CHAPEL, HOUSE OF ASSEMBLY, UYO",
    description:
      "This presentation represents the position of our Center on the 2025 Appropriation Bill.",
    author: "Evan Schuman",
    date: "16 Dec 2024 • 5 mins",
    categories: [
      "Otuekong Franklyn Isong	(Director)",
      "Comrade (Barr.)",
      "Christopher Ekpo (Secretary)",
    ],
    Text1:
      "Introduction : By a letter dated 29th November, 2024 with reference number AKHA/S/61/Vol. IX/315 signed by Unyime Ekpenyong (Mrs.) for Chairman, House Committee on Appropriation and Finance, the CHRAN was invited to attend a Public Hearing on the 2025 Appropriation Bill at the Old Chapel, House of Assembly, Uyo. Annexed to the letter is a Bill for a Law to appropriate monies out of the Consolidated Revenue Fund and Capital Development Fund to the service of the Government of Akwa Ibom State, and for other matters connected  therewith. Annexed to the Appropriation Bill is the proposed 2025 Budget in two (2) Schedules. Schedule 1 is the Recurrent Expenditure while Schedule 2 is the Capital Expenditure.",
    Text2:
      "On receipt of the invitation letter, the Center took time to study the 2025 Appropriation Bill, bearing in mind the policy thrust and objectives of the Budget, and reviewed the implementation of the 2024 Appropriation Law.",
    Text3:
      "This presentation represents the position of our Center on the 2025 Appropriation Bill.",
    Text4:
      "In summary, the 2025 Appropriation Bill has 114 Items in Schedule 1 – representing the Recurrent Expenditure, and 116 Items in Schedule 2 – representing the Capital Expenditure. The CHRAN is encouraged by the Budget implementation strategies laid down for the realisation of the objectives of the 2025 Budget, which is anchored on the five-pronged ARISE Agenda of the current State administration.",
    Text5:
      "CHRAN’s inputs: 1.	The Center commends the drafters of the 2025 Budget Estimates christened “BUDGET OF CONSOLIDATION AND EXPANSION”, for producing a compact Appropriation Bill, which is a clear departure from Appropriation Bills of the immediate past years, where, for instance, Comprehensive Health Centres, Cottage Hospitals, and Dental Health Centres had identical allocations of N6,000,000.00 and General Hospitals also had identical allocations of N7,200,000.00. CHRAN had last year, in this forum, observed that that awkward practice occurred in some previous years’ Appropriation Laws of the State. The Center had sought to know if there were no promotion of staff, transfer of staff or death or retirement of staff of these Health facilities over the years. Of course, those identical allocations created the impression of either budget padding or suggested that the nagging issue of ghost workers existed in the health sector.  ",
    Text6:
      "The Center noted that certain items in Schedule 2 of the Appropriation Bill, 2025, have zero allocation for Capital Expenditure",
    Observation:
      "Items 1, 2, 3, 4, 6, 7, 8, 16, 23, 27, 29, 30, 32, 36, 37, 38, 39, 41, 42, 44, 46, 48, 52, 53, 54, 58, 59, 60, 93, 101, 102, 104, 106, 109, and 111 were observed to have zero capital allocation.",
    Observation1:
      "It appears that the Capital Votes for these MDAs (Ministries, Departments, and Agencies) are included in the Capital Votes of their respective mother Ministries.",
    Observation2:
      "The CHRAN (Center for Human Rights Advocacy Network) suggests that these items should be expunged from Schedule 2 of the Appropriation Bill, 2025.",
    Text7:
      "3.	The CHRAN is worried about the meagre allocation of N61,613,050 as Recurrent Expenditure to Akwa Ibom State Library Board and the zero allocation to the Akwa Ibom State Library Board as Capital Expenditure. Findings by CHRAN indicate, sadly, that the Ibom E-Library at Babangida Avenue, Uyo is no longer functioning as a library. Further findings by CHRAN have established that the decrepit old Divisional Library, Udotung Ubo Street, Uyo, which now harbours the Akwa Ibom State Library Board, needs a comprehensive rehabilitation of structures and facilities to give it a semblance of a modern library. The Center recalls that the old Divisional Library at Udotung Ubo Street, Uyo was built and stocked about half a century ago by the then military administration in the defunct South Eastern State. ",
    Text8:
      "4.	The CHRAN has noted the Capital Expenditure of N7,000,000,000.00 allocated to the Akwa Ibom State House of Assembly in the 2025 Appropriation Bill (Item 20 Schedule 2). The CHRAN is appalled by the poor state of infrastructure and facilities, including toilets, fittings, water, in the Akwa Ibom State House of Assembly, Udo Udoma Avenue, Uyo. The CHRAN notes that the premises of the Akwa Ibom State House of Assembly is unkempt while the walls of the buildings are shorn of paints and other aesthetics. This parlous state of the Akwa Ibom State House of Assembly flies in the face of consistent huge annual Capital Votes appropriated to the Akwa Ibom State House of Assembly. The CHRAN calls on the Akwa Ibom State House of Assembly to as a top priority, consider giving a facelift to its infrastructure and facilities to justify the huge Capital Votes allocated to it in the 2025 Appropriation Bill.",
    Text9:
      "5.	The CHRAN has noted the Capital Expenditure of N2,200,000,000.00 allocated to the Akwa Ibom State Judiciary in the 2025 Appropriation Bill (Item 26 Schedule 2). Though the CHRAN views the amount allocated to the Judiciary as Capital Vote to be grossly inadequate considering the spread of the Judiciary across the 31 Local Government Areas of the State, the CHRAN queries the utilisation of previous allocations of Capital Votes to the Judiciary in the face of the poor state of infrastructure and facilities, including toilets, fittings, power and water supply, in the Courts spread across the 31 Local Government Areas of Akwa Ibom State. The CHRAN is also aware of the nagging issue of gross understaffing in the Akwa Ibom State Judiciary, which should be urgently addressed to ensure smooth administration of justice in the State.",
    Text10:
      "6.	The CHRAN has noted the Capital Expenditure of N7,000,000,000.00 allocated to the Ministry of Humanitarian Affairs in the 2025 Appropriation Bill (Item 77 Schedule 2). The CHRAN applauds the Governor of Akwa Ibom State, Pastor Umo Eno, PhD., for building several Arise Compassionate Homes for the homeless and less-privileged persons across the State and urges that the tempo should be sustained to reach more vulnerable citizens and groups.",
    Text11:
      "7.	The CHRAN has noted the Capital Expenditure of N3,500,000,000.00 allocated to the Ministry of Culture and Tourism in the 2025 Appropriation Bill (Item 70 Schedule 2). The CHRAN lauds the ongoing construction of the Arise Park at the Dominic Utuk Street, Uyo and the handling of the Christmas Village at the Unity Park, Udo Udoma Avenue, Uyo. As the current State administration is working towards diversifying the economy, the proper utilisation of the Capital Votes appropriated to the Ministry of Culture and Tourism will go a long way.",
    Text12:
      "8.	The CHRAN has noted the Capital Expenditure of N225,000,000,000.00 allocated to the Ministry of Works and Fire Service in the 2025 Appropriation Bill (Item 91 Schedule 2). The CHRAN commends the ongoing operation zero potholes across the State and the award of contract for the construction of the Uyo Village Road, among other road construction projects across the State. The CHRAN observes the non-functioning of streetlights at Udo Udoma Avenue and other streets in Uyo metropolis. The Center calls on the Ministry to fix them.",
    Text13:
      "9.	The CHRAN has noted the approval of N80,000.00 minimum wage and the approval for payment of 13th month salary (Eno-mber) to civil servants in the State. The CHRAN notes with commendation that the Governor of Akwa Ibom State, His Excellency, Pastor Umo Eno, PhD., has, so far, paid over N37 billion out of the N85.2 billion backlog of gratuities owed retired civil servants in the state by previous administrations. The Center commends the Governor for his workers-friendly disposition and for showing empathy to the retirees in the state.",
    Text14:
      "10. The CHRAN has noted the Capital Expenditure of N85,000,000,000.00 allocated to the Ministry of Special Duties and Ibom Deep Seaport in the 2025 Appropriation Bill (Item 85 Schedule 2). The CHRAN applauds the progress of work in the ongoing construction of the International Terminal Building, Apron, Taxi-Way and the Maintenance, Repair and Overhaul (MRO) facility at the Victor Attah International Airport. Going by the passion of the Governor of Akwa Ibom State to industrialise the state, the CHRAN is hopeful that concerted efforts will be put into the actualisation of the Ibom Deep Seaport Project in 2025.",
    Text15:
      "In summary: The CHRAN is pleased with the drafters of the 2025 Appropriation Bill and is optimistic that this Appropriation Bill, when passed and signed into Law, will serve as a catalyst for diversification, good governance and development in Akwa Ibom State. The CHRAN urges synergy between the Legislature and the Executive in the implementation of the Appropriation Law 2025 that this Appropriation Bill seeks to enact. ",
    Text16:
      "Conclusion: The Center appreciates the Honourable Speaker, Rt. Hon. Udeme Otong, and Members of the 8th Assembly, particularly, the Chairman and Members of the House Committee on Appropriation and Finance, for the invitation to participate in this Public Hearing. We believe that our inputs will be reflected in the Appropriation Bill that will be passed by the Akwa Ibom State House of Assembly.",
    Text17: "Thank you.",
    Text18: "Signed CHRAN ",
    Text19: "Otuekong Franklyn Isong	(Director) ",
    Text20: "Comrade (Barr.) Christopher Ekpo (Secretary)",
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
    Text: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius. Nulla facilisi. Pellentesque lobortis. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Nulla aliquet. Vivamus euismod mauris. Cras vel lorem. Etiam eu ante. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. ...",
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
    Text: "Sed libero. Curabitur tristique, libero et volutpat pellentesque, felis ipsum faucibus metus, ut hendrerit mi erat eu tortor. Sed tristique suscipit justo, quis venenatis erat iaculis a. Mauris tristique euismod nunc, eget cursus sem. Curabitur ullamcorper, sapien id dictum varius, eros libero fermentum neque, nec pretium eros est id libero. ...",
  },
];
