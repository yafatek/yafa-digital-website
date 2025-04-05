import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '@/lib/data';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-28 relative overflow-hidden" id="testimonials">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-[#f8f8fa]"></div>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-blue-50/70 blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-violet-50/70 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-neutral-900/5 backdrop-blur-sm border border-neutral-200 rounded-full px-5 py-1.5 text-neutral-700 text-sm font-medium tracking-wide mb-6">
            CLIENT STORIES
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight leading-tight mb-5">
            What our clients say
          </h2>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            Trusted by top businesses across the UAE and Middle East
          </p>
        </motion.div>
        
        <div className="relative mx-auto max-w-5xl">
          {/* Decorative element */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-blue-50/30 to-transparent rounded-full opacity-70"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-2xl border border-neutral-200/80 p-8 md:p-10 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md group-hover:border-neutral-300">
                  {/* Decorative quote mark */}
                  <div className="absolute -right-3 -top-3 text-neutral-100 transform rotate-180 opacity-40">
                    <Quote size={60} strokeWidth={1} />
                  </div>
                  
                  {/* Company logo placeholder - could be replaced with actual logos */}
                  <div className={`w-auto h-8 mb-8 opacity-80 flex items-center ${
                    index === 0 ? 'text-blue-700' : 
                    index === 1 ? 'text-violet-700' : 
                    'text-amber-700'
                  }`}>
                    <div className={`font-medium text-xs tracking-wider ${
                      index === 0 ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                      index === 1 ? 'bg-violet-50 text-violet-700 border-violet-200' : 
                      'bg-amber-50 text-amber-700 border-amber-200'
                    } py-1 px-3 rounded-full border inline-block`}>
                      {testimonial.position.split(',')[1]?.trim() || testimonial.position}
                    </div>
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-lg text-neutral-700 font-light leading-relaxed mb-8 relative z-10">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author info */}
                  <div className="flex items-center mt-auto pt-4 border-t border-neutral-100">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-neutral-900">{testimonial.name}</h4>
                      <p className="text-sm text-neutral-500">{testimonial.position.split(',')[0]}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="/case-studies" 
            className="inline-flex items-center text-neutral-900 font-medium hover:text-blue-600 transition-colors group"
          >
            <span>View our case studies</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
