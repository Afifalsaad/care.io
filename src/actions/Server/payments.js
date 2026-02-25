"use server";
import { dbConnect } from "@/lib/dbConnect";

export const getPayments = async () => {
  const [rows] = await dbConnect.execute("select * from payment_history");
  return rows;
};
