"use client";
import React from "react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const BookButton = ({ result }) => {
  const user = useSession();
  const router = useRouter();
  const pathName = usePathname();
  console.log(result);

  const bookService = () => {
    if (user.status !== "authenticated") {
      router.push(``);
    } else {
      router.push(``);
    }
  };
  return (
    <div>
      <Link href={`/bookingpage/${result.id}`}>
        <Button
          size="lg"
          className="bg-secondary text-white px-8 py-6 text-lg rounded-xl flex-1">
          Book This Service
        </Button>
      </Link>
    </div>
  );
};

export default BookButton;
