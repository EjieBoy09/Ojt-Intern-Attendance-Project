import { useNavigate } from "react-router-dom";
import {attendance,confidence,geolocation,goodbye,verified,accurate,staticimage,logoIcon} from "../components/images";
import { useEffect, useRef, useState } from "react"; 

function WelcomePage() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);
    const [loading, setLoading] = useState(() => {
        return sessionStorage.getItem("hasLoaded") ? false : true
    });

    // Loading timer
    useEffect(() => {
        if (!loading) return
        const timer = setTimeout(() => {
            setLoading(false)
            sessionStorage.setItem("hasLoaded", "true")
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    // Scroll observer
    useEffect(() => {
        if (loading) return
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [loading]);    

    if (loading) return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#21b8a4]">
            <img src={logoIcon} alt="logo" className="w-32 h-60 w-auto animate-pulse mb-4"/>
            <p className="text-gray-100 text-2xl font-semibold animate-pulse">Loading...</p>
        </div>
    )
    
    return(
        <section className="flex items-center flex-col">   

            <div className="w-260 flex justify-center flex-col h-screen fade-in ">
                <h1 className="text-gray-100 text-5xl">Track your OJT 

                <span className="relative group cursor-pointer"> <b>attendance</b> 
                    <img src={attendance} alt="image" className="absolute bottom-8 left-1/3 -translate-x-1/2 w-30 h-20 object-contain opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 pointer-events-none"/> 
                </span>{" "}

                with 

                <span className="relative group cursor-pointer"> <b>confidence</b> 
                    <img src={confidence} alt="image" className="absolute bottom-1 rotate-20 left-1/1 -translate-x-1/2 w-50 h-30 object-contain opacity-0 translate-y-1 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 pointer-events-none"/> 
                </span>{" "} .

                </h1>

                <p className="text-gray-100 text-3xl mt-3 leading-relaxed">
                    <span className="relative group cursor-pointer"> <b>goodbye</b> 
                        <img src={goodbye} alt="image" className="absolute -top-8 -translate-x-13 h-15 object-contain opacity-0  group-hover:opacity-100 group-hover:-translate-x-17 transition-all duration-500 pointer-events-none"/> 
                    </span>{" "}  

                to manual logbooks and false check-ins. Our system uses real-time <br />

                <span className="relative group cursor-pointer"><b>geolocation</b>
                    <img src={geolocation} alt="image" className="absolute top-1 -translate-x-14  w-24 h-15 object-contain opacity-0 group-hover:opacity-100 group-hover:-translate-x-21 transition-all duration-500 pointer-events-none"/>
                </span>{" "}
                
                to ensure every time-in and time-out is 
                
                <span className="relative group cursor-pointer"> <b>accurate</b> 
                    <img src={accurate} alt="image" className="absolute top-7 left-1/3 -translate-x-1/2 w-50 h-20 object-contain opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 pointer-events-none"/> 
                </span>{" "}
                
                and <br />        

                <span className="relative group cursor-pointer"><b>verified</b> 
                    <img src={verified} alt="image" className="absolute top-7 translate-x-20 w-25 h-20 object-contain opacity-0  group-hover:opacity-100 group-hover:translate-x-27 transition-all duration-500 pointer-events-none"/> 
                </span>{" "}.                

                </p>
            </div>

        <div className="overflow-hidden bg-white/10 py-2 w-full h-20 flex items-center">
            <div className="flex animate-marquee whitespace-nowrap">
                <span className="text-gray-200 text-lg font-bold mx-8">
                    🟢 OJT Attendance System &nbsp;&nbsp;&nbsp; 📍 Real-time Geolocation Tracking &nbsp;&nbsp;&nbsp; ✅ Accurate & Verified Records &nbsp;&nbsp;&nbsp; 🚫 Anti-Cheating Technology &nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-gray-200 text-lg font-bold mx-8">
                    🟢 OJT Attendance System &nbsp;&nbsp;&nbsp; 📍 Real-time Geolocation Tracking &nbsp;&nbsp;&nbsp; ✅ Accurate & Verified Records &nbsp;&nbsp;&nbsp; 🚫 Anti-Cheating Technology &nbsp;&nbsp;&nbsp;
                </span>
            </div>
        </div>

        <div ref={sectionRef} className="flex flex-row items-center justify-center gap-10 px-5 py-16 mt-20 overflow-hidden">
        
            {/* LEFT - Image */}
            <div className={`transition-all duration-900 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
                <img src={staticimage} alt="Image" className="h-130 w-auto" />
            </div>

            {/* RIGHT - Text + Button */}
            <div className={`flex flex-col items-start w-150 mt-15 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
                <h1 className="text-5xl text-gray-200 font-semibold">Anti-Cheating Attendance</h1>
                
                <p className="text-gray-200 text-xl mt-10 mb-5 leading-relaxed">
                A smart and reliable attendance system designed to eliminate dishonest check-ins.
                By leveraging <span className="font-semibold text-[#18beb1]">real-time geolocation verification</span>,
                the system ensures that interns can only mark their attendance when they are
                physically present within the office. Say goodbye to proxy attendance,
                buddy punching, and manual record errors — making attendance tracking more
                <span className="font-bold text-[#25b3a7]"> transparent, accurate, and trustworthy</span> for both
                interns and admin.
                </p>
                
            <button onClick={() => navigate("/landing", { state: {} })}
            className="self-end cursor-pointer bg-gradient-to-t from-[#134E5E] to-[#25b3a7] hover:from-[#10414e] hover:to-[#20c2b4] text-2xl px-10 py-2 mr-5 rounded-lg transition duration-500 ease-in-out">
            Start
            </button>
            </div>

        </div>

        </section>
    );
}

export default WelcomePage;