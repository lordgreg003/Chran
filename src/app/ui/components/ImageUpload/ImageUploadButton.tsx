import Image from "next/image";
import { createBlogPost } from "@/redux/blogSlice";
import { AppDispatch } from "@/redux/store";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  media?: { url: string; type: "image" | "video" }[]; // Updated media type
  likes: number;
  createdAt: Date;
}

const ImageUploadButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]); // Array to hold multiple images
  const [videoFiles, setVideoFiles] = useState<File[]>([]); // Array to hold multiple videos
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewUrls, setPreviewUrls] = useState<string[]>([]); // Array for previews

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files ? Array.from(event.target.files) : [];

    // Append new selected images to the existing images
    setImageFiles(prevFiles => [...prevFiles, ...selectedFiles]);

    // Generate preview URLs for each newly selected image and append to existing previews
    const imagePreviews = selectedFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls(prevPreviews => [...prevPreviews, ...imagePreviews]);
  };

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
    setVideoFiles(selectedFiles);

    // Generate preview URLs for videos
    const videoPreviews = selectedFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls(prevPreviews => [...prevPreviews, ...videoPreviews]);
  };

  const removePreview = () => setPreviewUrls([]); // Clear all previews

  const handleSubmit = async () => {
    if (title && description && (imageFiles.length > 0 || videoFiles.length > 0)) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);

      const media: { url: string; type: "image" | "video" }[] = [];

      // Append selected images to media array
      imageFiles.forEach(file => {
        media.push({ url: URL.createObjectURL(file), type: "image" });
        formData.append("media", file); // Add image file to FormData
      });

      // Append selected videos to media array
      videoFiles.forEach(file => {
        media.push({ url: URL.createObjectURL(file), type: "video" });
        formData.append("media", file); // Add video file to FormData
      });

      // Send the form data to the backend
      try {
        const newPost: BlogPost = await dispatch(createBlogPost(formData)).unwrap();
        console.log("New Post Created:", newPost);

        toggleModal(); // Close modal
        setTitle("");
        setDescription("");
        setImageFiles([]); // Clear image files array
        setVideoFiles([]); // Clear video files array
        setPreviewUrls([]); // Clear preview
      } catch (error) {
        alert("Failed to create post: " + error);
      }
    } else {
      alert("Please fill in the title, description, and select at least one image or video.");
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
            className="bg-white dark:bg-[#1E1E1E] p-6 rounded-lg shadow-lg w-80 relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <h2 className="text-xl font-bold mb-4">Create Post</h2>

            {/* Image Input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-3 w-full"
              multiple // Allow multiple image selection
            />

            {/* Video Input */}
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="mb-3 w-full"
              multiple // Allow multiple video selection
            />

            {previewUrls.length > 0 && (
              <div className="mb-3 relative">
                {previewUrls.map((url, index) => {
                  const isVideo = url.startsWith("blob:") && (url.includes("mp4") || url.includes("webm"));
                  return (
                    <div key={index} className="mb-2">
                      {isVideo ? (
                        <video controls width="100%" className="rounded-t-lg">
                          <source src={url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <Image
                          src={url}
                          alt={`Selected preview ${index}`}
                          layout="responsive"
                          width={100}
                          height={100}
                          quality={100}
                          className="rounded-t-lg object-cover"
                        />
                      )}
                    </div>
                  );
                })}
                <button
                  onClick={removePreview}
                  className="mt-2 text-red-500 hover:text-red-700"
                >
                  Remove Previews
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
