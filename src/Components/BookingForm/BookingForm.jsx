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
import { getData, postBooking } from "@/actions/Server/book";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { toast, Zoom } from "react-toastify";
import { SpinnerCustom } from "../ui/spinner";

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
  const [duration, setDuration] = useState(1);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("hours");
  const router = useRouter();
  const user = useSession();
  const isExist = user?.data?.user;

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
        <SpinnerCustom />
      </div>
    );

  const calculatePrice = () => {
    if (!data?.price || !data) return 0;

    const price = parseInt(data?.price);
    const qty = parseInt(duration) || 0;
    console.log(price, qty);

    if (unit === "days") {
      return price * 8 * qty;
    } else {
      return price * qty;
    }
  };

  const handleBooking = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!selectedTime) {
      return toast.error("Please select a time.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }

    const formData = new FormData(e.currentTarget);
    const bookingInfo = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      duration: formData.get("duration"),
      unit: formData.get("unit"),
      division: formData.get("division"),
      district: formData.get("district"),
      city: formData.get("city"),
      address: formData.get("address"),
      date: date?.toDateString(),
      totalCost: calculatePrice(),
      time: selectedTime,
      status: "pending",
    };

    const res = await postBooking(bookingInfo);
    if (res?.success) {
      toast.success(`${res?.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
      setTimeout(() => {
        router.push("/dashboard/myOrders");
      }, 5000);
    } else {
      toast.error(`${res?.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto py-10 px-4 flex justify-center">
      <Card className="w-full max-w-4xl shadow-xl bg-linear-to-b from-secondary/10 via-secondary/20 to-secondary/10">
        <CardHeader className="text-center border-b pb-6 mb-6">
          <CardTitle className="text-3xl font-extrabold text-secondary">
            Book Our Service
          </CardTitle>
          <CardDescription className="text-gray-500">
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
                      required
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

              {/* --- 1. Select Duration --- */}
              <div className="space-y-2">
                <Label htmlFor="duration" className="text-sm font-semibold">
                  Select Duration (days/hours)
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="duration"
                    type="number"
                    name="duration"
                    min="1"
                    defaultValue={unit}
                    placeholder="Enter value"
                    className="flex-1"
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
                  <select
                    name="unit"
                    className="flex h-10 w-32 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    onChange={(e) => setUnit(e.target.value)}>
                    <option value="hours">Hours</option>
                    <option value="days">Days</option>
                  </select>
                </div>
              </div>

              {/* --- 2. Select Location --- */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold">Select Location</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input name="division" placeholder="Division" required />
                  <Input name="district" placeholder="District" required />
                  <Input name="city" placeholder="City" required />
                  <Input name="address" placeholder="Area / Address" required />
                </div>
              </div>

              {/* --- Existing Fields: Service, Name, Email --- */}
              <div className="space-y-2">
                <Label
                  htmlFor="service"
                  className="text-sm font-semibold text-primary">
                  Selected Service
                </Label>
                <Input
                  type="text"
                  name="service"
                  defaultValue={data?.title || ""}
                  readOnly
                  className="bg-muted/50 border cursor-not-allowed focus-visible:ring-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={isExist?.name || ""}
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
                  defaultValue={isExist?.email || ""}
                  readOnly
                  required
                />
              </div>

              {/* --- 3. Dynamic Total Cost & Summary --- */}
              <div className="p-4 bg-secondary/10 rounded-xl border border-dashed border-secondary/50 text-sm mt-6 space-y-2">
                <p className="flex justify-between">
                  <span>Date & Time:</span>
                  <span className="font-semibold">
                    {date ? date.toDateString() : "Select Date"} at{" "}
                    {selectedTime || "Time"}
                  </span>
                </p>

                <p className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">
                    {duration || 0} {unit}
                  </span>
                </p>

                <div className="border-t border-secondary/20 pt-2 flex justify-between items-center">
                  <span className="text-lg font-bold text-secondary">
                    Total Cost :
                  </span>
                  <span className="text-xl font-extrabold text-primary">
                    {calculatePrice().toLocaleString()} BDT
                  </span>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="pt-6">
            {loading ? (
              <Button
                disabled
                className="w-full text-lg font-bold h-12 rounded-xl shadow-lg bg-secondary hover:shadow-secondary/70 disabled:cursor-not-allowed transition-all cursor-not-allowed text-white ">
                Processing...
              </Button>
            ) : (
              <Button className="w-full text-lg font-bold h-12 rounded-xl shadow-lg bg-secondary hover:shadow-secondary/70 transition-all text-white hover:cursor-pointer">
                Confirm Appointment
              </Button>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default BookingForm;
