import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiSpringboot, 
  SiTailwindcss, 
  SiMysql, 
  SiJavascript,
  SiApachetomcat,
  SiSpring
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Marquee = () => {
  const techStack = [
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
    { name: "Spring Framework", icon: <SiSpring className="text-[#6DB33F]" /> },
    { name: "Apache Tomcat", icon: <SiApachetomcat className="text-[#F8DC75]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  ];

  // Duplicating the list for a seamless infinite loop
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="relative w-full py-12 bg-[#fafafa] overflow-hidden">
      {/* SECTION HEADER */}
      <div className="text-center mb-10">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          My Technical Arsenal
        </span>
      </div>

      {/* GRADIENT MASK (Fades the edges for that premium look) */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#fafafa] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#fafafa] to-transparent z-10" />

      {/* MARQUEE TRACK */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1200] }}
          transition={{
            duration: 30, // Adjusted speed for a smooth, professional feel
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white px-8 py-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </span>
              <span className="text-lg font-bold text-slate-700 tracking-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;