import ServiceCard from "@/Components/Home/ServiceCard";
import { dbConnect } from "@/lib/dbConnect";
import { useSession } from "next-auth/react";
import React from "react";

const Services = async () => {
  return (
    <div className="mt-20">
      <ServiceCard></ServiceCard>
    </div>
  );
};

export default Services;
