import { useNavigate } from "react-router-dom";
import { logoIcon } from "../images";
function LeftSideBar(){
    const navigate = useNavigate();
    return(
        <div className="flex flex-col h-screen w-50 px-4 py-2 shadow-xl">

        <div className="flex mb-3">
            <a className="flex flex-col gap-1 ">

                <img src={logoIcon} alt="Image Icon" className="h-10 w-full object-contain"/>
                <p className="text-xl text-center font-bold text-[#ddf6f8]">
                    Anti-Cheating Attendance
                </p>
            </a>
        </div>

            <ul className="flex flex-col gap-2">  
                <div className="flex flex-col justify-between h-full"> 

                    <ul className="flex flex-col gap-2">
                        <li>
                            <button onClick={() => navigate("/landing", { state: { scrollTo: "Home" } })} 
                            className="w-full text-left bg-gradient-to-t from-[#155666] to-[#67aa77] text-gray-100 px-4 py-3 rounded-lg cursor-pointer flex items-center gap-3">
                            📅 Dashboard
                            </button>
                        </li>    
                        <li>
                            <button onClick={() => navigate("/landing", { state: { scrollTo: "Home" } })} 
                            className="w-full text-left text-gray-300 hover:text-gray-100 px-4 py-3 rounded-lg cursor-pointer
                            hover:shadow-lg hover:shadow-black/30 transition-all duration-500 flex items-center gap-3">
                            🏠 Homes
                            </button>
                        </li>
                        <li>
                            <button disabled className="w-full text-left text-gray-300 px-4 py-3 rounded-lg cursor-pointer
                            hover:text-gray-100 hover:shadow-lg hover:shadow-black/30 transition-all duration-500
                            disabled:opacity-60 flex items-center gap-3">
                                📊 Reports
                            </button>
                        </li>
                        <li>
                            <button disabled className="w-full text-left text-gray-300 px-4 py-3 rounded-lg cursor-pointer
                            hover:text-gray-100 hover:shadow-lg hover:shadow-black/30 transition-all duration-500
                            disabled:opacity-60 flex items-center gap-3">
                                💬 Messages
                            </button>
                        </li>
                        <li>
                            <button disabled className="w-full text-left text-gray-300 px-4 py-3 rounded-lg cursor-pointer
                            hover:text-gray-100 hover:shadow-lg hover:shadow-black/30 transition-all duration-500
                            disabled:opacity-60 flex items-center gap-3">
                                ⚙️ Settings
                            </button>
                        </li>
                        <li>
                            <button disabled className="w-full text-left text-gray-300 px-4 py-3 rounded-lg cursor-pointer
                            hover:text-gray-100 hover:shadow-lg hover:shadow-black/30 transition-all duration-500
                            disabled:opacity-60 flex items-center gap-3">
                                ❓ Help
                            </button>
                        </li>
                    </ul>

                </div>
            </ul>

        </div>
    );
}
export default LeftSideBar;