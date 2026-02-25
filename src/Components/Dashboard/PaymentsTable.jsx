"use client";
import { getPayments } from "@/actions/Server/payments";
import React, { useEffect, useState } from "react";
import { SpinnerCustom } from "../ui/spinner";

const PaymentsTable = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getPayments();
        // console.log(result[0]);
        setPayments(result);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-130">
        <SpinnerCustom></SpinnerCustom>;
      </div>
    );
  }

  //   const paymentsData = payments[0];

  return (
    <div>
      <div className="p-6">
        <div className="w-full border border-gray-200 shadow-sm rounded-2xl p-4 overflow-x-auto">
          <table className="min-w-full">
            <thead className=" whitespace-nowrap">
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left text-[13px] font-medium ">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-[13px] font-medium ">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-[13px] font-medium ">
                  Service Name
                </th>
                <th className="px-4 py-3 text-left text-[13px] font-medium ">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-[13px] font-medium ">
                  Payment Status
                </th>
              </tr>
            </thead>

            <tbody className="whitespace-nowrap divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-4 py-3 text-[13px]  font-medium">
                    {payment.user_name}
                  </td>
                  <td className="px-4 py-3 text-[13px]  font-medium">
                    {payment.user_email}
                  </td>
                  <td className="px-4 py-3 text-[13px]  font-medium">
                    {payment.service_name}
                  </td>
                  <td className="px-4 py-3 text-[13px]  font-medium">
                    {payment.amount}
                  </td>
                  <td className="px-4 py-3 text-[13px]  font-medium">
                    {payment.payment_status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentsTable;
