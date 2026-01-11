import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, MessageSquare, Clock } from "lucide-react";

const blogs = [
  {
    category: "Development",
    title: "How we scaled our SaaS to 100k users with Next.js",
    date: "Jan 12, 2026",
    comments: 12,
    readTime: "5 min",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
  },
  {
    category: "Design",
    title: "The psychology of minimalism in modern UI design",
    date: "Jan 08, 2026",
    comments: 8,
    readTime: "8 min",
    img: "https://images.stockcake.com/public/5/0/3/5032a397-e2fb-49a3-8f63-8c18e27dc092_large/coding-command-center-stockcake.jpg",
  },
  {
    category: "Engineering",
    title: "Why we switched from REST to GraphQL for our mobile app",
    date: "Jan 02, 2026",
    comments: 24,
    readTime: "12 min",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
  },
  {
    category: "Strategy",
    title: "The future of AI-driven development in 2026",
    date: "Dec 28, 2025",
    comments: 41,
    readTime: "6 min",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="relative w-full py-32 bg-[#fafafa] overflow-hidden">
      
      {/* LUXURY BACKGROUND ACCENTS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-full mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Insights & News</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              Latest from the <br /> <span className="text-purple-600">Journal</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-lg">
              Expertise, tutorials, and our thoughts on the future of the digital landscape.
            </p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-3 text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-purple-600 hover:border-purple-600 transition-all"
          >
            View all posts <ArrowUpRight size={20} />
          </motion.button>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => window.open("#", "_blank")} // Simulating link
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] mb-6 bg-slate-100">
                {/* Image Hover Zoom */}
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Category Badge on Image */}
                <div className="absolute top-5 left-5">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-xl">
                    {blog.category}
                  </span>
                </div>

                {/* Animated Arrow Overlay */}
                <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="bg-white p-4 rounded-full translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <ArrowUpRight className="text-purple-600" size={32} />
                   </div>
                </div>
              </div>

              {/* Meta Data */}
              <div className="flex items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">
                <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {blog.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors leading-tight mb-4">
                {blog.title}
              </h3>

              {/* Interaction Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MessageSquare size={16} />
                  <span>{blog.comments} Comments</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CUSTOM PAGINATION UI */}
        <div className="flex justify-center items-center gap-4 mt-20">
          <div className="h-[2px] w-20 bg-slate-200 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-full w-full bg-purple-600"
            />
          </div>
          <span className="text-slate-900 font-black text-sm uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-[2px] w-20 bg-slate-200 overflow-hidden">
            <motion.div 
              initial={{ x: "100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-full w-full bg-purple-600"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;