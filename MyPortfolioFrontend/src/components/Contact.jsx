import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Instagram,
  Github,
  Linkedin,
  Twitter,
  Compass,
  Smartphone,
  ArrowUpRight,
  Fingerprint,
  Zap,
} from "lucide-react";

const ContactSection = () => {

  /* ✅ HOOKS MUST BE INSIDE COMPONENT */
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    location: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:8080/api/contact/send", formData);
      alert("Message sent successfully");

      setFormData({
        name: "",
        email: "",
        phoneno: "",
        location: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      id="contact"
      className="relative w-full bg-[#f8fafc] overflow-hidden font-sans"
    >
      {/* --- ELITE MESH GRADIENT BACKGROUND --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-gradient-to-br from-purple-100/40 to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[50%] h-[60%] bg-gradient-to-bl from-blue-50/50 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-[-5%] left-[20%] w-[40%] h-[40%] bg-gradient-to-t from-indigo-50/60 to-transparent rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* --- REFINED HEADER --- */}
        <div className="mb-24 relative">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span className="text-purple-600 font-black uppercase tracking-[0.4em] text-[10px]">
              Project Initialization
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.8] mb-4">
            Think it. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600">
              Build it.
            </span>
          </h2>
          <p className="text-slate-400 font-medium text-lg max-w-md mt-6 leading-relaxed">
            Currently accepting high-impact digital projects for the Q1 2026
            cycle.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          {/* --- LEFT: DESIGNER BIO & INTEL --- */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative group overflow-hidden bg-white p-1 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
              <div className="bg-[#fafafa] rounded-[38px] p-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 group-hover:rotate-6 transition-transform">
                    <Fingerprint className="text-purple-600" size={32} />
                  </div>

                  {/* TOP QUICK SOCIAL LINKS */}
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/arjunchavhan0311"
                      className="p-2 bg-white rounded-lg border border-slate-100 text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href="https://www.instagram.com/mr_arjun_chavan_77?igsh=NGlibWJ1cTlqeGYx"
                      className="p-2 bg-white rounded-lg border border-slate-100 text-slate-400 hover:text-pink-600 transition-colors"
                    >
                      <Instagram size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Arjun Chavhan
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
                  Java Fullstack Developer
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Smartphone size={18} />,
                      label: "Encrypted Line",
                      val: "+91 84599 80171",
                      color: "bg-blue-50 text-blue-600",
                    },
                    {
                      icon: <Mail size={18} />,
                      label: "Digital Mail",
                      val: "arjunchavhan8459@gmail.com",
                      color: "bg-purple-50 text-purple-600",
                    },
                    {
                      icon: <MapPin size={18} />,
                      label: "Base Operations",
                      val: "Akola, Maharashtra",
                      color: "bg-indigo-50 text-indigo-600",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 group/item cursor-pointer"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover/item:scale-110 ${item.color}`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1 border-b border-slate-100 pb-2">
                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">
                          {item.label}
                        </p>
                        <p className="font-bold text-slate-800 text-sm group-hover/item:text-purple-600 transition-colors">
                          {item.val}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- SOCIAL MATRIX: 4 LINKS --- */}
            <div className="grid grid-cols-2 gap-4">
              {/* Row 1: GitHub & LinkedIn */}
              <a
                href="https://github.com/arjunchavhan0311"
                className="bg-slate-900 rounded-[32px] p-6 text-white group cursor-pointer hover:bg-black transition-colors"
              >
                <Github
                  size={20}
                  className="mb-4 text-slate-400 group-hover:text-white"
                />
                <p className="text-[9px] font-black uppercase tracking-widest opacity-40">
                  Github
                </p>
                <p className="font-bold text-sm">@arjunchavhan0311</p>
              </a>
              <a
                href="https://www.linkedin.com/in/arjun-chavhan"
                className="bg-white border border-slate-100 rounded-[32px] p-6 text-slate-900 group cursor-pointer hover:border-blue-200 transition-all shadow-sm"
              >
                <Linkedin size={20} className="mb-4 text-blue-600" />
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  LinkedIn
                </p>
                <p className="font-bold text-sm">Professional</p>
              </a>

              {/* Row 2: Instagram & Twitter */}
              <a
                href="https://www.instagram.com/mr_arjun_chavan_77?igsh=NGlibWJ1cTlqeGYx"
                className="bg-white border border-slate-100 rounded-[32px] p-6 text-slate-900 group cursor-pointer hover:border-pink-200 transition-all shadow-sm"
              >
                <Instagram size={20} className="mb-4 text-pink-600" />
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Instagram
                </p>
                <p className="font-bold text-sm">mr_arjun_chavan_77</p>
              </a>
              <a
                href="https://x.com/AChavan47633"
                className="bg-slate-50 border border-slate-100 rounded-[32px] p-6 text-slate-900 group cursor-pointer hover:bg-sky-50 transition-all shadow-sm"
              >
                <Twitter size={20} className="mb-4 text-sky-500" />
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Twitter / X
                </p>
                <p className="font-bold text-sm">@arjun_dev</p>
              </a>
            </div>
          </div>

          {/* --- RIGHT: PREMIUM GLASS FORM --- */}
          <div className="lg:col-span-8 bg-white rounded-[48px] border border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] p-8 md:p-20 relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Zap size={120} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
            >
              {[
                {
                  label: "Name",
                  name: "name",
                  type: "text",
                  required: true,
                  sub: "Your full name",
                },
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  required: true,
                  sub: "Email address",
                },
                {
                  label: "Mobile",
                  name: "phoneno",
                  type: "tel",
                  icon: <Smartphone size={16} />,
                  sub: "WhatsApp/Direct",
                },
                {
                  label: "Location",
                  name: "location",
                  type: "text",
                  icon: <Compass size={16} />,
                  sub: "City, Country",
                },
                {
                  label: "Project Concept",
                  name: "subject",
                  type: "text",
                  sub: "Web/App/Brand",
                },
              ].map((field, idx) => (
                <div key={idx} className="relative group">
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 outline-none focus:border-purple-600 transition-all font-bold text-slate-900 placeholder-transparent text-base"
                  />
                  <label className="absolute left-0 top-3 text-slate-400 pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-purple-600 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px]">
                    {field.label}
                  </label>
                  <p className="mt-2 text-[9px] text-slate-300 font-bold uppercase tracking-tighter opacity-0 group-focus-within:opacity-100 transition-opacity">
                    {field.sub}
                  </p>
                </div>
              ))}
              <div className="md:col-span-2 relative group">
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 outline-none focus:border-purple-600 transition-all font-bold text-slate-900 resize-none placeholder-transparent text-base"
                ></textarea>
                <label className="absolute left-0 top-3 text-slate-400 pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-purple-600 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px]">
                  The Vision
                </label>
              </div>

                   <div className="md:col-span-2 flex gap-10 items-stretch">

  {/* Submit Button */}
  <motion.button
    type="submit"
    disabled={loading}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="flex-1 bg-slate-900 text-white rounded-[24px] py-6
               flex items-center justify-between px-10 group
               transition-all hover:bg-purple-600
               shadow-2xl shadow-purple-100"
  >
    <span className="text-xs font-black uppercase tracking-[0.4em]">
      Submit
    </span>
    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
  </motion.button>

  {/* Direct Mail Button Wrapper */}
  <div className="flex-1 flex border rounded-2xl bg-purple-500">

    <motion.a
      href="mailto:byalerohan@gmail.com"
      whileHover={{
        scale: 1.05,
        y: -4,
        boxShadow: "0px 15px 40px rgba(168, 85, 247, 0.5)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="group flex items-center justify-between px-10 py-6
                 bg-white/[0.03] border border-white/10
                 rounded-2xl hover:border-purple-400
                 transition-all w-full"
    >
      <motion.span
        initial={{ letterSpacing: "0.15em" }}
        whileHover={{ letterSpacing: "0.25em" }}
        transition={{ duration: 0.3 }}
        className="text-xs font-bold text-black uppercase tracking-widest"
      >
        Direct Mail
      </motion.span>

      <motion.span
        whileHover={{ x: 6, y: -6, rotate: 45 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-neutral-700 group-hover:text-purple-500 text-lg"
      >
        →
      </motion.span>
    </motion.a>

  </div>
</div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* --- ELITE ARCHITECTURAL FOOTER --- */}
      <footer className="relative bg-white pt-24 pb-12 overflow-hidden border-t border-slate-100">
        {/* Large Aesthetic Watermark Background */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none overflow-hidden leading-none opacity-[0.02]">
          <h2 className="text-[25vw] font-black tracking-tighter -mb-10 text-slate-900">
            CHAVHAN
          </h2>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            {/* Brand Essence */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white text-[12px] font-black">
                  AC
                </div>
                <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-900">
                  Arjun
                </span>
              </div>
              <p className="text-slate-400 text-sm font-medium max-w-sm leading-relaxed">
                Engineering high-performance digital interfaces and elite brand
                experiences. Driven by precision, powered by passion.
              </p>
            </div>

            {/* Quick Navigation / Status */}
            <div className="md:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6">
                Availability
              </h4>
              <div className="flex items-center gap-2 group cursor-default">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="text-xs font-bold text-slate-600">
                  Open for Q1 2026 Projects
                </span>
              </div>
            </div>

            {/* Local Time / Location */}
            <div className="md:col-span-4 md:text-right">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6">
                Based In
              </h4>
              <p className="text-sm font-bold text-slate-600">
                Maharashtra, India
              </p>
              <p className="text-xs font-medium text-slate-400 mt-1">
                19.7008° N, 77.0001° E
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                © 2026 All Rights Reserved
              </p>
              <div className="hidden md:block h-3 w-[1px] bg-slate-100" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                Privacy Policy
              </p>
            </div>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -2 }}
              className="flex items-center gap-3 group"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                Back to top
              </span>
              <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                <ArrowUpRight size={14} className="-rotate-45" />
              </div>
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;
