"use server";
import { dbConnect } from "@/lib/dbConnect";
export const postUser = async (payload) => {
  try {
    const { firstName, lastName, email, number, password } = payload;
    console.log(payload);
    const query = `INSERT INTO users (firstName, lastName, email, number, password)
  VALUES (?, ?, ?, ?, ?)`;

    const [isExist] = await dbConnect.execute(
      "select email from users where email=?",
      [email]
    );

    if (isExist.length > 0) {
      return { success: false, message: "user already registered." };
    }

    await dbConnect.execute(query, [
      firstName,
      lastName,
      email,
      number,
      password,
    ]);
    return { success: true };
  } catch (err) {
    console.log("Something went wrong", err);
  }
};
