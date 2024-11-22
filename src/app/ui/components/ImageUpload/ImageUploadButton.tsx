import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BlogPost, createBlogPost } from "@/redux/blogSlice";
import { compressImage } from "../../utils/imageCompressor";

const ImageUploadButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [videoFiles, setVideoFiles] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
  
    try {
      const compressedFiles = await Promise.all(
        selectedFiles.map(async (file) => {
           
          const compressedFile = await compressImage(file, {
            maxSizeMB: 2,
            maxHeight: 800,
            maxWidth : 800 ,
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

      // Append image and video files
      imageFiles.forEach((file) => formData.append("media", file));
      videoFiles.forEach((file) => formData.append("media", file));

      try {
        const newPost: BlogPost = await dispatch(createBlogPost(formData)).unwrap();
        console.log("New Post Created:", newPost);

        // Reset modal and form state
        toggleModal();
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
          onClick={toggleModal}
        >
          <div
            className="bg-white dark:bg-[#1E1E1E] p-6 rounded-lg shadow-lg w-80 relative"
            onClick={(e) => e.stopPropagation()}
          >
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
                      alt={`Selected preview ${index}`}
                      layout="responsive"
                      width={100}
                      height={100}
                      quality={100}
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
