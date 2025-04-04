import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { BlogPost } from '@/lib/types';

const categories = ['All', 'Cloud Computing', 'AI & Machine Learning', 'Cybersecurity', 'E-Commerce'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  const filteredPosts = !blogPosts 
    ? [] 
    : activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter(post => post.category === activeCategory);

  // Function to generate a gradient background based on category
  const getCategoryGradient = (category: string) => {
    switch(category) {
      case 'AI & Machine Learning':
        return 'from-blue-600 to-blue-800';
      case 'Cybersecurity':
        return 'from-green-600 to-green-800';
      case 'E-Commerce':
        return 'from-blue-600 to-blue-800';
      case 'Cloud Computing':
        return 'from-blue-700 to-blue-900';
      default:
        return 'from-blue-600 to-blue-800';
    }
  };

  // Function to get the appropriate icon for each category
  const getCategoryIcon = (category: string) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-white opacity-60">
        {category === 'AI & Machine Learning' && (
          <>
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
            <path d="M10 17v.01" />
            <path d="M14 17v.01" />
          </>
        )}
        {category === 'Cybersecurity' && (
          <>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </>
        )}
        {category === 'E-Commerce' && (
          <>
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </>
        )}
        {category === 'Cloud Computing' && (
          <>
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
          </>
        )}
      </svg>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#003366] text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Blog</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Stay updated with the latest trends, technologies, and best practices in cloud computing, AI, and cybersecurity.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center mb-16 space-x-2">
            {categories.map((category) => (
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

          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading skeletons
              Array(6).fill(0).map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Skeleton className="w-full h-48" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Skeleton className="h-6 w-24" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="h-8 w-full mb-3" />
                    <Skeleton className="h-20 w-full mb-4" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
              ))
            ) : filteredPosts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No blog posts found</h3>
                <p className="text-gray-500">Check back soon for updates or try a different category</p>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Image placeholder with gradient background */}
                  <div className={`w-full h-48 bg-gradient-to-r ${getCategoryGradient(post.category)} flex items-center justify-center p-6`}>
                    {getCategoryIcon(post.category)}
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
                      {post.summary}
                    </p>
                    <a href={`/blog/${post.slug}`} className="inline-block text-[#2E8B57] font-medium hover:underline">
                      Read more <ArrowRight className="inline h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination placeholder - would be implemented with actual pagination logic */}
          {!isLoading && filteredPosts.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="join">
                <Button variant="outline" className="join-item">«</Button>
                <Button variant="outline" className="join-item">Page 1</Button>
                <Button variant="outline" className="join-item">»</Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#003366] mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600">
                Get the latest insights on cloud computing, AI, and cybersecurity delivered straight to your inbox.
              </p>
            </div>
            
            <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#2E8B57]"
                required
              />
              <Button type="submit" className="bg-[#2E8B57] text-white hover:bg-opacity-90">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
