// Contact form types
export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  service: string;
  message: string;
}

// Blog post types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  author: string;
  tags: string[];
  image?: string; // Optional image URL or path
}

// Newsletter subscription types
export interface NewsletterSubscription {
  email: string;
}

// Service types for service listings
export interface Service {
  id: string;
  title: string;
  slug: string;
  category: string;
  icon: string;
  features: string[];
  description: string;
}

// Case Study types
export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: {
    quote: string;
    author: string;
  };
  bgColor: string;
  image?: string;
}

// Testimonial types
export interface Testimonial {
  id: number;
  text: string;
  name: string;
  position: string;
  avatar: string;
}

// Team member types
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedIn?: string;
  twitter?: string;
  github?: string;
}
