// This file is kept for compatibility but we're now using Firestore
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

let db: any;

try {
  // Only attempt to connect if DATABASE_URL is provided
  if (process.env.DATABASE_URL) {
    const poolConnection = mysql.createPool({
      uri: process.env.DATABASE_URL,
    });

    db = drizzle(poolConnection);
    console.log("MySQL connection established");
  } else {
    console.log("No DATABASE_URL provided, using Firestore instead");
    db = null;
  }
} catch (error) {
  console.error("Error connecting to MySQL:", error);
  db = null;
}

export { db };
