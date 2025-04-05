import 'dotenv/config';
import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import * as schema from '../shared/schema';

async function main() {
  console.log('Starting database migration...');
  
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL must be set in your .env file');
  }

  // Create a MySQL connection
  const connection = await mysql.createConnection({
    uri: process.env.DATABASE_URL
  });

  // Create schemas and tables
  console.log('Creating database schema...');
  
  try {
    // Create database if it doesn't exist
    const dbName = new URL(process.env.DATABASE_URL).pathname.substring(1);
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
    await connection.query(`USE \`${dbName}\``);
    
    // Initialize drizzle
    const db = drizzle(connection, { schema, mode: 'default' });
    
    // Create all tables from the schema
    await connection.query(`
      CREATE TABLE IF NOT EXISTS \`users\` (
        \`id\` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        \`username\` VARCHAR(255) NOT NULL UNIQUE,
        \`password\` VARCHAR(255) NOT NULL
      )
    `);
    
    await connection.query(`
      CREATE TABLE IF NOT EXISTS \`contact_submissions\` (
        \`id\` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        \`name\` VARCHAR(255) NOT NULL,
        \`email\` VARCHAR(255) NOT NULL,
        \`subject\` VARCHAR(255) NOT NULL,
        \`service\` VARCHAR(255) NOT NULL,
        \`message\` TEXT NOT NULL,
        \`created_at\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    await connection.query(`
      CREATE TABLE IF NOT EXISTS \`newsletter_subscriptions\` (
        \`id\` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        \`email\` VARCHAR(255) NOT NULL UNIQUE,
        \`created_at\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    console.log('Database migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await connection.end();
  }
}

main().catch(console.error); 