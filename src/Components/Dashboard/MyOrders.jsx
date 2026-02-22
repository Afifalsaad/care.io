"use client";
import { getBooking } from "@/actions/Server/book";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { SpinnerCustom } from "../ui/spinner";

const MyOrders = () => {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBooking(session?.user?.email);
        console.log("fetched data", result);
        setBookings(result);
      } catch (err) {
        console.log("error", err);
      }
    };

    if (status !== "loading") {
      fetchData();
    }
  }, [session?.user?.email, status, setBookings]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <SpinnerCustom></SpinnerCustom>
      </div>
    );
  }
  console.log("fetched data", bookings);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className=" whitespace-nowrap">
            <tr>
              <th className="px-4 py-4 text-left text-xs font-semibold  uppercase tracking-wider">
                Service Name
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold  uppercase tracking-wider">
                Duration
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold  uppercase tracking-wider">
                Location
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold  uppercase tracking-wider">
                Total Cost
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold  uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 whitespace-nowrap">
            {bookings.map((d) => (
              <tr key={d.id}>
                <td className="px-4 py-4 text-sm  font-medium">{d.service}</td>
                <td className="px-4 py-4 text-sm font-medium">
                  {d.duration} {d.unit}
                </td>
                <td className="px-4 py-4 text-sm font-medium">{d.district}</td>
                <td className="px-4 py-4 text-sm font-medium">{d.totalCost}</td>
                <td className="px-4 py-4 text-sm font-medium">{d.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
