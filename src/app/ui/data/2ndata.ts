// Define the Event interface
interface Event {
  id: string;
  date: string;
  imageSrc: string;
  altText: string;
  eventType: string;
  title: string;
  details: string;
  category?: string;
}

// Event Data
export const events: Event[] = [
  {
    id: "Los-Angeles",
    date: "23/Dec/2024",
    imageSrc:
      "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734947909/chranimage_ttcqyj.jpg",
    altText: "FutureIT Los Angeles",
    eventType: "In-person event",
    title:
      "THE CENTER FOR HUMAN RIGHTS (CHRAN) TO MARK ITS END OF THE YEAR ACTIVITIES",
    details: "23 Dec 2025 ",
    category: "(CHRAN)",
  },
  {
    id: "In-person",
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
    id: "event",
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
