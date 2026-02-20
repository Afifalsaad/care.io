"use server";

import { dbConnect } from "@/lib/dbConnect";

export const getData = async (id) => {
  try {
    const [rows] = await dbConnect.execute(
      "select * from services where id = ?",
      [id]
    );
    const data = rows[0];
    return data;
  } catch (err) {
    return { success: false, message: err };
  }
};
