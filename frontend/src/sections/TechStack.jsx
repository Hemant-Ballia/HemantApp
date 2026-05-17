import React from "react";

const TechStack = () => {
  const skills = [
    { name: "MongoDB", url: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Express", url: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
    { name: "React", url: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Node.js", url: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Tailwind", url: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "C++", url: "https://cdn.worldvectorlogo.com/logos/c.svg" },
    { name: "Python", url: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
   { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", url: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "GitHub", url: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
    // Postman ka updated working logo URL
    { name: "Postman", url: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  ];

  return (
    <div className="w-full bg-white py-10 border-y border-gray-100 overflow-hidden select-none">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }
        /* Hover pe stop hone wala rule yahan se hata diya gaya hai */
      `}</style>

      <div className="relative max-w-[1400px] mx-auto">
        <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="animate-scroll">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mx-10 cursor-pointer"
            >
              <img
                src={skill.url}
                alt={skill.name}
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
                draggable={false}
              />
              <span className="text-gray-600 font-semibold text-lg md:text-xl uppercase tracking-wider">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;