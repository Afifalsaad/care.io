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

export const postBooking = async (formData) => {
  try {
    const {
      name,
      email,
      service,
      date,
      time,
      duration,
      unit,
      division,
      district,
      city,
      address,
      totalCost,
      status,
    } = formData;

    const [rows] = await dbConnect.execute(
      "select email , time from bookings where email = ? and time = ?",
      [email, time]
    );

    if (rows.length > 0) {
      return {
        success: false,
        message: "You've already booked this service at selected time.",
      };
    }

    const query = `INSERT INTO bookings (name, email, service, date, time , duration, unit, division, district, city, address , totalCost, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const result = await dbConnect.execute(query, [
      name,
      email,
      service,
      date,
      time,
      duration,
      unit,
      division,
      district,
      city,
      address,
      totalCost,
      status,
    ]);

    JSON.parse(JSON.stringify(result));

    return {
      success: true,
      message: "Service Booked Successfully",
    };
  } catch (error) {
    console.log(error);
    return { message: error };
  }
};

export const getBooking = async (email) => {
  const [rows] = await dbConnect.execute(
    "select * from bookings where email= ?",
    [email]
  );

  console.log(rows);
  return rows;
};
