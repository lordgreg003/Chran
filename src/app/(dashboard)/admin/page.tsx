// src/screens/AdminDashboard.tsx
"use client";
import React from "react";
import ImageUploadButton from "@/app/ui/components/ImageUpload/ImageUploadButton";
 
const AdminDashboard = () => {
 

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ImageUploadButton   />
    </div>
  );
};

export default AdminDashboard;
