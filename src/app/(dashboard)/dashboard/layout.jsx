import { Providers } from "@/app/(dashboard)/dashboard/Provider";
import Header from "@/Components/Dashboard/Header";
import Sidebar from "@/Components/Dashboard/Sidebar";
import NextAuthProvider from "@/provider/NextAuthProvider";
import { getServerSession } from "next-auth";
import React from "react";

const DAshboardLayout = async ({ children }) => {

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

export default DAshboardLayout;
