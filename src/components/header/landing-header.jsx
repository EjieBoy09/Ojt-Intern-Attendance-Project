import { useNavigate } from "react-router-dom";
import { logoIcon } from "../images";   

function LandingHeader(){
    const navigate = useNavigate();
    return(
            <header className="flex items-center sticky top-0 z-50
            w-full overflow-hidden
            shadow-md justify-between bg-white">
                
                <div className="flex items-center justify-between
                 w-full h-20 px-6 md:px-10">

                    {/* Left side Icon side*/}
                    <div className="flex items-center">
                        <a onClick={() => navigate("/landing", { state: { scrollTo: "Home" } })}  href="#Home">
                            <img src={logoIcon} alt="Image Icon" className="h-8 md:h-10 lg:h-12"/> 
                        </a>

                        <p className="text-2xl font-bold text-[#115c66]">
                            Anti-Cheating Attendance
                        </p>
                    </div>
                    
                    {/* Centered list */}
                    <ul className="flex items-center absolute gap-3 left-1/2 -translate-x-1/2">
                        <li>
                            <a onClick={() => navigate("/landing", { state: { scrollTo: "Home" } })} 
                            className="flex justify-center items-center
                                h-8 w-14 md:w-24 lg:w-28 xl:w-32 md:h-10 
                                bg-gradient-to-r from-[#134E5E] to-[#71B280] hover:from-[#10414e] hover:to-[#6caf7b]
                                text-gray-100 rounded-md text-sm md:text-base 
                                transition-colors duration-300 ease-in-out cursor-pointer" 
                            href="#Home">
                            Home
                            </a>
                        </li>   

                        <li>
                            <a onClick={() => navigate("/landing", { state: { scrollTo: "About" } })} 
                            className="flex justify-center items-center 
                                h-8 w-14 md:w-24 lg:w-28 xl:w-32 md:h-10 
                                bg-gradient-to-r from-[#134E5E] to-[#71B280] hover:from-[#10414e] hover:to-[#6caf7b] 
                                text-gray-100 rounded-lg text-sm md:text-base 
                                transition-colors duration-300 ease-in-out cursor-pointer" 
                            href="#faqs">
                            About
                            </a>    
                        </li>
                        <li>
                            <a className="flex justify-center items-center
                                h-8 w-20 md:w-24 lg:w-28 xl:w-32 md:h-10 
                                bg-[#909092] text-white 
                                rounded-lg text-sm md:text-base">
                                Contact Us
                            </a>
                        </li>
                    </ul>

                    <a className="flex justify-center items-center 
                        h-8 w-20 md:w-24 lg:w-28 xl:w-32 md:h-10 
                        bg-[#909092] text-white 
                        rounded-lg text-sm md:text-base">
                        Sign Out
                    </a>

                </div>
                
            </header>
    );
}

export default LandingHeader;