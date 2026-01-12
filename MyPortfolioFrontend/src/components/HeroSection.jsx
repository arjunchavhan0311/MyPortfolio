import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex items-center bg-[#fafafa]">
      
      {/* --- ANIMATED BACKGROUND BLOBS --- */}
      <motion.div 
        animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-[120px] z-0" 
      />
      <motion.div 
        animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[0%] w-[600px] h-[600px] rounded-full bg-teal-100/40 blur-[130px] z-0" 
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-3">
        
        {/* LEFT CONTENT */}
        <motion.div 
          variants={containerVars}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={itemVars} className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-sm font-bold tracking-wide uppercase">
            ✨ Available for new projects
          </motion.div>

          <motion.h1 variants={itemVars} className="text-[64px] lg:text-[82px] leading-[1.05] font-black text-slate-900 mb-8 tracking-tight">
            Hello, I’m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
              Arjun Chavhan
            </span>
          </motion.h1>

          <motion.p variants={itemVars} className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed font-medium">
            A Full Stack Developer & UI Designer. I build high-performance web applications with 
            <span className="text-slate-900 font-bold"> Java, Spring Boot, and React.</span>
          </motion.p>

       <motion.div variants={itemVars} className="flex items-center gap-5">
  {/* REDIRECTS TO CONTACT SECTION */}
  <motion.a 
    href="#contact"
    className="relative group overflow-hidden bg-slate-900 text-white px-10 py-4 rounded-full font-bold transition-all hover:pr-12 cursor-pointer inline-block"
  >
    <span className="relative z-10">Start a Project</span>
    <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
    <div className="absolute inset-0 bg-purple-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
  </motion.a>

  {/* REDIRECTS TO PORTFOLIO SECTION */}
  <motion.a 
    href="#project"
    className="text-slate-900 font-bold hover:text-purple-600 transition-colors cursor-pointer"
  >
    View Work
  </motion.a>
</motion.div>

          {/* GLASS STATS */}
          <motion.div variants={itemVars} className="mt-20 grid grid-cols-3 gap-4 max-w-xl">
            {[
              { label: "Experience", val: "1 Y." },
              { label: "Completed", val: "2+" },
              { label: "Clients", val: "" }
            ].map((stat, i) => (
              <div key={i} className="group p-5 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-md hover:border-purple-400 hover:bg-white transition-all duration-300">
                <h3 className="text-2xl font-black text-slate-900 group-hover:scale-110 transition-transform origin-left">{stat.val}</h3>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Decorative Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-slate-300 rounded-full animate-[spin_20s_linear_infinite] border-dashed" />
          
          <div className="relative z-10 group">
            <motion.div 
              whileHover={{ rotate: -2, scale: 1.02 }}
              className="relative overflow-hidden rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[12px] border-white"
            >
              <img
                src="/arjun.jpeg"
                alt="Arjun Chavhan"
                className="w-[400px] h-[550px] object-cover"
              />
            </motion.div>
            
            {/* Floating Tag */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">✓</div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Satisfaction</p>
                <p className="text-sm font-black text-slate-900">100% Guaranteed</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
