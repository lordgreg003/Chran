 "use client";
import React from "react";
 
import dynamic from "next/dynamic";

const ImageUploadButton = dynamic(() => import("@/app/ui/components/ImageUpload/ImageUploadButton"), { 
  ssr: false 
});
 
const AdminDashboard = () => {
 

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ImageUploadButton   />
    </div>
  );
};

export default AdminDashboard;
