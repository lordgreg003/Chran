"use client";
import Image from "next/image";
import { createBlogPost} from "@/redux/blogSlice";
import { AppDispatch } from "@/redux/store";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  mediaUrl?: string;
  mediaType?: string;
  likes: number;
  createdAt: Date;
}

const ImageUploadButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setImageFile(selectedFile);
    setVideoFile(null); // Clear video if image is selected

    if (selectedFile) {
      setPreviewUrl(URL.createObjectURL(selectedFile)); // Generate preview URL
    }
  };

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setVideoFile(selectedFile);
    setImageFile(null); // Clear image if video is selected

    setPreviewUrl(null); // Clear preview for videos (only displaying image preview)
  };

  const removePreview = () => setPreviewUrl(null); // Clear preview manually

  const handleSubmit = async () => {
    if (title && description && (imageFile || videoFile)) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);

      if (imageFile) formData.append("media", imageFile);
      if (videoFile) formData.append("media", videoFile);

      try {
        const newPost: BlogPost = await dispatch(createBlogPost(formData)).unwrap();
        // dispatch(fetchAllPosts({ page: 1, limit: 10 }));
        console.log("New Post Created:", newPost);

        toggleModal(); // Close modal
        setTitle("");
        setDescription("");
        setImageFile(null);
        setVideoFile(null);
        setPreviewUrl(null); // Clear the preview
      } catch (error) {
        alert("Failed to create post: " + error);
      }
    } else {
      alert("Please fill in the title, description, and select an image or video.");
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleModal}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg focus:outline-none"
        aria-label="Upload Post"
      >
        📷
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
          onClick={toggleModal} // Close modal on background click
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80 relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <h2 className="text-xl font-bold mb-4">Create Post</h2>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-3 w-full"
            />

            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="mb-3 w-full"
            />

            {previewUrl && (
              <div className="mb-3 relative">
                <Image
                  src={previewUrl}
                  alt="Selected preview"
                  layout="responsive"
                  width={100}
                  height={100}
                  quality={100}
                  className="rounded-t-lg object-cover"
                />
                <button
                  onClick={removePreview}
                  className="mt-2 text-red-500 hover:text-red-700"
                >
                  Remove Preview
                </button>
              </div>
            )}

            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
            ></textarea>

            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white w-full p-2 rounded"
            >
              Submit
            </button>

            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploadButton;
