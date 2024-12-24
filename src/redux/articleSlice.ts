"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define interfaces and initial state
export interface Article {
  _id: string;
  article: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ArticleState {
  articles: Article[];
  article: Article | null;
  loading: boolean;
  error: string | null;
  lastUpdated: number;
  currentPage: number;
  totalPages: number;
  totalArticles: number;
  sortBy: string;
  sortOrder: "asc" | "desc";
  selectedMonth: string | null;
}

const initialState: ArticleState = {
  articles: [],
  article: null,
  loading: false,
  error: null,
  lastUpdated: Date.now(),
  currentPage: 1,
  totalPages: 1,
  totalArticles: 0,
  sortBy: "createdAt",
  sortOrder: "desc",
  selectedMonth: null,
};

// Thunk to create a new article
export const createArticle = createAsyncThunk(
  "articles/create",
  async (articleData: { article: string }) => {
    try {
      const response = await axios.post(
        "https://chran-backend.onrender.com/api/article/",
        articleData
      );
      return response.data; // Returning the created article
    } catch (error) {
      console.error("Error creating article:", error);
      throw error;
    }
  }
);

// Thunk to fetch articles with pagination and sorting
export const fetchAllArticles = createAsyncThunk(
  "articles/fetchAll",
  async ({ page, selectedMonth }: { page: number; selectedMonth: string }) => {
    try {
      const url = new URL("https://chran-backend.onrender.com/api/article/");
      if (selectedMonth) {
        const [year, month] = selectedMonth.split("-");
        url.searchParams.append("year", year);
        url.searchParams.append("month", month);
      }
      url.searchParams.append("page", page.toString());
      const response = await axios.get(url.toString());
      return response.data;
    } catch (error) {
      console.error("Error fetching articles:", error);
      throw error;
    }
  }
);

// Thunk to fetch a single article by ID
export const getArticleById = createAsyncThunk(
  "articles/fetchById",
  async (id: string) => {
    try {
      const response = await axios.get(
        `https://chran-backend.onrender.com/api/article/${id}`
      );
      return response.data.article;
    } catch (error) {
      console.error("Error fetching article by ID:", error);
      throw error;
    }
  }
);

// Thunk to update an article
export const updateArticle = createAsyncThunk(
  "articles/update",
  async ({
    id,
    articleData,
  }: {
    id: string;
    articleData: { article: string };
  }) => {
    try {
      const response = await axios.put(
        `https://chran-backend.onrender.com/api/article/${id}`,
        articleData
      );
      return response.data; // Returning the updated article
    } catch (error) {
      console.error("Error updating article:", error);
      throw error;
    }
  }
);

// Thunk to delete an article
export const deleteArticle = createAsyncThunk(
  "articles/delete",
  async (id: string) => {
    try {
      await axios.delete(
        `https://chran-backend.onrender.com/api/article/${id}`
      );
      return id; // Return the ID of the deleted article
    } catch (error) {
      console.error("Error deleting article:", error);
      throw error;
    }
  }
);

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload.sortBy;
      state.sortOrder = action.payload.sortOrder;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle create article
      .addCase(createArticle.pending, (state) => {
        state.loading = true;
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.loading = false;
        // Optionally, add the created article to the articles list
        state.articles.push(action.payload);
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create article";
      })
      // Handle fetch all articles
      .addCase(fetchAllArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.articles || [];
        state.totalPages = action.payload.totalPages;
        state.totalArticles = action.payload.totalArticles;
        state.lastUpdated = Date.now();
      })
      .addCase(fetchAllArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch articles";
      })
      // Handle fetch article by ID
      .addCase(getArticleById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getArticleById.fulfilled, (state, action) => {
        state.loading = false;
        state.article = action.payload;
      })
      .addCase(getArticleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch article by ID";
      })
      // Handle update article
      .addCase(updateArticle.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        state.loading = false;
        // Update the article in the list with the updated article
        const updatedArticle = action.payload;
        const index = state.articles.findIndex(
          (article) => article._id === updatedArticle._id
        );
        if (index !== -1) {
          state.articles[index] = updatedArticle;
        }
      })
      .addCase(updateArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update article";
      })
      // Handle delete article
      .addCase(deleteArticle.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.loading = false;
        // Remove the deleted article from the list
        const deletedArticleId = action.payload;
        state.articles = state.articles.filter(
          (article) => article._id !== deletedArticleId
        );
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete article";
      });
  },
});

export const { setSortBy, setPage, setSelectedMonth } = articleSlice.actions;
export const { reducer } = articleSlice;
export default reducer;
