import { Skeleton } from "@/Components/ui/skeleton";
import React from "react";

const ServiceDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Image Skeleton */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <Skeleton className="h-full w-full" />
            <div className="absolute top-4 left-4">
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          </div>

          {/* Right Side: Content Skeleton */}
          <div className="space-y-6">
            <div>
              {/* Title Skeleton */}
              <Skeleton className="h-12 w-3/4 mb-4" />
              {/* Short Description Skeleton */}
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-2/3" />
            </div>

            {/* Info Badges Skeleton (Price & Duration) */}
            <div className="flex flex-wrap gap-4 py-4 border-y border-slate-800">
              <div className="flex items-center gap-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div>
                  <Skeleton className="h-3 w-12 mb-1" />
                  <Skeleton className="h-5 w-24" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div>
                  <Skeleton className="h-3 w-16 mb-1" />
                  <Skeleton className="h-5 w-20" />
                </div>
              </div>
            </div>

            {/* Overview Skeleton */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-48" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/5" />
              </div>
            </div>

            {/* Buttons Skeleton */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-15 flex-1 rounded-xl" />
              <Skeleton className="h-15 flex-1 rounded-xl" />
            </div>

            {/* Date Skeleton */}
            <div className="flex justify-center sm:justify-start pt-4">
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsSkeleton;
