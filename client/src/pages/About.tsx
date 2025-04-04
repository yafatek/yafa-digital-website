import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Check, Users, Globe, Headphones, Award, Target, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#003366] text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">About Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Learn about our mission, values, and the team behind Yafa Cloud Services LLC.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2018, Yafa Cloud Services LLC began with a vision to bridge the gap between advanced cloud technology and businesses of all sizes. Our founders, with extensive backgrounds in tech giants like Amazon and Microsoft, recognized that many organizations were struggling to harness the full potential of cloud computing and AI.
              </p>
              <p className="text-gray-700 mb-6">
                What started as a small consultancy quickly grew into a comprehensive cloud services provider, as we expanded our expertise to include e-commerce solutions, digital marketing, and cybersecurity services. Today, we're proud to serve clients across various industries, from startups to Fortune 500 companies.
              </p>
              <p className="text-gray-700">
                Our commitment to innovation, technical excellence, and client satisfaction remains at the core of everything we do. We continuously evolve our services to stay ahead of the rapidly changing technology landscape, ensuring our clients always have access to the most effective solutions.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-xl bg-gradient-to-br from-blue-800 to-green-600 w-full max-w-md aspect-square flex items-center justify-center p-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-32 h-32 text-white opacity-70">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Yafa Cloud Services, we're driven by a clear mission and guided by strong values.
            </p>
          </div>

          <div className="mb-20">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-heading text-[#003366] mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To empower businesses with innovative cloud and AI solutions that drive growth, efficiency, and security in an increasingly digital world.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] mb-6">
                <Award className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold font-heading text-[#003366] mb-3">Excellence</h4>
              <p className="text-gray-700">
                We are committed to delivering the highest quality solutions and services, constantly pushing the boundaries of what's possible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#2E8B57] bg-opacity-10 flex items-center justify-center text-[#2E8B57] mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold font-heading text-[#003366] mb-3">Innovation</h4>
              <p className="text-gray-700">
                We embrace change and continually seek new and better ways to solve problems and create value for our clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] mb-6">
                <Users className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold font-heading text-[#003366] mb-3">Collaboration</h4>
              <p className="text-gray-700">
                We believe in the power of teamwork, both within our organization and in partnership with our clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#2E8B57] bg-opacity-10 flex items-center justify-center text-[#2E8B57] mb-6">
                <Clock className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold font-heading text-[#003366] mb-3">Reliability</h4>
              <p className="text-gray-700">
                We deliver on our promises, ensuring clients can depend on us for consistent, high-quality service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] mb-6">
                <Globe className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold font-heading text-[#003366] mb-3">Global Perspective</h4>
              <p className="text-gray-700">
                We embrace diversity and bring a global mindset to solving our clients' most complex challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#2E8B57] bg-opacity-10 flex items-center justify-center text-[#2E8B57] mb-6">
                <Headphones className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold font-heading text-[#003366] mb-3">Client Focus</h4>
              <p className="text-gray-700">
                Our clients' success is our success. We're dedicated to understanding their needs and exceeding their expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading Yafa Cloud Services toward innovation and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Using SVG avatars instead of images */}
            {[
              { name: 'David Wilson', title: 'CEO & Founder', color: 'blue-800' },
              { name: 'Sarah Ahmad', title: 'CTO', color: 'green-700' },
              { name: 'Michael Lee', title: 'Chief Cloud Architect', color: 'blue-700' },
              { name: 'Rebecca Johnson', title: 'Head of AI Development', color: 'green-800' },
              { name: 'Carlos Rodriguez', title: 'Cybersecurity Director', color: 'blue-900' },
              { name: 'Jennifer Wang', title: 'Client Success Manager', color: 'green-600' }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-br from-${member.color} to-gray-900 h-64 flex items-center justify-center`}>
                  <svg className="w-24 h-24 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold font-heading text-[#003366] mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#003366] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Let's discuss how our cloud and AI solutions can help you achieve your goals.
          </p>
          <Link href="/contact">
            <Button className="bg-[#2E8B57] text-white font-heading font-semibold px-8 py-3 text-lg hover:bg-opacity-90 transition-colors duration-300">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
