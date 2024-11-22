// import { FFmpeg } from '@ffmpeg/ffmpeg';

// interface VideoCompressOptions {
//   targetSizeMB: number; // Target size in MB (e.g., 20MB or 10MB)
// }

// export const compressVideo = async (
//   videoFile: File,
//   options: VideoCompressOptions = { targetSizeMB: 20 }
// ): Promise<File> => {
//   const ffmpeg = FFmpeg.createFFmpeg({ log: true });

//   // Load FFmpeg if it hasn't been loaded already
//   if (!ffmpeg.loaded) {
//     await ffmpeg.load();
//   }

//   const filePath = videoFile.name;

//   // Write the video file to FFmpeg's virtual file system (FS)
//   const fileData = await videoFile.arrayBuffer();
//   ffmpeg.FS('writeFile', filePath, new Uint8Array(fileData));

//   // Get the video duration to help calculate the target bitrate
//   const videoDuration = await getVideoDuration(ffmpeg, filePath);

//   // Calculate the target bitrate (in bits per second)
//   const targetBitrate = calculateTargetBitrate(options.targetSizeMB * 8 * 1000000, videoDuration);

//   // Run FFmpeg to compress the video
//   await ffmpeg.run(
//     '-i', filePath,             // Input video file
//     '-b:v', targetBitrate,      // Set video bitrate
//     '-bufsize', targetBitrate,  // Buffer size
//     '-maxrate', targetBitrate,  // Max bitrate
//     '-preset', 'fast',          // Compression preset
//     'output.mp4'                // Output file name
//   );

//   // Read the compressed file data from FFmpeg's virtual file system
//   const compressedFileData = ffmpeg.FS('readFile', 'output.mp4');

//   // Return a new File object with the compressed video data
//   return new File([compressedFileData.buffer], filePath, { type: 'video/mp4' });
// };

// // Helper function to calculate the target bitrate based on file size and video duration
// const calculateTargetBitrate = (targetSize: number, duration: number): string => {
//   const bitrate = (targetSize / duration).toFixed(0);
//   return bitrate;
// };

// // Helper function to get the video duration from the file
// const getVideoDuration = async (ffmpeg: FFmpeg, filePath: string): Promise<number> => {
//   // Run FFmpeg to get the video metadata, including duration
//   await ffmpeg.run('-i', filePath);

//   // FFmpeg logs the duration to the console, capture it from stdout
//   const logData = ffmpeg.stdout;

//   // Search the log for the duration line
//   const durationMatch = logData.find((line: string) => line.includes('Duration'));

//   if (durationMatch) {
//     const durationStr = durationMatch.split(' ')[1];
//     const [hours, minutes, seconds] = durationStr.split(':').map(Number);
//     return hours * 3600 + minutes * 60 + seconds;
//   }

//   // Return 0 if duration is not found
//   return 0;
// };
