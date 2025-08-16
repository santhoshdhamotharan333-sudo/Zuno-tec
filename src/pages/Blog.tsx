import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Design in 2025',
      excerpt: 'Explore the latest trends and technologies shaping the web design landscape this year.',
      date: 'Jan 15, 2025',
      readTime: '5 min read',
      category: 'Design Trends',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Creating Engaging User Experiences',
      excerpt: 'Learn how to design interfaces that captivate and convert users effectively.',
      date: 'Jan 12, 2025',
      readTime: '7 min read',
      category: 'UX Design',
      image: 'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Brand Identity Design Principles',
      excerpt: 'Master the fundamentals of creating memorable and impactful brand identities.',
      date: 'Jan 10, 2025',
      readTime: '6 min read',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Modern Development Workflows',
      excerpt: 'Streamline your development process with modern tools and best practices.',
      date: 'Jan 8, 2025',
      readTime: '8 min read',
      category: 'Development',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'Color Theory in Digital Design',
      excerpt: 'Understanding how colors work together to create compelling digital experiences.',
      date: 'Jan 5, 2025',
      readTime: '4 min read',
      category: 'Design Theory',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: 'Responsive Design Best Practices',
      excerpt: 'Ensure your designs work perfectly across all devices and screen sizes.',
      date: 'Jan 3, 2025',
      readTime: '9 min read',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Design <span className="text-accent">Insights</span></h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights from the world of design and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-accent mb-3">
                    <span className="bg-accent/10 px-3 py-1 rounded-full">{post.category}</span>
                    <div className="flex items-center space-x-2 text-text-secondary">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-text-secondary mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-text-secondary text-sm">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <button className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-300 group-hover:translate-x-1">
                      Read More
                      <ArrowRight className="ml-1" size={16} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;