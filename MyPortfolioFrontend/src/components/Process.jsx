import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Cpu,
  LayoutTemplate,
  Rocket,
  ArrowRight,
} from "lucide-react";

const WorkProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery & Research",
      desc: "I dive deep into your requirements to understand the problem and define the technical architecture.",
      icon: <Search className="text-white" size={24} />,
      color: "bg-blue-600",
      light: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      id: "02",
      title: "System Analysis",
      desc: "Planning the database schema and backend logic using Spring Boot to ensure scalability.",
      icon: <Cpu className="text-purple-600" size={24} />,
      color: "bg-purple-600",
      light: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      id: "03",
      title: "UI/UX & Development",
      desc: "Crafting pixel-perfect React interfaces with seamless integration to the Java API.",
      icon: <LayoutTemplate className="text-pink-600" size={24} />,
      color: "bg-pink-600",
      light: "bg-pink-50",
      textColor: "text-pink-600",
    },
    {
      id: "04",
      title: "Testing & Launch",
      desc: "Rigorous testing and Docker deployment to ensure your product is stable and production-ready.",
      icon: <Rocket className="text-orange-600" size={24} />,
      color: "bg-orange-600",
      light: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  return (
    <section id="process" className="relative w-full bg-[#fdfdff] py-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50/50 to-transparent pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-purple-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">
            — How I Work
          </span>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
            My Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Process.
            </span>
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg">
            I follow a structured approach to ensure every project is delivered with high-quality code and exceptional user experience. From initial logic to final deployment.
          </p>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-300">
              <ArrowRight className="text-slate-900 group-hover:text-white transition-colors" size={20} />
            </div>
            <span className="font-bold text-slate-900 uppercase tracking-widest text-sm">Learn More</span>
          </div>
        </motion.div>

        {/* RIGHT CARDS - STAGGERED GRID */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative bg-white p-8 rounded-[32px] border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.03)] group hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 ${
                index % 2 !== 0 ? "sm:translate-y-12" : ""
              }`}
            >
              {/* Step Number */}
              <span className="absolute top-8 right-8 text-4xl font-black text-slate-50 group-hover:text-slate-100 transition-colors duration-500">
                {step.id}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${index === 0 ? step.color : step.light} group-hover:scale-110 group-hover:rotate-3`}>
                {React.cloneElement(step.icon, { 
                    className: index === 0 ? "text-white" : `${step.textColor} group-hover:text-white transition-colors duration-500`
                })}
                {/* Background Fill on Hover */}
                <div className={`absolute inset-0 ${step.color} rounded-2xl opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-500`} />
              </div>

              <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;