import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Yafa Cloud Services transformed our e-commerce platform with their AWS expertise. Our site is now faster, more secure, and our sales have increased dramatically.",
    name: "Sarah Johnson",
    position: "CEO, RetailPlus",
    avatar: generateAvatarUrl("Sarah Johnson")
  },
  {
    id: 2,
    text: "The AI chatbot solution developed by Yafa Cloud Services has revolutionized our customer service. It handles 70% of inquiries automatically and in multiple languages.",
    name: "Michael Chen",
    position: "CTO, ServiceNow Inc.",
    avatar: generateAvatarUrl("Michael Chen")
  },
  {
    id: 3,
    text: "Their cybersecurity expertise is unmatched. Yafa Cloud Services implemented a comprehensive security solution that gives us peace of mind and meets all regulatory requirements.",
    name: "Rebecca Martinez",
    position: "CISO, FinSecure Bank",
    avatar: generateAvatarUrl("Rebecca Martinez")
  }
];

// Function to generate a consistent avatar based on name
function generateAvatarUrl(name: string) {
  const colors = ['4299E1', '48BB78', 'ED8936', '9F7AEA', 'ED64A6'];
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  const colorIndex = name.length % colors.length;
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" fill="%23${colors[colorIndex]}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="white">${initials}</text></svg>`;
}

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#f5f5f7]/80 to-transparent"></div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-neutral-50 backdrop-blur-lg border border-neutral-200 rounded-full px-4 py-1.5 text-neutral-600 text-sm font-medium mb-6">
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight leading-tight mb-5">
            What our clients say
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-light max-w-2xl mx-auto">
            Real experiences from UAE businesses that have partnered with YAFA Cloud Services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="relative bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-neutral-300 group overflow-hidden"
            >
              {/* Quote icon decoration */}
              <div className="absolute -right-4 -top-4 text-neutral-100 opacity-50 group-hover:opacity-70 transition-opacity">
                <Quote size={80} />
              </div>
              
              {/* Colored top accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${
                index === 0 ? 'bg-blue-400' : 
                index === 1 ? 'bg-violet-400' : 
                'bg-amber-400'
              }`}></div>
              
              <div className="flex text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              
              <p className="text-neutral-700 mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-medium text-neutral-900">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
