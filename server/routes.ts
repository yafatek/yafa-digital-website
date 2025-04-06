import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { blogPosts, services, caseStudies, testimonials } from "../client/src/lib/data";
import { contactFormSchema } from "../client/src/lib/validation";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Message queue for streaming responses
type MessageRequest = {
  message: string;
  prompt: string;
  createdAt: number;
  responses: string[];
};

// In-memory store for message requests
const messageQueue: Record<string, MessageRequest> = {};

// Clean up old message requests periodically
setInterval(() => {
  const now = Date.now();
  const expirationTime = 10 * 60 * 1000; // 10 minutes
  Object.keys(messageQueue).forEach(requestId => {
    if (now - messageQueue[requestId].createdAt > expirationTime) {
      delete messageQueue[requestId];
    }
  });
}, 60 * 1000); // Check every minute

/**
 * Knowledge Manager for Yafa Cloud AI
 * This function extracts and formats relevant information from the website's content
 * to provide as context for the AI responses.
 */
function getKnowledgeBase(query: string): string {
  // Convert query to lowercase for easier matching
  const queryLower = query.toLowerCase();
  let relevantContent = '';
  
  // Keywords to track relevance
  const blogKeywords = ['blog', 'article', 'post', 'read', 'news', 'learn'];
  const serviceKeywords = ['service', 'offer', 'provide', 'solution', 'product', 'help'];
  const caseStudyKeywords = ['case study', 'example', 'client', 'project', 'success', 'implementation'];
  const testimonialKeywords = ['review', 'testimonial', 'feedback', 'customer', 'say', 'opinion'];
  const pricingKeywords = ['price', 'cost', 'fee', 'pricing', 'plan', 'payment', 'subscription', 'tier', 'package'];
  
  // Check which category is most relevant to the query
  const hasBlogKeywords = blogKeywords.some(keyword => queryLower.includes(keyword));
  const hasServiceKeywords = serviceKeywords.some(keyword => queryLower.includes(keyword));
  const hasCaseStudyKeywords = caseStudyKeywords.some(keyword => queryLower.includes(keyword));
  const hasTestimonialKeywords = testimonialKeywords.some(keyword => queryLower.includes(keyword));
  const hasPricingKeywords = pricingKeywords.some(keyword => queryLower.includes(keyword));
  
  // If query contains pricing keywords, provide information about how to get pricing details
  if (hasPricingKeywords) {
    relevantContent += `
Pricing Information:
For detailed and up-to-date pricing information, we recommend:
- Visiting our pricing page at https://yafa.digital/pricing
- Contacting our sales team at sales@yafa.digital
- Scheduling a consultation call for a custom quote

Pricing varies based on your specific requirements, workload, and service level. Our team would be happy to provide you with an accurate quote based on your needs.
`;
  }
  
  // Add service information if query relates to services
  if (hasServiceKeywords || (!hasBlogKeywords && !hasCaseStudyKeywords && !hasTestimonialKeywords)) {
    relevantContent += '\nOur Services:\n';
    services.forEach(service => {
      relevantContent += `- ${service.title}: ${service.description}\n`;
    });
  }
  
  // Add blog information if query relates to blogs
  if (hasBlogKeywords) {
    relevantContent += '\nRecent Blog Articles:\n';
    // Get 3 most recent blog posts
    blogPosts.slice(0, 3).forEach(post => {
      relevantContent += `- "${post.title}": ${post.summary?.substring(0, 100) || ""}...\n`;
    });
  }
  
  // Add case studies if query relates to examples or implementations
  if (hasCaseStudyKeywords) {
    relevantContent += '\nCase Studies:\n';
    caseStudies.slice(0, 2).forEach(study => {
      relevantContent += `- ${study.title}: ${study.challenge.substring(0, 100)}...\n`;
    });
  }
  
  // Add testimonials if query relates to reviews or customer feedback
  if (hasTestimonialKeywords) {
    relevantContent += '\nCustomer Testimonials:\n';
    testimonials.slice(0, 2).forEach(testimonial => {
      relevantContent += `- ${testimonial.name} (${testimonial.position}): "${testimonial.text.substring(0, 100)}..."\n`;
    });
  }
  
  // If still no content is matched, provide general information
  if (!relevantContent) {
    relevantContent = 'General information about Yafa Cloud Services and our offerings can be found on our website. We provide cloud computing, storage, security, and AI integration services. For specific details about our services, pricing, or technical specifications, please visit our documentation at docs.yafa.digital or contact our team at sales@yafa.digital.';
  }
  
  // Add a disclaimer to ensure accurate information
  relevantContent += '\n\nNote: For the most accurate and up-to-date information, including detailed pricing, technical specifications, and service availability, please refer to our official documentation or contact our sales team directly.';
  
  return relevantContent;
}

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
      const { message, requestId, stream } = z.object({
        message: z.string().min(1),
        requestId: z.string().optional(),
        stream: z.boolean().optional()
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
      // Use gemini-2.0-flash model instead of gemini-1.5-pro to avoid rate limit issues
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.0-flash",
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
        }
      });

      // System instructions to set the AI's behavior
      const systemPrompt = `You are Yafa AI, an assistant for Yafa Cloud Services, a leading cloud solutions provider in the UAE and Middle East.

About Yafa Cloud Services:
- Founded in 2018, specializing in AWS, Azure, and Google Cloud solutions
- Offers cloud infrastructure, e-commerce solutions, AI integration, and cybersecurity
- Serves startups to enterprise-level clients with both local and global data center options

VERY IMPORTANT - KNOWLEDGE LIMITATIONS:
1. ONLY provide specific information that is explicitly mentioned in this prompt or in the additional context provided.
2. DO NOT make up or generate information about specific services, pricing, or features that aren't explicitly mentioned.
3. If you're asked about specifics that aren't covered in your knowledge base, politely say: "I don't have specific information about that. Please visit our documentation at docs.yafa.digital or contact our team at sales@yafa.digital for accurate details."
4. NEVER generate fictional pricing, technical specifications, or service offerings.

Our main services include:
1. Cloud Computing: Virtual machines, containers, scalable infrastructure
2. Cloud Storage: Secure data storage solutions with backup options
3. Security Services: Advanced threat protection and compliance solutions
4. AI Integration: Custom AI solutions, chatbots, and data analytics
5. E-commerce Solutions: Online store platforms

If users ask about specific pricing, features, or technical details that aren't explicitly mentioned in your knowledge base, DO NOT make up answers. Instead, direct them to our official documentation or to contact our sales team.

Keep responses professional, helpful, concise, and accurate to our offerings. If you don't know specific details, suggest contacting sales@yafa.digital for customized quotes.`;

      // Get additional knowledge based on the user's query
      const additionalKnowledge = getKnowledgeBase(message);
      
      // Combine static system prompt with dynamic knowledge
      const fullPrompt = `${systemPrompt}

ADDITIONAL RELEVANT INFORMATION:
${additionalKnowledge}

Remember to:
1. Be accurate and factual about our offerings
2. If information isn't available in your knowledge, don't make it up
3. Keep responses concise and professional
4. Recommend contacting sales@yafa.digital for detailed quotes or custom solutions

USER QUERY: ${message}`;

      // If this is a streaming request with requestId, store the message
      if (requestId && (stream === true || req.query.stream === 'true')) {
        console.log("Storing message request for streaming, ID:", requestId);
        messageQueue[requestId] = {
          message,
          prompt: fullPrompt,
          createdAt: Date.now(),
          responses: []
        };
        
        // Return a success response to confirm message is queued
        return res.status(200).json({
          success: true,
          message: "Message queued for streaming",
          requestId
        });
      }

      // Check if streaming is requested directly
      const useStreaming = req.query.stream === 'true';
      
      if (useStreaming) {
        // Set up streaming response
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        res.setHeader('X-Accel-Buffering', 'no'); // Disable proxy buffering
        
        // Send initial message to establish connection
        res.write(`data: ${JSON.stringify({ text: "" })}\n\n`);
        
        // Create a chat session
        const chat = model.startChat({
          history: [
            { role: 'user', parts: [{ text: fullPrompt }] },
            { role: 'model', parts: [{ text: "I understand my role and will assist accordingly." }] }
          ],
        });
        
        try {
          // Send the response in streaming mode
          const result = await chat.sendMessageStream(message);
          
          // Stream each chunk to the client
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              // Log the text (shortened for readability)
              const logText = text.length > 50 ? text.substring(0, 50) + "..." : text;
              console.log(`Direct streaming chunk [${text.length} chars]: ${logText}`);
              
              res.write(`data: ${JSON.stringify({ text })}\n\n`);
              // Force flush to ensure immediate delivery - using a more compatible approach
              try {
                // Try to use the flush method if it exists
                if (typeof (res as any).flush === 'function') {
                  (res as any).flush();
                }
              } catch (e) {
                // Ignore errors if flush is not supported
                console.log("Flush not supported or failed");
              }
            }
          }
          
          // End the stream
          res.write('data: [DONE]\n\n');
          res.end();
        } catch (error) {
          console.error("Streaming error:", error);
          res.write(`data: ${JSON.stringify({ error: "An error occurred during streaming" })}\n\n`);
          res.end();
        }
      } else {
        // Regular non-streaming response
        // Create a chat session with proper configuration for Gemini
        const chat = model.startChat({
          history: [],
          generationConfig: {
            maxOutputTokens: 500,
            temperature: 0.7,
          },
        });

        // First, send the full prompt with knowledge base to set the context
        await chat.sendMessage(fullPrompt);
        
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
      }
    } catch (error) {
      console.error("Chat API error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false,
          message: "Invalid request format", 
          errors: error.errors 
        });
      } else {
        // Enhanced error handling for common Gemini API issues
        let statusCode = 500;
        let errorMessage = "An error occurred while processing your request";
        
        // Convert error to string for analysis
        const errorStr = error instanceof Error ? error.toString() : String(error);
        
        // Check for specific error types
        if (errorStr.includes("429") || errorStr.includes("RESOURCE_EXHAUSTED") || 
            errorStr.includes("quota") || errorStr.includes("rate limit")) {
          statusCode = 429;
          errorMessage = "AI service rate limit exceeded. Please try again in a minute or two.";
        } else if (errorStr.includes("403") || errorStr.includes("PERMISSION_DENIED")) {
          statusCode = 403;
          errorMessage = "API key permissions issue. Please contact support.";
        } else if (errorStr.includes("INVALID_ARGUMENT")) {
          statusCode = 400;
          errorMessage = "Invalid request to AI service. Please try a different query.";
        }
        
        res.status(statusCode).json({ 
          success: false,
          message: errorMessage,
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }
  });
  
  // Dedicated streaming endpoint
  app.get("/api/chat/stream", async (req, res) => {
    try {
      const { requestId } = req.query;
      
      if (!requestId || typeof requestId !== 'string') {
        return res.status(400).json({
          success: false,
          message: "Missing requestId parameter"
        });
      }
      
      const messageRequest = messageQueue[requestId];
      
      if (!messageRequest) {
        return res.status(404).json({
          success: false,
          message: "Message request not found. It may have expired or not been created yet."
        });
      }
      
      // Set up SSE headers
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      res.setHeader('X-Accel-Buffering', 'no'); // Disable proxy buffering
      
      // Send initial message to establish connection
      res.write(`data: ${JSON.stringify({ text: "" })}\n\n`);
      
      // Check if API key is available
      const API_KEY = process.env.GEMINI_API_KEY;
      if (!API_KEY) {
        console.error("GEMINI_API_KEY is not available in server environment");
        res.write(`data: ${JSON.stringify({ error: "AI service is temporarily unavailable" })}\n\n`);
        return res.end();
      }
      
      // Initialize Gemini API
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.0-flash",
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
        }
      });
      
      // Create a chat session
      const chat = model.startChat({
        history: [
          { role: 'user', parts: [{ text: messageRequest.prompt }] },
          { role: 'model', parts: [{ text: "I understand my role and will assist accordingly." }] }
        ],
      });
      
      try {
        // Send the response in streaming mode
        const result = await chat.sendMessageStream(messageRequest.message);
        
        // Stream each chunk to the client
        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) {
            // Store the chunk in the queue
            messageRequest.responses.push(text);
            
            // Log the text (shortened for readability)
            const logText = text.length > 50 ? text.substring(0, 50) + "..." : text;
            console.log(`Streaming chunk [${text.length} chars]: ${logText}`);
            
            res.write(`data: ${JSON.stringify({ text })}\n\n`);
            
            // Force flush to ensure immediate delivery - using a more compatible approach
            try {
              // Try to use the flush method if it exists
              if (typeof (res as any).flush === 'function') {
                (res as any).flush();
              }
            } catch (e) {
              // Ignore errors if flush is not supported
              console.log("Flush not supported or failed");
            }
          }
        }
        
        // End the stream
        res.write('data: [DONE]\n\n');
        res.end();
      } catch (error) {
        console.error("Streaming error:", error);
        res.write(`data: ${JSON.stringify({ error: "An error occurred during streaming" })}\n\n`);
        res.end();
      }
    } catch (error) {
      console.error("Streaming endpoint error:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred in the streaming endpoint",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
