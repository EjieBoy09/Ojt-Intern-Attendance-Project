import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import {imageinlanding} from "../components/images";


function LandingPage(){
  const navigate = useNavigate();
  const location = useLocation();
  const heroRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }  
  else {
    window.scrollTo(0, 0) 
  }
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-show")
          entry.target.classList.remove("slide-hidden")
        }
      })
    }, { threshold: 0.2 })

    document.querySelectorAll(".slide-item").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])  

  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-show")
        entry.target.classList.remove("slide-hidden")
        entry.target.classList.add("pop-show")
        entry.target.classList.remove("pop-hidden")
      }
    })
  }, { threshold: 0.2 })

  document.querySelectorAll(".slide-item, .pop-item").forEach((el) => observer.observe(el))

  return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "translate-x-20");
          }
        });
      },
      { threshold: 0.1 } // babaan ang threshold
    );


    return () => observer.disconnect();
  }, []);

  return(
    <>
    {/* Time in Link Side */}
    <section className="px-5 mt-20" id="Home">
      <div className="text-gray-100 px-10">
        
        <h1 className="transition-all duration-700 ease-out text-6xl w-full mb-3">
          <b>Attendance</b> You Can <b>Trust</b>
        </h1>
        
        <p className="transition-all duration-700 delay-200 ease-out text-2xl w-170">
          Track your OJT hours with ease and confidence. Our system uses real-time geolocation to ensure every time-in and time-out is accurate, verified, and fraud-free — no more manual logbooks or false check-ins.
        </p>
      
        <button 
          onClick={() => navigate("/attendance")} 
          className="duration-700 delay-300 ease-out mt-5 bg-gradient-to-r from-[#134E5E] to-[#6eb37e] hover:from-[#114655] hover:to-[#65ad76] text-white rounded-xl px-6 py-3 text-3xl
          hover:cursor-pointer border-1 border-gray-700">
          Start Attendance
        </button>

      </div>
    </section>

    {/* Addition Ek-ek Side */}
    <div className="flex justify-center mt-60 gap-10">
      <img src={imageinlanding} alt="Image" className="h-auto w-100"/>

      <div className="bg-white text-gray-700 px-5 py-5 rounded-md w-170 shadow-2xl">
        <h1 className="text-3xl text-center font-bold mb-5">A Attendance System You Can Always Trust</h1>
        <p className="leading-relaxed  text-lg">
          Say goodbye to false check-ins. Our system uses real-time geolocation to ensure that OJT interns can only record their attendance when they are physically present at the office — giving supervisors accurate, reliable records every single day.
        </p>

         <p className="leading-relaxed mt-4 text-lg">
            Every time an intern clocks in or out, the system automatically captures their exact location and compares it against the designated office coordinates. If the intern is outside the allowed radius, the system will block the check-in — making buddy punching and proxy attendance completely impossible.
        </p>
      </div>
    </div>

    {/* Ekek-Chuchu more ide */}
      <section className="p-5 flex flex-col items-center gap-4 mt-50" id="About">

      <div className="slide-item slide-hidden flex flex-col justify-center px-4 py-3 h-40 bg-white w-150 rounded-2xl transform transition-transform duration-300 ease-in shadow-md"
        style={{ transitionDelay: "0ms" }}>
        <h1 className="text-3xl font-bold text-gray-700 mb-1">✔️ Real-Time Monitoring</h1>
        <p className="text-lg text-gray-700">
          Stay on top of your attendance with live updates every time you clock in or out. Everything is recorded automatically the moment you arrive and leave.
        </p>
      </div>

      <div className="slide-item slide-hidden flex flex-col justify-center px-4 py-3 h-40 bg-white w-150 rounded-2xl transform transition-transform duration-300 ease-in shadow-md"
        style={{ transitionDelay: "150ms" }}>
        <h1 className="text-3xl font-bold text-gray-700 mb-1">📍 Location-Verified Check-In</h1>
        <p className="text-lg text-gray-700">
          Our system uses your device's GPS to confirm you are physically present at your training location before allowing you to clock in.
        </p>
      </div>

      <div className="slide-item slide-hidden flex flex-col justify-center px-4 py-3 h-40 bg-white w-150 rounded-2xl transform transition-transform duration-300 ease-in shadow-md"
        style={{ transitionDelay: "300ms" }}>
        <h1 className="text-3xl font-bold text-gray-700 mb-1">📋 Accurate and Automatic Records</h1>
        <p className="text-lg text-gray-700">
          Every time-in and time-out is automatically logged. No more filling out paper forms or worrying about lost or incorrect records.
        </p>
      </div>

      <div className="slide-item slide-hidden flex flex-col justify-center px-4 py-3 h-40 bg-white w-150 rounded-2xl transform transition-transform duration-300 ease-in shadow-md"
        style={{ transitionDelay: "450ms" }}>
        <h1 className="text-3xl font-bold text-gray-700 mb-1">🔒 Secure & Privacy-Focused</h1>
        <p className="text-lg text-gray-700">
          Your location is only used at the moment of check-in to verify your presence. We do not store or share your location beyond what is necessary.
        </p>
      </div>

    </section>
    
  <div className="mt-30 mb-30 pop-item pop-hidden">
   <h1 className="text-center text-5xl font-bold text-gray-100">✔️Geolocation Functionality</h1>
  </div>
    
    {/* Frequently Asked Questions Side */}
    <section id="faqs" className="py-12 px-6">
      <div className="max-w-3xl mx-auto flex flex-col">
        
        <h2 className="text-3xl font-bold text-center text-[#c8eaec] mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">

          <div className="bg-white shadow-sm rounded-lg justify-center h-30 p-4">
            <h3 className="font-semibold text-lg text-gray-800">What is Anti-Cheating Attendance?</h3>
            <p className="text-gray-600 mt-2">A system that ensures that OJT students cannot record their time-in unless they are physically present in the office on designated onsite days.</p>
          </div>

          <div className="bg-white shadow-sm rounded-lg h-30 p-4">
              <h3 className="font-semibold text-lg text-gray-800">How does the system prevent cheating?</h3>
              <p className="text-gray-600 mt-2">The system prevents cheating by using geolocation, allowing students to clock in only when they are within the designated office radius.</p>
          </div>

          <div className="bg-white shadow-sm rounded-lg h-30 p-4">
              <h3 className="font-semibold text-lg text-gray-800">What are the benefits of this system?</h3>
              <p className="text-gray-600 mt-2">The system aligns with company policies and prevents interns from recording time-in outside the office, effectively eliminating confirmed cases of false attendance.</p>
          </div>

          <div className="bg-white shadow-sm rounded-lg h-30 p-4">
              <h3 className="font-semibold text-lg text-gray-800">What happens if I forget to Time Out?</h3>
              <p className="text-gray-600 mt-2">If you forget to time out, your attendance record for that day will be incomplete. Contact your OJT supervisor or administrator as soon as possible so they can manually adjust your record.</p>
          </div>

          <div className="bg-white shadow-sm rounded-lg justify-center h-30 p-4">
              <h3 className="font-semibold text-lg text-gray-800">Can I use this on mobile?</h3>
              <p className="text-gray-600 mt-2">Yes! However this feature is not implemented by the developer team because of the lack of knowledge using new framework.</p>
          </div>

        </div>
      </div>
    </section>

   <div className="flex flex-col items-center mt-20 px-10 transition-all duration-300">
    <h2 className="text-gray-200 text-2xl font-semibold tracking-widest uppercase mb-5">Trusted by</h2>
    
    <div className="bg-white/80 rounded-4xl px-10 py-6 grid grid-cols-8 gap-10 w-full max-w-4xl shadow-xl">
      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">🏢</div>
          <span className="text-gray-900 text-sm font-medium">NexaCorp</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">💼</div>
          <span className="text-gray-900 text-sm font-medium">BrightWork</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">🏗️</div>
          <span className="text-gray-900 text-sm font-medium">BuildSphere</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">💡</div>
          <span className="text-gray-900 text-sm font-medium">IdeaVault</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">🌐</div>
          <span className="text-gray-900 text-sm font-medium">NetPulse</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">🚀</div>
          <span className="text-gray-900 text-sm font-medium">LaunchPad</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">🔬</div>
          <span className="text-gray-900 text-sm font-medium">TechLabs</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">📊</div>
          <span className="text-gray-900 text-sm font-medium">DataSync</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">🏦</div>
          <span className="text-gray-900 text-sm font-medium">FinVault</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">🎯</div>
          <span className="text-gray-900 text-sm font-medium">TargetFlow</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">⚙️</div>
          <span className="text-gray-900 text-sm font-medium">CoreSystems</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">🛡️</div>
          <span className="text-gray-900 text-sm font-medium">SecureBase</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">☁️</div>
          <span className="text-gray-900 text-sm font-medium">CloudNest</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">🤖</div>
          <span className="text-gray-900 text-sm font-medium">AutoMind</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">📱</div>
          <span className="text-gray-900 text-sm font-medium">MobilEdge</span>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
          <div className="bg-white/60 hover:bg-white/100 rounded-full w-14 h-14 flex items-center justify-center text-2xl transform transition-transform duration-500">🌿</div>
          <span className="text-gray-900 text-sm font-medium">GreenTech</span>
      </div>
    </div>
  </div>
    </>
  );
}

export default LandingPage;