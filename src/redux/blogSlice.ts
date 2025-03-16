"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Interfaces and Initial State
export interface MediaItem {
  url: string;
  type: "image" | "video";
}

export interface BlogPost {
  _id: string;
  title: string;
  description: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  createdAt: Date;
  slug: string;
  author: string;
  status: "draft" | "published";
  tags: string[];
}

interface BlogState {
  posts: BlogPost[];
  post: BlogPost | null;
  currentPost: BlogPost | null;
  loading: boolean;
  lastUpdated: number;
  error: string | null;
}

const loadPostsFromLocalStorage = (): BlogPost[] => {
  if (typeof window === "undefined") {
    return []; // Return an empty array during SSR
  }

  try {
    const storedPosts = localStorage.getItem("blogPosts");
    return storedPosts ? JSON.parse(storedPosts) : [];
  } catch (error) {
    console.error("Error loading posts from localStorage:", error);
    return [];
  }
};

const savePostsToLocalStorage = (posts: BlogPost[]) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem("blogPosts", JSON.stringify(posts));
  } catch (error) {
    console.error("Error saving posts to localStorage:", error);
  }
};

// Initialize state
const initialState: BlogState = {
  posts: [],
  post: null,
  currentPost: null,
  loading: false,
  lastUpdated: Date.now(),
  error: null,
};

// Thunks
export const getPostBySlug = createAsyncThunk<
  BlogPost,
  string,
  { rejectValue: string }
>("blogs/getPostBySlug", async (slug, { rejectWithValue }) => {
  console.log("Fetching blog with slug:", slug);
  try {
    const response = await axios.get(
      `https://chran-backend-1.onrender.com/api/blogs/${slug}` // Use slug in the endpoint
    );
    console.log("API get by slug Response:", response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to fetch post"
    );
  }
});

// Fetch all blog posts
export const fetchAllPosts = createAsyncThunk(
  "blogs/fetchAll",
  async ({ page, limit }: { page: number; limit: number }) => {
    try {
      const response = await axios.get(
        `https://chran-backend-1.onrender.com/api/blogs/?page=${page}&limit=${limit}`
      );
      console.log("API  getall Response:", response.data);
      return response.data.blogPosts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }
);

// Create a new blog post
export const createBlogPost = createAsyncThunk<BlogPost, FormData>(
  "blogs/createBlogPost",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://chran-backend-1.onrender.com/api/blogs/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedPosts = loadPostsFromLocalStorage();
      updatedPosts.push(response.data.newPost);
      savePostsToLocalStorage(updatedPosts);

      return response.data.newPost;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
  }
);

// Delete a blog post
export const deleteBlogPost = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("blogs/deleteBlogPost", async (slug, { rejectWithValue }) => {
  try {
    console.log(`Deleting post with slug: ${slug}`);
    await axios.delete(
      `https://chran-backend-1.onrender.com/api/blogs/${slug}`
    );
    console.log(`Post with slug: ${slug} deleted successfully`);
    return slug; // Return the deleted post slug to update the state
  } catch (error) {
    console.error("Error deleting post:", error);
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to delete blog post"
    );
  }
});

// Update a blog post
export const updateBlogPost = createAsyncThunk<
  BlogPost,
  { slug: string; formData: FormData }
>("blogs/updateBlogPost", async ({ slug, formData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(
      `https://chran-backend-1.onrender.com/api/blogs/${slug}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const updatedPosts = loadPostsFromLocalStorage();
    const updatedPostIndex = updatedPosts.findIndex(
      (post) => post.slug === slug
    );

    if (updatedPostIndex !== -1) {
      updatedPosts[updatedPostIndex] = response.data.updatedPost;
      savePostsToLocalStorage(updatedPosts);
    }

    return response.data.updatedPost;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "An unexpected error occurred"
    );
  }
});

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
        savePostsToLocalStorage(action.payload);
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })

      // Get post by slug
      .addCase(getPostBySlug.pending, (state) => {
        state.loading = true;
        state.currentPost = null;
      })
      .addCase(getPostBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPost = action.payload;
      })
      .addCase(getPostBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch post by slug";
      })

      // Create a new blog post
      .addCase(createBlogPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBlogPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
        state.lastUpdated = Date.now();
        savePostsToLocalStorage(state.posts);
      })
      .addCase(createBlogPost.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to create post";
      })

      // Delete a blog post
      .addCase(deleteBlogPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBlogPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter(
          (post) => post.slug !== action.payload
        );
        state.lastUpdated = Date.now();
        savePostsToLocalStorage(state.posts);
      })
      .addCase(deleteBlogPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete post";
      })

      // Update a blog post
      .addCase(updateBlogPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBlogPost.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.posts.findIndex(
          (post) => post.slug === action.payload.slug
        );
        if (index !== -1) {
          state.posts[index] = action.payload;
          state.lastUpdated = Date.now();
          savePostsToLocalStorage(state.posts);
        }
      })
      .addCase(updateBlogPost.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to update post";
      });
  },
});

export const { actions, reducer } = blogSlice;
export default reducer;
