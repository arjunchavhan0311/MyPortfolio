import React from 'react';

const LogoMarquee = () => {
  // Java Full Stack Tech Stack
  const techStack = [
    { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/737373" },
    { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/6DB33F" },
    { name: "Spring MVC", icon: "https://cdn.simpleicons.org/spring/6DB33F" }, // Using Spring logo for MVC
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Hibernate", icon: "https://cdn.simpleicons.org/hibernate/59666C" },
  ];

  return (
    <div className="w-full bg-white py-8 overflow-hidden select-none border-y border-gray-100">
      <div className="relative flex items-center">
        {/* The scrolling container */}
        <div className="flex animate-marquee-slow whitespace-nowrap gap-16 items-center">
          {/* We triple the list to ensure a seamless loop */}
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-8 h-8 object-contain"
              />
              <span className="text-sm font-bold tracking-tight text-slate-600">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Soft edge fades for a premium look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      <style jsx>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 25s linear infinite;
        }
        .w-full:hover .animate-marquee-slow {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;