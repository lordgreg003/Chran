"use client";
import { fetchAllPosts } from "@/redux/blogSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const Blogs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts = [], loading, error } = useSelector((state: RootState) => state.blogs);

  const [page, setPage] = useState(1);
  const postsPerPage = 8;
  const [isFetching, setIsFetching] = useState(false);
  const [formattedDates, setFormattedDates] = useState<string[]>([]); // Store formatted dates
  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useRef<HTMLDivElement | null>(null);

  // Fetch posts when the page changes
  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);
      await dispatch(fetchAllPosts({ page, limit: postsPerPage }));
      setIsFetching(false);
    };

    fetchPosts();
  }, [dispatch, page]);

  // Intersection Observer for infinite scrolling
  useEffect(() => {
    if (!lastPostRef.current) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    observer.current.observe(lastPostRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [lastPostRef, loading]);

  // Format dates on client-side
  useEffect(() => {
    if (posts.length > 0) {
      const formatted = posts.map((post) => format(new Date(post.createdAt), "MMMM dd, yyyy"));
      setFormattedDates(formatted);
    }
  }, [posts]);

  const renderMedia = (mediaUrls: { url: string; type: "image" | "video" }[]) => {
    return mediaUrls.map((media, index) =>
      media.type === "image" ? (
        <Image
          key={index}
          src={media.url || "/default-image.png"}
          alt={`Media ${index + 1}`}
          layout="responsive"
          width={800}
          height={400}
          loading="lazy"
          quality={100}
          className="rounded-md object-cover w-full"
        />
      ) : (
        <video
          key={index}
          src={media.url}
          controls
          className="w-full rounded-md"
        ></video>
      )
    );
  };

  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  // Sort posts by creation date in descending order
 // Sort posts by creation date in descending order
const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());


  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Latest Blog Posts</h2>
      <div className="space-y-8">
        {sortedPosts.map((post, index) => (
          <div
            key={post._id}
            ref={index === sortedPosts.length - 1 ? lastPostRef : null}
            className="bg-white shadow-md dark:bg-gray-800 rounded-lg overflow-hidden"
          >
            {/* Media */}
            <div className="relative flex justify-center">
              {post.media && (
                <div className="w-full lg:w-[60%] bg-red-300">
                  {renderMedia(post.media)}
                </div>
              )}
              <div className="absolute flex justify-center bg-red-500 text-white text-xs px-2 py-1 rounded">
                Blog
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {formattedDates[index] || "General"}
                </span>
                <Link href={`/blog/${post._id}`} passHref>
                  <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Loading Spinner */}
      {isFetching && (
        <div className="flex justify-center py-6">
          <span className="text-blue-500 text-lg">Loading more posts...</span>
        </div>
      )}
    </div>
  );
};

export default Blogs;
