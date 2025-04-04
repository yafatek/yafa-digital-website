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
import { MessageSquare, Send, X, Minimize2, Maximize2 } from "lucide-react";

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
  
  // Scroll to bottom of chat whenever history changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);
  
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
          className="fixed bottom-5 right-5 rounded-full size-14 shadow-lg z-50 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          aria-label="Open chat"
        >
          <MessageSquare className="size-6" />
        </Button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div 
          className={cn(
            "fixed bottom-5 right-5 bg-background border rounded-2xl shadow-lg z-50 transition-all duration-300 flex flex-col",
            isMinimized ? "w-72 h-16" : "w-96 h-[32rem]"
          )}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <MessageSquare className="size-4 text-white" />
              </div>
              <h3 className="font-medium">Yafa AI Assistant</h3>
            </div>
            <div className="flex gap-1.5">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7 rounded-full"
                      onClick={toggleMinimize}
                      aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
                    >
                      {isMinimized ? <Maximize2 className="size-4" /> : <Minimize2 className="size-4" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {isMinimized ? "Maximize chat" : "Minimize chat"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7 rounded-full hover:bg-red-100 hover:text-red-500"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close chat"
                    >
                      <X className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Close chat</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          
          {/* Chat content (hidden when minimized) */}
          {!isMinimized && (
            <>
              {/* Messages area */}
              <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                <div className="flex flex-col gap-4">
                  {chatHistory.map((message, index) => (
                    <div
                      key={index}
                      className={cn(
                        "max-w-[85%] rounded-xl p-3",
                        message.role === "user"
                          ? "bg-primary text-primary-foreground ml-auto"
                          : "bg-muted"
                      )}
                    >
                      {message.content}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="bg-muted max-w-[85%] rounded-xl p-3">
                      <div className="flex gap-1.5">
                        <div className="size-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                        <div className="size-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                        <div className="size-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "600ms" }}></div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              
              {/* Input area */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="resize-none"
                    rows={1}
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSubmit}
                    size="icon"
                    disabled={isLoading || input.trim() === ""}
                    className="shrink-0"
                  >
                    <Send className="size-4" />
                  </Button>
                </div>
                <div className="mt-2 text-xs text-center text-muted-foreground">
                  Powered by Google Gemini
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}