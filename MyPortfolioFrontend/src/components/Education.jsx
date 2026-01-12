import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, Briefcase, X, ExternalLink, CheckCircle2 } from 'lucide-react';

const EducationPage = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Sant Gadge Baba Amravati University",
      duration: "2023 - 2026",
      grade: "6 CGPA",
      // Detailed description as an array for cleaner bullet points
      details: [
        "Mastered Spring Boot, Spring Security, and Microservices architecture.",
        "Weekly mock interviews and professional soft skills training.",
        "Completed major project on 'Distributed File Storage System' using Java RMI.",
        "Participated in various inter-college coding competitions and hackathons.",
        
      ],
      skills: [
         { name: "Java Programming", cert: "/Java Programming.jpeg" },
         { name: "DSA Using Java", cert: "/DSA Using Java.jpeg" },
         { name: "DBMS", cert: "/DBMS1.jpeg" },
         { name: "NoSQL DB", cert: "/NoSQLDB.jpeg" },
         { name: "Hackathon", cert: "/HackathonBNCOE.jpeg" },
        
      ],
      internship: {
        role: "Java Developer Intern",
        company: "Infosys Springboard",
        period: "Nov 2025 - Jan 2026",
        description:"A backend system designed for municipalities to manage and track citizen-reported issues like road damage, waterleakage, and electricity outages.",
        task: "Java, Spring Boot, REST APIs, MySQL, JWT, Hibernate"
      }
    },
    {
      degree: "Diploma in Computer  Engineering",
      institution: "Government Polytechnic, Khamgaon",
      duration: "2021 - 2023",
      grade: "73.71%",
      details: [
        "Core focus on Object-Oriented Programming (OOP) and Java Fundamentals.",
        "Consistent performer in Data Structures and Algorithm analysis courses.",
        "Learned web development technologies including HTML, CSS, JavaScript, and React JS.",
        "Led a team of 4 in a project to develop a local restaurant web application.", 
      ],
      skills: [
        { name: "Core Java", cert: "/Java Foundation.jpeg" },
        { name: "Python", cert: "/Python.jpeg" },
        { name: "SQL", cert: "/DBMS2.jpeg" },
        { name: "Web Development", cert: "/DiplomaInternship.jpeg" },
        {name: "PHP Developer", cert: "/PHP.jpeg" }
      ],
      internship: {
        role: "Frontend UI Developer Intern",
        company: "Microspectra Pvt. Ltd.",
        period: "Jun 2022 - Aug 2022",
        description:"Developed a web application UI for a local restorant where customers can view menus and place orders.",
        task: "HTML5, CSS3, JavaScript, Bootstrap, React JS"
      }
    },
    {
      degree: "SSC (Class X)",
      institution: "New English School, Maangaon ,Pune",
      duration: "2019 - 2020",
      grade: "79.80%",
      details: [
        "Major in Physics, Chemistry, and Mathematics (PCM).",
        "Achieved 100/100 marks in Computer Science (C++ concentration).",
        "Elected as 'Technology Head' of the student council.",
      ],
      skills: [
        { name: "Mathematics", cert: null },
        { name: "Logic", cert: null }
      ],
      internship: null // Keeping one without internship for variety
    }
  ];

  return (
    <div id='education' className="min-h-screen bg-[#f8fafc] py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-bold tracking-widest text-xs uppercase">Resume</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2">
            Education <span className="text-purple-600">&</span> Experience
          </h2>
        </motion.div>

        {/* Timeline Start */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-12">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-16 ml-8 sm:ml-12 relative"
            >
              {/* Timeline Marker */}
              <span className="absolute -left-[43px] sm:-left-[61px] top-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white border-4 border-purple-500 shadow-md z-10 transition-transform hover:scale-110">
                <GraduationCap className="w-5 h-5 text-purple-600" />
              </span>

              {/* Main Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-purple-200 transition-all group">
                
                {/* Degree and Institution */}
                <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4 border-b border-slate-50 pb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors tracking-tight">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500 font-medium mt-2">
                      <BookOpen className="w-4 h-4 text-purple-400" /> {edu.institution}
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end">
                    <span className="px-4 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-xs font-bold whitespace-nowrap">
                      <Calendar className="w-3 h-3 mr-2 inline" /> {edu.duration}
                    </span>
                    <span className="mt-2 text-sm font-bold text-slate-400 uppercase tracking-tighter">
                      Result: <span className="text-emerald-500">{edu.grade}</span>
                    </span>
                  </div>
                </div>

                {/* Detailed Description Points */}
                <div className="mb-8">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Highlights</h4>
                  <ul className="space-y-3">
                    {edu.details.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Internship Section */}
                {edu.internship && (
                  <div className="mb-8 p-5 bg-gradient-to-br from-slate-50 to-white rounded-2xl border-l-4 border-purple-500 shadow-inner">
                    <div className="flex items-center gap-2 text-purple-700 font-bold text-xs mb-2 tracking-widest uppercase">
                      <Briefcase className="w-4 h-4" /> Professional Experience
                    </div>
                    <div className="text-slate-800 font-bold">{edu.internship.role}</div>
                    <div className="text-purple-600 text-sm font-semibold mb-2">{edu.internship.company}</div>
                    <p className="text-slate-500 text-sm italic leading-relaxed">"{edu.internship.description}"</p>
                    <p className="text-slate-500 text-sm italic leading-relaxed">"{edu.internship.task}"</p>
                  </div>
                )}

                {/* Skill Badges */}
                <div>
                   <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Certifications & Skills</h4>
                   <div className="flex flex-wrap gap-3">
                    {edu.skills.map((skill, sIndex) => (
                      <button
                        key={sIndex}
                        onClick={() => skill.cert && setSelectedCert({ name: skill.name, img: skill.cert })}
                        disabled={!skill.cert}
                        className={`group/btn px-4 py-2 text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2
                          ${skill.cert 
                            ? "bg-white border border-purple-200 text-purple-700 hover:bg-purple-600 hover:text-white hover:border-purple-600 shadow-sm" 
                            : "bg-slate-100 border border-slate-100 text-slate-400 cursor-default"}`}
                      >
                        {skill.name}
                        {skill.cert && <ExternalLink className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 transition-opacity" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-md"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 30 }}
                className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center px-8 py-5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-500" />
                    <h3 className="font-bold text-slate-800 tracking-tight">{selectedCert.name} Verification</h3>
                  </div>
                  <button onClick={() => setSelectedCert(null)} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                    <X className="w-6 h-6 text-slate-400" />
                  </button>
                </div>
                <div className="p-2 bg-slate-100">
                  <img src={selectedCert.img} alt="Certificate" className="w-full h-auto rounded-xl shadow-inner" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default EducationPage;
