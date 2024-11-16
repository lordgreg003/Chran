import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Interfaces and Initial State
export interface BlogPost {
  _id: string;
  title: string;
  description: string;
  media?: { url: string; type: "image" | "video" }[];
  likes: number;
  createdAt: Date;
}

interface BlogState {
  posts: BlogPost[];
  loading: boolean;
  lastUpdated: number;
  error: string | null;
}

// Helper functions to handle localStorage
const loadPostsFromLocalStorage = (): BlogPost[] => {
  if (typeof window === "undefined") {
    return [];
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
  loading: false,
  lastUpdated: Date.now(),
  error: null,
};

// Fetch all blog posts
export const fetchAllPosts = createAsyncThunk(
  "blogs/fetchAll",
  async ({ page, limit }: { page: number; limit: number }) => {
    try {
      const response = await axios.get(
        `https://chran-backend.onrender.com/api/blogs/?page=${page}&limit=${limit}`
      );
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
        "https://chran-backend.onrender.com/api/blogs/",
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
>("blogs/deleteBlogPost", async (id, { rejectWithValue }) => {
  try {
    console.log(`Deleting post with id: ${id}`); // Log the id being deleted
    await axios.delete(`https://chran-backend.onrender.com/api/blogs/${id}`);
    console.log(`Post with id: ${id} deleted successfully`); // Log success
    return id; // Return the deleted post ID to update the state
  } catch (error) {
    console.error("Error deleting post:", error); // Log the error if it occurs
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to delete blog post"
    );
  }
});

// Update a blog post
export const updateBlogPost = createAsyncThunk<
  BlogPost,
  { id: string; formData: FormData }
>("blogs/updateBlogPost", async ({ id, formData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(
      `https://chran-backend.onrender.com/api/blogs/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const updatedPosts = loadPostsFromLocalStorage();
    const updatedPostIndex = updatedPosts.findIndex((post) => post._id === id);

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
        console.log("Deleting post..."); // Log when the deletion is pending
        state.loading = true;
      })
      .addCase(deleteBlogPost.fulfilled, (state, action) => {
        console.log(`Post with id: ${action.payload} deleted from the state`);
        state.loading = false;
        // Remove the post from the state using the id
        state.posts = state.posts.filter((post) => post._id !== action.payload);
        state.lastUpdated = Date.now();
        savePostsToLocalStorage(state.posts); // Sync with local storage
      })
      .addCase(deleteBlogPost.rejected, (state, action) => {
        console.error(`Failed to delete post: ${action.payload}`);
        state.loading = false;
        state.error = action.payload || "Failed to delete post";
      })

      // update

      .addCase(updateBlogPost.pending, (state) => {
        state.loading = true;
        console.log("Updating post...");
      })
      .addCase(updateBlogPost.fulfilled, (state, action) => {
        console.log(`Post with id: ${action.payload} Update from the state`);
        state.loading = false;
        const updatedPost = action.payload;

        // Update the post in the state
        const index = state.posts.findIndex(
          (post) => post._id === updatedPost._id
        );
        if (index !== -1) {
          state.posts[index] = updatedPost;
          state.lastUpdated = Date.now();
          savePostsToLocalStorage(state.posts);
        }
      })
      .addCase(updateBlogPost.rejected, (state, action) => {
        console.error(`Failed to Update post: ${action.payload}`);
        state.loading = false;
        state.error = (action.payload as string) || "Failed to update post";
      });
  },
});

export const { actions, reducer } = blogSlice;
export default reducer;
