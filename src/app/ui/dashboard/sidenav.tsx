"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import Image from "next/image";
import { PowerIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logout } from "@/redux/authSlice";
import { useRouter } from "next/navigation";

export default function SideNav() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  // authCheck function to validate access token and redirect if needed
  const authCheck = () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      router.push("/set"); // Redirect if no token found
      return;
    }

    try {
      const userType = "user"; // Update with actual check if necessary

      if (userType === "user") {
        router.push("/admin");
      } else {
        dispatch(logout());
        router.push("/set");
      }
    } catch (error) {
      console.error("Error in authCheck:", error);
      dispatch(logout());
      router.push("/set");
    }
  };

  useEffect(() => {
    authCheck(); // Run auth check on component mount
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    alert("You have been logged out."); // Optional alert
    router.push("/set"); // Redirect after logout
  };

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-slate-500">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <Image src="/mainlogo.webp" alt="chranlogo" height={20} width={20} />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button
            type="button"
            onClick={handleLogout}
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
