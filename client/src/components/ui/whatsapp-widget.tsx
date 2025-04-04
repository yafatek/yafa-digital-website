import React, { useState } from 'react';

interface WhatsAppWidgetProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppWidget = ({
  phoneNumber,
  message = "Hello! I'd like to know more about your services."
}: WhatsAppWidgetProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  // Format phone number (remove any non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  const handleClick = () => {
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsTooltipVisible(true);
    // Hide tooltip after 2 seconds
    setTimeout(() => {
      setIsTooltipVisible(false);
    }, 2000);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Tooltip */}
      <div 
        className={`absolute bottom-full left-0 mb-3 bg-white text-gray-800 rounded-lg shadow-lg p-3 text-sm max-w-[200px] transition-opacity duration-300 ${
          isTooltipVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="font-medium mb-1">Need help?</div>
        <div className="text-gray-600">Chat with us on WhatsApp!</div>
        <div className="absolute w-3 h-3 bg-white transform rotate-45 bottom-[-6px] left-6"></div>
      </div>
      
      {/* Button */}
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`flex items-center justify-center p-4 rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </button>
    </div>
  );
};

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default WhatsAppWidget;