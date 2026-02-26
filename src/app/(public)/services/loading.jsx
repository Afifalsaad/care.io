import React from "react";
import { Card, CardFooter, CardHeader } from "@/Components/ui/card";
import { Skeleton } from "@/Components/ui/skeleton";

const ServiceCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
      {[...Array(6)].map((_, index) => (
        <Card
          key={index}
          className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden bg-gray-500">
          {/* Image Skeleton */}
          <div className="relative w-full h-50">
            <Skeleton className="w-full h-full" />
          </div>

          <CardHeader className="space-y-3">
            {/* Title Skeleton */}
            <Skeleton className="h-6 w-3/4" />

            {/* Description Skeleton */}
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </CardHeader>

          <CardFooter>
            {/* Button Skeleton */}
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ServiceCardSkeleton;
