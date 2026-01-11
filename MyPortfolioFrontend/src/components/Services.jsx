import React from "react";
import { motion } from "framer-motion";
import { MoveRight, Layout, MousePointer2, Code2, Sparkles } from "lucide-react";

const services = [
  {
    title: "User Experience (UX)",
    icon: <MousePointer2 className="text-purple-600" size={24} />,
    desc: "We craft digital journeys that feel natural. By analyzing user behavior, we eliminate friction and build products that people actually enjoy using.",
    color: "from-purple-500/20 to-transparent",
  },
  {
    title: "User Interface (UI)",
    icon: <Layout className="text-blue-600" size={24} />,
    desc: "High-fidelity visuals that command attention. We blend typography, spacing, and color theory to create an aesthetic that aligns with your brand's DNA.",
  },
  {
    title: "Web Development",
    icon: <Code2 className="text-emerald-600" size={24} />,
    desc: "Turning pixels into performance. Our engineering team builds lightning-fast, scalable web applications using Next.js, Framer, and modern tech stacks.",
  },
];

const WhatIDo = () => {
  return (
    <section id="services" className="relative w-full py-32 bg-[#fafafa] overflow-hidden">
      
      {/* DECORATIVE AMBIENT BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">

          {/* LEFT CONTENT: FIXED POSITIONING FEEL */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={18} className="text-purple-600" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Services</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                Solving problems <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  with design.
                </span>
              </h2>

              <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-8 max-w-md">
                We don't just build websites; we create digital ecosystems that drive growth and foster user loyalty.
              </p>

          
            </motion.div>
          </div>

          {/* RIGHT CARDS: STAGGERED ENTRANCE */}
          <div className="space-y-6">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white border border-slate-100 rounded-[32px] p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.1)] transition-all duration-500"
              >
                {/* INTERACTIVE ACCENT */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-transparent rounded-bl-[100px] -z-10 transition-colors group-hover:from-purple-50" />
                
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                    {item.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-lg">
                      {item.desc}
                    </p>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="mt-6 flex items-center gap-2 text-purple-600 font-bold text-sm uppercase tracking-widest cursor-pointer"
                    >
                      Learn more <MoveRight size={16} />
                    </motion.div>
                  </div>
                </div>

                {/* BOTTOM PROGRESS BAR (HIDDEN UNTIL HOVER) */}
                <div className="absolute bottom-0 left-10 right-10 h-1 bg-slate-100 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ x: "-100%" }}
                     whileHover={{ x: "0%" }}
                     className="h-full w-full bg-gradient-to-r from-purple-600 to-blue-600"
                   />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIDo;