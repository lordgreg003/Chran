export interface News1Item {
  id: string;
  type: "news" | "sponsored" | "news-analysis";
  title: string;
  description: string;
  text?: string;
  author?: string;
  date: string;
  duration?: string;
}

export interface Feature1 {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  categories: string[];
  videoUrl: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}

export interface showMoreinter {
  slug: string;
  type?: string;
  title?: string;
  author?: string;
  date?: string;
  tags?: string;
  imageUrl?: string;
  sponsor?: string;
  duration?: string;
}

// rightdata
// Define the type for the right cards
export interface BlogCard {
  slug: string;
  imageSrc: string;
  imageSrc1?: string;
  imageSrc2?: string;
  imageSrc3?: string;
  imageSrc4?: string;
  videoSrc?: string;
  title: string;
  images: string[];
  articleCount?: string;
  category?: string;
  description?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  description5?: string;
  description6?: string;
  description7?: string;
  description8?: string;
  description9?: string;
  description10?: string;
  description11?: string;
  description12?: string;
  description13?: string;
  description14?: string;
  description15?: string;
  description16?: string;
  description17?: string;
  description18?: string;
  description19?: string;
  description20?: string;
  description21?: string;
  description22?: string;
  description23?: string;
  description24?: string;
  description25?: string;
  description26?: string;
  description27?: string;
  description28?: string;
  description29?: string;
  description30?: string;
  description31?: string;
  description32?: string;
  description33?: string;
  description34?: string;
  description35?: string;
  description36?: string;
  description37?: string;
  description38?: string;
  description39?: string;
  description40?: string;
  description41?: string;
}

// Define the type for the main card
export interface MainCard {
  slug: string;
  videoSrc: string;
  imageSrc: string;
  title: string;
  description?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  description5?: string;
  description6?: string;
  description7?: string;
  description8?: string;
  description9?: string;
  description10?: string;
  description11?: string;
  description12?: string;
  articleCount?: string;
  category?: string;
}

export const featureData1: Feature1 = {
  slug: "2024-BUDGET:-GOV-UMO-ENO-HAS",
  title: "2024 BUDGET: GOV UMO ENO HAS NOT DEVIATED FROM ARISE AGENDA - CHRAN ",
  description:
    "BEING A PRESENTATION BY THE CENTER FOR HUMAN RIGHTS & ACCOUNTABILITY NETWORK (CHRAN)",
  author: "By Chran Admin",
  date: "16 Dec 2024 • 11 mins",
  categories: ["Chran and CISO Chran", "IT Leadership"],
  videoUrl:
    "https://res.cloudinary.com/dg8cmo2gb/video/upload/v1734263503/youtubecharn1_kk3sli.mp4",
  text1:
    "A frontline good governance cum human rights organisation in Nigeria under the auspices of the Center for Human Rights and Accountability Network (CHRAN) stated that the Akwa Ibom State Governor, Pastor Umo Eno, PhD., has not deviated from his vision for the State and its people as encapsulated in his ARISE Agenda. ",
  text2:
    "The Center made the statement through its Director, Otuekong Franklyn Isong, while fielding questions in a live-phone-in Radio programme on Passion 94.5 FM, Uyo, tagged, The Morning Flight with Captain Ikechukwu Juwe, on Wednesday, 11th December, 2024. ",
  text3:
    "The Center appraised the implementation of the 2024 Appropriation Law of Akwa Ibom State and lauded the governor on its implementation. ",
  text4: "#Passion94.5fm",
  text5: "#CHRAN_Advocacy ",
};

export const newsItems1: News1Item[] = [
  {
    id: "By-a-letter-dated-29th-November",
    type: "news",
    title:
      "A frontline good governance cum human rights organisation in Nigeria under the auspices of the Center for Human Rights and Accountability Network (CHRAN) ",
    description:
      "A frontline good governance cum human rights organisation in Nigeria under the auspices of the Center for Human Rights and Accountability Network (CHRAN) stated that the Akwa Ibom State Governor, Pastor Umo Eno, PhD., has not deviated from his vision for the State and its people as encapsulated in his ARISE Agenda",
    text: "",
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
    text: "",
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
    text: "",
    author: "By Cynthia Brumfield",
    date: "11 Dec 2024 • 12 mins",
  },
];

export const showMore: showMoreinter[] = [
  {
    slug: "group-seeks-govt-intervention-to-reverse-poor-underfunding-facilities-in-aibom-judiciary",
    type: "Blog",
    title:
      "Group Seeks Govt Intervention To Reverse Poor Underfunding, Facilities In A’Ibom Judiciary",
    author: "Otuekong Franklyn Isong",
    date: "16 Dec 2024 ",
    duration: "5 mins",
    tags: "CHRAN",
    imageUrl:
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1736089135/Akwa-Ibom-State-Governor-Umo-Eno_azdchi.jpg",
    sponsor: "Sponsored",
  },
  {
    slug: "rights-group-wants-gov-eno-to-revisit-abandoned-ibom-science-park-project",
    type: "Blog",
    title:
      "Rights Group Wants Gov Eno To Revisit Abandoned Ibom Science Park Project",
    author: "Otuekong Franklyn Isong",
    date: "07 Aug 2024 ",
    duration: "17 mins",
    tags: "CHRAN",
    imageUrl:
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1736089299/images-2024-12-19t2129153403168636743343004_etwhpi.jpg",
    sponsor: "",
  },
  {
    slug: "democracy-day-review-nigerias-constitution-long-overdue-rights-group",
    type: "Blog",
    title:
      "Democracy Day: Review of Nigeria’s constitution long overdue – Rights group",
    author: "Otuekong Franklyn Isong",
    date: "14 Nov 2024 ",
    duration: "15 mins",
    tags: "CHRAN_Advocacy,  Governance, CHRAN",
    imageUrl:
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1736089430/IMG-20240612-WA0015_bxuxhy.webp",
    sponsor: "",
  },
];

// rights data
export const rightCardsData: BlogCard[] = [
  {
    slug: "to-mark-the-end-year-activities",
    imageSrc:
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734972902/chran6_i6xydz.jpg",
    title:
      "GOV UMO ENO: CSO PRESENTS 18-MONTHS SCORECARD, RATES PERFORMANCE HIGH",
    articleCount: "10 articles",
    description:
      "THANK YOU MEDIA PARLEY ORGANISED TO MARK THE END OF YEAR ACTIVITIES OF THE CENTER FOR HUMAN RIGHTS AND ACCOUNTABILITY NETWORK (CHRAN) HELD AT CHRAN’S CONFERENCE HALL, 15 AKPA UBEH STREET, UYO, AKWA IBOM STATE ON MONDAY, 23RD DECEMBER, 2024.  ",
    description1: "Gentlemen of the Press.",
    description2:
      "You will recall that the Center for Human Rights and Accountability Network (CHRAN) participated in the Akwa Ibom State Government Ministerial Briefings/End of Year Review at the Banquet Hall, Government House, Uyo on Monday, 16th December, 2024. Prior to the event, the CHRAN had conducted an independent assessment of Pastor Umo Eno’s 18-months administration in Akwa Ibom State",
    description3:
      "BACKGROUND:The Ministerial Briefings/End of Year Review was declared open by the Governor of Akwa Ibom State, Pastor Umo Eno, PhD. The Secretary to the Government of Akwa Ibom State, Prince Enobong Uwah, gave the welcome remarks. Prof. Ubong Umoh delivered a teaser on Communicating Development Narratives in Challenging Economy: The Tension Between Change and Continuity. There were Briefings by the Commissioners/Heads of the respective Ministries, Departments and Agencies. ",
    description4:
      "During the interactive session, the CHRAN through its Director, Otuekong Franklyn Isong, who represented the Center at the event, presented a multifaceted assessment of the scorecard of the administration of Pastor Umo Eno, PhD. The following is CHRAN's assessment/review.",
    description5:
      "(1). MINISTRY OF LOCAL GOVERNMENT & CHIEFTAINCY AFFAIRS:The CHRAN noted with commendation the peaceful resolution of the impasse sequel to the amendment to the Traditional Rulers Law, Cap. 155, Laws of Akwa Ibom State, 2022. The Center lauded the harmonious relationship among the traditional rulers in the State under the administration of Pastor Umo Eno, PhD. The Center is pleased with the handling of the affairs and welfare of traditional rulers in the State by the Ministry of Local Government and Chieftaincy Affairs. The Center urged that the tempo be sustained.",
    description6:
      "(2). MINISTRY OF WORKS & FIRE SERVICE:2.1. Lighting of Udo Udoma Avenue, which houses the Christmas Village, Tropicana Shopping Mall, Banks and other Businesses. The CHRAN noted the swift response of the administration, which has led to the lighting of the very important business district along Udo Udoma Avenue, Uyo and urged that it be extended to other major streets in the State Capital and across the State",
    description7:
      "   2.2. Uyo Village Road Project:The CHRAN lauded the Governor of Akwa Ibom State for the award of contract for the dualisation of Uyo Village Road, which has been in a deplorable condition, among other ongoing road construction projects across the State. The CHRAN observed that work has started on the projects by the contractors",
    description8:
      "   2.3. Potholes:The CHRAN commended the ongoing Operation Zero Pothole exercise being carried out to remedy failed portions of roads across the State by the Ministry of Works and Fire Service. The CHRAN drew the attention of the Ministry to Ikpa Road by University of Uyo, Udoette Road, Itu Road, Nelson Mandela Road and its environ. The CHRAN urged the Ministry to blend the following approaches to major roads in Uyo: Mbak Atai Road by Ifa Atai big junction along the Udom Emmanuel Boulevard, Uyo; Chief Edem Ebong Street by Ibiaku Ishiet U-Turn (leading to Pan African Comprehensive High School and Senator Bassey Albert Recreational Center) along the Udom Emmanuel Boulevard, Uyo; Akpa Ubeh Street by Sampson Udo Idiong Ring Road II Dual CarriageWay, Uyo; and approaches along Ring Road III (Nwaniba - Mbiabong - Aka Nung Udoe roundabout) and other newly constructed roads across the State, particularly the Ikot Oku Ikono-Ekom Iman- Etinan Road. The Center urged that the Ikot Oku Ikono-Ekom Iman- Etinan Road be completed and streetlights installed",
    description9:
      "   2.4. Closure of Calabar-Itu Highway:The Center observed that the long closure of Calabar-Itu Highway by Itam flyover due to the ongoing Tabernacle Road construction and flood control project has posed serious economic challenges to residents and motorists, plying that axis of the road. The Center called for expeditious attention by the contractors and the supervising Ministry.",
    description10:
      " 2.5. Atiku Abubakar Flood Control Tunnel: The Center noted with commendation the completion of the Flood Control Tunnel/reconstruction of the Atiku Abubakar Avenue, Uyo and the construction of Afaha Ubeh Street to Ikot Ekpene Road.",
    description11:
      " 2.6. The CHRAN lauded the administration on the completion of the following roads: Ekparakwa/Ntak Ibesit Road in Oruk Anam Local Government Area; Ikot Eyo/Edem Idim Okpot/Mbiekene/Nnung Obong/Ikot Ntung/East West Road in Nsit Ubuim; Ikot Obio Offong/Enen Nsit Road; Mkpat Enin/Ikot Ubo/Ikot Ntot Road; Urueffong/Utuku/ Ibotong Road in Urueffong Oruko Local Government Area; Spring Road in Ikot Ekpene, and Ndiya Street at the Akpan Andem Market. The Center commended the administration on the ongoing construction of the 8km Ikot Ekan/Ikot Akpanya/Ikot Ebo Ikono Road in Etinan and Uyo local government areas.",
    description12:
      "3. MINISTRY OF EDUCATION: 3.1. The Center noted the increase in bursary from N10,000 to N20,000 for undergraduates studying general courses and N10,000 to N30,000 for those studying professional courses, such as Law, medicine, engineering, agriculture etc. The CHRAN also noted the payment of N250,000 per undergraduate student living with disabilities and N300,000 per postgraduate student living with disabilities studying professional courses. The Center noted that the amount is drawn from the N100,000,000 Educational Grant instituted for students living with disabilities by the administration. The Center lauded the recently-approved N1,100,000,000 one–time wardrobe allowance for teachers by the administration.",
    description13:
      "   3.2. The CHRAN drew the attention of the State administration to the poor state of infrastructure at the Divisional Library, Udotung Ubo Street, Uyo due to abandonment by successive administrations in the State. The Center recalled that the Divisional Library at Udotung Ubo Street, which now harbours the Akwa Ibom State Library Board, Uyo, was built and stocked about half a century ago by the then military administration in the defunct South Eastern State.",
    description14:
      "   3.3 Findings by CHRAN indicate that the Ibom E-Library at Babangida Avenue, Uyo is no longer functioning as a library. The Center urged urgent action to revitalise the Ibom E-Library and other public libraries in the State.",
    description15:
      "(4). MINISTRY OF HEALTH:The Center commended the construction of model primary health centres in Ikot Nkwo, Ibesikpo Asutan Local Government Area; Odot, Nsit Atai; Oboyo Ikot Ita, Nsit Ibom. The Center noted the progress of work at the ongoing construction of primary health centres in Urue Offong Oruko, Udung Uko, Ika and Etim Ekpo, and the General Hospital, Ukanafun.",
    description16:
      "5. MINISTRY OF LABOUR AND MANPOWER PLANNING/WORKERS WELFARE: 5.1.  The CHRAN commended the Governor on the approval of N80,000 minimum wage to civil servants in the State Civil Service and the payment of the 13th month salary tagged ENO-MBER to civil servants in the State.",
    description17:
      "   5.2. Gratuity Payment: The CHRAN lauded the Governor on the payment of N37b out of the N85.2b backlog of gratuities owed retired civil servants in the State by previous administrations. ",
    description18:
      "(6). MINISTRY OF FINANCE:The CHRAN noted with satisfaction the tendency to transparency and accountability exhibited in the Ministry of Finance under the administration of Pastor Umo Eno, PhD.",
    description19:
      "(7). HUMANITARIAN AFFAIRS: The CHRAN noted with commendation the completion and handing over of several Arise Compassionate Homes for the homeless across the State. ",
    description20:
      "(8). MINISTRY OF INTERNAL SECURITY AND WATERWAYS:The CHRAN lauded the peace and security currently being enjoyed in Akwa Ibom State under the administration of Pastor Umo Eno, PhD. The Center commended the establishment of the Ministry of Internal Security and Waterways and the Ibom Community Watch to provide intelligence and work with security agencies to tackle crime in the State. The Center noted with commendation the provision of gunboats, patrol vehicles, gadgets and logistics to federal security agencies in Akwa Ibom State by the Umo Eno administration. ",
    description21:
      "(9). MINISTRY OF CULTURE & TOURISM:The CHRAN commended the ongoing construction of Arise Recreational Park at Dominic Utuk Street, Uyo. The Center noted that prior to the ongoing construction, the location of the Arise Recreational Park was gradually becoming a criminal hideout in the State. The Center noted with commendation the progress of work at the Golf Course Section and the Children's Playground Section of the Arise Recreational Park. The Center drew attention to the enormous potential for tourism of the Arise Recreational Park. The Center is satisfied with the handling of the Christmas Village at Udo Udoma Avenue, Uyo. The Center lauded the maintenance of the Ibom Golf Course and called for rehabilitation of structures and facilities at the Ibom Hotel & Golf Resort, Nwaniba, Uruan Local Government Area.",
    description22:
      "(10). MINISTRY OF AGRICULTURE & RURAL DEVELOPMENT:10.1. The CHRAN noted the strides of the administration in the agricultural sector. The Center noted the ongoing construction of the Ibom Model Farm in Nsit Ubuim Local Government Area. The Center observed that the Ibom Model Farm is an improved Songhai Farming Model. The CHRAN noted that when completed, the Ibom Model Farm will reposition the State for agribusiness, tourism, conferences and serve as a training hub for improved farming practices in Nigeria. ",
    description23:
      " 10.2. ANTI-OPEN GRAZING LAW:The CHRAN lauded the enactment of the Akwa Ibom State Anti-Open Grazing Law by the administration of Mr. Udom Emmanuel. The Center noted the partial enforcement of the law in some parts of the State. The Center urges the Ministry of Agriculture and Rural Development, and the Ministry of Internal Security and Waterways/Ibom Community Watch to fully implement the Law across the State as a step to checking grazing of cattle on farmlands. The Center believes that this will stem clashes between farmers and herders across the State.",
    description24:
      "11. BULK PURCHASE AGENCY:The Center noted the establishment of the Bulk Purchase Agency by the Umo Eno-led State administration. The Center also noted that the Agency has been going round the 31 Local Government Areas to distribute food items to the poorest of the poor, who are captured in the State Social Register, to cushion the adverse effects of the harsh economy.",
    description25:
      "12. MINISTRY OF ECONOMIC DEVELOPMENT:The Center applauded the Ministry of Economic Development over the handling of the AK-CARES Phase 2 Programme in the State, which discloses a commendable tendency to transparency and accountability. The Center urged that the tempo be maintained throughout the execution of the next phase of the programme. ",
    description26:
      "(13). AKWA IBOM ASSETS MANAGEMENT:The CHRAN noted the establishment of the Akwa Ibom Assets Management and Maintenance Agency, which aims to maintain the State Assets Register to include all public assets of Akwa Ibom State wherever they may be. The Center lauded Governor Umo Eno for taking the bold initiative. ",
    description27:
      "(14). PETROLEUM SECTOR:The Center noted with commendation the inauguration of the Akwa Ibom Petroleum Products Monitoring Committee by the Akwa Ibom State Governor, Pastor Umo Eno, PhD. to check the excesses of petroleum marketers in the State and ensure the availability of petroleum products at reasonable prices. The CHRAN urged the Committee to be up and doing in order to ensure that the effort of the Governor to ensure that Akwa Ibom people are not shortchanged by owners and promoters of petroleum products filling stations in the State is not in vain. ",
    description28:
      "(15). MINISTRY OF SPECIAL DUTIES & IBOM DEEP SEAPORT/AVIATION:The CHRAN commended the achievements recorded in the Aviation Sector of the State. The Center noted the acquisition of new aircrafts by the State-owned Ibom Air and the progress of work at the International Terminal Building, Apron, Taxi-Way and the Maintenance, Repair and Overhaul (MRO) facility at the Victor Attah International Airport. The Center urged that concerted efforts be made to actualise the Ibom Deep Seaport Project in order to open up the economic potentials of the State. ",
    description29:
      "(16). ENVIRONMENTAL PROTECTION AND WASTE MANAGEMENT:The Center noted the recent acquisition of modern equipment for the smooth operation of the Akwa Ibom State Environmental Protection and Waste Management Agency (AKSEPWMA) by the Umo Eno administration. The Center urged the AKSEPWMA to redouble efforts towards ensuring a timely evacuation of waste within and around the Uyo Capital City. The Center noted that the deplorable state of Uyo Village Road is occasioned by the indiscriminate dumping of waste on the road, which is by the dumpsite. ",
    description30:
      "(17). MINISTRY OF INFORMATION & STRATEGIC COMMUNICATION: The CHRAN commended the Ministry of Information and Strategy for the timely release of excerpts of minutes of Executive Council meetings of the Government of Akwa Ibom State. The Center calls for the upgrade of infrastructure and facilities at the Pioneer Newspaper, Information Drive, Uyo and at the Akwa Ibom State Broadcasting Corporation (AKBC) Radio and Television Services), Ntak Inyang, Itu local government area to bring them up to speed with modern broadcasting.",
    description31:
      "(18). MINISTRY OF SCIENCE & TECHNOLOGY:The Center urged the Ministry of Science and Technology to work towards the realisation and actualisation of the Ibom Science Park. The Center noted that the administration of Arc. Victor Attah that conceptualised the project acquired over 27 hectares of land in Itu Local Government Area for the siting of the project. The Center observed that the location has become a security threat to the host communities due to the abandonment of the Ibom Science Park by successive administrations.",
    description32:
      "(19). MINISTRY OF TRANSPORT:The Center observed the indiscriminate parking, loading and offloading of passengers by tricycle and mini-bus drivers within and around the highways at Ikot Oku Ikono/Ekom Iman Flyover, which pose danger to road users and motorists plying that axis of the State. The Center calls for swift action. The Center observed the indiscriminate parking, loading and offloading of passengers by tricycle and mini-bus drivers within and around Ibom Plaza up to Ikot Ekpene Road by University of Uyo Roundabout. The CHRAN calls for action.The Center also observed the indiscriminate parking, loading and offloading of passengers by tricycle and mini-bus drivers within and around the Babangida Avenue Roundabout, near Ibom Hall. The CHRAN calls for action. The Center further observed the abandonment of Model Motor Parks, built by the administration of Arc. Victor Attah, by successive administrations. The Center calls for urgent action.",
    description33:
      "(20). MINISTRY OF POWER AND PETROLEUM RESOURCES:The CHRAN noted the commendable action taken by the administration of Pastor Umo Eno, PhD on Ibom Power Company. The Center lauded the audit of the Ibom Power Company as directed by the Governor. ",
    description34:
      "(21). AKWA IBOM STATE HOUSE OF ASSEMBLY:The CHRAN noted that the Governor of Akwa Ibom State, Pastor Umo Eno, PhD., had inspected structures and facilities at the Akwa Ibom State House of Assembly, Udo Udoma Avenue, Uyo, some months ago with the intention of giving a facelift to the infrastructure and facilities at the Akwa Ibom State House of Assembly, which have been in deteriorating state for quite some time. The Center urged urgent action.",
    description35:
      "(22): AKWA IBOM STATE JUDICIARY:The CHRAN drew the attention of the State administration to the issues of understaffing and poor state of infrastructure and facilities, including toilets, fittings, water, in the Courts spread across the 31 Local Government Areas in Akwa Ibom State. The Center appealed to the State administration to ensure the recruitment of personnel into the State Judiciary and also give a facelift to the Courts spread across the 31 Local Government Areas in Akwa Ibom State. ",
    description36:
      "PERFORMANCE RATING: Premised on the foregoing assessment, the CHRAN rated the Governor of Akwa Ibom State, Pastor Umo Eno, PhD, and his team high in the sectoral review within the past eighteen (18) months.",
    description37:
      "CONCLUSION:The CHRAN, being a foremost pro-democracy-cum-human rights and good governance advocacy organisation in Nigeria committed to holding governments and public officeholders accountable to the people, will continue to engage the Government of Akwa Ibom State and its agencies constructively in the remaining two and a half years of the Pastor Umo Eno-led administration with a view to facilitating the delivery of good governance to the people of Akwa Ibom State.",
    description38: "God bless Akwa Ibom State. ",
    description39: "Signed",
    description40: "Comrade (Barr.) Christopher Ekpo (Secretary)",
    description41: "This Report is dated Monday, 23rd December, 2024.",
    category: "CHRAN",
    images: [
      // Add an array of images
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734972902/chran6_i6xydz.jpg",
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734973071/chran20_caeo6o.jpg",
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734973048/chran18_ppl8tx.jpg",
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734973035/chran17_xsgdks.jpg",
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734973026/chran16_zjohrg.jpg",
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734973014/chran15_gcugfv.jpg",
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734972998/chran14_umjp1d.jpg",
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734972984/chran13_e7bij1.jpg",
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734972973/chran12_vgyfgl.jpg",
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734972964/chran11_gl5qz5.jpg",
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734972956/chran10_azwf90.jpg",
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734972946/chran9_ixdfsv.jpg",
    ],
  },
  {
    slug: "gov-umo-eno-cso-presents-18-months-scorecard-rates-performance-high",
    imageSrc:
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734972902/chran6_i6xydz.jpg",
    title:
      "GOV UMO ENO: CSO PRESENTS 18-MONTHS SCORECARD, RATES PERFORMANCE HIGH",
    articleCount: "8 articles",
    category: "CHRAN",
    description: " - THANKS MEDIA PARTNERS ",
    description1:
      "A foremost good governance-cum-human rights organisation in Nigeria, the Center For Human Rights and Accountability Network (CHRAN) has presented its independent scorecard of the Governor of Akwa Ibom State, Pastor Umo Eno, PhD, in a well-attended Thank You Media Parley organised in its Conference Hall, Uyo, Akwa Ibom State, on Monday, 23rd December, 2024, to mark its End of Year Activities in 2024.",
    description2: " - THANKS MEDIA PARTNERS ",
    images: [],
  },
];
export const rightCardsData1: BlogCard[] = [
  {
    slug: "cso-calls-for-actualization-ibom-science-park",
    imageSrc:
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1735881629/Akwa-Ibom_p9hhcx.webp",
    title: "CSO calls for actualization of Ibom Science Park",
    articleCount: "10 articles",
    description:
      "The Center for Human Rights and Accountability Network, CHRAN, a non-governmental organisation, has raised concern over the abandoned Ibom Science Park in Akwa Ibom, which was conceptualised by the former Governor, Victor Attah.",
    description1:
      "It urged the Ministry of Science and Technology to work towards the realisation and actualisation of the Park.",
    description2:
      "The Akwa Ibom State Director of CHRAN, Otuekong Franklyn Isong who raised the issues while briefing newsmen during a media parley, noted that over 27 hectares of land was acquired in Itu Local Government Area for the siting of the project.",
    description3:
      "He observed that the location has become a security threat to the host communities due to the abandonment by successive administrations.",
    description4:
      "He said, “The Center urged the Ministry of Science and Technology to work towards the realisation and actualisation of the Ibom Science Park.”",
    description5:
      "The centre also frowned at the abandonment of Model Motor Parks, built by the administration of Victor Attah by successive administrations and called on the present government to look into it.",
    description6:
      "He noted that such has led to indiscriminate parking, loading and offloading of passengers by tricycle and mini-bus drivers within and around the highways at Ikot Oku Ikono/Ekom Iman Flyover; around Ibom Plaza up to Ikot Ekpene Road by University of Uyo Roundabout; IBB Roundabout near Ibom Hall which pose danger to road users and motorists plying the axis",
    description7:
      "The Center also lauded the audit of the Ibom Power Company as directed by the Governor, pastor Umo Eno.",
    description8:
      "On anti-open grazing law, the director who lauded the enactment of the State Anti-Open Grazing Law by the administration of Udom Emmanuel, however, lamented that the law is only been partially enforced in some parts of the state.",
    description9:
      "He urged the Ministry of Agriculture and Rural Development, and the Ministry of Internal Security and Waterways to fully implement the Law across the State as a step to checking the grazing of cattle on farmlands and avoidance of clashes.",
    description10:
      "Isong also drew the attention of the state government to the issues of understaffing and poor state of infrastructure and facilities, including toilets, fittings, and water, in the Courts spread across the 31 Local Government Areas in the state and called for recruitment of personnel into the State Judiciary as well as a facelift to the Courts in the state.",
    category: "CHRAN",
    images: [],
  },
  {
    slug: "cso-decries-poor-funding-state-infrastructure-at-akwa-ibom-judiciary",
    imageSrc:
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1735883377/Franklyn-Isong_efluvl.webp",
    title:
      "CSO Decries Poor Funding, State Of Infrastructure At Akwa Ibom Judiciary",
    articleCount: "8 articles",
    category: "CHRAN",
    description:
      "The Centre for Human Rights and Accountability Network (CHRAN) has expressed dismay over poor funding and decaying infrastructure crippling the Akwa Ibom judicial system.",
    description1:
      "CHRAN noted that effective administration of justice could be hampered if urgent measures were not put in place to address the flaws.",
    description2:
      "The CSO called on Governor Umo Emo to urgently intervene by giving a face-lift to courts across the 31 local government areas of the state and as well recruit personnel to strengthen the system in the state.",
    description3:
      "It added that adequate funding was necessary for judicial officers not to bend the course of justice.",
    description4:
      "The group’s Director in the state, Mr Franklyn Isong, who made the call while briefing Journalists during a media parley to mark end of the year activities of the Centre, lamented that facilities in the courts have broken down and become obsolete.”",
    description5:
      "Isong listed faulty toilets, fittings and water system in those facilities as those requiring urgent government intervention.",
    description6:
      "The CHRAN drew the attention of the State administration to the issues of understaffing and poor state of infrastructure and facilities, including toilets, fittings, water, in the Courts spread across the 31 Local Government Areas in Akwa Ibom State.",
    description7:
      "The Centre appealed to the State administration to ensure the recruitment of personnel into the State Judiciary and also give a facelift to the Courts spread across the 31 Local Government Areas in Akwa Ibom State",
    description8:
      "Isong, who was giving sectoral assessment during the media parley also drew the attention of the Governor to the abandoned Divisional Library which he noted was established by the military administration in the defunct South Eastern State.",
    description9:
      "CHRAN drew the attention of the State administration to the poor state of infrastructure at the Divisional Library, Udotung Ubo Street, Uyo due to abandonment by successive administrations in the State.",
    description10:
      "The Centre recalled that the Divisional Library at Udotung Ubo Street, which now harbours the Akwa Ibom State Library Board, Uyo, was built and stocked about half a century ago by the then military administration in the defunct South Eastern State,” he said.",
    description11:
      "He further expressed concern on the closure of Calabar-Itu Highway due to the ongoing construction of Tabernacle Road and flood control project in the state, lamenting that the closure has brought serious economic challenges to residents and motorists plying the road.",
    description12:
      "According to him, “The Center called for expeditious attention by the contractors and the supervising Ministry”.",
    description13:
      "Isong also frowned at the dormant state of the multi-billion naira Ibom E-Library, adding that findings by the group had revealed that the place is no longer functioning as a library.",
    description14:
      "“Findings by CHRAN indicate that the Ibom E-Library at Babangida Avenue, Uyo is no longer functioning as a library. The Centre urged urgent action to revitalise the Ibom E-Library and other public libraries in the State” Isong stated",
    description15:
      "On Anti-open Grazing Law in the state, the director who lauded the enactment of the law by the immediate-past administration of Mr. Udom Emmanuel, however, lamented that the law is only been partially enforced in some parts of the state.",
    description16:
      "He urged the Ministry of Agriculture and Rural Development, and the Ministry of Internal Security and Waterways to fully implement the law as a step to checking grazing of cattle on farmlands.",
    images: [],
  },
];

// Main card data
export const mainCardData: MainCard = {
  slug: "gov-umo-eno-has-done-well",
  videoSrc:
    "https://res.cloudinary.com/dg8cmo2gb/video/upload/v1734685554/thatvideo_jbpduz.mp4",
  imageSrc: "",
  title: "18 MONTHS: GOV UMO ENO HAS DONE WELL - CHRAN ",
  description:
    "The Center for Human Rights and Accountability Network (CHRAN) has, on Tuesday, 17th December 2024, assessed the performance of Akwa Ibom State Governor, Pastor Umo Eno, PhD, saying the Governor has done well in his 18 months in office. ",
  description1:
    "This assertion was done by the Center's Director, Otuekong Franklyn Isong, while presenting the CHRAN's scorecard of the governor in a television programme on ADBN TV, in Uyo,",
  description2: "#ADBNTV",
  description3: "#CHRAN_ADVOCACY ",
  articleCount: "3 articles",
  category: "CHRAN",
};

export const mainCardData7: MainCard = {
  slug: "coalition-civil-society-organizations-in-niger-delta-region-led-by-comrade-charles-inko-tariah-otuekong-franklyn-isong-pays-an-advocacy-visit-to-the-mdceo-nddc",
  videoSrc:
    "https://res.cloudinary.com/dg8cmo2gb/video/upload/v1739450766/NDDC_Dismisses_Claims_Of_Irregularity_In_Internship_Scheme_fmu64x.mp4",
  imageSrc:
    "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1739467414/Screenshot_from_2025-02-13_18-22-46_vuy05l.png",
  title:
    " Coalition of Civil Society Organizations in Niger Delta Region Led by Comrade Charles Inko-Tariah and Otuekong Franklyn Isong Pays an Advocacy Visit to the MD/CEO of NDDC",
  description:
    "Coalition of Civil Society Organizations in Niger Delta Region Led by Comrade Charles Inko-Tariah and Otuekong Franklyn Isong Pays an Advocacy Visit to the MD/CEO of NDDC, Dr. Samuel Ogbuku and his Management Team on Tuesday, 11th February, 2025, at the NDDC Headquarters in Port Harcourt, Rivers State.",
  description1: "",
  description2: "#CHRAN",
  description3: "#CHRAN_ADVOCACY ",
  articleCount: "3 articles",
  category: "CHRAN",
};

export const mainCardData8: MainCard = {
  slug: "why-we-score-ogbuku-led-nddc-high-csos-in-niger-delta-region-speak",
  videoSrc:
    "https://res.cloudinary.com/dg8cmo2gb/video/upload/v1739469000/videoplaybacknews_twggba.mp4",
  imageSrc:
    "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1739467414/Screenshot_from_2025-02-13_18-22-46_vuy05l.png",
  title: "WHY WE SCORE OGBUKU-LED NDDC HIGH - CSOs IN NIGER DELTA REGION SPEAK",
  description: "",
  description1: "#ADBNtv",
  description2: "#CHRAN",
  description3: "#GoodGovernanceAdvocacy",
  articleCount: "1 articles",
  category: "CHRAN",
};

export const rightCardsData2: BlogCard[] = [
  {
    slug: "rights-group-wants-gov-eno-to-revisit-abandoned-ibom-science-park-project",
    imageSrc:
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1736089299/images-2024-12-19t2129153403168636743343004_etwhpi.jpg",
    title:
      "Rights Group Wants Gov Eno To Revisit Abandoned Ibom Science Park Project",
    articleCount: "10 articles",
    description:
      "The Center for Human Rights and Accountability Network (CHRAN) has decried the lofty vision of Ibom Science Park Project in Akwa Ibom State that has been allowed to waste away by successive administrations.",
    description1:
      "CHRAN, a foremost pro-democracy-cum-human rights and good governance advocacy organisation in Nigeria noted with sadness that Ibom Science Park project which was conceived by the former governor of the state,  Arc Victor Attah with over 27 hectares of land acquired for project, has now become a haven for criminals to hide and hatch their plans. ",
    description2:
      "It would be recalled that Ibom Science Park Project which was later abandoned by successive administration in the state after the exit of Gov Attah’s administration in 2008, was hoped to be a one-stop employment and wealth generations venture for the teaming youth, besides being economic booster for the state. ",
    description3:
      "Arising from its press statement signed by CHRAN Secretary, Comrade Christopher Ekpo and made available to New Nigerian in Uyo on Wednesday, the rights group appealed to Governor Umo Eno through the Ministry of Science and Technology to work towards the realisation and actualisation of the project ",
    description4:
      "“The Center urged the Ministry of Science and Technology to work towards the realisation and actualisation of the Ibom Science Park. The Center noted that the administration of Arc. Victor Attah that conceptualised the project acquired over 27 hectares of land in Itu Local Government Area for the siting of the project. The Center observed that the location has become a security threat to the host communities due to the abandonment of the Ibom Science Park by successive administrations.” The release stated.",
    description5:
      "CHRAN also urged the State’s Petroleum Products Monitoring Committee to be up and doing in order to ensure that the effort of the Governor Umo Eno to ensure that Akwa Ibom people are not shortchanged by owners and promoters of petroleum products filling stations in the State was not in vain",
    description6:
      "It lauded the state government for inaugurating the committee to check the excesses of petroleum marketers in the State and ensure the availability of petroleum products at reasonable prices. ",
    description7:
      "Taking appraisal of works done smtge state government in the last few years in the state, “CHRAN lauded the administration on the completion of the following roads: Ekparakwa/Ntak Ibesit Road in Oruk Anam Local Government Area; Ikot Eyo/Edem Idim Okpot/Mbiekene/Nnung Obong/Ikot Ntung/East West Road in Nsit Ubuim.",
    description8:
      "“Ikot Obio Offong/Enen Nsit Road; Mkpat Enin/Ikot Ubo/Ikot Ntot Road; Urueffong/Utuku/ Ibotong Road in Urueffong Oruko Local Government Area; Spring Road in Ikot Ekpene, and Ndiya Street at the Akpan Andem Market. The Center commended the administration on the ongoing construction of the 8km Ikot Ekan/Ikot Akpanya/Ikot Ebo Ikono Road in Etinan and Uyo local government. ",
    description9:
      "The CHRAN, being a foremost pro-democracy-cum-human rights and good governance advocacy organisation in Nigeria committed to holding governments and public office holders accountable to the people stated its commitment to continue to engage the Government of Akwa Ibom State and its agencies constructively in the remaining two and a half years of the Pastor Umo Eno-led administration with a view to facilitating the delivery of good governance to the people of Akwa Ibom State.” The release added.",
    description10: "",
    category: "CHRAN",
    images: [],
  },
  {
    slug: "democracy-day-review-nigerias-constitution-long-overdue-rights-group",
    imageSrc:
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1736089430/IMG-20240612-WA0015_bxuxhy.webp",
    title:
      "A human rights organisation, Center for Human Rights and Accountability Network (CHRAN), said the review or overhaul of the 1999 constitution to accommodate the current realities in Nigeria is long overdue.",
    articleCount: "8 articles",
    category: "CHRAN",
    description:
      "The Director of CHRAN, Otuekong Franklyn Isong, speaking in Uyo on Wednesday during a symposium to mark the 2024 Democracy Day in Nigeria with the theme “Civil Society as the Pivot of Good Governance in a Democratic Setting,” stated that the current Nigerian democracy “is founded on a constitution that the General Abdulsalami Abubakar-led military junta hurriedly packaged and imposed on Nigerians using Decree No. 24 of 1999.",
    description1:
      "He observed that the constitution, which is now twenty-five years in existence, has not effectively addressed Nigeria’s multifarious problems and challenges, saying, “There is no doubt that the extant constitution requires a fundamental review, if not a complete overhaul.”",
    description2:
      "Enumerating the lapses of the 1999 constitution, the director noted, “Section 2(2) of the Constitution of the Federal Republic of Nigeria, 1999 (as amended), states that Nigeria shall be a federation consisting of states and a Federal Capital Territory. It excludes the local government areas as part of the federation, thus impeding grassroots development in Nigeria.",
    description3:
      "“In Section 7(1) of the Nigerian Constitution, the system of local government by democratically elected local government councils is guaranteed. But the funding of the local government areas is tied to the apron strings and control of the state governments in Section 162(6) of the Constitution, which states that each state shall maintain a special account to be called ‘State Joint Local Government Account’ into which shall be paid all allocations to the local government councils of the state from the Federation Account and from the government of the state.",
    description4:
      "“Again, the State Independent Electoral Commissions (SIECs) are provided for in Section 197(1)(b) of the Constitution while their funding is in the hands of state governments, making the SIECs an appendage of the state governors.”",
    description5:
      "He, however, commended Governor Umo Eno for allowing the funds of the local government councils to get to them, saying, “This information was verified during the just concluded tour of the 31 local government councils by the Akwa Ibom State House of Assembly Committee on Local Government and Chieftaincy Affairs, with the CHRAN as a part of the team.”",
    description6:
      "Isong also noted that for the 25 years of uninterrupted democracy in Nigeria, the country is still searching for capable leaders and true democrats at the helm of affairs, stressing, “leaders who would enact the aspirations of the presumed winner of the June 12, 1993 Presidential Election, Chief Moshood Abiola.”",
    description7:
      "While wishing President Bola Tinubu success in his administration, the director urged him, as one of the frontline June 12 activists, to implement the ethos of democracy and make his government people-centric.",
    description8:
      "He urged him to revisit the policy on the fuel subsidy and reverse it in line with the popular opinion of Nigerians, as the policy has failed to achieve its desired intention.",
    description9:
      "“I believe that Mr. President has good intentions for this country. He has demonstrated the capacity to provide good governance to Nigerians. I wish he listened to the plea of Nigerians by reversing the fuel subsidy removal. The strength of character of a good leader is when the leader listens to his followers and makes amends. Surely, Nigeria shall be great again!” he stated.",
    description10: "",
    images: [],
  },
];

export const mainCardData1: MainCard = {
  slug: "gov-umo-eno-cso-presents-18-months-scorecard-rates-performance-high",
  videoSrc:
    "https://res.cloudinary.com/dg8cmo2gb/video/upload/v1735884422/compressed_video2_otvu5o.mp4",
  imageSrc: "",
  title:
    "GOV UMO ENO: CSO PRESENTS 18-MONTHS SCORECARD, RATES PERFORMANCE HIGH",
  description: "- THANKS MEDIA PARTNERS",
  description1:
    "A foremost good governance-cum-human rights organisation in Nigeria, the Center For Human Rights and Accountability Network (CHRAN) has presented its independent scorecard of the Governor of Akwa Ibom State, Pastor Umo Eno, PhD, in a well-attended Thank You Media Parley organised in its Conference Hall, Uyo, Akwa Ibom State, on Monday, 23rd December, 2024, to mark its End of Year Activities in 2024.",
  description2: "#ADBNTV",
  description3: "#CHRAN_ADVOCACY ",
  articleCount: "3 articles",
  category: "CHRAN",
};

export const mainCardData2: MainCard = {
  slug: "group-seeks-govt-intervention-to-reverse-poor-underfunding-facilities-in-aibom-judiciaryv-umo-eno-cso-presents-18-months-scorecard-rates-performance-high",
  videoSrc: "",
  imageSrc:
    "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1736089135/Akwa-Ibom-State-Governor-Umo-Eno_azdchi.jpg",
  title:
    "Group Seeks Govt Intervention To Reverse Poor Underfunding, Facilities In A’Ibom Judiciary",
  description:
    "A non-governmental organisation commited to good governance, Center for Human Rights and Accountability Network, has raised concern over the underfunding and poor state of infrastructure in the state judicial system.",
  description1:
    "A foremost good governance-cum-human rights organisation in Nigeria, the Center For Human Rights and Accountability Network (CHRAN) has presented its independent scorecard of the Governor of Akwa Ibom State, Pastor Umo Eno, PhD, in a well-attended Thank You Media Parley organised in its Conference Hall, Uyo, Akwa Ibom State, on Monday, 23rd December, 2024, to mark its End of Year Activities in 2024.",
  description2:
    "This is as it called on the governor of Akwa Ibom State, Umo Eno, to urgently intervene by undertaking holistic renovation of the courts spread across the 31 local government areas of the state and recruit personnel to strengthen the system.",
  description3:
    "He said “The CHRAN drew the attention of the state administration to the issues of understaffing and poor state of infrastructure and facilities, including toilets, fittings, water, in the courts spread across the 31 local government areas in Akwa Ibom State.",
  description4:
    "“The Center appealed to the state government to ensure the recruitment of personnel into the state judiciary and also give a facelift to the courts spread across the 31 local government areas in Akwa Ibom State.”",
  description5:
    "The state director, who was giving sectoral assessment during the media parley also drew the attention of the governor to the abandoned divisional library located at Udotung Ubo Street, which he noted was established by the military administration in the defunct South Eastern State",
  description6:
    "“The Center recalled that the Divisional Library at Udotung Ubo Street, which now harbours the Akwa Ibom State Library Board, Uyo, was built and stocked about half a century ago by the then military administration in the defunct South Eastern State.”",
  description7:
    "He further expressed concern on the closure of Calabar-Itu Highway due to the ongoing construction of Tabernacle Road and flood control project in the state, lamenting that the closure has brought serious economic challenges to residents and motorists plying the road",
  description8:
    "He enthused, “The Center observed that the long closure of Calabar-Itu Highway by Itam flyover due to the ongoing Tabernacle Road construction and flood control project has posed serious economic challenges to residents and motorists, plying that axis of the road. The Center called for expeditious attention by the contractors and the supervising ministry.”",
  description9:
    "He also frowned at the dormant state of the multi-billion naira Ibom e-Library, adding that findings by the group had revealed that the place is no longer functioning as a library",
  description10:
    "The Center urged urgent action to revitalise the Ibom e-Library and other public libraries in the state.",
  description11:
    "On anti-open grazing law, the director who lauded the  enactment of the state Anti-Open Grazing Law by the administration of Mr. Udom Emmanuel,  however, lamented that the law is only been partially enforced in some parts of the state.",
  description12:
    "He urged the Ministry of Agriculture and Rural Development, and the Ministry of Internal Security and Waterways to fully implement the law across the state as a step to checking grazing of cattle on farmlands.”",
  articleCount: "3 articles",
  category: "CHRAN",
};
