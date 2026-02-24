"use client";
import { deleteBooking, getBooking } from "@/actions/Server/book";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { SpinnerCustom } from "../ui/spinner";
import { toast, Zoom } from "react-toastify";
import Swal from "sweetalert2";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import PayButton from "../Buttons/PayButton";

const MyOrders = () => {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);

  const handlePayment = () => {
    console.log("clicked");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBooking(session?.user?.email);
        setBookings(result);
      } catch (err) {
        console.log("error", err);
      }
    };

    if (status !== "loading") {
      fetchData();
    }
  }, [session?.user?.email, status, setBookings]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Do you want to delete this service?",
      showCancelButton: true,
      confirmButtonText: `Delete`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteBooking(id);
        if (res?.success) {
          setBookings((prev) => prev.filter((item) => item.id !== id));
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
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <SpinnerCustom></SpinnerCustom>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="flex items-center justify-center h-110">
        <h2 className="font-semibold text-xl">No Data Found</h2>
      </div>
    );
  }

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
              <th className="px-4 py-4 text-left text-xs font-semibold  uppercase tracking-wider">
                Actions
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
                <td className="px-4 py-4 text-sm">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="cursor-pointer text-blue-600 font-medium mr-3">
                        View Details
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Booking Details</AlertDialogTitle>
                        <AlertDialogDescription>
                          Detailed information about your booking for{" "}
                          {d.service}.
                        </AlertDialogDescription>
                        <div className="space-y-2 pt-4 text-sm border-t">
                          <p>
                            <strong>Service:</strong> {d.service}
                          </p>
                          <p>
                            <strong>Duration:</strong> {d.duration} {d.unit}
                          </p>
                          <p>
                            <strong>District:</strong> {d.district}
                          </p>
                          <p>
                            <strong>Total Cost:</strong> ${d.totalCost}
                          </p>
                          <p>
                            <strong>Status:</strong>{" "}
                            <span className="capitalize">{d.status}</span>
                          </p>
                        </div>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Close</AlertDialogAction>
                        <AlertDialogAction>
                          <PayButton data={d}></PayButton>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <button
                    onClick={() => handleDelete(d.id)}
                    className="cursor-pointer text-red-600 font-medium hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
