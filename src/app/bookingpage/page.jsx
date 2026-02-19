"use client";
import BookingForm from "@/Components/BookingForm/BookingForm";
import { useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("serviceId");
  const router = useRouter();
  const user = useSession();
  console.log(user);
  if (user.status !== "authenticated") {
    router.push("/login");
  }
  console.log(id);
  return (
    <div>
      <BookingForm id={id}></BookingForm>
    </div>
  );
}
