"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createArticle } from "@/redux/articleSlice";
import { AppDispatch, RootState } from "@/redux/store";

const CreateArticle: React.FC = () => {
  const [articleText, setArticleText] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.articles);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!articleText) return; // Don't submit if no text is entered

    dispatch(createArticle({ article: articleText }))
      .then(() => {
        setSuccessMessage("Article created successfully!");
        setArticleText(""); // Clear input field after submission
      })
      .catch(() => {
        setSuccessMessage(null); // Ensure success message is cleared in case of error
      });
  };

  // Automatically clear the success message after a few seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 5000); // Hide message after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Article</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="articleText" className="block text-sm font-semibold mb-2">
            Article Text:
          </label>
          <textarea
            id="articleText"
            value={articleText}
            onChange={(e) => setArticleText(e.target.value)}
            rows={6}
            className="w-full p-2 border rounded"
            placeholder="Write your article here..."
          />
        </div>

        {error && <div className="text-red-500">{error}</div>}

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Article"}
          </button>
        </div>
      </form>

      {/* Success Message */}
      {successMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 border border-green-300 rounded">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default CreateArticle;

