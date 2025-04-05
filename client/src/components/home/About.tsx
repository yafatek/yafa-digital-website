import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Check, Users, Globe, Database, Code, Languages, Cloud, Server, Map, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background subtle patterns and decoration */}
      <div className="absolute -bottom-64 -left-64 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50"></div>
      <div className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-violet-50 blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-blue-50 backdrop-blur-lg border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
            About YAFA
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
            Your dedicated technology partner in the UAE
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-light">
            Based in Dubai, we combine deep technical expertise with local understanding to deliver practical Cloud & AI solutions for UAE businesses.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2 md:order-2">
            {/* Using a styled div with more modern Apple-like appearance */}
            <div className="rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 w-full aspect-video relative">
              {/* Modern geometric pattern overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-violet-500/5"></div>
              
              {/* Floating elements that suggest cloud/tech */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm transform rotate-12"></div>
              <div className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full bg-violet-50 border border-violet-100 shadow-sm"></div>
              <div className="absolute top-1/2 right-1/5 w-12 h-12 rounded-lg bg-amber-50 border border-amber-100 shadow-sm transform -rotate-6"></div>
              
              {/* Central branded element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-neutral-200/50">
                  <h3 className="text-2xl font-medium text-neutral-900 mb-1">YAFA Cloud</h3>
                  <p className="text-neutral-600">Dubai's AI & Cloud Experts</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:order-1">
            <h3 className="text-2xl font-medium text-neutral-900 mb-6">Our Expertise & Advantage</h3>
            <p className="text-neutral-600 mb-8 text-lg leading-relaxed">
              YAFA Cloud Services LLC was founded with a mission to empower UAE SMBs with accessible, high-impact Cloud & AI solutions. With over 15 years of experience in Cloud/DevOps and 17+ years mastering Python, we deliver practical technology solutions that solve real business challenges.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {[
                {
                  icon: Cloud,
                  title: "Multi-Cloud Expertise",
                  description: "AWS, GCP, Azure",
                  color: "bg-blue-50",
                  textColor: "text-blue-600"
                },
                {
                  icon: Server,
                  title: "End-to-End Capabilities",
                  description: "Infrastructure to AI",
                  color: "bg-violet-50",
                  textColor: "text-violet-600"
                },
                {
                  icon: Globe,
                  title: "Regional Experience",
                  description: "10+ years in MENA",
                  color: "bg-amber-50",
                  textColor: "text-amber-600"
                },
                {
                  icon: Languages,
                  title: "Multilingual Support",
                  description: "Arabic, English, Turkish",
                  color: "bg-emerald-50",
                  textColor: "text-emerald-600"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center shadow-sm flex-shrink-0 border border-neutral-100`}>
                    <item.icon className={`h-6 w-6 ${item.textColor}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 text-neutral-900">{item.title}</h4>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/about">
              <Button className="rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium transition-all hover:shadow-md px-6">
                Learn More About Us
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
