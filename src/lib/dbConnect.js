import mysql from "mysql2/promise";

export const dbConnect = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "care.io.db",
});

try {
  const connection = await dbConnect.getConnection();
  console.log("Connected Successfully");
  connection.release();
} catch (err) {
  console.log("Something went wrong", err);
}
