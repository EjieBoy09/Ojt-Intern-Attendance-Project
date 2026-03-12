import { useNavigate } from "react-router-dom";
import { logoIcon } from "../images";   
function LandingHeader(){
    const navigate = useNavigate();
    return(
        <header className="bg-white/100 px-4 py-4 h-18 flex items-center shadow-md justify-between sticky top-0 z-50">
            {/* Left side Icon side*/}
            <div className="flex items-center">
                <a onClick={() => navigate("/landing", { state: { scrollTo: "Home" } })}  href="#Home">
                    <img src={logoIcon} alt="Image Icon" className="h-15 pr-100"/> 
                </a>

                <p className="text-2xl font-bold text-[#115c66] absolute ml-23">
                    Anti-Cheating Attendance
                </p>
            </div>
            

            {/* Centered list */}
            <ul className="flex gap-3 absolute left-1/2 -translate-x-1/2">
                <li>
                    <a onClick={() => navigate("/landing", { state: { scrollTo: "Home" } })} 
                    className="bg-gradient-to-r from-[#134E5E] to-[#71B280] hover:from-[#10414e] hover:to-[#6caf7b] text-gray-100 w-25 py-2 rounded-lg block text-center transition-colors duration-300 ease-in-out cursor-pointer" 
                    href="#Home">
                        Home
                    </a>
                </li>   
                <li>
                    <a onClick={() => navigate("/landing", { state: { scrollTo: "About" } })} 
                    className="bg-gradient-to-r from-[#134E5E] to-[#71B280]  hover:from-[#10414e] hover:to-[#6caf7b] text-gray-100 w-25 py-2 rounded-lg block text-center transition-color duration-300 ease-in-out cursor-pointer" 
                    href="#faqs">
                        About
                    </a>    
                </li>
                <li>
                    <a  className="bg-[#909092] text-white w-25 py-2 rounded-lg block text-center">
                        Contact Us
                    </a>
                </li>
            </ul>
            <a className="bg-[#909092] text-white w-25 py-2 rounded-lg block text-center">Sign Out</a>
        </header>
    );
}

export default LandingHeader;