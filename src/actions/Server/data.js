import { dbConnect } from "@/lib/dbConnect";

export const getDetails = async (id) => {
  try {
    const connection = await dbConnect.getConnection();
    console.log("Connected Successfully");
    connection.release();
  } catch (err) {
    console.log("Something went wrong", err);
  }
};
