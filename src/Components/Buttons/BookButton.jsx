"use client";
import React from "react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const BookButton = ({ result }) => {
  const user = useSession();
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);

  const bookService = () => {
    if (user.status !== "authenticated") {
      router.push(`/login?callbackUrl=${pathName}`);
    } else {
      alert(result.id);
    }
  };
  console.log(result);
  return (
    <div>
      <Button
        onClick={bookService}
        size="lg"
        className="bg-secondary px-8 py-6 text-lg rounded-xl flex-1">
        Book This Service
      </Button>
    </div>
  );
};

export default BookButton;
