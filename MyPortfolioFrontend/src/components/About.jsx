import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const AboutSection = () => {
  // Animation Variants
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=100045535961154", color: "hover:text-blue-600" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/mr_arjun_chavan_77?igsh=NGlibWJ1cTlqeGYx", color: "hover:text-pink-600" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/arjun-chavhan", color: "hover:text-blue-700" },
    { icon: <FaGithub />, url: "https://github.com/arjunchavhan0311", color: "hover:text-gray-900" },
    { icon: <FaTwitter />, url: "https://x.com/AChavan47633", color: "hover:text-sky-500" },
  ];

  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 bg-[#fafafa]">
      
      {/* PREMIUM BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-purple-100/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-orange-100/50 blur-[120px]" />
      </div>

      {/* MAIN CONTAINER */}
      <motion.div 
        {...fadeIn}
        className="relative z-10 w-full max-w-[1200px] bg-white/70 backdrop-blur-xl rounded-[40px] border border-white/50 shadow-[0_40px_100px_rgba(0,0,0,0.04)] p-8 md:p-16 lg:p-20"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: IMAGE & SOCIALS */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-dashed border-purple-200 rounded-[32px] group-hover:rotate-3 transition-transform duration-500" />
              
              <div className="relative overflow-hidden rounded-[24px] bg-slate-100">
                <img
                  src="/arjunc.jpeg"
                  alt="Arjun Chavhan"
                  className="w-full h-[450px] md:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* FLOATING SOCIAL BAR */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl px-6 py-4 flex items-center gap-6"
              >
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 text-xl transition-all duration-300 ${link.color} hover:scale-125`}
                  >
                    {link.icon}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: CONTENT */}
          <div className="text-center lg:text-left pt-10 lg:pt-0">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block text-purple-600 font-bold uppercase tracking-widest text-sm mb-4"
            >
              — About Me
            </motion.span>
            
            <motion.h2 
              {...fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1]"
            >
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Full Stack</span> Developer
            </motion.h2>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                I’m <span className="text-slate-900 font-bold">Arjun Chavhan</span>, based in India. 
                I specialize in building high-performance Java Backend systems and pixel-perfect 
                React frontends. My goal is to merge technical efficiency with beautiful design.
              </p>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                With expertise in <span className="text-purple-600 font-semibold">Spring Boot & MySQL</span>, 
                I transform complex business requirements into seamless digital solutions.
              </p>
            </motion.div>

            {/* ACTION BUTTONS */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-5 justify-center lg:justify-start"
            >
              <a href="#education" className="group relative bg-slate-900 text-white px-8 py-4 rounded-full font-bold overflow-hidden transition-all">
                <span className="relative z-10">My Education</span>
                <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>

           <a 
  href="public/arjunresume.pdf" // This path points directly to your public folder
  download="Arjun_Chavhan_Resume.pdf" 
  className="flex items-center justify-center border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold hover:border-purple-600 hover:text-purple-600 transition-all cursor-pointer"
>
  Download CV
</a>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
