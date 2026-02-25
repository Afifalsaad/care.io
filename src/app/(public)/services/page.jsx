import ServiceCard from "@/Components/Home/ServiceCard";
import React from "react";

export const metadata = {
  title: "Care.IO - Services",
  description: "A website where you find care services.",

  url: "http://localhost:3000/",

  image: "https://i.ibb.co.com/s9brDwvd",
  type: "website",

  openGraph: {
    title: "Hero Kidz",
    description: "A website where you find educative toys for your child.",
    url: "http://localhost:3000/",
    site_name: "Hero Kidz",
    images: [
      {
        url: "https://i.ibb.co.com/fYmhk8J8",
        width: 1200,
        height: 630,
        alt: "Home Page Preview",
      },
      {
        url: "https://i.ibb.co.com/Td25FrF",
        width: 1200,
        height: 630,
        alt: "Product Page Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    creator: "@YourTwitterHandle",
    title: "Hero Kidz",
    description: "A website where you find educative toys for your child.",
    images: ["https://i.ibb.co.com/fYmhk8J8"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  robots: "index, follow",
  keywords: ["react", "next.js", "full stack", "MERN", "productivity"],
};

const Services = async () => {
  return (
    <div className="mt-20">
      <ServiceCard></ServiceCard>
    </div>
  );
};

export default Services;
