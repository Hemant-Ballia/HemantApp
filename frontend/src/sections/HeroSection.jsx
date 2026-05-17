import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-20 font-['Outfit']"
    >
      <img
        src="/bg.webp"
        alt="Workspace Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        
        <h1 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-zinc-900 sm:text-5xl md:text-6xl lg:text-[68px]">
          Building Web Apps & <br className="hidden md:block" />
          Analyzing <span className="text-orange-600">Complex Data.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-zinc-700 md:text-[17px]">
          Hi, I'm Hemant. I specialize in the MERN stack and data analytics.
          I build scalable digital experiences and turn raw data into
          meaningful insights.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="flex min-w-[180px] items-center justify-center rounded-lg bg-orange-600 px-7 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-orange-700"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="group flex min-w-[180px] items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white/50 px-7 py-3 text-sm font-medium text-zinc-800 backdrop-blur-sm transition-colors duration-200 hover:border-orange-600 hover:bg-white hover:text-orange-600"
          >
            <span>Contact Me</span>
            <ArrowRight
              size={18}
              className="text-zinc-500 transition-colors duration-200 group-hover:text-orange-600"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;