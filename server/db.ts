import 'dotenv/config';
import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Parse the connection string and create a connection pool
export const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
});

// Create the drizzle client
export const db = drizzle(pool, { mode: 'default', schema });
