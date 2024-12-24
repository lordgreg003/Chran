// BlogMetadata.tsx
import { Metadata } from 'next';
import { rightCardsData } from '@/app/ui/data/istdata';

// Dynamic metadata generation
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;
  const blogData = rightCardsData.find((card) => card.id === id);

  if (blogData) {
    return {
      title: blogData.title,
      description: blogData.description,
      openGraph: {
        title: blogData.title,
        description: blogData.description,
        url: `https://www.chran.org/blo/${id}`,
        images: blogData.images[0],
      },
    };
  }

  // Fallback metadata for when a blog post is not found
  return {
    title: 'Blog Not Found',
    description: 'The blog post you are looking for does not exist.',
  };
}
