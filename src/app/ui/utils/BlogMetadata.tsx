// BlogMetadata.tsx
import { Metadata } from 'next';
import { rightCardsData } from '@/app/ui/data/istdata';

// Dynamic metadata generation
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;
  const blogData = rightCardsData.find((card) => card.id === id);

  if (blogData) {
    // Ensure you set the full URL to the image to prevent relative paths in Open Graph
    const imageUrl = new URL(blogData.images[0], 'https://www.chran.org').toString();

    return {
      title: blogData.title,
      description: blogData.description,
      openGraph: {
        title: blogData.title,
        description: blogData.description,
        url: `https://www.chran.org/blo/${id}`,
        images: [
          {
            url: imageUrl, // Ensure the image URL is absolute
            width: 1200, // You can customize the width based on your needs
            height: 630, // Custom height for better display in previews
            alt: `Image for ${blogData.title}`, // Add alt text for accessibility
          },
        ],
      },
      twitter: {
        card: 'summary_large_image', // This card type ensures a large image is used in the preview
        title: blogData.title,
        description: blogData.description,
        images: [imageUrl], // Twitter also uses the image URL
      },
    };
  }

  // Fallback metadata for when a blog post is not found
  return {
    title: 'Blog Not Found',
    description: 'The blog post you are looking for does not exist.',
  };
}
