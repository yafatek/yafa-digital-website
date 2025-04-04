import { type ContactFormValues } from "../client/src/lib/types";
import { db } from "./db";
import { 
  users, 
  contactSubmissions, 
  newsletterSubscriptions, 
  type User,
  type InsertUser,
  type ContactSubmission,
  type NewsletterSubscription,
  insertUserSchema,
  insertContactSubmissionSchema,
  insertNewsletterSubscriptionSchema
} from "../shared/schema";
import { eq } from "drizzle-orm";

// Keep the same interface
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contact: ContactFormValues): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createNewsletterSubscription(email: string): Promise<NewsletterSubscription>;
  getNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
}

// Database storage implementation
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const validatedData = insertUserSchema.parse(insertUser);
    const [user] = await db.insert(users).values(validatedData).returning();
    return user;
  }

  async createContactSubmission(contact: ContactFormValues): Promise<ContactSubmission> {
    const contactData = {
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      service: contact.service,
      message: contact.message
    };
    
    const validatedData = insertContactSubmissionSchema.parse(contactData);
    const [submission] = await db.insert(contactSubmissions)
      .values(validatedData)
      .returning();
    
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(contactSubmissions.createdAt);
  }

  async createNewsletterSubscription(email: string): Promise<NewsletterSubscription> {
    const validatedData = insertNewsletterSubscriptionSchema.parse({ email });
    
    // Check if email already exists
    const [existingSubscription] = await db.select()
      .from(newsletterSubscriptions)
      .where(eq(newsletterSubscriptions.email, email));
    
    if (existingSubscription) {
      return existingSubscription;
    }
    
    const [subscription] = await db.insert(newsletterSubscriptions)
      .values(validatedData)
      .returning();
    
    return subscription;
  }

  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return await db.select().from(newsletterSubscriptions).orderBy(newsletterSubscriptions.createdAt);
  }
}

// Export the database storage instance 
export const storage = new DatabaseStorage();
