import { apiRequest } from "./queryClient";

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

/**
 * Generate a response from the Gemini AI model using the server endpoint
 * @param messages - The chat history (array of messages with roles and content)
 * @returns A promise that resolves to the AI's response
 */
export async function generateChatResponse(messages: ChatMessage[]): Promise<string> {
  try {
    // Get the last user message
    const lastUserMessage = messages.filter(m => m.role === 'user').pop();
    
    // If there's no user message at all, add a generic greeting
    const messageToSend = lastUserMessage?.content || "Hello";

    // For test mode/debugging
    if (messageToSend.trim().toLowerCase() === "test") {
      console.log("Test mode detected, returning test response");
      return "This is a test response from the chat system. The frontend part of the chat is working correctly. To test the actual AI, try asking a different question.";
    }
    
    // Log the outgoing request
    console.log("Sending message to server API:", messageToSend);
    
    // Use our API request function to send the message to the server
    const response = await apiRequest<{
      success: boolean;
      message: string;
      data?: { response: string };
    }>({
      method: "POST",
      path: "/api/chat",
      body: { message: messageToSend },
    });
    
    if (!response.success) {
      throw new Error(response.message || "Failed to get response from AI service");
    }
    
    console.log("Received response from server:", response.data?.response?.substring(0, 100) + "...");
    return response.data?.response || "Sorry, I didn't understand that. Could you please try again?";
    
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