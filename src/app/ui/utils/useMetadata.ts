// hooks/useMetadata.ts
import { BlogPost } from "@/redux/blogSlice";
import { Metadata } from "next";

export async function generateMetadata(cardData: BlogPost | null): Promise<Metadata> {
  return cardData
    ? {
        title: cardData.title,
        description: cardData.description || "No description available",
        openGraph: {
          title: cardData.title,
          description: cardData.description || "No description available",
          images: [
            {
              url: cardData.image1 || "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1738127372/WhatsApp_Image_2025-01-28_at_2.43.56_PM_edezpm.jpg",
              width: 800,
              height: 600,
              alt: cardData.title,
            },
          ],
        },
      }
    : {
        title: "Card not found",
        description: "Sorry, the card you are looking for does not exist.",
      };
}