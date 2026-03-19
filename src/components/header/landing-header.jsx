import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoIcon } from "../images";

function LandingHeader() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/landing", { state: { scrollTo: sectionId } });
        }
    };

    const navLinks = [
        { label: "Home", section: "Home", href: "#Home" },
        { label: "About", section: "About", href: "#faqs" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-md">

            {/* Main Bar */}
            <div className="flex items-center justify-between w-full h-20 md:px-2">

                {/* Left: Logo + Title */}
                <div className="flex items-center gap-1">
                        <a onClick={() => scrollToSection("Home")} href="#Home">
                            <img src={logoIcon} alt="Image Icon" className="h-10 md:h-12 lg:h-12" />
                         </a>
                        <p className="text-lg xl:text-2xl font-bold text-[#115c66]">
                        Anti-Cheating <br className="hidden md:block lg:hidden" /> Attendance
                    </p>
                </div>

                {/* Center Nav — desktop only */}
                <ul className="hidden md:flex items-center absolute gap-2 md:gap-3 left-1/2 -translate-x-1/2">
                    {navLinks.map(({ label, section, href }) => (
                        <li key={label}>
                            <a 
                                onClick={() => scrollToSection(section)}
                                className="flex justify-center items-center
                                    h-8 w-24 md:w-18 lg:w-28 xl:w-32 md:h-10
                                    bg-gradient-to-r from-[#134E5E] to-[#71B280] hover:from-[#10414e] hover:to-[#6caf7b]
                                    text-gray-100 rounded-md text-sm md:text-base lg:text-lg
                                    transition-colors duration-300 ease-in-out cursor-pointer"
                                href={href}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a className="flex justify-center items-center
                            h-8 w-24 lg:w-28 xl:w-32 md:h-10
                            bg-[#909092] text-white rounded-lg text-sm md:text-base lg:text-lg">
                            Contact Us
                        </a>
                    </li>
                </ul>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    {/* Sign Out — desktop only */}
                    <a className="hidden md:flex justify-center items-center
                        h-8 w-24 lg:w-28 xl:w-32 md:h-10
                        bg-[#909092] text-white rounded-lg text-sm md:text-base lg:text-lg">
                        Sign Out
                    </a>

                    {/* Hamburger — mobile only */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block h-[2px] w-6 bg-[#115c66] rounded transition-all duration-300 origin-center
                            ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                        />
                        <span className={`block h-[2px] w-6 bg-[#115c66] rounded transition-all duration-300
                            ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
                        />
                        <span className={`block h-[2px] w-6 bg-[#115c66] rounded transition-all duration-300 origin-center
                            ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <ul className="flex flex-col items-stretch gap-2 px-4 pb-4">
                    {navLinks.map(({ label, section, href }) => (
                        <li key={label}>
                            <a 
                                onClick={() => {
                                    scrollToSection(section);
                                    setMenuOpen(false);
                                }}
                                
                                className="flex justify-center items-center h-10
                                    bg-gradient-to-r from-[#134E5E] to-[#71B280] hover:from-[#10414e] hover:to-[#6caf7b]
                                    text-gray-100 rounded-md text-sm
                                    transition-colors duration-300 ease-in-out cursor-pointer"
                                href={href}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a className="flex justify-center items-center h-10
                            bg-[#909092] text-white rounded-lg text-sm">
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a className="flex justify-center items-center h-10
                            bg-[#909092] text-white rounded-lg text-sm">
                            Sign Out
                        </a>
                    </li>
                </ul>
            </div>

        </header>
    );
}

export default LandingHeader;