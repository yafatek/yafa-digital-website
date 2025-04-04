import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must not exceed 100 characters' }),
  email: z.string()
    .email({ message: 'Please enter a valid email address' }),
  subject: z.string()
    .min(2, { message: 'Subject must be at least 2 characters' })
    .max(200, { message: 'Subject must not exceed 200 characters' }),
  service: z.string()
    .min(1, { message: 'Please select a service' }),
  message: z.string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(2000, { message: 'Message must not exceed 2000 characters' })
});

// Newsletter subscription validation schema
export const newsletterSubscriptionSchema = z.object({
  email: z.string()
    .email({ message: 'Please enter a valid email address' })
});

// Blog post search validation schema
export const blogSearchSchema = z.object({
  query: z.string()
    .min(2, { message: 'Search query must be at least 2 characters' })
    .max(100, { message: 'Search query must not exceed 100 characters' }),
  category: z.string().optional()
});

// Pagination validation schema
export const paginationSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(10)
});
