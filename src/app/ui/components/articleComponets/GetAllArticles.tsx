"use client";

import {
  fetchAllArticles,
  setSortBy,
  setPage,
  setSelectedMonth,
} from "@/redux/articleSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";  
import "animate.css";  
import { playfair_Display, open_sans } from "../../fonts/fonts";

const GetAllArticles: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, loading, error, currentPage, totalPages, selectedMonth } =
    useSelector((state: RootState) => state.articles);

  const selectedMonthValue = selectedMonth || "";

  useEffect(() => {
    dispatch(
      fetchAllArticles({ page: currentPage, selectedMonth: selectedMonthValue })
    );
  }, [dispatch, currentPage, selectedMonthValue]);

  const handleSortChange = (sortBy: string) => {
    dispatch(setSortBy(sortBy));
  };

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedMonth(event.target.value));
  };

  if (loading) {
    return <div>Chran articles loading...</div>;
  }

  if (error) {
    return <div>Error fetching Chran articles: {error}</div>;
  }

  const noArticlesFound = selectedMonthValue && articles.length === 0;

  return (
    <div className="container mx-auto p-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-[#2D2D2D] transition-colors duration-300">
      <div className="h-16"></div>
      <h1 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
        Articles
      </h1>

      {/* Filter and Pagination Controls */}
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
        <div>
          <button
            onClick={() => handleSortChange("createdAt")}
            className="mr-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
          >
            Sort by Date
          </button>
          <button
            onClick={() => handleSortChange("article")}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
          >
            Sort by Title
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600 disabled:opacity-50 transition"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600 disabled:opacity-50 transition"
          >
            Next
          </button>
        </div>
      </div>

      {/* Month Picker for Filtering */}
      <div className="mb-4">
        <label htmlFor="month" className="mr-2 font-medium">
          Select Month:
        </label>
        <input
          type="month"
          id="month"
          value={selectedMonthValue}
          onChange={handleMonthChange}
          className="p-2 border rounded shadow focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Display "No Articles Found" if no articles match the selected month */}
      {noArticlesFound && (
        <div className="text-center text-xl text-red-500 mb-4">
          No articles found for this month.
        </div>
      )}

      {/* Display Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.length === 0 && !noArticlesFound ? (
          <div>No articles available</div>
        ) : (
          articles.map((article) => (
            <div
              key={article._id}
              className="border-4 border-blue-500 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 animate__animated animate__fadeIn"
            >
              <h2 className={`${playfair_Display.className} text-xl font-semibold text-blue-600 dark:text-blue-400 `}>
                <Link href={`/articles/${article._id}`}>
                  {article.article.slice(0, 50)}...
                </Link>
              </h2>
              <p className="text-sm text-gray-500">
                Created At:{" "}
                {new Date(article.createdAt).toLocaleDateString()}
              </p>
              <p className="mt-2">{article.article.slice(0, 150)}...</p>
              <Link href={`/articles/${article._id}`}>
                <button className={`${open_sans.className} mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition`}>
                  Read More
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GetAllArticles;
