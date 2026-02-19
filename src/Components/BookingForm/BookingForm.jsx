"use client";

import React, { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useForm } from "react-hook-form";

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const BookingForm = ({ id }) => {
  console.log(id);
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState();

  const handleBooking = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      date: date?.toDateString(),
      time: selectedTime,
    };

    console.log("Booking Details:", data);
    alert(`Thank You ${data.name}! Your booking request was sent.`);
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
                    className="rounded-md"
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
                      className={`h-10 transition-all hover:cursor-pointer ${
                        selectedTime === time
                          ? "scale-105"
                          : "border border-black"
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
                <Label htmlFor="service">Service</Label>
                <Select name="service" required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Your Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">
                      Baby Care Service
                    </SelectItem>
                    <SelectItem value="web-development">
                      Elderly Care Service
                    </SelectItem>
                    <SelectItem value="digital-marketing">
                      Sick People Care Service
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>

              <div className="p-4 bg-muted/50 rounded-xl border border-dashed border-primary/30 text-sm mt-6">
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Date :</span>
                  <span className="font-semibold">
                    {date ? date.toDateString() : "Select Date"}
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
              className="w-full text-lg font-bold h-12 rounded-xl shadow-lg bg-secondary hover:shadow-secondary/70 transition-all">
              Confirm Appointment
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default BookingForm;
