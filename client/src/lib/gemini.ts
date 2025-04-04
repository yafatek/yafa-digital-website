import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(import.meta.env.GEMINI_API_KEY || '');

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
    // Create a chat session
    const chat = model.startChat({
      history: messages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.content }],
      })),
      generationConfig: {
        maxOutputTokens: 500, // Limit response length
        temperature: 0.7, // Add some creativity but not too random
      },
      systemInstruction: SYSTEM_INSTRUCTIONS,
    });

    // Generate response from the AI
    const result = await chat.sendMessage("");
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating AI response:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later or contact our support team for immediate assistance.";
  }
}