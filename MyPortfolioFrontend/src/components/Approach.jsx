import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const ProjectCTA = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } // Added 'show' to the same object
  };

  const drawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { 
        duration: 1.2, 
        delay: 0.8, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      
      {/* 1. ANIMATED BACKGROUND GLOWS */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-purple-100/40 rounded-full blur-[120px] -z-10" 
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] rounded-[40px] p-10 md:p-20 text-center overflow-hidden"
        >
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* MINIMAL STATUS BADGE */}
            <motion.div variants={textVariant} className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full mb-8">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Open for collaborations
              </span>
            </motion.div>

            {/* HEADING WITH UNIQUE DRAWING LINE */}
            <motion.h2 variants={textVariant} className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-10 tracking-tight">
              Design your future <br /> 
              <span className="relative inline-block">
                <span className="text-purple-600 italic font-serif">with us.</span>
                
                {/* UNIQUE DRAWING SVG LINE */}
                <svg 
                  className="absolute -bottom-2 left-0 w-full h-3" 
                  viewBox="0 0 300 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M5 15C50 15 150 5 295 15"
                    stroke="#9333ea"
                    strokeWidth="4"
                    strokeLinecap="round"
                    variants={drawLine}
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.p variants={textVariant} className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              Let’s transform your ideas into a high-performance digital reality. 
              Simple, fast, and scalable.
            </motion.p>

            <motion.div 
              variants={textVariant} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#9333ea",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-slate-200 hover:shadow-purple-200"
              >
                <Mail size={18} />
                <span>Get in Touch</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* DECORATIVE ELEMENTS */}
          <div className="absolute top-10 right-10 grid grid-cols-3 gap-2 opacity-20">
              {[...Array(9)].map((_, i) => (
                <motion.div 
                 key={i} 
                 animate={{ opacity: [0.2, 1, 0.2] }}
                 transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                 className="w-1.5 h-1.5 bg-slate-400 rounded-full" 
                />
              ))}
          </div>

          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-100/50 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCTA;