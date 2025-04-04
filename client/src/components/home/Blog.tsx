import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const blogCategories = ['All', 'Cloud Computing', 'AI & Machine Learning', 'Cybersecurity', 'E-Commerce'];

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Cloud Computing',
    category: 'AI & Machine Learning',
    date: 'May 15, 2023',
    description: 'Explore how artificial intelligence is revolutionizing cloud computing and creating new possibilities for businesses of all sizes.',
    href: '/blog/ai-cloud-computing',
    bgColor: 'from-blue-600 to-blue-800'
  },
  {
    id: 2,
    title: '5 Essential Cybersecurity Best Practices for 2023',
    category: 'Cybersecurity',
    date: 'April 28, 2023',
    description: 'Protect your business from the latest cyber threats with these essential security practices every organization should implement.',
    href: '/blog/cybersecurity-best-practices',
    bgColor: 'from-green-600 to-green-800'
  },
  {
    id: 3,
    title: 'How AI is Transforming E-commerce Customer Experience',
    category: 'E-Commerce',
    date: 'April 10, 2023',
    description: 'Discover how AI-powered chatbots, recommendation engines, and personalization are revolutionizing online shopping experiences.',
    href: '/blog/ai-ecommerce-transformation',
    bgColor: 'from-blue-600 to-blue-800'
  }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-4">Latest Insights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, technologies, and best practices in cloud computing, AI, and cybersecurity.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10 space-x-2">
          {blogCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              className={activeCategory === category 
                ? 'bg-[#003366] text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image placeholder with gradient background */}
              <div className={`w-full h-48 bg-gradient-to-r ${post.bgColor} flex items-center justify-center p-6`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-white opacity-60">
                  {post.category === 'AI & Machine Learning' && (
                    <>
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                      <path d="M10 17v.01" />
                      <path d="M14 17v.01" />
                    </>
                  )}
                  {post.category === 'Cybersecurity' && (
                    <>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </>
                  )}
                  {post.category === 'E-Commerce' && (
                    <>
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </>
                  )}
                  {post.category === 'Cloud Computing' && (
                    <>
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                    </>
                  )}
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`${post.category === 'Cybersecurity' || post.category === 'E-Commerce' ? 'bg-[#2E8B57] bg-opacity-10 text-[#2E8B57]' : 'bg-[#003366] bg-opacity-10 text-[#003366]'} text-xs font-medium px-3 py-1 rounded-full`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-[#003366]">{post.title}</h3>
                <p className="text-gray-700 mb-4">
                  {post.description}
                </p>
                <Link href={post.href}>
                  <a className="inline-block text-[#2E8B57] font-medium hover:underline">
                    Read more <ArrowRight className="inline h-4 w-4 ml-1" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button className="bg-[#003366] text-white font-heading font-semibold px-8 py-3 hover:bg-opacity-90 transition-colors duration-300">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
