"use client";

import React, { useEffect, useState } from "react";
import { Calendar } from "@/Components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { getData } from "@/actions/Server/book";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const BookingForm = ({ id }) => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState(null);
  const [selectedTime, setSelectedTime] = useState();
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const user = useSession();
  const pathName = usePathname();

  const isExist = user?.data?.user;
  // console.log(user.data?.user?.name);
  console.log(isExist?.name);
  useEffect(() => {
    if (user.status !== "authenticated" && user.status !== "loading") {
      router.push(`/login?callbackUrl=${pathName}`);
    }
  }, [router, user, pathName]);

  useEffect(() => {
    setIsMounted(true);
    const fetchData = async () => {
      const res = await getData(id);
      setData(res);
    };
    fetchData();
  }, [id]);

  if (!isMounted)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2>Loading...</h2>
      </div>
    );

  // console.log(data);

  const handleBooking = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const bookingInfo = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      date: date?.toDateString(),
      time: selectedTime,
    };

    console.log("Booking Details:", bookingInfo);
    alert(`Thank You ${bookingInfo.name}! Your booking request was sent.`);
  };

  return (
    <div className="container mx-auto py-10 px-4 flex justify-center">
      <Card className="w-full max-w-4xl shadow-xl bg-linear-to-b from-secondary/10 via-secondary/20 to-secondary/10">
        <CardHeader className="text-center border-b pb-6 mb-6">
          <CardTitle className="text-3xl font-extrabold text-secondary">
            Book Our Service
          </CardTitle>
          <CardDescription className="text-base">
            Chooser your preferred service and time.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleBooking}>
          <CardContent className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <Label className="text-sm font-bold mb-3 block">
                  1. Select Your Date :
                </Label>
                <div className="border rounded-xl p-2 bg-card shadow-sm flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md text-primary"
                    disabled={(day) =>
                      day < new Date(new Date().setHours(0, 0, 0, 0)) ||
                      day.getDay() === 0
                    }
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-bold">
                  2. Select your time :
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      type="button"
                      variant={selectedTime === time ? "default" : "outline"}
                      className={`h-10 transition-all hover:cursor-pointer  ${
                        selectedTime === time ? "scale-105 text-white" : ""
                      }`}
                      onClick={() => setSelectedTime(time)}>
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <Label className="text-sm font-bold block">
                3. Fill your details :
              </Label>

              <div className="space-y-2">
                <Label
                  htmlFor="service"
                  className="text-sm font-bold text-primary">
                  Selected Service
                </Label>
                <Input
                  type="text"
                  name="service"
                  value={data?.title || ""}
                  readOnly
                  className="bg-muted/50 border cursor-not-allowed focus-visible:ring-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={isExist?.name}
                  readOnly
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={isExist?.email}
                  readOnly
                  required
                />
              </div>

              <div className="p-4 bg-muted/50 rounded-xl border border-dashed border-primary/30 text-sm mt-6">
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Date :</span>
                  <span className="font-semibold">
                    {date ? date.toDateString("en-US") : "Select Date"}
                  </span>
                </p>
                <p className="flex justify-between mt-1">
                  <span className="text-muted-foreground">Time :</span>
                  <span className="font-semibold">
                    {selectedTime || "Select Time"}
                  </span>
                </p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="pt-6">
            <Button
              type="submit"
              className="w-full text-lg font-bold h-12 rounded-xl shadow-lg bg-secondary hover:shadow-secondary/70 transition-all text-white">
              Confirm Appointment
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default BookingForm;
