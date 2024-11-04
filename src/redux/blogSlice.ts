// src/slices/blogSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  likes: number;
  createdAt: Date;
}

interface BlogState {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchAllPosts = createAsyncThunk("blogs/fetchAll", async () => {
  try {
    const response = await axios.get(
      "https://chran-backend.onrender.com/api/blogs/"
    );
    console.log("API Response:", response.data); // Log to confirm data structure
    return response.data; // Adjust based on API response structure
  } catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
});

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload; // Check if this structure matches your API response
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export const { actions, reducer } = blogSlice;
export default reducer;
