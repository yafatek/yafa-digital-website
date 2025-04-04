import { Star } from 'lucide-react';

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Yafa Cloud Services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-[#2E8B57] mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-heading font-bold text-[#003366]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
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
