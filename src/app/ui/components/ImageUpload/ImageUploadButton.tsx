"use client";
import React, { useState } from "react";

interface ImageUploadButtonProps {
  onUpload: (
    title: string,
    description: string,
    imageFile?: File | null,
    videoFile?: File | null
  ) => void;
}

const ImageUploadButton: React.FC<ImageUploadButtonProps> = ({ onUpload }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const toggleModal = () => setIsOpen(!isOpen);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setImageFile(selectedFile);
  };

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setVideoFile(selectedFile);
  };

  const handleSubmit = () => {
    if (title && description) {
      onUpload(title, description, imageFile, videoFile);
      toggleModal(); // Close modal
      setTitle("");
      setDescription("");
      setImageFile(null);
      setVideoFile(null);
    } else {
      alert("Please fill in the title and description");
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
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
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
