"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BlogPost, createBlogPost } from "@/redux/blogSlice";
import { compressImage } from "@/app/ui/utils/imageCompressor";
import dynamic from "next/dynamic";

// Dynamically import AdminDashboard with SSR disabled
const AdminDashboard = dynamic(() => import("@/app/(dashboard)/admin/page"), { ssr: false });

const AdminDashboardComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [videoFiles, setVideoFiles] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof window === "undefined") return; // Ensure this runs only on the client
    const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
    try {
      const compressedFiles = await Promise.all(
        selectedFiles.map(async (file) => {
          const compressedFile = await compressImage(file, {
            maxSizeMB: 2,
            maxHeight: 800,
            maxWidth: 800,
          });
          return new File([compressedFile], file.name, { type: file.type });
        })
      );
      const previewUrls = compressedFiles.map((file) => URL.createObjectURL(file));
      setImageFiles((prevFiles) => [...prevFiles, ...compressedFiles]);
      setPreviewUrls((prevPreviews) => [...prevPreviews, ...previewUrls]);
    } catch (error) {
      console.error("Error compressing images:", error);
    }
  };

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof window === "undefined") return; // Ensure this runs only on the client
    const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
    setVideoFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    const videoPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prevPreviews) => [...prevPreviews, ...videoPreviews]);
  };

  const removePreview = (index: number) => {
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setPreviewUrls((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (title && description && (imageFiles.length > 0 || videoFiles.length > 0)) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      imageFiles.forEach((file) => formData.append("media", file));
      videoFiles.forEach((file) => formData.append("media", file));
      try {
        const newPost: BlogPost = await dispatch(createBlogPost(formData)).unwrap();
        console.log("New Post Created:", newPost);
        setTitle("");
        setDescription("");
        setImageFiles([]);
        setVideoFiles([]);
        setPreviewUrls([]);
      } catch (error) {
        alert("Failed to create post: " + error);
      }
    } else {
      alert("Please fill in the title, description, and select at least one image or video.");
    }
  };

  return (
    <div className="p-4 flex flex-col space-y-6 md:w-full lg:w-3/4 xl:w-2/3 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-lg shadow-lg w-full">
        <h2 className="text-xl font-bold mb-4">Create Post</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-3 w-full"
          multiple
        />
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
          className="mb-3 w-full"
          multiple
        />
        {previewUrls.length > 0 && (
          <div className="mb-3 relative">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative mb-2">
                <Image
                  src={url}
                  alt={`Preview ${index}`}
                  className="rounded-t-lg object-cover"
                />
                <button
                  onClick={() => removePreview(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-300 rounded resize-none"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white w-full p-2 rounded mt-4"
        >
          Submit
        </button>
      </div>
      <AdminDashboard />
    </div>
  );
};

export default AdminDashboardComponent;
