// src/screens/AdminDashboard.tsx
"use client";
import React from "react";
import { useDispatch } from "react-redux";
import ImageUploadButton from "@/app/ui/components/ImageUpload/ImageUploadButton";
import { AppDispatch } from "@/redux/store";
import { createBlogPost } from "@/redux/blogSlice";

const AdminDashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCreatePost = async (
    title: string,
    description: string,
    imageFile?: File | null,
    videoFile?: File | null
  ) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (imageFile) formData.append("image", imageFile);
    if (videoFile) formData.append("video", videoFile);

    try {
      await dispatch(createBlogPost(formData)).unwrap();
      alert("Post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
      alert(
        error instanceof Error ? error.message : "An unexpected error occurred."
      );
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ImageUploadButton onUpload={handleCreatePost} />
    </div>
  );
};

export default AdminDashboard;
