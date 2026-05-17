import { ArrowRight } from 'lucide-react';

const TopBanner = () => {
    return (
        // hidden md:flex se yeh sirf desktop (badi screen) par dikhega
        // Gradient aur colors ko saffron theme ke hisaab se adjust kiya hai
        <div className="hidden md:flex w-full py-2.5 font-medium text-sm text-orange-950 justify-center items-center bg-gradient-to-r from-[#FFD494] to-[#FDFEFF] border-b border-orange-100">
            <p className="flex items-center">
                
                {/* Premium "Hire Me" Badge */}
                <span className="px-3 py-1 rounded-lg text-white bg-orange-600 mr-3 font-semibold shadow-sm text-xs tracking-wide uppercase">
                    Hire Me
                </span>
                
                {/* Announcement Text */}
                Actively looking for SDE Internships & Freelance Web Projects.
                
                {/* Clean Call-to-Action Link */}
                <a 
                    href="#contact" 
                    className="ml-2 flex items-center gap-1 text-orange-700 font-bold hover:text-orange-900 group transition-colors"
                >
                    Let's Talk <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
            </p>
        </div>
    );
};

export default TopBanner;