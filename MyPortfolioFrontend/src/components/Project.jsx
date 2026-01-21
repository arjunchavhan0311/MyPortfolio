import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Monitor } from "lucide-react";

const projects = [
  {
    title: "Civic Pulse Hub",
    category: "React.js | Spring Boot",
    img: "/CivicPulseHub.png"
    liveLink: "https://civic-pulse-hub.vercel.app/",
    githubLink: "https://github.com/arjunchavhan0311/CivicPulseHub",
  },
  {
    title: "Banking Security System",
    category: "Spring Security | JWT",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    liveLink: "https://your-demo-link.com",
    githubLink: "https://github.com/your-repo",
  },
  {
    title: "My Portfolio Website",
    category: "React | Tailwind | Spring Boot",
    img: "/HomePortfolio.png",
    liveLink: "https://arjun-chavhan-portfolio.vercel.app/",
    githubLink: "https://github.com/arjunchavhan0311/MyPortfolio",
  },
  {
    title: "Inventory Manager",
    category: "MySQL | Hibernate",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    liveLink: "https://your-demo-link.com",
    githubLink: "https://github.com/your-repo",
  },
  {
    title: "Cloud Infrastructure",
    category: "Docker | AWS",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    liveLink: "https://your-demo-link.com",
    githubLink: "https://github.com/your-repo",
  },
  {
    title: "Modern Portfolio",
    category: "Frontend Design",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    liveLink: "https://your-demo-link.com",
    githubLink: "https://github.com/your-repo",
  },
];

const PortfolioSection = () => {
  return (
    <section id="project" className="relative w-full py-24 bg-white overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Works</span>
            </h2>
            <div className="h-1.5 w-24 bg-purple-600 rounded-full" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-sm text-lg leading-relaxed font-medium"
          >
            A collection of technical solutions and creative frontends developed with precision.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              {/* IMAGE & OVERLAY */}
              <div className="relative h-[260px] w-full overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* DARK OVERLAY ON HOVER */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 backdrop-blur-[4px] transition-all duration-500 flex items-center justify-center gap-6">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-purple-600 hover:text-white transition-all duration-300 transform translate-y-8 group-hover:translate-y-0"
                  >
                    <Monitor size={24} />
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-purple-600 hover:text-white transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 delay-75"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  {project.title}
                </h3>

                <div className="flex items-center justify-between gap-4">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-slate-100 py-3 rounded-2xl text-sm font-bold text-slate-900 hover:border-purple-600 hover:text-purple-600 transition-all"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-slate-900 text-white rounded-2xl hover:bg-purple-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
