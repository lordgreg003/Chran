// Define the Event interface
interface Event {
  slug: string;
  date: string;
  imageSrc: string;
  altText: string;
  eventType: string;
  title: string;
  description?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  details: string;
  category?: string;
}

// Event Data
export const events: Event[] = [
  {
    slug: "MARK-ITS-END-OF-THE-YEAR-ACTIVITIES",
    date: "23/Dec/2024",
    imageSrc:
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734947909/chranimage_ttcqyj.jpg",
    altText: "FutureIT Los Angeles",
    eventType: "In-person event",
    title:
      "THE CENTER FOR HUMAN RIGHTS (CHRAN) TO MARK ITS END OF THE YEAR ACTIVITIES",
    description:
      "The Center for Human Rights Advocacy Network (CHRAN) is gearing up to conclude the year with a series of impactful activities aimed at reflecting on its achievements and reinforcing its commitment to promoting human rights. These end-of-year events will highlight CHRAN’s unwavering dedication to advocating for justice, equality, and the protection of human dignity.",
    description1:
      "Scheduled to take place in December, the activities will bring together human rights advocates, community leaders, and other stakeholders. The program will feature a review of the year’s accomplishments, including key campaigns, advocacy initiatives, and legal interventions that have positively impacted marginalized communities. CHRAN will also use the platform to celebrate partnerships and honor individuals and organizations that have supported its mission.",
    description2:
      "Interactive sessions, workshops, and public awareness campaigns will be part of the agenda to engage the public in meaningful discussions about pressing human rights issues. The activities will also serve as a launchpad for CHRAN’s vision and strategies for the upcoming year, ensuring a sustained focus on its objectives.",
    description3:
      "Through these end-of-year events, CHRAN aims to inspire renewed commitment to human rights advocacy and build stronger networks for a more equitable and just society.",
    details: "23 Dec 2025 ",
    category: "(CHRAN)",
  },
  {
    slug: "In-person",
    date: "04/May/2025",
    imageSrc:
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734412962/chran5_dhjg9a.jpg",
    altText: "Work+ Event",
    eventType: "In-person event",
    title: "Coming soon, stay tuned",
    details: "04 May 2025 • Loews Vanderbilt Hotel Nashville",
    category: "Technology Industry",
  },
  {
    slug: "event",
    date: "04/May/2025",
    imageSrc:
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734412962/chran5_dhjg9a.jpg",
    altText: "Work+ Event",
    eventType: "In-person event",
    title: "Coming soon, stay tuned",
    details: "04 May 2025 • Loews Vanderbilt Hotel Nashville",
    category: "Technology Industry",
  },
];
