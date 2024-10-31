import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

// Define API URLs
const API_BASE_URL = "https://chran-backend.onrender.com/admin";

// Define types for our state
interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

// Define an interface for error response
interface ErrorResponse {
  message: string;
}

// Initial state
const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

// Async action to register admin
export const registerAdmin = createAsyncThunk(
  "auth/registerAdmin",
  async (data: { username: string; password: string }, { rejectWithValue }) => {
    console.log("Registering admin with data:", data); // Log the data being sent
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, data);
      console.log("Registration response:", response.data); // Log the successful response
      return response.data; // Success response data
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>; // Cast error to AxiosError with the ErrorResponse type
      console.error("Registration error:", axiosError); // Log the error for debugging
      return rejectWithValue(
        axiosError.response?.data?.message || "Registration failed"
      );
    }
  }
);

// Async action to login admin
export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async (data: { username: string; password: string }, { rejectWithValue }) => {
    console.log("Logging in with data:", data); // Log the data being sent
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, data);
      console.log("Login response:", response.data); // Log the successful response
      return response.data.token; // Return the token
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>; // Cast error to AxiosError with the ErrorResponse type
      console.error("Login error:", axiosError); // Log the error for debugging
      return rejectWithValue(
        axiosError.response?.data?.message || "Login failed"
      );
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null; // Clear the token on logout
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAdmin.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.token = action.payload; // Store the token
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Export the logout action
export const { logout } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
