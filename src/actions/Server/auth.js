"use server";
import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const postUser = async (payload) => {
  try {
    const { name, nidNumber, email, number, password } = payload;

    const [isExist] = await dbConnect.execute(
      "select email from users where email=?",
      [email]
    );

    if (isExist.length > 0) {
      return { success: false, message: "user already registered." };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `INSERT INTO users (name, email, NID, number, password)
    VALUES (?, ?, ?, ?, ?)`;

    await dbConnect.execute(query, [
      name,
      email,
      nidNumber,
      number,
      hashedPassword,
    ]);
    return { success: true };
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

export const loginUser = async (payload) => {
  const { email, password } = payload;

  if (!email || !password) return null;

  const [rows] = await dbConnect.execute(
    "select id, name, email, password from users where email=?",
    [email]
  );

  if (rows.length === 0) {
    return null;
  }

  const user = rows[0];

  const isMatched = await bcrypt.compare(password, user.password);

  if (isMatched) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  } else {
    return null;
  }
};
