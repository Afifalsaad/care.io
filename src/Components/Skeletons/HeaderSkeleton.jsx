import React from "react";

const HeaderSkeleton = () => {
  return (
    <div>
      <div className="w-full">
        <header className="z-50 sticky top-0 pt-4 bg-white/50 animate-pulse">
          <div className="flex flex-wrap items-center px-6 py-2 shadow-md min-h-14 rounded-md w-full relative">
            <div className="flex items-center flex-wrap gap-x-8 gap-y-4 z-50 w-full">
              {/* Search Bar Skeleton */}
              <div className="flex items-center gap-4 py-1 w-48 md:w-64">
                {/* Search Icon Skeleton */}
                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                {/* Input Skeleton */}
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>

              {/* Profile/Dropdown Skeleton */}
              <div className="flex items-center gap-8 ml-auto">
                <div className="relative w-10 h-10 flex shrink-0 rounded-full bg-gray-300">
                  {/* User Image Circle */}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HeaderSkeleton;
