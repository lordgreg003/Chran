"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Interfaces and Initial State
export interface BlogPost {
  _id: string;
  title: string;
  description: string;
  image1?: string;
  image2?: string | null;
  image3?: string | null;
  image4?: string | null;
  image5?: string | null;
  createdAt: Date | string;
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
  currentPage: number;  // Track the current page
  totalPages: number;    // Store the total number of pages
}


// Helper functions for local storage
const LOCAL_STORAGE_KEY = "blogPosts";

const loadPostsFromLocalStorage = (): BlogPost[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedPosts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storedPosts) return [];
    
    const parsed = JSON.parse(storedPosts);
    return Array.isArray(parsed) ? parsed : [];
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
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  } catch (error) {
    console.error("Error saving posts to localStorage:", error);
  }
};

// Initialize state
const initialState: BlogState = {
  posts: loadPostsFromLocalStorage(),
  post: null,
  currentPost: null,
  loading: false,
  lastUpdated: Date.now(),
  error: null,
  currentPage: 1, // Start from the first page
  totalPages: 1,  // Default to 1 until fetched
};


// Data normalization function
const normalizePost = (post: BlogPost): BlogPost => {
  return {
    _id: post._id || '',
    title: post.title || 'Untitled Post',
    description: post.description || '',
    image1: post.image1 || undefined,
    image2: post.image2 || null,
    image3: post.image3 || null,
    image4: post.image4 || null,
    image5: post.image5 || null,
    createdAt: post.createdAt || new Date().toISOString(),
    slug: post.slug || '',
    author: post.author || 'Unknown Author',
    status: post.status === 'published' ? 'published' : 'draft',
    tags: Array.isArray(post.tags) ? post.tags : 
         typeof post.tags === 'string' ? [post.tags] : [],
  };
};

// Thunks
export const fetchAllPosts = createAsyncThunk(
  "blogs/fetchAll",
  async ({ page, limit }: { page: number; limit: number }) => {
    try {
      const localPosts = loadPostsFromLocalStorage();

      if (localPosts.length > 0 && page === 1) {
        console.log("Using posts from local storage");
        return { posts: localPosts, totalPages: 1 }; // Default totalPages to 1 for local storage
      }

      const response = await axios.get(
        `https://chran-backend-1.onrender.com/api/blogs/?page=${page}&limit=${limit}`
      );

      // Clear local storage before saving new data
      localStorage.removeItem('blogPosts'); // or whatever key you use

      const normalizedPosts = response.data.blogPosts.map(normalizePost);
      savePostsToLocalStorage(normalizedPosts);

      console.log("Fetched posts from API:", normalizedPosts);

      return {
        posts: normalizedPosts,
        totalPages: response.data.totalPages || 1, // Ensure totalPages is always set
      };
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }
);


export const getPostBySlug = createAsyncThunk<
  BlogPost,
  string,
  { rejectValue: string }
>("blogs/getPostBySlug", async (slug, { rejectWithValue }) => {
  try {
    const posts = loadPostsFromLocalStorage();
    const post = posts.find((post) => post.slug === slug);

    if (post) {
      return post;
    }

    const response = await axios.get(
      `https://chran-backend-1.onrender.com/api/blogs/${slug}`
    );
    return normalizePost(response.data);

  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to fetch post"
    );
  }
});

export const createBlogPost = createAsyncThunk<BlogPost, FormData>(
  "blogs/createBlogPost",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      console.log("[API] Sending request with formData:", formData);
      const response = await axios.post(
        "https://chran-backend-1.onrender.com/api/blogs/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("[API] Response received:", response.data.newPost);
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

export const deleteBlogPost = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("blogs/deleteBlogPost", async (slug, { rejectWithValue }) => {
  try {
    const updatedPosts = loadPostsFromLocalStorage()
      .filter((post) => post.slug !== slug);
    savePostsToLocalStorage(updatedPosts);

    await axios.delete(
      `https://chran-backend-1.onrender.com/api/blogs/${slug}`
    );

    return slug;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to delete blog post"
    );
  }
});

export const updateBlogPost = createAsyncThunk<
  BlogPost,
  { slug: string; formData: FormData },
  { rejectValue: string }
>("blogs/updateBlogPost", async ({ slug, formData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(
      `https://chran-backend-1.onrender.com/api/blogs/${slug}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    const updatedPost = normalizePost(response.data.updatedPost);
    const updatedPosts = loadPostsFromLocalStorage().map((post) =>
      post.slug === slug ? updatedPost : post
    );
    savePostsToLocalStorage(updatedPosts);

    return updatedPost;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "An unexpected error occurred"
    );
  }
});

// Slice
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
        state.posts = action.payload.posts;
        state.totalPages = action.payload.totalPages;
      })
      
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
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
      .addCase(createBlogPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBlogPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
        state.lastUpdated = Date.now();
      })
      .addCase(createBlogPost.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to create post";
      })
      .addCase(deleteBlogPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBlogPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter(
          (post) => post.slug !== action.payload
        );
        state.lastUpdated = Date.now();
      })
      .addCase(deleteBlogPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete post";
      })
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
        }
      })
      .addCase(updateBlogPost.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to update post";
      });
  },
});

export default blogSlice.reducer;