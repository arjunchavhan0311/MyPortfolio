import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Helper function to close menu and scroll
  const handleNavClick = () => {
    setOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Blog", href: "#blog" },
    { name: "Services", href: "#services" },
  ];

  return (
    <>
      {/* Global CSS for Smooth Scrolling */}
      <style dangerouslySetInnerHTML={{ __html: `html { scroll-behavior: smooth; }` }} />

      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <nav className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center text-white font-bold">
              <img src="/mynamelogo1.png" alt="My Portfolio Logo"/>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Arjun Chavhan
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-purple-600 transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CONTACT BUTTON */}
        <div className="hidden md:block">
      <motion.a
        href="#contact"
        // 1. Interaction Animations
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        initial="initial"
        className="relative overflow-hidden bg-purple-600 text-white px-8 py-2.5 rounded-full font-bold tracking-wide flex items-center gap-2 shadow-lg shadow-purple-200"
      >
        {/* BACKGROUND HOVER GRADIENT LAYER */}
        <motion.div 
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 transition-opacity duration-300" 
        />

        {/* SHIMMER LIGHT STREAK (Framer Motion version - no CSS config needed) */}
        <motion.div
          variants={{
            initial: { x: "-100%" },
            hover: { x: "100%" }
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 1,
            duration: 1,
            ease: "linear"
          }}
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
        />

        {/* TEXT CONTENT */}
        <span className="relative z-10">Hire Me</span>

        {/* ANIMATED ARROW */}
        <motion.span
          variants={{
            initial: { x: -10, opacity: 0 },
            hover: { x: 0, opacity: 1 }
          }}
          className="relative z-10"
        >
          →
        </motion.span>
      </motion.a>
    </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white border-t absolute w-full left-0">
            <ul className="flex flex-col gap-6 px-6 py-6 text-gray-700 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={handleNavClick}>
                    {link.name}
                  </a>
                </li>
              ))}
              <a 
                href="#contact" 
                onClick={handleNavClick}
                className="mt-4 bg-purple-600 text-white py-2 rounded-lg text-center"
              >
                Hire Me
              </a>
            </ul>
          </div>
        )}
      </header>
      
      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className="h-[80px]"></div>
    </>
  );
};

export default Navbar;
