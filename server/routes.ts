import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { blogPosts, services, caseStudies, testimonials } from "../client/src/lib/data";
import { contactFormSchema } from "../client/src/lib/validation";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";

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

  // API endpoint for Gemini AI chat
  app.post("/api/chat", async (req, res) => {
    try {
      // Validate the request body
      const { message } = z.object({
        message: z.string().min(1)
      }).parse(req.body);

      // Check if API key is available
      const API_KEY = process.env.GEMINI_API_KEY;
      if (!API_KEY) {
        console.error("GEMINI_API_KEY is not available in server environment");
        return res.status(500).json({
          success: false,
          message: "AI service is temporarily unavailable"
        });
      }

      // Initialize Gemini API
      const genAI = new GoogleGenerativeAI(API_KEY);
      // Use the current model name - gemini-1.5-pro
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      // System instructions to set the AI's behavior
      const SYSTEM_INSTRUCTIONS = `
      You are an AI assistant named Yafa AI for Yafa Cloud Services LLC, a company specializing in cloud solutions and AI services.
      
      Your responsibilities:
      - Provide friendly and helpful responses about cloud services, AI solutions, and digital transformation.
      - Answer questions about Yafa Cloud Services' offerings including: cloud infrastructure, e-commerce solutions, business intelligence, and enterprise security.
      - Maintain a professional but conversational tone.
      - Keep responses concise (1-2 paragraphs maximum).
      - If you don't know specific details about Yafa Cloud Services not mentioned in this prompt, suggest contacting the company directly.
      - NEVER make up information about specific pricing or technical specifications not included in your training.
      
      About Yafa Cloud Services LLC:
      - Cloud service provider founded in 2018
      - Specializes in AWS, Microsoft Azure, and Google Cloud solutions
      - Offers AI integration, e-commerce setup, and cybersecurity services
      - Serves customers from startups to enterprise-level organizations
      - Has a global client base with offices in major tech hubs
      `;

      // Create a chat session with proper configuration for Gemini
      const chat = model.startChat({
        history: [],
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
        },
        // Google's Gemini API doesn't support systemInstruction in the same way as OpenAI
        // We'll use a user message as the initial message instead
      });

      // First, send a system message to set the context
      await chat.sendMessage("You are Yafa AI, an assistant for Yafa Cloud Services. You provide helpful information about cloud services, AI solutions, and digital transformation. Keep responses professional and concise.");
      
      // Then send the user's actual message
      console.log("Sending message to Gemini API:", message);
      const result = await chat.sendMessage(message);
      const responseText = result.response.text();

      // Return the AI response
      res.status(200).json({
        success: true,
        message: "AI response generated",
        data: { response: responseText }
      });
    } catch (error) {
      console.error("Chat API error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false,
          message: "Invalid request format", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "An error occurred while processing your request",
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
