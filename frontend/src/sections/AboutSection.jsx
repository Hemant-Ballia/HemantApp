import { Code2, LineChart, Briefcase } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building modern web applications using MERN stack, Next.js, REST APIs, and scalable backend systems.",
      iconStyle:
        "bg-blue-50 border-blue-100 text-blue-600 group-hover:bg-blue-100 group-hover:border-blue-200",
      hoverStyle: "hover:border-blue-200 hover:bg-blue-50/40",
    },
    {
      icon: LineChart,
      title: "Data Analytics",
      description:
        "Working with SQL, Python, Machine Learning, and data visualization to solve real-world problems.",
      iconStyle:
        "bg-emerald-50 border-emerald-100 text-emerald-600 group-hover:bg-emerald-100 group-hover:border-emerald-200",
      hoverStyle: "hover:border-emerald-200 hover:bg-emerald-50/40",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description:
        "Currently working as an HR Executive Apprentice at Kotak Mahindra under the NAPS program.",
      iconStyle:
        "bg-orange-50 border-orange-100 text-orange-600 group-hover:bg-orange-100 group-hover:border-orange-200",
      hoverStyle: "hover:border-orange-200 hover:bg-orange-50/40",
    },
  ];

  return (
    <section
      id="about"
      className="w-full bg-white py-16 md:py-24 px-6 md:px-12 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          About <span className="text-orange-600">Me</span>
        </h2>

        <p className="mt-5 text-[15px] md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
          B.Sc. Computer Science and Data Analytics student at IIT Patna with a
          strong interest in full-stack development and data-driven systems.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 xl:gap-20 items-center">
        
        {/* Left Image (Enlarged and removed hover effects) */}
        <div className="flex justify-center lg:justify-start w-full">
          <div className="relative w-full max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] rounded-3xl overflow-hidden border border-gray-200 bg-gray-100 shadow-md">
            {/* Light Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10 pointer-events-none"></div>

            <img
              src="/about.jpg"
              alt="Hemant Chauhan"
              className="w-full h-[500px] md:h-[600px] object-cover object-top"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full max-w-[650px] mx-auto lg:mx-0">
          {/* Main Heading (Forced to single line with responsive font size) */}
          <h3 className="text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] font-bold text-gray-900 leading-tight tracking-tight whitespace-nowrap">
            Computer Science & Data Analytics
          </h3>

          {/* Description */}
          <div className="mt-6 space-y-4 text-gray-600 leading-relaxed text-[15px] md:text-base">
            <p>
              I’m currently in my 4th semester at IIT Patna with a current SPI of
              9.40. I was awarded the INSPIRE Scholarship by the Government of
              India for being among the top 1% in Class 12 board examinations.
            </p>
            <p>
              Alongside academics, I enjoy building full-stack projects and
              working on practical applications of data analytics and machine
              learning. Recently, I’ve been focused on scalable MERN
              applications, AI-based tools, and clean UI development.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-10 space-y-4 md:space-y-5">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`group flex items-start gap-4 md:gap-5 p-5 md:p-6 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${item.hoverStyle}`}
                >
                  {/* Icon */}
                  <div
                    className={`p-3 md:p-4 rounded-xl md:rounded-2xl border transition-all duration-300 shrink-0 ${item.iconStyle}`}
                  >
                    <Icon size={24} className="w-5 h-5 md:w-6 md:h-6" />
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 md:mt-2 text-gray-600 leading-relaxed text-sm md:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;