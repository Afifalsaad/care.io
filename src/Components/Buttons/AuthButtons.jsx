"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButton = () => {
  const session = useSession();
  return (
    <div>
      {session?.status == "authenticated" ? (
        <>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 text-sm rounded-md font-medium text-primary-foreground bg-secondary hover:opacity-90 transition-all cursor-pointer">
            Log Out
          </button>
        </>
      ) : (
        <>
          <Link
            href={"/login"}
            className="px-4 py-2 text-sm rounded-md font-medium text-primary-foreground bg-secondary hover:opacity-90 transition-all cursor-pointer">
            Log in
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButton;
