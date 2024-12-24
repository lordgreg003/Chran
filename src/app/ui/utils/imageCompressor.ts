"use client";
import Compressor from "image-compressor.js";
interface CompressOptions {
  maxWidth: number;
  maxHeight: number;
  maxSizeMB: number;
}

export const compressImage = (
  imageFile: File,
  options: CompressOptions = {
    maxWidth: 800,
    maxHeight: 800,
    maxSizeMB: 2,
  }
): Promise<File> => {
  return new Promise((resolve, reject) => {
    const quality = Math.min(1, Math.max(0.1, options.maxSizeMB / 10)); // Map maxSizeMB to valid quality range

    new Compressor(imageFile, {
      quality: quality, // Use the computed quality value
      maxWidth: options.maxWidth,
      maxHeight: options.maxHeight,
      success: (compressedFile: Blob) => {
        resolve(
          new File([compressedFile], imageFile.name, { type: imageFile.type })
        );
      },
      error: (error: unknown) => {
        reject(error);
      },
    });
  });
};
