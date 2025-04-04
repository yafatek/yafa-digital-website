import { GoogleGenerativeAI } from "@google/generative-ai";

// Check if API key is available
const API_KEY = import.meta.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("GEMINI_API_KEY is not defined. Please check your environment variables.");
}

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(API_KEY || '');

// Get the text generation model (using Gemini Pro model)
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

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

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

/**
 * Generate a response from the Gemini AI model
 * @param messages - The chat history (array of messages with roles and content)
 * @returns A promise that resolves to the AI's response
 */
export async function generateChatResponse(messages: ChatMessage[]): Promise<string> {
  try {
    if (!API_KEY) {
      throw new Error("GEMINI_API_KEY is missing");
    }
    
    // For debugging - log the input to the API
    console.log("Sending to Gemini API:", {
      historyLength: messages.length,
      lastUserMessage: messages.filter(m => m.role === 'user').pop()?.content
    });

    // Format chat history for the API
    const formattedHistory = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    // Create a chat session with only the last few messages to avoid context length issues
    const recentMessages = formattedHistory.slice(-5); // Only use last 5 messages
    
    const chat = model.startChat({
      history: recentMessages,
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
      systemInstruction: SYSTEM_INSTRUCTIONS,
    });

    // For Gemini API, we need to get the latest user message directly
    // Find the last user message in our history
    const lastUserMessage = messages.filter(m => m.role === 'user').pop();
    
    // If there's no user message at all, add a generic greeting
    const messageToSend = lastUserMessage?.content || "Hello";
    
    // Generate response from the AI
    console.log("Sending message to Gemini:", messageToSend);
    const result = await chat.sendMessage(messageToSend);
    const response = result.response;
    const responseText = response.text();
    
    console.log("Received response from Gemini:", responseText.substring(0, 100) + "...");
    return responseText;
  } catch (error) {
    console.error("Error generating AI response:", error);
    // Log more detailed error information
    if (error instanceof Error) {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later or contact our support team for immediate assistance.";
  }
}