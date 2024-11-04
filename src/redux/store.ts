import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import blogReducer from "./blogSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogReducer,
  },
});

// Type definitions for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
