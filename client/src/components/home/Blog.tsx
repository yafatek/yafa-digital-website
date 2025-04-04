import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, ExternalLink, BookOpen } from 'lucide-react';
import { useState } from 'react';

const blogCategories = ['All', 'Cloud Computing', 'AI & Machine Learning', 'Cybersecurity', 'E-Commerce'];

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Enterprise AI in Cloud Infrastructure',
    category: 'AI & Machine Learning',
    date: 'May 15, 2023',
    readTime: '6 min read',
    description: 'Explore how artificial intelligence is revolutionizing enterprise cloud infrastructure and creating new possibilities for large-scale business operations.',
    href: '/blog/ai-cloud-computing',
    bgColor: 'bg-primary'
  },
  {
    id: 2,
    title: '5 Critical Cybersecurity Protocols for Enterprise Solutions',
    category: 'Cybersecurity',
    date: 'April 28, 2023',
    readTime: '8 min read',
    description: 'Protect your enterprise from sophisticated cyber threats with these essential security protocols every organization should implement immediately.',
    href: '/blog/cybersecurity-best-practices',
    bgColor: 'bg-corporate-accent'
  },
  {
    id: 3,
    title: 'How AI is Transforming Enterprise Data Management',
    category: 'AI & Machine Learning',
    date: 'April 10, 2023',
    readTime: '5 min read',
    description: 'Discover how AI-powered analytics, machine learning models, and intelligent automation are revolutionizing enterprise data management.',
    href: '/blog/ai-data-transformation',
    bgColor: 'bg-corporate-dark'
  }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="section bg-neutral-50 border-t border-neutral-200">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
            Industry Insights
          </div>
          <h2 className="heading-lg mb-4">
            Latest Resources & Expertise
          </h2>
          <p className="text-body-lg text-neutral-600 mx-auto">
            Stay updated with the latest enterprise technology trends, best practices, and strategic insights from our industry experts.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {blogCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              className={activeCategory === category 
                ? 'bg-primary text-white transition-all' 
                : 'bg-white text-neutral-700 hover:bg-neutral-50 transition-all'}
              onClick={() => setActiveCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="card card-hover h-full flex flex-col">
              {/* Post header image */}
              <div className={`w-full h-48 ${post.bgColor} flex items-center justify-center p-6`}>
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
              
              {/* Post content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category tag */}
                <div className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full self-start mb-4">
                  {post.category}
                </div>
                
                {/* Post title */}
                <h3 className="heading-sm mb-2">
                  <span 
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => window.location.href = post.href}
                  >
                    {post.title}
                  </span>
                </h3>
                
                {/* Post meta */}
                <div className="flex items-center text-neutral-500 text-sm mb-4">
                  <Calendar className="h-3.5 w-3.5 mr-1.5" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="h-3.5 w-3.5 mr-1.5" />
                  <span>{post.readTime}</span>
                </div>
                
                {/* Post excerpt */}
                <p className="text-neutral-600 text-sm mb-5 flex-grow">
                  {post.description}
                </p>
                
                {/* Read more link */}
                <div className="mt-auto pt-2">
                  <span 
                    className="inline-flex items-center text-primary font-medium cursor-pointer hover:underline group"
                    onClick={() => window.location.href = post.href}
                  >
                    <BookOpen className="h-4 w-4 mr-1.5" />
                    Read article
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Newsletter signup */}
        <div className="mt-16 bg-white rounded-lg border border-neutral-200 shadow-sm p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md mb-4">Get Enterprise Insights Delivered</h3>
              <p className="text-neutral-600 mb-6">
                Subscribe to our newsletter for exclusive industry insights, technology trends, and strategic business recommendations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your business email" 
                  className="px-4 py-2.5 rounded border border-neutral-300 flex-grow"
                  aria-label="Email subscription"
                />
                <Button className="bg-primary text-white font-medium whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-neutral-400 text-xs mt-3">
                We respect your privacy. You can unsubscribe at any time.
              </p>
            </div>
            
            <div className="hidden md:block bg-neutral-50 rounded-lg p-6 border border-neutral-100">
              <h4 className="heading-sm mb-3">Benefits for Subscribers</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-neutral-700">
                  <div className="h-5 w-5 text-primary mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="ml-2">Exclusive enterprise technology insights</span>
                </li>
                <li className="flex items-start text-sm text-neutral-700">
                  <div className="h-5 w-5 text-primary mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="ml-2">Early access to whitepapers and reports</span>
                </li>
                <li className="flex items-start text-sm text-neutral-700">
                  <div className="h-5 w-5 text-primary mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="ml-2">Invitations to industry webinars and events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* View all button */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
              View All Resources
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
