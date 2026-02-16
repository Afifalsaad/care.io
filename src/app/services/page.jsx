import ServiceCard from "@/Components/Home/ServiceCard";
import { dbConnect } from "@/lib/dbConnect";
import React from "react";

const Services = async () => {
  return (
    <div>
      <ServiceCard></ServiceCard>
    </div>
  );
};

export default Services;
