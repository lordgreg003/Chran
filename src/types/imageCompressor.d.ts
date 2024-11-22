declare module "image-compressor.js" {
  interface CompressorOptions {
    quality: number;
    maxWidth: number;
    maxHeight: number;
    success: (compressedFile: Blob) => void;
    error: (error: unknown) => void;
  }

  class Compressor {
    constructor(file: File, options: CompressorOptions);
  }

  export = Compressor;
}
