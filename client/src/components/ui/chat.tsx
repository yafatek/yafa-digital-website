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
import { generateChatResponse, streamChatResponse, ChatMessage } from "@/lib/gemini";
import { MessageSquare, Send, X, Minimize2, Maximize2, Bot, PauseCircle } from "lucide-react";

// Import React Markdown and plugins
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      role: "model",
      content: "Hi, I'm Yafa AI. How can I help you with cloud services today?",
    },
  ]);
  
  // State for streaming
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamController, setStreamController] = useState<AbortController | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  const [retryTimer, setRetryTimer] = useState<number | null>(null);
  
  // Scroll to bottom of chat whenever history changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isStreaming]);

  // Check for mobile and set fullscreen mode appropriately
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      if (isMobile && isOpen && !isMinimized) {
        setIsFullscreen(true);
      } else if (!isMobile) {
        setIsFullscreen(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, isMinimized]);
  
  // Close chat and reset minimized state when screen is small and chat is closed
  useEffect(() => {
    if (window.innerWidth < 640 && !isOpen) {
      setIsMinimized(false);
    }
  }, [isOpen]);
  
  // Clean up any active stream on unmount
  useEffect(() => {
    return () => {
      if (streamController) {
        streamController.abort();
      }
    };
  }, [streamController]);
  
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
  
  // Stop streaming if it's active
  const stopStreaming = () => {
    if (streamController) {
      streamController.abort();
      setStreamController(null);
      setIsStreaming(false);
      setIsLoading(false);
    }
  };
  
  // Handle submitting the user message using streaming
  const handleSubmitWithStreaming = async () => {
    if (input.trim() === "" || isLoading) return;
    
    // If already streaming, stop the stream first
    if (isStreaming) {
      stopStreaming();
      return;
    }
    
    const userInput = input.trim();
    
    // Add user message to chat history
    const userMessage = { role: "user" as const, content: userInput };
    setChatHistory(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    try {      
      // Create initial empty AI message placeholder with an identifier to help with debugging
      setChatHistory(prev => [...prev, { role: "model", content: "" }]);
      setIsStreaming(true);
      
      console.log("Starting streaming for: " + userInput);
      
      // Start streaming chat response
      const controller = streamChatResponse(
        userInput,
        (chunk) => {
          // Update the AI message with the new chunk
          console.log("Received chunk:", chunk);
          setChatHistory(prev => {
            const newHistory = [...prev];
            // Get the last message (which should be the AI's response)
            const lastMessage = newHistory[newHistory.length - 1];
            if (lastMessage.role === "model") {
              // Append the new chunk to the existing content
              console.log("Updating content, before:", lastMessage.content.length);
              lastMessage.content += chunk;
              console.log("After:", lastMessage.content.length);
            } else {
              console.warn("Last message is not from model, it's:", lastMessage.role);
            }
            return [...newHistory]; // Return a new array to trigger re-render
          });
        },
        () => {
          // Streaming completed
          setIsStreaming(false);
          setIsLoading(false);
          setStreamController(null);
        },
        (error) => {
          console.error("Streaming error:", error);
          setIsStreaming(false);
          setIsLoading(false);
          setStreamController(null);
          
          // Handle errors with appropriate messages
          let errorMessage = "I'm sorry, I encountered an error. Please try again later.";
          
          if (error instanceof Error) {
            const errorText = error.message;
            
            if (errorText.includes("RATE_LIMIT") || errorText.includes("rate limit") || errorText.includes("429")) {
              errorMessage = "I've reached my rate limit for the moment. Please wait 1-2 minutes and try again, or contact us directly for immediate assistance.";
              // Start a 60-second countdown
              startRetryCountdown(60);
            } else if (errorText.includes("ACCESS_DENIED") || errorText.includes("API key") || errorText.includes("403")) {
              errorMessage = "I'm currently unavailable due to authentication issues. Our team has been notified.";
            } else if (errorText.includes("network") || errorText.includes("fetch")) {
              errorMessage = "Network connection issue. Please check your internet connection and try again.";
            }
          }
          
          // Update the last message or add a new error message
          setChatHistory(prev => {
            const newHistory = [...prev];
            const lastMessage = newHistory[newHistory.length - 1];
            
            if (lastMessage.role === "model" && lastMessage.content === "") {
              // If the last message is empty, replace it with error
              lastMessage.content = errorMessage;
              return newHistory;
            } else {
              // Otherwise add a new error message
              return [...prev, { role: "model", content: errorMessage }];
            }
          });
        }
      );
      
      // Save controller to allow cancellation
      setStreamController(controller);
      
    } catch (error) {
      console.error("Error in chat component:", error);
      handleChatError(error);
    }
  };
  
  // Non-streaming fallback version
  const handleSubmitNonStreaming = async () => {
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
      handleChatError(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Error handling utility
  const handleChatError = (error: any) => {
    // Add detailed error handling
    let errorMessage = "I'm sorry, I encountered an error. Please try again later.";
    
    if (error instanceof Error) {
      console.error("Error details:", {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      
      // More specific error messages based on error type
      if (error.message.includes("RATE_LIMIT") || error.message.includes("rate limit") || error.message.includes("429")) {
        errorMessage = "I've reached my rate limit for the moment. Please wait 1-2 minutes and try again, or contact us directly for immediate assistance.";
        // Start a 60-second countdown
        startRetryCountdown(60);
      } else if (error.message.includes("ACCESS_DENIED") || error.message.includes("API key") || error.message.includes("403")) {
        errorMessage = "I'm currently unavailable due to authentication issues. Our team has been notified.";
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
  };
  
  // Use streaming by default, fall back to non-streaming if needed
  const handleSubmit = () => {
    handleSubmitWithStreaming();
  };
  
  // Handle pressing Enter to submit
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  
  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      // Find the textarea element and focus it
      const textarea = document.querySelector('textarea');
      if (textarea && !isMinimized) {
        // Save current scroll position
        const scrollPosition = window.scrollY;
        
        setTimeout(() => {
          // Focus the textarea without scrolling the page
          textarea.focus({ preventScroll: true });
          
          // Restore scroll position
          window.scrollTo({
            top: scrollPosition,
            behavior: 'auto'
          });
        }, 300); // Short delay to ensure UI has rendered
      }
    }
  }, [isOpen, isMinimized]);
  
  // Toggle between minimized and expanded state
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  
  // Handle opening the chat while preserving scroll position
  const handleOpenChat = () => {
    // Save current scroll position
    const scrollPosition = window.scrollY;
    
    // Open the chat
    setIsOpen(true);
    
    // Restore scroll position after a short delay
    setTimeout(() => {
      window.scrollTo({
        top: scrollPosition,
        behavior: 'auto'
      });
    }, 50);
  };
  
  // Handle closing the chat
  const handleCloseChat = () => {
    // Save current scroll position
    const scrollPosition = window.scrollY;
    
    // Close the chat
    setIsOpen(false);
    
    // Restore scroll position after a short delay
    setTimeout(() => {
      window.scrollTo({
        top: scrollPosition,
        behavior: 'auto'
      });
    }, 50);
  };
  
  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <Button
          onClick={handleOpenChat}
          className="fixed bottom-5 right-5 rounded-full w-14 h-14 shadow-lg z-50 bg-blue-500 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div 
          className={cn(
            "fixed z-[1000] transition-all duration-300 ease-in-out overflow-hidden bg-white rounded-xl shadow-xl border border-gray-200 chat-overlay",
            isMinimized 
              ? "bottom-5 right-5 w-72 h-14"
              : isFullscreen
                ? "inset-0 w-full h-full rounded-none fullscreen"
                : "sm:bottom-5 sm:right-5 sm:w-[380px] sm:h-[500px] bottom-0 right-0 w-full h-[85vh] sm:max-h-[90vh]"
          )}
          style={{
            maxWidth: isMinimized 
              ? '18rem' 
              : isFullscreen 
                ? '100%' 
                : window.innerWidth < 640 ? '100%' : '380px',
            left: (window.innerWidth < 640 && !isMinimized) || isFullscreen ? '0' : 'auto',
            // Isolate scroll context
            contain: 'strict'
          }}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between p-3 border-b bg-gradient-to-r from-blue-600 to-blue-500 text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-medium text-white">YAFA AI Assistant</h3>
              {isStreaming && (
                <span className="px-1.5 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                  Typing...
                </span>
              )}
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 rounded-full hover:bg-white/10 text-white"
                onClick={toggleMinimize}
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 rounded-full hover:bg-white/10 text-white hover:text-white"
                onClick={handleCloseChat}
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
              <ScrollArea 
                className="flex-1 p-4 h-[calc(100%-120px)] overflow-x-hidden"
                scrollHideDelay={0}
                type="always"
              >
                <div className="flex flex-col gap-4 w-full overflow-x-hidden">
                  {chatHistory.map((message, index) => {
                    // Skip completely empty model messages that aren't actively streaming
                    if (message.role === "model" && !message.content && !(isStreaming && index === chatHistory.length - 1)) {
                      return null;
                    }
                    
                    // Check if we should add a timestamp
                    const showTimestamp = index > 0 && message.role !== chatHistory[index - 1].role;
                    
                    return (
                      <div
                        key={index}
                        className={cn(
                          "max-w-[85%] rounded-xl p-3 break-words overflow-hidden whitespace-normal word-break-break-word",
                          message.role === "user"
                            ? "bg-blue-500 text-white ml-auto rounded-br-none shadow-sm"
                            : index === chatHistory.length - 1 && message.content.includes("rate limit")
                              ? "bg-amber-50 border border-amber-200 text-amber-800 rounded-bl-none shadow-sm"
                              : isStreaming && index === chatHistory.length - 1 && message.role === "model"
                                ? "bg-blue-50 border border-blue-100 text-gray-800 rounded-bl-none shadow-sm"
                                : "bg-gray-100 text-gray-800 rounded-bl-none shadow-sm"
                        )}
                      >
                        <div className={message.role === "model" ? "text-[15px] leading-relaxed prose prose-sm max-w-none break-words" : ""}>
                          {message.role === "user" ? (
                            message.content || ""
                          ) : (
                            <>
                              {message.content ? (
                                <div className="markdown-content">
                                  <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                                    components={{
                                      ul: ({node, ...props}) => <ul className="list-disc pl-4 my-1.5 space-y-1" {...props} />,
                                      ol: ({node, ...props}) => <ol className="list-decimal pl-4 my-1.5 space-y-1" {...props} />,
                                      li: ({node, ...props}) => <li className="mb-0.5" {...props} />,
                                      p: ({node, ...props}) => <p className="mb-1.5 last:mb-0" {...props} />,
                                      h1: ({node, ...props}) => <h1 className="text-lg font-bold mb-2 mt-2" {...props} />,
                                      h2: ({node, ...props}) => <h2 className="text-base font-bold mb-1.5 mt-2" {...props} />,
                                      h3: ({node, ...props}) => <h3 className="text-sm font-bold mb-1 mt-1.5" {...props} />,
                                      a: ({node, ...props}) => <a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" {...props} />,
                                      code: ({node, inline, ...props}) => 
                                        inline 
                                          ? <code className="bg-gray-200 px-1 py-0.5 rounded text-sm" {...props} />
                                          : <code className="block bg-gray-200 p-2 rounded text-sm my-1.5 overflow-x-auto max-w-full" {...props} />,
                                      pre: ({node, ...props}) => <pre className="bg-gray-200 p-2 rounded my-1.5 overflow-x-auto max-w-full" {...props} />,
                                      strong: ({node, ...props}) => <strong className="font-semibold" {...props} />,
                                      em: ({node, ...props}) => <em className="italic" {...props} />,
                                      table: ({node, ...props}) => <div className="overflow-x-auto my-2"><table className="min-w-full divide-y divide-gray-200" {...props} /></div>,
                                      th: ({node, ...props}) => <th className="px-2 py-1 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider" {...props} />,
                                      td: ({node, ...props}) => <td className="px-2 py-1 whitespace-nowrap text-sm text-gray-500" {...props} />
                                    }}
                                  >
                                    {message.content}
                                  </ReactMarkdown>
                                </div>
                              ) : (
                                isStreaming && index === chatHistory.length - 1 ? "..." : ""
                              )}
                            </>
                          )}
                        </div>
                        
                        {/* Show cursor for streaming text */}
                        {isStreaming && index === chatHistory.length - 1 && message.role === "model" && (
                          <span className="inline-block w-2 h-4 ml-0.5 bg-blue-500 animate-pulse" 
                                style={{ 
                                  verticalAlign: 'middle', 
                                  marginBottom: '-2px',
                                  animation: 'blink 1s infinite' 
                                }}>
                          </span>
                        )}
                        
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
                    );
                  })}
                  
                  {/* Loading indicator (only shown when not streaming) */}
                  {isLoading && !isStreaming && (
                    <div className="bg-gray-100 max-w-[85%] rounded-xl p-3 rounded-bl-none shadow-sm">
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
              
              {/* Input area - enhanced for mobile */}
              <div className="p-3 border-t bg-white w-full overflow-hidden chat-window">
                <div className="flex gap-2 w-full items-end">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="resize-none min-h-[40px] max-h-[120px] rounded-xl border-gray-300 focus-visible:ring-blue-500 w-full py-2 px-3 shadow-sm"
                    rows={1}
                    disabled={isLoading}
                    style={{ fontSize: '15px' }}
                  />
                  
                  {isStreaming ? (
                    <Button
                      onClick={stopStreaming}
                      className="shrink-0 rounded-full w-11 h-11 bg-red-500 hover:bg-red-600 shadow-sm flex items-center justify-center"
                      aria-label="Stop response"
                    >
                      <PauseCircle className="w-5 h-5" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      className="shrink-0 rounded-full w-11 h-11 bg-blue-500 hover:bg-blue-600 shadow-sm flex items-center justify-center"
                      disabled={isLoading || input.trim() === ""}
                      aria-label="Send message"
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  )}
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
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          
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
          
          /* Ensure the chat overlay doesn't affect the page scroll */
          .chat-overlay {
            contain: layout size;
            isolation: isolate;
          }
          
          /* Fix for mobile browsers */
          @media (max-width: 640px) {
            /* Ensure navbar stays on top */
            header, nav, .navbar {
              z-index: 1001 !important;
            }
            
            /* For smaller screens, adjust the chat to avoid navbar conflicts */
            .chat-overlay {
              height: calc(85vh - var(--navbar-height, 60px)) !important;
              max-height: calc(100vh - var(--navbar-height, 60px)) !important;
              bottom: 0 !important;
            }

            /* When in fullscreen, position below navbar */
            .chat-overlay.fullscreen {
              top: var(--navbar-height, 60px) !important;
              height: calc(100vh - var(--navbar-height, 60px)) !important;
              max-height: calc(100vh - var(--navbar-height, 60px)) !important;
            }
          }
          
          /* Add safe area insets for modern mobile browsers */
          @supports(padding: max(0px)) {
            .chat-window {
              padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
            }
          }
          
          /* Markdown styling overrides for better mobile display */
          .markdown-content {
            font-size: 0.94rem;
            line-height: 1.5;
          }
          
          .markdown-content * {
            margin-top: 0;
          }
          
          .markdown-content ul, .markdown-content ol {
            padding-left: 1.25rem;
          }
          
          .markdown-content li > p {
            margin: 0;
          }
          
          .markdown-content code {
            white-space: pre-wrap;
            word-break: break-word;
            font-size: 0.85em;
          }
          
          .markdown-content table {
            display: block;
            overflow-x: auto;
            font-size: 0.85em;
            margin: 0.5rem 0;
            border-collapse: collapse;
          }
          
          .markdown-content table th,
          .markdown-content table td {
            border: 1px solid #e2e8f0;
          }
          
          .markdown-content blockquote {
            border-left: 3px solid #e2e8f0;
            padding-left: 0.75rem;
            margin-left: 0;
            color: #4a5568;
          }
          
          .markdown-content ul li::marker {
            color: #718096;
          }
        `}</style>
      )}
    </>
  );
}