"use client";
  import Image from "next/image";
  import React, { useState, useEffect, useRef } from "react";
  import { useDispatch } from "react-redux";
  import { AppDispatch } from "@/redux/store";
  import { BlogPost, createBlogPost } from "@/redux/blogSlice";
  
  const AdminDashboardComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
  
    // State for form fields
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState<"draft" | "published">("draft");
    const [tags, setTags] = useState<string>(""); // Comma-separated tags
  
    // State for images and their previews
    const [image1, setImage1] = useState<File | null>(null);
    const [image2, setImage2] = useState<File | null>(null);
    const [image3, setImage3] = useState<File | null>(null);
    const [image4, setImage4] = useState<File | null>(null);
    const [image5, setImage5] = useState<File | null>(null);
  
    const [preview1, setPreview1] = useState<string | null>(null);
    const [preview2, setPreview2] = useState<string | null>(null);
    const [preview3, setPreview3] = useState<string | null>(null);
    const [preview4, setPreview4] = useState<string | null>(null);
    const [preview5, setPreview5] = useState<string | null>(null);
  
    const [isClient, setIsClient] = useState(false);
  
    // Refs for file inputs
    const image1Ref = useRef<HTMLInputElement>(null);
    const image2Ref = useRef<HTMLInputElement>(null);
    const image3Ref = useRef<HTMLInputElement>(null);
    const image4Ref = useRef<HTMLInputElement>(null);
    const image5Ref = useRef<HTMLInputElement>(null);
  
    // Ensure this runs only on the client side
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null; // Or a loading state
    }
  
    // Handle image file selection
    const handleImageChange = (
      event: React.ChangeEvent<HTMLInputElement>,
      setImage: (file: File | null) => void,
      setPreview: (preview: string | null) => void
    ) => {
      const file = event.target.files?.[0] || null;
      if (file) {
        setImage(file);
        setPreview(URL.createObjectURL(file));
      }
    };
  
    // Remove a preview image
    const removePreview = (
      setImage: (file: File | null) => void,
      setPreview: (preview: string | null) => void,
      inputRef: React.RefObject<HTMLInputElement>
    ) => {
      setImage(null);
      setPreview(null);
      if (inputRef.current) {
        inputRef.current.value = ""; // Clear the file input value
      }
    };
  
    // Handle form submission
    const handleSubmit = async () => {
      if (!title || !description || !author) {
        alert("Please fill in all required fields.");
        return;
      }
  
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("author", author);
      formData.append("status", status);
      formData.append("tags", tags);
  
      // Append images if they exist
      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);
      if (image5) formData.append("image5", image5);
  
      try {
        const newPost: BlogPost = await dispatch(createBlogPost(formData)).unwrap();
        console.log("New Post Created:", newPost);
  
        // Reset form fields
        setTitle("");
        setDescription("");
        setAuthor("");
        setStatus("draft");
        setTags("");
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
        setImage5(null);
        setPreview1(null);
        setPreview2(null);
        setPreview3(null);
        setPreview4(null);
        setPreview5(null);
      } catch (error) {
        alert("Failed to create post: " + error);
      }
    };
  
    return (
      <div className="p-4 flex flex-col space-y-6 md:w-full lg:w-3/4 xl:w-2/3 mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-xl font-bold mb-4">Create Post</h2>
  
          {/* Image Upload Sections */}
          {[
            { key: "image1", image: image1, preview: preview1, setImage: setImage1, setPreview: setPreview1, inputRef: image1Ref },
            { key: "image2", image: image2, preview: preview2, setImage: setImage2, setPreview: setPreview2, inputRef: image2Ref },
            { key: "image3", image: image3, preview: preview3, setImage: setImage3, setPreview: setPreview3, inputRef: image3Ref },
            { key: "image4", image: image4, preview: preview4, setImage: setImage4, setPreview: setPreview4, inputRef: image4Ref },
            { key: "image5", image: image5, preview: preview5, setImage: setImage5, setPreview: setPreview5, inputRef: image5Ref },
          ].map(({ key, preview, setImage, setPreview, inputRef }) => (
            <div key={key} className="mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, setImage, setPreview)}
                className="hidden"
                id={key}
                ref={inputRef}
              />
              <label htmlFor={key} className="cursor-pointer">
                {preview ? (
                  <div className="relative">
                    <Image
                      src={preview}
                      alt={`Preview ${key}`}
                      className="rounded-lg object-cover"
                      width={300}
                      height={200}
                    />
                    <button
                      onClick={() => removePreview(setImage, setPreview, inputRef)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 p-4 border border-dashed border-gray-300 rounded-lg">
                    Click to upload {key}
                  </div>
                )}
              </label>
            </div>
          ))}
  
          {/* Title */}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 mb-3 border border-gray-300 rounded"
          />
  
          {/* Description */}
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 mb-3 border border-gray-300 rounded resize-none"
          />
  
          {/* Author */}
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-3 mb-3 border border-gray-300 rounded"
          />
  
          {/* Status */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "draft" | "published")}
            className="w-full p-3 mb-3 border border-gray-300 rounded"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
  
          {/* Tags */}
          <input
            type="text"
            placeholder="Tags (comma-separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-3 mb-3 border border-gray-300 rounded"
          />
  
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white w-full p-2 rounded mt-4"
          >
            Submit
          </button>
        </div>
      </div>
    );
  };
  
  export default AdminDashboardComponent;