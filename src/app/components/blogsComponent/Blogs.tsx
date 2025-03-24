"use client";
import { BlogPost, fetchAllPosts } from "@/redux/blogSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const Blogs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts = [], loading, error } = useSelector((state: RootState) => state.blogs);

  const [page, setPage] = useState(1);
  const postsPerPage = 8;
  const [totalPages, setTotalPages] = useState(1);

  // Normalize post data
  const normalizePost = (post: Partial<BlogPost>): BlogPost | null => {
    if (!post || typeof post !== "object") return null;

    return {
      _id: post._id || "",
      title: post.title || "Untitled Post",
      description: post.description || "",
      image1: post.image1 || undefined,
      createdAt: post.createdAt ? new Date(post.createdAt) : new Date(),
      slug: post.slug || "",
      author: post.author || "Unknown Author",
      status: post.status === "published" ? "published" : "draft",
      tags: Array.isArray(post.tags) ? post.tags : [],
    };
  };

  // Fetch posts when the page changes
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await dispatch(fetchAllPosts({ page, limit: postsPerPage })).unwrap();
        if (result?.posts?.length === 0 && page !== 1) {
          setPage(1); // Go back to the first page if no posts are found
        }
        if (result?.totalPages) {
          setTotalPages(result.totalPages);
        }
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };

    fetchPosts();
  }, [dispatch, page]);

  // Process and sort posts
  const processedPosts = posts
    .map(normalizePost)
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  if (error) {
    return (
      <div className="container mx-auto py-8 px-4">
        <p className="text-center text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Initial Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Loading blog posts...</p>
          </div>
        </div>
      )}

      {/* No Posts Found State */}
      {!loading && processedPosts.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">No Blog Posts Found</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We couldn&apos;t find any blog posts. Please check back later.
          </p>
        </div>
      )}

      {/* Blog Posts List */}
      {!loading && processedPosts.length > 0 && (
        <>
          <div className="space-y-8">
            {processedPosts.map((post) => (
              <div
                key={post.slug}
                className="shadow-md dark:bg-gray-800 rounded-lg overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row gap-6 p-4">
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 flex justify-center items-center">
                    <Link href={`/blog/${post.slug}`} passHref>
                      <div className="relative w-full cursor-pointer aspect-[4/3]">
                        {post.image1 ? (
                          <Image
                            src={post.image1}
                            alt={post.title}
                            width={800}
                            height={600}
                            className="rounded-lg object-cover w-full h-full"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="bg-gray-200 dark:bg-gray-700 w-full h-full rounded-lg flex items-center justify-center aspect-[4/3]">
                            <span className="text-gray-500">No Image</span>
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <Link href={`/blog/${post.slug}`} passHref>
                      <h3 className="text-2xl font-bold mb-4 hover:text-blue-500 transition-colors">
                        {post.title}
                      </h3>
                    </Link>

                    <Link href={`/blog/${post.slug}`} passHref>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 hover:text-blue-500 transition-colors">
                        {post.description}
                      </p>
                    </Link>

                    <div className="flex flex-col space-y-2 text-sm">
                      <span className="text-gray-700 dark:text-gray-400">
                        By {post.author} • {format(new Date(post.createdAt), "MMMM dd, yyyy")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`px-4 py-2 rounded-md ${
                  page === pageNumber
                    ? "bg-blue-500 text-white font-semibold"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(Blogs);
