import { Firestore } from '@google-cloud/firestore';
import { type ContactFormValues } from "../client/src/lib/types";
import { 
  type User,
  type InsertUser,
  type ContactSubmission,
  type NewsletterSubscription,
} from "../shared/schema";

// Initialize Firestore
const firestore = new Firestore();

// Define collections
const USERS_COLLECTION = 'users';
const CONTACTS_COLLECTION = 'contacts';
const NEWSLETTER_COLLECTION = 'newsletter_subscriptions';

export const firestoreStorage = {
  async getUser(id: number): Promise<User | undefined> {
    try {
      const snapshot = await firestore.collection(USERS_COLLECTION)
        .where('id', '==', id)
        .get();
      
      if (snapshot.empty) {
        return undefined;
      }
      
      const userData = snapshot.docs[0].data() as User;
      return userData;
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  },

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const snapshot = await firestore.collection(USERS_COLLECTION)
        .where('username', '==', username)
        .get();
      
      if (snapshot.empty) {
        return undefined;
      }
      
      const userData = snapshot.docs[0].data() as User;
      return userData;
    } catch (error) {
      console.error('Error getting user by username:', error);
      throw error;
    }
  },

  async createUser(user: InsertUser): Promise<User> {
    try {
      const docRef = firestore.collection(USERS_COLLECTION).doc();
      const timestamp = new Date().toISOString();
      
      const userData: User = {
        ...user,
        id: parseInt(docRef.id, 36) % 100000, // Generate a numeric ID
        createdAt: timestamp,
        updatedAt: timestamp
      };
      
      await docRef.set(userData);
      return userData;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  async createContactSubmission(contact: ContactFormValues): Promise<ContactSubmission> {
    try {
      const docRef = firestore.collection(CONTACTS_COLLECTION).doc();
      const timestamp = new Date().toISOString();
      
      const contactData: ContactSubmission = {
        id: parseInt(docRef.id, 36) % 100000, // Generate a numeric ID
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        service: contact.service,
        message: contact.message,
        createdAt: timestamp,
        updatedAt: timestamp
      };
      
      await docRef.set(contactData);
      return contactData;
    } catch (error) {
      console.error('Error creating contact submission:', error);
      throw error;
    }
  },

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    try {
      const snapshot = await firestore.collection(CONTACTS_COLLECTION)
        .orderBy('createdAt')
        .get();
      
      return snapshot.docs.map(doc => doc.data() as ContactSubmission);
    } catch (error) {
      console.error('Error getting contact submissions:', error);
      throw error;
    }
  },

  async createNewsletterSubscription(email: string): Promise<NewsletterSubscription> {
    try {
      // Check if email already exists
      const snapshot = await firestore.collection(NEWSLETTER_COLLECTION)
        .where('email', '==', email)
        .get();
      
      if (!snapshot.empty) {
        return snapshot.docs[0].data() as NewsletterSubscription;
      }
      
      const docRef = firestore.collection(NEWSLETTER_COLLECTION).doc();
      const timestamp = new Date().toISOString();
      
      const subscriptionData: NewsletterSubscription = {
        id: parseInt(docRef.id, 36) % 100000, // Generate a numeric ID
        email,
        createdAt: timestamp,
        updatedAt: timestamp
      };
      
      await docRef.set(subscriptionData);
      return subscriptionData;
    } catch (error) {
      console.error('Error creating newsletter subscription:', error);
      throw error;
    }
  },

  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    try {
      const snapshot = await firestore.collection(NEWSLETTER_COLLECTION)
        .orderBy('createdAt')
        .get();
      
      return snapshot.docs.map(doc => doc.data() as NewsletterSubscription);
    } catch (error) {
      console.error('Error getting newsletter subscriptions:', error);
      throw error;
    }
  }
}; 