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
      status?: number;
    }>({
      method: "POST",
      path: "/api/chat",
      body: { message: messageToSend },
    });
    
    if (!response.success) {
      // Enhanced error handling based on server response
      const errorStatus = response.status || 500;
      
      // Create more specific error messages for different API issues
      if (errorStatus === 429) {
        throw new Error("RATE_LIMIT: AI service rate limit exceeded. Please try again in a minute or two.");
      } else if (errorStatus === 403) {
        throw new Error("ACCESS_DENIED: API key permissions issue. Please contact support.");
      } else {
        throw new Error(response.message || "Failed to get response from AI service");
      }
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
    
    // Return more specific error messages for the user
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    if (errorMessage.includes("RATE_LIMIT")) {
      return "I've hit my rate limit. Please wait a minute or two before trying again, or contact our support team for immediate assistance.";
    } else if (errorMessage.includes("ACCESS_DENIED")) {
      return "I'm currently having trouble accessing my knowledge base due to authentication issues. Our team has been notified.";
    } else if (errorMessage.includes("network") || errorMessage.includes("fetch")) {
      return "I'm having trouble connecting to my knowledge base. Please check your internet connection and try again.";
    }
    
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later or contact our support team for immediate assistance.";
  }
}

/**
 * Stream a response from the Gemini AI model
 * @param message - The message to send to the AI
 * @param onChunk - Callback for each chunk of text received
 * @param onComplete - Callback when streaming is complete
 * @param onError - Callback when an error occurs
 */
export function streamChatResponse(
  message: string,
  onChunk: (text: string) => void,
  onComplete: () => void,
  onError: (error: Error) => void
): AbortController {
  // Create an abort controller to allow canceling the stream
  const controller = new AbortController();
  
  (async () => {
    try {
      // For test mode/debugging
      if (message.trim().toLowerCase() === "test") {
        console.log("Test mode detected in streaming, simulating stream");
        const testResponse = "This is a test response from the streaming system. The chat system is working properly.";
        
        // Simulate streaming for testing purposes
        for (let i = 0; i < testResponse.length; i += 5) {
          const chunk = testResponse.slice(i, i + 5);
          onChunk(chunk);
          await new Promise(resolve => setTimeout(resolve, 50));
          
          // Check if aborted
          if (controller.signal.aborted) {
            return;
          }
        }
        
        onComplete();
        return;
      }
      
      // Use EventSource API for better SSE handling
      if (typeof EventSource !== 'undefined' && window.location.protocol !== 'file:') {
        // Create a unique ID for this request to link POST with EventSource
        const requestId = Date.now().toString();
        
        try {
          // We post the message and wait for success before creating the EventSource
          const postResponse = await fetch(`${window.location.origin}/api/chat`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              message,
              requestId,
              stream: true 
            }),
          });
          
          if (!postResponse.ok) {
            // Handle HTTP error responses
            const errorData = await postResponse.json().catch(() => null);
            const errorMessage = errorData?.message || postResponse.statusText;
            throw new Error(`${postResponse.status}: ${errorMessage}`);
          }
          
          // Create EventSource with the same request ID
          console.log("Using EventSource for streaming");
          const source = new EventSource(`${window.location.origin}/api/chat/stream?requestId=${requestId}`);
          
          // Create a new controller for the EventSource
          const newController = new AbortController();
          const signal = newController.signal;
          
          source.onmessage = (event) => {
            try {
              console.log("SSE message received:", event.data);
              
              if (event.data === '[DONE]') {
                console.log("Stream complete");
                source.close();
                onComplete();
                return;
              }
              
              const data = JSON.parse(event.data);
              if (data.text) {
                console.log("Processing chunk:", data.text);
                onChunk(data.text);
              } else {
                console.log("No text in chunk:", data);
              }
              
              if (data.error) {
                console.error("Error in SSE data:", data.error);
                throw new Error(data.error);
              }
            } catch (e) {
              console.error("Error parsing streaming data:", e);
              if (e instanceof Error) onError(e);
              else onError(new Error("Error parsing streaming data"));
              source.close();
            }
          };
          
          source.onerror = (event) => {
            console.error("EventSource error:", event);
            source.close();
            onError(new Error("Streaming connection error"));
          };
          
          signal.addEventListener('abort', () => {
            source.close();
          });
          
          return newController;
        } catch (error) {
          console.error("Error setting up streaming:", error);
          onError(error instanceof Error ? error : new Error(String(error)));
          return controller; // Return the original controller
        }
      }
      
      // Fallback to ReadableStream for environments that don't support EventSource
      console.log("Using ReadableStream for streaming");
      
      // Make standard fetch request for streaming
      const url = new URL(`${window.location.origin}/api/chat`);
      url.searchParams.append('stream', 'true');
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
        signal: controller.signal
      });
      
      if (!response.ok) {
        // Handle HTTP error responses
        const errorData = await response.json().catch(() => null);
        const errorMessage = errorData?.message || response.statusText;
        throw new Error(`${response.status}: ${errorMessage}`);
      }
      
      // Setup stream reader for SSE
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("Cannot read stream from response");
      }
      
      const decoder = new TextDecoder();
      let buffer = "";
      
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          break;
        }
        
        // Decode and append to buffer
        buffer += decoder.decode(value, { stream: true });
        
        // Process all complete SSE messages in buffer
        let newlineIndex;
        while ((newlineIndex = buffer.indexOf('\n\n')) >= 0) {
          const line = buffer.slice(0, newlineIndex).trim();
          buffer = buffer.slice(newlineIndex + 2);
          
          if (!line.startsWith('data: ')) {
            continue;
          }
          
          const data = line.slice(6); // Remove 'data: ' prefix
          
          if (data === '[DONE]') {
            onComplete();
            return;
          }
          
          try {
            const parsed = JSON.parse(data);
            if (parsed.text) {
              onChunk(parsed.text);
            }
            
            if (parsed.error) {
              throw new Error(parsed.error);
            }
          } catch (e) {
            console.error('Error parsing SSE data:', e);
            onError(new Error("Error parsing streaming data"));
            return;
          }
        }
      }
      
      onComplete();
    } catch (error) {
      console.error("Error in streaming chat response:", error);
      
      // Convert error to the appropriate format and call onError
      if (error instanceof Error) {
        // Check for specific error types
        if (error.message.includes('429') || error.message.includes('rate limit')) {
          onError(new Error("RATE_LIMIT: AI service rate limit exceeded. Please try again in a minute or two."));
        } else if (error.message.includes('403')) {
          onError(new Error("ACCESS_DENIED: API key permissions issue. Please contact support."));
        } else {
          onError(error);
        }
      } else {
        onError(new Error(String(error)));
      }
    }
  })();
  
  return controller;
}