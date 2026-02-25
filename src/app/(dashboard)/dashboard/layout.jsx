import { Providers } from "@/app/(dashboard)/dashboard/Provider";
import Header from "@/Components/Dashboard/Header";
import Sidebar from "@/Components/Dashboard/Sidebar";
import NextAuthProvider from "@/provider/NextAuthProvider";
import React from "react";

export const metadata = {
  title: "Care.IO - Dashboard",
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


const DashboardLayout = async ({ children }) => {
  return (
    <div>
      <NextAuthProvider>
        <Providers>
          <div className="relative h-full min-h-screen">
            <div className="flex items-start">
              <Sidebar></Sidebar>

              <section className="main-content w-full px-6 space-y-5">
                <header>
                  <Header></Header>
                </header>
                <main>{children}</main>
              </section>
            </div>
          </div>
        </Providers>
      </NextAuthProvider>
    </div>
  );
};

export default DashboardLayout;
