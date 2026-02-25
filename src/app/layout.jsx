import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../Layouts/NavBar";
import { Providers } from "./(dashboard)/dashboard/Provider";
import Footer from "../Layouts/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";
import { ToastContainer, Zoom } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Care.IO - Home",
  description: "A website where you find care services.",

  url: "http://localhost:3000/",

  image: "https://i.ibb.co.com/s9brDwvd",
  type: "website",

  openGraph: {
    title: "Care.IO",
    description: "A website where you find educative toys for your child.",
    url: "http://localhost:3000/",
    site_name: "Care.IO",
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
    title: "Care.IO",
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

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Providers>
            <main>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Zoom}
              />
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </NextAuthProvider>
  );
}
