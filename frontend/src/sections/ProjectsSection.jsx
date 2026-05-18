import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { SiCloudinary } from "react-icons/si";

import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaImage,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiVite,
  SiPython,
  SiPandas,
} from "react-icons/si";

import weatherImg from "../assets/wheather.png";
import ecoImg from "../assets/ecoimg.webp";
import cal from "../assets/cal.webp";
import aiResumeImg from "../assets/airesumeimg.webp";
import landingPageImg from "../assets/landingpage.jpeg";
import tcpImg from "../assets/tcp.png";
import votingImg from "../assets/voting.png";
import markdownConverterImg from "../assets/Build-a-Markdown-to-HTML-Converter.png";
import cardHtmlImg from "../assets/cardhtml.png";
import surveyFormImg from "../assets/surveyform.png";
import drumImg from "../assets/drum.png";
import bankImg from "../assets/bank.png";
import musicPlayerImg from '../assets/music.jpeg';
import quizImg from "../assets/quiz.jpeg";
import ticTacToeImg from "../assets/tictactoe.jpeg";
import taskImg from "../assets/task.png";

const techIcons = {
  React: <FaReact className="text-sky-500" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Express: <SiExpress className="text-gray-700" />,
  Python: <SiPython className="text-yellow-500" />,
  Pandas: <SiPandas className="text-indigo-600" />,
  Matplotlib: <SiPython className="text-blue-500" />,
  Excel: <SiPandas className="text-green-700" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  Vite: <SiVite className="text-violet-500" />,
  HTML5: <FaHtml5 className="text-orange-600" />,
  CSS3: <FaCss3Alt className="text-blue-600" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  "Weather API": <FaJs className="text-gray-500" />,
  Cloudinary: <SiCloudinary className="text-blue-500 text-2xl" />,
  "ImageKit": <FaImage className="text-blue-600" />,
};

const projectsData = [
  {
    id: 1, 
    title: "AI Resume Builder",
    category: "Full Stack",
    description: "A modern SaaS platform empowering users to create professional, ATS-friendly resumes with Gemini AI content suggestions and real-time previews.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "ImageKit"],
    liveLink: "https://resume-client-umber.vercel.app", 
    githubLink: "https://github.com/Hemant-Ballia/Resume-Builder",
    image: aiResumeImg,
  },
  {
    id: 2, 
    title: "Forever Web App",
    category: "Full Stack",
    description: "A complete, end-to-end e-commerce platform featuring a customer frontend, a secure admin dashboard for inventory, and a custom API supporting multiple payment gateways.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Cloudinary"],
    liveLink: "https://forever-frontend-topaz-pi.vercel.app", 
    githubLink: "https://github.com/Hemant-Ballia/ForeverWebApp",
    image: ecoImg,
  },
  {
    id: 3, 
    title: "My-Fav Music Player App",
    category: "JavaScript",
    description: "A native web audio player application for managing personal music collections, built with HTML, CSS, and Vanilla JavaScript. Features a unique, low-fi interface, dynamic playlist controls, and real-time audio playback management.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "https://hemant-fav-player.vercel.app",
    githubLink: "https://github.com/Hemant-Ballia/My-Fav-Music-Player",
    image: musicPlayerImg,
  },
  {
    id: 4,
    title: "WeatherNow App",
    category: "JavaScript",
    description: "A modern weather application with real-time weather updates and responsive UI.",
    tech: ["HTML5", "CSS3", "JavaScript", "Weather API"],
    liveLink: "https://hemant-ballia.github.io/weathernow-app/",
    githubLink: "https://github.com/Hemant-Ballia/weathernow-app",
    image: weatherImg,
  },
  {
    id: 5, 
    title: "TechNova Landing Page",
    category: "HTML/CSS",
    description: "A modern, fully responsive product landing page featuring a fixed navigation bar, Flexbox layouts, embedded video integration, and pricing cards.",
    tech: ["HTML5", "CSS3"],
    liveLink: "https://hemant-ballia.github.io/Product-Landing-Page/", 
    githubLink: "https://github.com/Hemant-Ballia/Product-Landing-Page",
    image: landingPageImg,
  },
  {
    id: 6, 
    title: "Technical Documentation",
    category: "HTML/CSS",
    description: "A responsive technical documentation webpage featuring a fixed sidebar navigation, structured content sections, and clean UI design.",
    tech: ["HTML5", "CSS3"],
    liveLink: "https://hemant-ballia.github.io/Technical-Documentation-Page/",
    githubLink: "https://github.com/Hemant-Ballia/Technical-Documentation-Page",
    image: tcpImg, 
  },
  {
    id: 7, 
    title: "Voting System",
    category: "JavaScript",
    description: "A logic-driven voting application built with Core JavaScript, utilizing Map and Set data structures to manage poll options and prevent duplicate voting.",
    tech: ["JavaScript"],
    liveLink: "https://hemant-ballia.github.io/Build-a-Voting-System/",
    githubLink: "https://github.com/Hemant-Ballia/Build-a-Voting-System",
    image: votingImg,
  },
  {
    id: 8, 
    title: "Markdown to HTML Converter",
    category: "JavaScript",
    description: "A real-time web application featuring a triple-pane interface for Markdown input, raw HTML output, and live visual preview, powered by custom ES6+ Regex logic.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "https://hemant-ballia.github.io/Build-a-Markdown-to-HTML-Converter/",
    githubLink: "https://github.com/Hemant-Ballia/Build-a-Markdown-to-HTML-Converter",
    image: markdownConverterImg,
  },
  {
    id: 9, 
    title: "Playing Cards UI",
    category: "HTML/CSS",
    description: "A modern, responsive playing cards interface demonstrating advanced Flexbox alignment, wrapping techniques, and custom card styling.",
    tech: ["HTML5", "CSS3"],
    liveLink: "https://hemant-ballia.github.io/Playing-Cards-UI/",
    githubLink: "https://github.com/Hemant-Ballia/Playing-Cards-UI",
    image: cardHtmlImg,
  },
  {
    id: 10, 
    title: "Student Survey Form",
    category: "HTML/CSS",
    description: "A sleek, fully responsive survey form featuring a modern minimalist UI with glassmorphism elements, custom form inputs, and visual hierarchy.",
    tech: ["HTML5", "CSS3"],
    liveLink: "https://hemant-ballia.github.io/Student-Survey-Form/",
    githubLink: "https://github.com/Hemant-Ballia/Student-Survey-Form",
    image: surveyFormImg,
  },
  {
    id: 11, 
    title: "Interactive Drum Machine",
    category: "JavaScript",
    description: "A dynamic Drum Machine featuring real-time audio playback, keyboard controls, and smooth interactive feedback built with Vanilla JavaScript and DOM manipulation.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "https://hemant-ballia.github.io/Interactive-Drum-Machine/",
    githubLink: "https://github.com/Hemant-Ballia/Interactive-Drum-Machine",
    image: drumImg,
  },
  {
    id: 12, 
    title: "Bank Account Management",
    category: "JavaScript",
    description: "An object-oriented banking program built with ES6 classes to handle dynamic financial transactions, deposits, withdrawals, and automated balance tracking with historical logs.",
    tech: ["JavaScript"],
    liveLink: "https://hemant-ballia.github.io/Build-a-Bank-Account-Management-Program/",
    githubLink: "https://github.com/Hemant-Ballia/Build-a-Bank-Account-Management-Program",
    image: bankImg,
  },
  {
    id: 13, 
    title: "React Quiz App",
    category: "React",
    description: "A modern, dark-themed quiz application optimized for all devices. Features multiple-choice questions, instant score tracking, and contextual emoji feedback.",
    tech: ["React", "JavaScript", "CSS3", "Vite"],
    liveLink: "https://react-quiz-1xpz5y699-hemant-chauhans-projects.vercel.app/",
    githubLink: "https://github.com/Hemant-Ballia/-react-quiz-app",
    image: quizImg, 
  },
  {
    id: 14, 
    title: "Tic-Tac-Toe Game",
    category: "JavaScript",
    description: "A classic Tic-Tac-Toe game featuring a chalkboard-style interface. Includes both single and two-player modes, live score tracking, background music, and interactive visual feedback.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "https://tic-tac-toe-game-ten-nu.vercel.app/",
    githubLink: "https://github.com/Hemant-Ballia/tic-tac-toe-game",
    image: ticTacToeImg, 
  },
  {
    id: 15, 
    title: "iTask Todo App",
    category: "React",
    description: "A user-friendly Todo List web application built using React.js. Demonstrates efficient task management with full CRUD operations, state management, and component-based architecture.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    liveLink: "https://todo-list-web-application-five.vercel.app",
    githubLink: "https://github.com/Hemant-Ballia/-Todo-List-Web-Application",
    image: taskImg,
  },
  {
    id: 16,
    title: "Calculator",
    category: "JavaScript",
    description: "A modern, responsive, and elegant calculator web application built with HTML, CSS, and JavaScript. Features a sleek indigo-themed UI with advanced gradient effects, soft shadows, real-time expression rendering, and full keyboard input support.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "https://calculator-project-ten-cyan.vercel.app",
    githubLink: "https://github.com/Hemant-Ballia/calculator-project",
    image: cal, 
  },
];

const categories = [
  "All",
  "Full Stack",
  "Data Analytics",
  "React",
  "JavaScript",
  "HTML/CSS",
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // FIXED THE FILTERING LOGIC HERE
  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading & Filters Container */}
        <div className="flex flex-col gap-6 mb-12">
          
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight mb-4">
              Selected <span className="text-orange-600">Projects</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
              A collection of my recent projects across web development
              and data analytics focusing on clean code and responsive UI.
            </p>
          </div>

          {/* Filters */}
          <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="inline-flex items-center gap-1.5 bg-white border border-zinc-200 rounded-xl p-1.5 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-orange-600 text-white shadow-md"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden bg-zinc-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] sm:h-[260px] lg:h-[280px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Title + Links */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 leading-snug">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-4 shrink-0">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-700 hover:text-black transition"
                    >
                      <FaGithub size={22} />
                    </a>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((techItem, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 bg-zinc-50 border border-zinc-100 rounded-full text-xs sm:text-sm font-medium text-zinc-700 hover:bg-zinc-200 transition"
                    >
                      <span className="text-base">
                        {techIcons[techItem]}
                      </span>
                      {techItem}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;