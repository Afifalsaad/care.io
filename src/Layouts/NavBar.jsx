"use client";
import React, { useState } from "react";
import { ThemeToggle } from "../Components/ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import { useSession } from "next-auth/react";
import AuthButton from "@/Components/Buttons/AuthButtons";

const NavBar = () => {
  // const user = useSession();
  // console.log(user);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 border-b bg-background/95 border-border py-4 px-2 min-h-16 tracking-wide z-50 ">
      <div className="flex flex-wrap items-center gap-4 w-full max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link href="/" className="max-sm:hidden">
          <h2 className="text-2xl font-bold mr-5">care.IO</h2>
        </Link>
        <Link href="/" className="hidden max-sm:block">
          <h2 className="text-2xl font-bold">care.IO</h2>
        </Link>
        <ThemeToggle />
        {/* Mobile Menu Overlay & Container */}
        <div
          id="collapseMenu"
          className={`lg:flex lg:flex-auto lg:ml-12 ${
            isOpen ? "max-lg:block" : "max-lg:hidden"
          } max-lg:before:fixed max-lg:before:bg-black/50 max-lg:before:inset-0 max-lg:before:z-50`}>
          {/* Close Button (Mobile Only) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden fixed top-2 right-4 z-100 rounded-full bg-card w-9 h-9 flex items-center justify-center border border-border cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 fill-foreground"
              viewBox="0 0 320.591 320.591">
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
            </svg>
          </button>

          {/* Nav Links */}
          <div className="lg:flex lg:flex-auto max-lg:fixed max-lg:bg-card max-lg:w-2/3 max-lg:min-w-62.5 max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-60">
            <ul className="lg:flex lg:gap-x-8 max-lg:space-y-4">
              <li className="mb-6 hidden max-lg:block">
                <h2 className="text-2xl font-bold">care.IO</h2>
              </li>
              <li className="max-lg:border-b max-lg:border-border max-lg:pb-2">
                <Link
                  className="text-primary block font-medium text-[15px]"
                  href={"/services"}>
                  Services
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:border-border max-lg:pb-2">
                <Link
                  className="text-primary block font-medium text-[15px]"
                  href={"/dashboard"}>
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center ml-auto space-x-4">
          <AuthButton></AuthButton>

          {/* Hamburger Menu Icon (Mobile Only) */}
          <button onClick={toggleMenu} className="lg:hidden cursor-pointer">
            <svg
              className="w-7 h-7 fill-foreground"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
