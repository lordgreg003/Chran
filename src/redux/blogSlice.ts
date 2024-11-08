"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  mediaUrl?: string;
  mediaType?: string;
  likes: number;

  createdAt: Date;
}

interface BlogState {
  posts: BlogPost[];
  loading: boolean;
  lastUpdated: number;
  error: string | null;
}

const initialState: BlogState = {
  posts: [],
  loading: false,
  lastUpdated: Date.now(),
  error: null,
};

// Fetch all blog posts
export const fetchAllPosts = createAsyncThunk(
  "blogs/fetchAll",
  async ({ page = 1, limit = 10 }: { page: number; limit: number }) => {
    try {
      const response = await axios.get(
        `https://chran-backend.onrender.com/api/blogs/?page=${page}&limit=${limit}`
      );
      return response.data.blogPosts;
    } catch (error) {
      throw error;
    }
  }
);

// https://chran-backend.onrender.com/api/blogs/

export const createBlogPost = createAsyncThunk<BlogPost, FormData>(
  "blogs/createBlogPost",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://chran-backend.onrender.com/api/blogs/", // Replace with your deployed API URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure that we send the form data correctly
          },
        }
      );
      return response.data.newPost; // Return the `newPost` part of the response
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all blog posts
      .addCase(fetchAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })

      // Create a new blog post
      .addCase(createBlogPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBlogPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
        state.lastUpdated = Date.now();
        fetchAllPosts({ page: 1, limit: 10 });
      })
      .addCase(createBlogPost.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to create post";
      });
  },
});

export const { actions, reducer } = blogSlice;
export default reducer;
