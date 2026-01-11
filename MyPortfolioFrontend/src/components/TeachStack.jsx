import {
  SiCss3,
  SiDocker,
  SiGit, SiGithub,
  SiGreensock,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiMongodb, SiMysql,
  SiOpenjdk,
  SiOracle,
  SiReact,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiTailwindcss,

} from 'react-icons/si';


const SkillsSection = () => {
  const categories = [
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: <SiOpenjdk color="#ED8B00" /> },
        { name: "Spring MVC", icon: <SiSpring color="#339933" /> },
        { name: "Spring Security", icon: <SiSpringsecurity color="#11CD1A" /> },
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        
        { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "GSAP", icon: <SiGreensock color="#88CE02" /> },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "OracleDB", icon: <SiOracle color="#DC382D" /> },
      ]
    },
    {
      title: "Tools & Git",
      skills: [
        { name: "Git", icon: <SiGit color="#F05032" /> },
        { name: "GitHub", icon: <SiGithub color="#181717" /> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea color="#000000" /> },
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
       
      ]
    }
  ];

  return (
    <section id='skills' className="bg-gradient-to-r from-orange-100 via-pink-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-black uppercase tracking-tighter">My Skills</h2>
          <div className="flex justify-center mt-1">
            <div className="text-yellow-400 text-xl font-bold leading-tight opacity-80">
              ↓↓↓↓
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {categories.map((category, idx) => (
            <div key={idx} className="animate-fade-in">
              <h3 className="text-lg font-extrabold text-[#1e293b] mb-6 px-2 border-l-4 border-[#a855f7] ml-2">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center justify-center py-6 px-4 bg-[#f9fafb] rounded-xl border border-gray-50 transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 group"
                  >
                    <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-[11px] font-black text-gray-500 uppercase tracking-tighter group-hover:text-black">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;