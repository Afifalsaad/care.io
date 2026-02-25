"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ThemeToggle } from "../ThemeSwitcher/ThemeSwitcher";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const { data: session, status } = useSession();

  const toggleSubMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div>
      <nav className="lg:min-w-62.5 w-max max-lg:min-w-8">
        <div
          className={`shadow-lg h-screen fixed top-0 left-0 overflow-auto z-99 lg:min-w-62.5 lg:w-max
            ${
              isSidebarOpen
                ? "max-lg:w-62.5 max-lg:visible"
                : "max-lg:w-0 max-lg:invisible"
            }`}>
          <div className="flex items-center gap-2 pt-6 pb-2 px-4 sticky top-0min-h-16 z-100">
            <Link href="/" className="block max-sm:hidden">
              <h2 className="text-2xl font-bold">care.IO</h2>
            </Link>
            <ThemeToggle />
            {/* MOBILE CLOSE BUTTON */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden ml-auto">
              <svg className="w-7 h-7 text-primary" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="py-4 px-4">
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => toggleSubMenu("dashboard")}
                  className="w-full text-left text-primary text-[15px] font-medium flex items-center hover:bg-muted hover:cursor-pointer rounded-md px-3 py-2.5 transition-all duration-100">
                  <span className="overflow-hidden text-primary whitespace-nowrap">
                    Dashboard
                  </span>

                  <svg
                    className={`arrowIcon w-3 fill-current ml-auto transition-all duration-500 ${
                      openMenus.dashboard ? "rotate-0" : "-rotate-90"
                    }`}
                    viewBox="0 0 451.847 451.847">
                    <path d="M225.923 354.706L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449z" />
                  </svg>
                </button>

                {/* SUBMENU */}
                <ul
                  className={`sub menu overflow-hidden transition-[max-height] duration-200 ease-in-out ml-8 ${
                    openMenus.dashboard ? "max-h-96" : "max-h-0"
                  }`}>
                  <Link
                    href="/dashboard"
                    className="block text-primary text-[15px] hover:bg-muted rounded-md px-3 py-2">
                    Dashboard Home
                  </Link>
                  <Link
                    href="/dashboard/myOrders"
                    className="block text-primary text-[15px] hover:bg-muted rounded-md px-3 py-2">
                    My orders
                  </Link>
                  {session?.role !== "user" ? (
                    ""
                  ) : (
                    <Link
                      href="/dashboard/payments"
                      className="block text-primary text-[15px] hover:bg-muted rounded-md px-3 py-2">
                      Payment History
                    </Link>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* MOBILE OPEN BUTTON */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden ml-4 mt-4 fixed top-0 left-0 z-50">
        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
