import { type ContactFormValues } from "../client/src/lib/types";
import { 
  type User,
  type InsertUser,
  type ContactSubmission,
  type NewsletterSubscription,
} from "../shared/schema";
import { firestoreStorage } from './firestore-storage';

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

// Firestore Storage Adapter
export class FirestoreStorageAdapter implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    return firestoreStorage.getUser(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return firestoreStorage.getUserByUsername(username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    return firestoreStorage.createUser(insertUser);
  }

  async createContactSubmission(contact: ContactFormValues): Promise<ContactSubmission> {
    return firestoreStorage.createContactSubmission(contact);
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return firestoreStorage.getContactSubmissions();
  }

  async createNewsletterSubscription(email: string): Promise<NewsletterSubscription> {
    return firestoreStorage.createNewsletterSubscription(email);
  }

  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return firestoreStorage.getNewsletterSubscriptions();
  }
}

// Export the firestore storage instance 
export const storage = new FirestoreStorageAdapter();
