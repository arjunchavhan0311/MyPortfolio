import React from 'react';

const SmallServiceMarquee = () => {
  const services = [
    "App Design", "Web Experience", "UI/UX Strategy", "Brand Identity", 
    "Product Design", "Interactive UI", "Motion Design", "Visual Identity"
  ];

  return (
    <div className="w-full bg-white py-6 overflow-hidden select-none border-y border-gray-50">
      <div className="relative flex items-center">
        
        {/* The Scrolling Track */}
        <div className="flex animate-smooth-scroll whitespace-nowrap gap-4 items-center">
          {[...services, ...services, ...services].map((service, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 px-5 py-2 bg-[#f8fafc] hover:bg-white border border-gray-100 hover:border-[#a855f7]/30 hover:shadow-md transition-all duration-300 rounded-full group"
            >
              {/* Subtle pulsing dot */}
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a855f7] opacity-20"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a855f7]"></span>
              </div>
              
              <span className="text-sm font-medium text-gray-600 group-hover:text-[#1e293b] transition-colors">
                {service}
              </span>
            </div>
          ))}
        </div>

        {/* High-end transparent masks for the "vanishing" effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      <style jsx>{`
        @keyframes smooth-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-smooth-scroll {
          animation: smooth-scroll 25s linear infinite;
        }
        .animate-smooth-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SmallServiceMarquee;