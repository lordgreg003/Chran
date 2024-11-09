// src/components/BlogSkeleton.tsx

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export const BlogSkeleton = () => {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="rounded-t-lg bg-gray-100 h-[250px] w-full" /> {/* Placeholder for image */}
        <div className="p-4">
          <div className="mb-2 h-4 w-3/4 bg-gray-300 rounded-md" /> {/* Placeholder for title */}
          <div className="mb-4 h-3 w-2/3 bg-gray-300 rounded-md" /> {/* Placeholder for description */}
        </div>
      </div>
    </div>
  );
};
