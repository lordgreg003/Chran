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
  const [formattedDates, setFormattedDates] = useState<string[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useRef<HTMLDivElement | null>(null);

  console.log("Blogs component re-rendered");

  // Fetch posts when the page changes
  useEffect(() => {
    console.log("Fetching posts for page:", page);
    const fetchPosts = async () => {
      setIsFetching(true);
      await dispatch(fetchAllPosts({ page, limit: postsPerPage }));
      setIsFetching(false);
    };

    fetchPosts();
  }, [dispatch, page]);

  // Intersection Observer for infinite scrolling
  useEffect(() => {
    console.log("Setting up IntersectionObserver for page:", page);
    if (!lastPostRef.current) {
      console.log("lastPostRef is not set");
      return;
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        console.log("IntersectionObserver entry:", entry.isIntersecting);
        if (entry.isIntersecting && !loading) {
          console.log("Loading more posts for page:", page + 1);
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    observer.current.observe(lastPostRef.current);

    return () => {
      if (observer.current) {
        console.log("Cleaning up IntersectionObserver");
        observer.current.disconnect();
      }
    };
  }, [lastPostRef,page, loading]);

  // Format dates on client-side
  useEffect(() => {
    if (posts.length > 0) {
      console.log("Formatting dates for posts:", posts);
      const formatted = posts.map((post) => format(new Date(post.createdAt), "MMMM dd, yyyy"));
      setFormattedDates(formatted);
    }
  }, [posts]);

  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  // Sort posts by creation date in descending order
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  console.log("Sorted posts:", sortedPosts);

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Latest Blog Posts</h2>
      <div className="space-y-8">
        {sortedPosts.map((post, index) => (
          <div
            key={post._id}
            ref={index === sortedPosts.length - 1 ? lastPostRef : null}
            className="shadow-md dark:bg-gray-800 rounded-lg overflow-hidden"
          >
            {/* Clickable Image */}
            <Link href={`/blog/${post.slug}`} passHref>
              <div className="relative cursor-pointer w-full">
                {post.image1 && (
                  <div className="w-full flex flex-col items-center justify-center md:flex md:flex-row md:justify-evenly">
                    <Image
                      src={post.image1}
                      alt={post.title}
                      layout="intrinsic"
                      width={300}
                      height={300}
                      loading="lazy"
                      quality={100}
                      className="rounded-lg w-full md:w-[45%]"
                    />
                    {post.image2 && (
                      <Image
                        src={post.image2}
                        alt={post.title}
                        layout="intrinsic"
                        width={300}
                        height={300}
                        loading="lazy"
                        quality={100}
                        className="rounded-lg w-full md:w-[45%]"
                        onError={(e) => {
                          console.error("Failed to load image2:", e);
                        }}
                      />
                    )}
                  </div>
                )}
                <div className="absolute flex justify-center -transfor bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Blog
                </div>
              </div>
            </Link>

            {/* Clickable Title and Description */}
            <Link href={`/blog/${post.slug}`} passHref>
              <div className="p-4 cursor-pointer">
                <h3 className="text-lg font-bold mb-2 hover:text-blue-500 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 hover:text-blue-500 transition">
                  {post.description}
                </p>
              </div>
            </Link>

            {/* Author, Status, Tags, and Date */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-900">
                  By {post.author} | {formattedDates[index] || "General"}
                </span>
                <span className="text-xs text-gray-900">
                  Status: {post.status} | Tags: {post.tags.join(", ")}
                </span>
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

export default React.memo(Blogs);