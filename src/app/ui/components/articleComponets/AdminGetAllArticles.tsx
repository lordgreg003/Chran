"use client";

import { fetchAllArticles, setSortBy, setPage, setSelectedMonth, updateArticle, deleteArticle } from "@/redux/articleSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

const AdminGetAllArticles: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, loading, error, currentPage, totalPages, selectedMonth } = useSelector(
    (state: RootState) => state.articles
  );

  const [isEditing, setIsEditing] = useState(false); // State for toggling the edit modal/section
  const [editArticleId, setEditArticleId] = useState<string | null>(null); // ID of the article being edited
  const [articleContent, setArticleContent] = useState(""); // Editable content

  const selectedMonthValue = selectedMonth || "";

  useEffect(() => {
    dispatch(fetchAllArticles({ page: currentPage, selectedMonth: selectedMonthValue }));
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

  const handleEdit = (articleId: string, currentContent: string) => {
    setIsEditing(true);
    setEditArticleId(articleId);
    setArticleContent(currentContent); // Populate the input with the existing content
  };

  const handleSave = async () => {
    if (editArticleId) {
      try {
        await dispatch(updateArticle({ id: editArticleId, articleData: { article: articleContent } })).unwrap();
        alert("Article updated successfully!");
        setIsEditing(false);
        setEditArticleId(null);
        setArticleContent("");
        dispatch(fetchAllArticles({ page: currentPage, selectedMonth: selectedMonthValue })); // Refresh the articles
      } catch (error) {
        console.error("Error updating article:", error);
        alert("Failed to update article.");
      }
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditArticleId(null);
    setArticleContent("");
  };

  const handleDelete = async (articleId: string) => {
    try {
      await dispatch(deleteArticle(articleId)).unwrap(); // Dispatch delete action
      alert("Article deleted successfully!");
      dispatch(fetchAllArticles({ page: currentPage, selectedMonth: selectedMonthValue })); // Refresh the articles
    } catch (error) {
      console.error("Error deleting article:", error);
      alert("Failed to delete article.");
    }
  };

  if (loading) {
    return <div>Loading articles...</div>;
  }

  if (error) {
    return <div>Error fetching articles: {error}</div>;
  }

  const noArticlesFound = selectedMonthValue && articles.length === 0;

  return (
    <div className="container mx-auto p-4">
      <div className="h-16"></div>
      <h1 className="text-2xl font-bold mb-4">Articles</h1>

      {/* Filter and Pagination Controls */}
      <div className="flex justify-between mb-4">
        <div>
          <button onClick={() => handleSortChange("createdAt")} className="mr-4">
            Sort by Date
          </button>
          <button onClick={() => handleSortChange("article")}>Sort by Title</button>
        </div>
        <div>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="ml-2"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="ml-2"
          >
            Next
          </button>
        </div>
      </div>

      {/* Month Picker for Filtering */}
      <div className="mb-4">
        <label htmlFor="month" className="mr-2">Select Month:</label>
        <input
          type="month"
          id="month"
          value={selectedMonthValue}
          onChange={handleMonthChange}
          className="p-2 border rounded"
        />
      </div>

      {/* Display "No Articles Found" if no articles match the selected month */}
      {noArticlesFound && (
        <div className="text-center text-xl text-red-500 mb-4">No articles found for this month.</div>
      )}

      {/* Display Articles */}
      <div className="space-y-4">
        {articles.length === 0 && !noArticlesFound ? (
          <div>No articles available</div>
        ) : (
          articles.map((article) => (
            <div
              key={article._id}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">
                  <Link href={`/articles/${article._id}`}>
                    {article.article.slice(0, 50)}...
                  </Link>
                </h2>
                <p className="text-sm text-gray-500">Created At: {new Date(article.createdAt).toLocaleDateString()}</p>
                <p className="mt-2">{article.article.slice(0, 150)}...</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(article._id, article.article)}
                  className="text-blue-500 hover:text-blue-700"
                  aria-label="Edit Article"
                >
                  <FaEdit size={20} />
                </button>
                <button
                  onClick={() => handleDelete(article._id)} // Delete article on click
                  className="text-red-500 hover:text-red-700"
                  aria-label="Delete Article"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Edit Article Section */}
      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-3/4 max-w-lg">
            <h2 className="text-xl font-bold mb-4">Edit Article</h2>
            <textarea
              value={articleContent}
              onChange={(e) => setArticleContent(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              rows={5}
            />
            <div className="flex justify-end space-x-4">
              <button onClick={handleCancelEdit} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminGetAllArticles;
