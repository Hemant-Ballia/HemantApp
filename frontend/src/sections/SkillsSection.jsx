import {
  Layout,
  Server,
  Database,
  LineChart,
  Code2,
  Atom,
  Wind,
  FileCode2,
  Braces,
  GitBranch,
  Cpu,
  BarChart3,
  FileSpreadsheet,
  ChartColumn,
  Globe,
  Terminal,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout size={18} color="#f97316" />,
    skills: [
      {
        name: "HTML5",
        level: 95,
        icon: <Globe size={15} color="#E34F26" />,
      },
      {
        name: "CSS3",
        level: 92,
        icon: <FileCode2 size={15} color="#1572B6" />,
      },
      {
        name: "JavaScript",
        level: 90,
        icon: <Braces size={15} color="#F7DF1E" />,
      },
      {
        name: "React.js",
        level: 90,
        icon: <Atom size={15} color="#61DAFB" />,
      },
      {
        name: "Next.js",
        level: 80,
        icon: <Code2 size={15} color="#111111" />,
      },
      {
        name: "Tailwind CSS",
        level: 92,
        icon: <Wind size={15} color="#38BDF8" />,
      },
      {
        name: "Bootstrap",
        level: 88,
        icon: <Layout size={15} color="#7952B3" />,
      },
    ],
  },

  {
    title: "Backend",
    icon: <Server size={18} color="#f97316" />,
    skills: [
      {
        name: "Node.js",
        level: 85,
        icon: <Server size={15} color="#3C873A" />,
      },
      {
        name: "Express.js",
        level: 82,
        icon: <Code2 size={15} color="#111111" />,
      },
      {
        name: "REST APIs",
        level: 88,
        icon: <Globe size={15} color="#0EA5E9" />,
      },
      {
        name: "Authentication",
        level: 78,
        icon: <Terminal size={15} color="#F97316" />,
      },
      {
        name: "JWT",
        level: 76,
        icon: <Cpu size={15} color="#F59E0B" />,
      },
      {
        name: "Postman",
        level: 85,
        icon: <Server size={15} color="#FF6C37" />,
      },
    ],
  },

  {
    title: "Database",
    icon: <Database size={18} color="#f97316" />,
    skills: [
      {
        name: "MongoDB",
        level: 82,
        icon: <Database size={15} color="#10AA50" />,
      },
      {
        name: "MySQL",
        level: 88,
        icon: <Database size={15} color="#00758F" />,
      },
      {
        name: "SQL",
        level: 90,
        icon: <Database size={15} color="#2563EB" />,
      },
      {
        name: "Database Design",
        level: 82,
        icon: <Layout size={15} color="#F97316" />,
      },
    ],
  },

  {
    title: "Data Analytics",
    icon: <LineChart size={18} color="#f97316" />,
    skills: [
      {
        name: "Python",
        level: 92,
        icon: <Code2 size={15} color="#3776AB" />,
      },
      {
        name: "Pandas",
        level: 88,
        icon: <BarChart3 size={15} color="#150458" />,
      },
      {
        name: "NumPy",
        level: 82,
        icon: <Cpu size={15} color="#4F46E5" />,
      },
      {
        name: "Matplotlib",
        level: 78,
        icon: <ChartColumn size={15} color="#16A34A" />,
      },
      {
        name: "Data Visualization",
        level: 84,
        icon: <LineChart size={15} color="#DC2626" />,
      },
      {
        name: "Excel",
        level: 92,
        icon: <FileSpreadsheet size={15} color="#217346" />,
      },
    ],
  },

  {
    title: "Programming",
    icon: <Code2 size={18} color="#f97316" />,
    skills: [
      {
        name: "C++",
        level: 82,
        icon: <Code2 size={15} color="#00599C" />,
      },
      {
        name: "Python",
        level: 92,
        icon: <Code2 size={15} color="#3776AB" />,
      },
      {
        name: "Data Structures",
        level: 85,
        icon: <Cpu size={15} color="#F97316" />,
      },
      {
        name: "Problem Solving",
        level: 86,
        icon: <Terminal size={15} color="#111111" />,
      },
    ],
  },

  {
    title: "Tools",
    icon: <GitBranch size={18} color="#f97316" />,
    skills: [
      {
        name: "Git",
        level: 88,
        icon: <GitBranch size={15} color="#F05032" />,
      },
      {
        name: "GitHub",
        level: 90,
        icon: <GitBranch size={15} color="#111111" />,
      },
      {
        name: "VS Code",
        level: 95,
        icon: <Code2 size={15} color="#007ACC" />,
      },
      {
        name: "Figma",
        level: 78,
        icon: <Layout size={15} color="#A259FF" />,
      },
    ],
  },
];

const SkillCard = ({ category }) => {
  return (
    <div
      className="h-full rounded-[28px] border bg-white p-6 transition-all duration-300 hover:-translate-y-1 md:p-7"
      style={{
        borderColor: "#e5e5e5",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
      }}
    >
      {/* header */}
      <div className="mb-8 flex items-center justify-between">
        <h3
          className="text-2xl font-black md:text-[30px]"
          style={{
            color: "#111111",
            letterSpacing: "-0.05em",
          }}
        >
          {category.title}
        </h3>

        <div
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{
            background: "#fff7ed",
            border: "1px solid #fed7aa",
          }}
        >
          {category.icon}
        </div>
      </div>

      {/* skills */}
      <div className="space-y-5">
        {category.skills.map((skill, index) => (
          <div key={index}>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{
                    background: "#fafafa",
                    border: "1px solid #f1f1f1",
                  }}
                >
                  {skill.icon}
                </div>

                <span
                  className="text-sm font-medium"
                  style={{
                    color: "#18181b",
                  }}
                >
                  {skill.name}
                </span>
              </div>

              <span
                className="text-xs font-semibold"
                style={{
                  color: "#f97316",
                }}
              >
                {skill.level}%
              </span>
            </div>

            {/* progress bar */}
            <div
              className="h-[5px] overflow-hidden rounded-full"
              style={{
                background: "#f3f4f6",
              }}
            >
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${skill.level}%`,
                  background:
                    "linear-gradient(to right, #111111, #f97316)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="bg-white px-4 py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* heading */}
        <div className="mb-14 max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Skills & <span className="text-orange-600">Tools</span>
          </h2>

          <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
            I build responsive web applications, backend systems, APIs,
            databases, and data analytics projects.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;