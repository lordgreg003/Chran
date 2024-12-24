// useAuthCheck.ts
"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { store } from "@/redux/store";
import { logout } from "@/redux/authSlice";

const useAuthCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken"); // Retrieve token from localStorage

    if (!accessToken) {
      // No token found, redirect to the login page
      router.push("/set");
      return;
    }

    // Logic to check user type (this will depend on your backend response)
    // Here is a simplified approach for demonstration purposes:
    try {
      const userType = "user"; // Replace with actual validation if needed

      if (userType === "user") {
        router.push("/admin"); // Redirect for a user
      } else {
        store.dispatch(logout()); // Dispatch the logout action to clear Redux and localStorage
        router.push("/set");
      }
    } catch (error) {
      console.error("Error in authCheck:", error);
      store.dispatch(logout()); // Clear session on error
      router.push("/set");
    }
  }, [router]);
};

export default useAuthCheck;
