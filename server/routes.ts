import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { blogPosts, services, caseStudies, testimonials } from "../client/src/lib/data";
import { contactFormSchema } from "../client/src/lib/validation";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for sending contact form
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const contactData = contactFormSchema.parse(req.body);
      
      // Store the contact form submission
      const contact = await storage.createContactSubmission(contactData);
      
      // Return the created contact submission
      res.status(200).json({
        success: true,
        message: "Contact submission received",
        data: contact
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false,
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false,
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  // API endpoint for newsletter subscription
  app.post("/api/newsletter-subscribe", async (req, res) => {
    try {
      // Validate the request body
      const { email } = z.object({
        email: z.string().email()
      }).parse(req.body);
      
      // Store the newsletter subscription
      const subscription = await storage.createNewsletterSubscription(email);
      
      // Return success
      res.status(200).json({
        success: true,
        message: "Subscription successful",
        data: subscription
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false,
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ 
          success: false,
          message: "An error occurred while processing your subscription" 
        });
      }
    }
  });

  // API endpoint to get blog posts
  app.get("/api/blog-posts", (req, res) => {
    try {
      res.status(200).json(blogPosts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ 
        success: false,
        message: "An error occurred while fetching blog posts" 
      });
    }
  });

  // API endpoint to get a single blog post by slug
  app.get("/api/blog-posts/:slug", (req, res) => {
    try {
      const { slug } = req.params;
      const post = blogPosts.find(post => post.slug === slug);
      
      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found"
        });
      }
      
      res.status(200).json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ 
        success: false,
        message: "An error occurred while fetching the blog post" 
      });
    }
  });

  // API endpoint to get services
  app.get("/api/services", (req, res) => {
    try {
      res.status(200).json(services);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ 
        success: false,
        message: "An error occurred while fetching services" 
      });
    }
  });

  // API endpoint to get case studies
  app.get("/api/case-studies", (req, res) => {
    try {
      res.status(200).json(caseStudies);
    } catch (error) {
      console.error("Error fetching case studies:", error);
      res.status(500).json({ 
        success: false,
        message: "An error occurred while fetching case studies" 
      });
    }
  });

  // API endpoint to get a single case study by id
  app.get("/api/case-studies/:id", (req, res) => {
    try {
      const { id } = req.params;
      const study = caseStudies.find(study => study.id === id);
      
      if (!study) {
        return res.status(404).json({
          success: false,
          message: "Case study not found"
        });
      }
      
      res.status(200).json(study);
    } catch (error) {
      console.error("Error fetching case study:", error);
      res.status(500).json({ 
        success: false,
        message: "An error occurred while fetching the case study" 
      });
    }
  });

  // API endpoint to get testimonials
  app.get("/api/testimonials", (req, res) => {
    try {
      res.status(200).json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ 
        success: false,
        message: "An error occurred while fetching testimonials" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
