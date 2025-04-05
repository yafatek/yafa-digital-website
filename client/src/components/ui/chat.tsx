import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  TooltipProvider, 
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { generateChatResponse, ChatMessage } from "@/lib/gemini";
import { MessageSquare, Send, X, Minimize2, Maximize2, Bot } from "lucide-react";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      role: "model",
      content: "Hi, I'm Yafa AI. How can I help you with cloud services today?",
    },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  const [retryTimer, setRetryTimer] = useState<number | null>(null);
  
  // Scroll to bottom of chat whenever history changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  // Close chat and reset minimized state when screen is small and chat is closed
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640 && !isOpen) {
        setIsMinimized(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);
  
  // Function to handle retry with countdown
  const startRetryCountdown = (seconds: number) => {
    setRetryTimer(seconds);
    const countdownInterval = setInterval(() => {
      setRetryTimer(prev => {
        if (prev === null || prev <= 1) {
          clearInterval(countdownInterval);
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };
  
  // Handle submitting the user message
  const handleSubmit = async () => {
    if (input.trim() === "" || isLoading) return;
    
    const userInput = input.trim();
    
    // Add user message to chat history
    const userMessage = { role: "user" as const, content: userInput };
    setChatHistory(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    try {
      console.log("Sending user message:", userInput);
      
      // Create a simple test response if the message contains "test"
      // This helps debug if the API connection is the issue or something else
      if (userInput.toLowerCase().includes("test")) {
        console.log("Test message detected, using test response");
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
        setChatHistory(prev => [
          ...prev, 
          { 
            role: "model", 
            content: "This is a test response. The chat system is working properly on the frontend. If you're seeing this message but real AI responses fail, there might be an issue with the Gemini API connection." 
          }
        ]);
      } else {
        // Send updated history to get AI response
        const newHistory = [...chatHistory, userMessage];
        console.log("Getting response from Gemini with history length:", newHistory.length);
        
        const response = await generateChatResponse(newHistory);
        console.log("Response received from Gemini");
        
        // Add AI response to chat history
        setChatHistory(prev => [...prev, { role: "model", content: response }]);
      }
    } catch (error) {
      console.error("Error in chat component:", error);
      
      // Add detailed error handling
      let errorMessage = "I'm sorry, I encountered an error. Please try again later.";
      
      if (error instanceof Error) {
        console.error("Error details:", {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
        
        // More specific error messages based on error type
        if (error.message.includes("API key")) {
          errorMessage = "API key configuration issue. Please contact support.";
        } else if (error.message.includes("network") || error.message.includes("fetch")) {
          errorMessage = "Network connection issue. Please check your internet connection and try again.";
        } else if (error.message.includes("429") || error.message.includes("Too Many Requests") || error.message.includes("quota")) {
          errorMessage = "I've reached my rate limit for the moment. This is because I'm using Google's free tier API. Please wait 1-2 minutes and try again, or contact us directly for immediate assistance.";
          // Start a 60-second countdown
          startRetryCountdown(60);
        }
      }
      
      setChatHistory(prev => [
        ...prev,
        {
          role: "model",
          content: errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle pressing Enter to submit
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  
  // Toggle between minimized and expanded state
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  
  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 rounded-full w-14 h-14 shadow-lg z-50 bg-blue-500 hover:bg-blue-600 transition-all duration-300"
          aria-label="Open chat"
        >
          <Bot className="w-6 h-6" />
        </Button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div 
          className={cn(
            "fixed z-50 transition-all duration-300 ease-in-out overflow-hidden bg-white rounded-xl shadow-xl border border-gray-200",
            isMinimized 
              ? "bottom-5 right-5 w-72 h-14"
              : "sm:bottom-5 sm:right-5 sm:w-[380px] sm:h-[500px] bottom-0 right-0 w-full h-[100vh] sm:max-h-[90vh]"
          )}
          style={{
            maxWidth: isMinimized ? '18rem' : window.innerWidth < 640 ? '100%' : '380px',
            left: window.innerWidth < 640 && !isMinimized ? '0' : 'auto'
          }}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between p-3 border-b bg-gradient-to-r from-blue-50 to-blue-100/30">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-medium text-gray-800">YAFA AI Assistant</h3>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 rounded-full hover:bg-gray-100"
                onClick={toggleMinimize}
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 rounded-full hover:bg-gray-100 hover:text-red-500"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Chat content (hidden when minimized) */}
          {!isMinimized && (
            <>
              {/* Messages area */}
              <ScrollArea className="flex-1 p-4 h-[calc(100%-120px)] overflow-x-hidden">
                <div className="flex flex-col gap-3 w-full overflow-x-hidden">
                  {chatHistory.map((message, index) => (
                    <div
                      key={index}
                      className={cn(
                        "max-w-[85%] rounded-xl p-3 break-words overflow-hidden whitespace-normal word-break-break-word",
                        message.role === "user"
                          ? "bg-blue-500 text-white ml-auto rounded-br-none"
                          : index === chatHistory.length - 1 && message.content.includes("rate limit")
                            ? "bg-amber-50 border border-amber-200 text-amber-800 rounded-bl-none"
                            : "bg-gray-100 text-gray-800 rounded-bl-none"
                      )}
                    >
                      {message.content}
                      
                      {/* Show retry button for rate limit errors */}
                      {index === chatHistory.length - 1 && message.content.includes("rate limit") && (
                        <div className="mt-3 flex items-center">
                          <Button
                            size="sm"
                            variant="outline"
                            className={`text-xs rounded-full px-3 py-1 h-auto ${retryTimer !== null ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-amber-100 hover:bg-amber-200 text-amber-800 border-amber-300'}`}
                            onClick={() => retryTimer === null && handleSubmit()}
                            disabled={retryTimer !== null}
                          >
                            {retryTimer !== null 
                              ? `Retry in ${retryTimer}s` 
                              : "Try again"}
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="bg-gray-100 max-w-[85%] rounded-xl p-3 rounded-bl-none">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "600ms" }}></div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              
              {/* Input area */}
              <div className="p-3 border-t bg-white w-full overflow-hidden">
                <div className="flex gap-2 w-full">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="resize-none min-h-[40px] max-h-[120px] rounded-lg border-gray-300 focus-visible:ring-blue-500 w-full"
                    rows={1}
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSubmit}
                    className="shrink-0 rounded-full w-10 h-10 bg-blue-500 hover:bg-blue-600"
                    disabled={isLoading || input.trim() === ""}
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <div className="mt-2 text-xs text-center text-gray-400">
                  Powered by Google Gemini
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Prevent horizontal scrolling when chat is open */}
      {isOpen && (
        <style jsx global>{`
          body, html {
            overflow-x: hidden;
            width: 100%;
            position: relative;
            margin: 0;
            padding: 0;
          }
          
          #root, #__next {
            overflow-x: hidden;
            width: 100%;
            position: relative;
          }
          
          /* Ensure all absolute positioned elements stay within bounds */
          .fixed {
            max-width: 100vw;
          }
        `}</style>
      )}
    </>
  );
}