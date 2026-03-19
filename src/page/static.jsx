import { useNavigate } from "react-router-dom";
import {attendance,confidence,geolocation,goodbye,verified,accurate,staticimage,logoIcon} from "../components/images";
import { useEffect, useRef, useState } from "react"; 

function WelcomePage() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);
    const [loading, setLoading] = useState(true);

    // Loading timer
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
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
            <img src={logoIcon} alt="logo" className="h-60 w-auto animate-pulse mb-4"/>
            <p className="text-gray-100 text-2xl font-semibold animate-pulse">Loading...</p>
        </div>
    )
    
    return(
        <section className="flex items-center flex-col w-full min-h-screen overflow-x-hidden overflow-y-visible">
            <div className="flex justify-center flex-col items-center
                w-full sm:max-w-150 md:max-w-150 lg:max-w-300 h-screen fade-in">

                <h1 className="text-gray-100 text-xl px-10
                    sm:text-2xl sm:px-8
                    md:text-3xl md:px-0
                    lg:text-5xl leading-snug md:leading-normal">Track your OJT 

                <span className="relative group cursor-pointer"> <b>attendance</b> 
                    <img src={attendance} alt="image" className="absolute bottom-8 left-1/3 
                        w-30 h-20 -translate-x-1/2 translate-y-4 object-contain opacity-0
                        group-hover:opacity-100 group-hover:-translate-y-2
                        transition-all duration-500 pointer-events-none"/>
                </span>{" "}

                with 

                <span className="relative group cursor-pointer"> <b>confidence</b> 
                    <img src={confidence} alt="image" className="absolute bottom-1 rotate-20 left-1/1 
                    w-50 h-30 -translate-x-1/2 object-contain opacity-0 
                    translate-y-1 group-hover:opacity-100 group-hover:-translate-y-1 
                    transition-all duration-500 pointer-events-none"/> 
                </span>{" "}.

                </h1>

                <p className="text-gray-100 leading-relaxed 
                text-base px-10 mt-3
                sm:text-xl sm:px-8
                md:text-2xl md:px-0
                lg:text-3xl lg:px-12">

                    <span className="relative group cursor-pointer"> <b>goodbye</b> 
                        <img src={goodbye} alt="image" className="absolute -top-8 -translate-x-13 
                            h-15 object-contain opacity-0 group-hover:opacity-100 group-hover:-translate-x-17 
                            transition-all duration-500 pointer-events-none"/> 
                    </span>{" "}  

                to manual logbooks and false check-ins. Our system uses real-time

                <span className="relative group cursor-pointer"><b> geolocation</b>
                    <img src={geolocation} alt="image" className="absolute top-7 left-1/3 -translate-x-1/2 
                        w-50 h-20 object-contain opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-2 
                        transition-all duration-500 pointer-events-none"/>
                </span>{" "}
                
                to ensure every time-in and time-out is 
                
                <span className="relative group cursor-pointer"> <b>accurate</b> 
                    <img src={accurate} alt="image" className="absolute top-7 left-1/3 -translate-x-1/2 
                        w-50 h-20 object-contain opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-2 
                        transition-all duration-500 pointer-events-none"/> 
                </span>{" "}
                
                and       

                <span className="relative group cursor-pointer"><b> verified</b> 
                    <img src={verified} alt="image" className="absolute top-7 left-1/3 -translate-x-1/2 
                        w-50 h-20 object-contain opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-2 
                        transition-all duration-500 pointer-events-none"/> 
                </span>{" "}.               

                </p>
            </div>

        <div className="flex items-center overflow-hidden 
                py-2 w-full h-8
                sm:h-15 md:h-20 bg-white/10">

            <div className="flex animate-marquee whitespace-nowrap">
                <span className="text-gray-200 font-medium sm:font-bold md:font-medium lg:font-bold text-md sm:text-lg md:text-xl xl:text-2xl  mx-8">
                    🟢 OJT Attendance System &nbsp;&nbsp;&nbsp; 📍 Real-time Geolocation Tracking &nbsp;&nbsp;&nbsp; ✅ Accurate & Verified Records &nbsp;&nbsp;&nbsp; 🚫 Anti-Cheating Technology &nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-gray-200 font-medium sm:font-bold md:font-medium lg:font-bold text-md sm:text-lg md:text-xl xl:text-2xl  mx-8">
                    🟢 OJT Attendance System &nbsp;&nbsp;&nbsp; 📍 Real-time Geolocation Tracking &nbsp;&nbsp;&nbsp; ✅ Accurate & Verified Records &nbsp;&nbsp;&nbsp; 🚫 Anti-Cheating Technology &nbsp;&nbsp;&nbsp;
                </span>
               
            </div>
        </div>

        <div ref={sectionRef} className="flex flex-row items-center justify-center mt-20 mb-10 overflow-hidden
        gap-2 
        sm:gap-3 
        md:gap-2 
        lg:gap-10 
        xl:gap-12
        px-2 
        sm:px-2
        md:px-4
        lg:px-4
        xl:px-10">
        
            {/* LEFT - Image */}
            <div className={`transition-all duration-900 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
                <img src={staticimage} alt="Image" className=" w-auto
                h-50 
                sm:h-90 
                md:h-110 
                lg:h-120 
                xl:h-140 " />
            </div>

            {/* RIGHT - Text + Button */}
            <div className={`flex flex-col items-start 
                w-50
                sm:w-90
                md:w-150
                lg:w-190
                xl:w-210
                mt-15 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
                
                <h1 className="text-3xl
                sm:text-3xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
                text-gray-200 font-semibold">Anti-Cheating Attendance</h1>
                
                <p className="text-gray-200 
                text-md 
                sm:text-base 
                md:text-xl
                lg:text-2xl  
                xl:text-3xl
                mt-2
                sm:mt-4
                md:mt-4
                mb-5 leading-relaxed">
                A smart and reliable attendance system designed to eliminate dishonest check-ins.
                By leveraging <span className="font-semibold text-[#18beb1]">real-time geolocation verification</span>,
                the system ensures that interns can only mark their attendance when they are
                physically present within the office. Say goodbye to proxy attendance,
                buddy punching, and manual record errors — making attendance tracking more
                <span className="font-bold text-[#25b3a7]"> transparent, accurate, and trustworthy</span> for both
                interns and admin.
                </p>
                
            <button onClick={() => navigate("/landing", { state: {} })}
            className="self-end text-center flex items-center justify-center
            h-10 w-20 text-lg mr-2 rounded-lg 
            sm:h-12 sm:w-25 sm:text-xl sm:mr-4
            md:h-13 md:w-27 md:text-2xl md:mr-5
            lg:h-14 lg:w-29 lg:text-3xl lg:mr-8
            xl:h-15 xl:w-31 xl:text-4xl xl:mr-10
            text-gray-900 bg-gradient-to-t from-[#134E5E] to-[#23a89d] hover:from-[#10414e] hover:to-[#1dada1]
            transition duration-500 ease-in-out cursor-pointer">
                Start
            </button>
            </div>

        </div>

        </section>
    );
}

export default WelcomePage;