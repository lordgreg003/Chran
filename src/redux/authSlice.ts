import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const API_BASE_URL = "https://chran-backend-1.onrender.com/admin";

interface AuthState {
  accessToken: string | null;
  loading: boolean;
  error: string | null;
}

interface ErrorResponse {
  message: string;
}

const initialState: AuthState = {
  accessToken: null, // Set to null initially to avoid accessing `localStorage` on the server
  loading: false,
  error: null,
};

export const registerAdmin = createAsyncThunk(
  "auth/registerAdmin",
  async (data: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, data);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      return rejectWithValue(
        axiosError.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async (data: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, data);
      const accessToken = response.data.data.accessToken;
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", accessToken);
      }
      return accessToken;
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
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
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.error = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
      }
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
        state.accessToken = action.payload;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, setAccessToken } = authSlice.actions;

export default authSlice.reducer;
