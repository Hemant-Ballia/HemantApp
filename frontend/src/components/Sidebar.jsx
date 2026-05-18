import { useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Layers,
  Mail,
  Menu,
  X,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activePage = "Home";

  const navLinks = [
    {
      name: "Home",
      href: "#home",
      icon: <Home size={18} />,
    },
    {
      name: "About",
      href: "#about",
      icon: <User size={18} />,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: <Briefcase size={18} />,
    },

    // FIXED
    // stack -> skills
    {
      name: "Stack",
      href: "#skills",
      icon: <Layers size={18} />,
    },

    {
      name: "Contact",
      href: "#contact",
      icon: <Mail size={18} />,
    },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-zinc-200 bg-white/90 px-5 py-4 backdrop-blur-md md:hidden">
        <h1 className="text-xl font-bold tracking-tight text-zinc-900">
          Hemant<span className="text-orange-500">.</span>
        </h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-zinc-900"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 flex h-screen w-64 flex-col border-r border-zinc-200 bg-white px-6 py-6 transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Profile */}
        <div className="mt-16 flex flex-col items-center text-center md:mt-2">
          <div className="mb-5 h-28 w-28 overflow-hidden rounded-full border border-orange-100 p-1 shadow-sm">
            <img
              src="/Hemant.webp"
              alt="Hemant Chauhan"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <h2 className="text-[22px] font-bold tracking-tight text-zinc-900">
            Hemant Chauhan
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-zinc-500">
            Full-Stack Web Developer <br />
            & Data Analyst
          </p>

          {/* Badge */}
          <div className="mt-5 flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-wide text-green-700">
              Open to Work
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-10 flex flex-1 flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = activePage === link.name;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center gap-4 rounded-2xl px-4 py-3 text-[15px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-100 text-zinc-900"
                    : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
              >
                {/* FIXED ICON COLORS */}
                <span
                  className={`transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-90 group-hover:opacity-70"
                  }`}
                >
                  {link.icon}
                </span>

                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-6">
          {/* Socials */}
          <div className="mb-6 flex items-center justify-center gap-6">
            <a
              href="#"
              className="text-zinc-500 transition-opacity hover:opacity-70"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="#"
              className="text-[#0A66C2] transition-opacity hover:opacity-70"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://leetcode.com/u/Hemant_009"
              target="_blank"
              rel="noreferrer"
              className="text-[#FFA116] transition-opacity hover:opacity-70"
            >
              <SiLeetcode size={20} />
            </a>
          </div>

         {/* Resume Button */}
          <a
            href="/Hemant_Chauhan_24a12res941.pdf"  
            target="_blank"
            className="flex items-center justify-center rounded-2xl bg-orange-500 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600"
          >
            Download Resume
          </a>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;