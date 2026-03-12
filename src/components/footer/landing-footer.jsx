import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LandingFooter(){
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    return(
        <>
        <footer className="bg-white/90 text-gray-600 mt-20 py-10 px-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
                {/* Brand */}
                <div className="flex flex-col gap-1">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-[#134E5E] to-[#71B280] bg-clip-text text-transparent">
                        OJT Attendance
                    </h1>
                    <p className="text-sm text-gray-500 w-60">
                        A smart, location-verified attendance system built for OJT interns.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-gray-700">Navigation</h2>
                    <a onClick={() => navigate("/landing", { state: { scrollTo: "Home" } })} className="text-gray-500 hover:text-[#134E5E] cursor-pointer transition duration-300">Home</a>
                    <a onClick={() => navigate("/landing", { state: { scrollTo: "About" } })}  className="text-gray-500 hover:text-[#134E5E] cursor-pointer transition duration-300">About</a>
                    <a className="text-gray-500 hover:text-[#134E5E] cursor-pointer transition duration-300">Contact Us</a>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-gray-700">Contact</h2>
                    <p className="text-gray-500 text-sm">📧 ojt.attendance@email.com</p>
                    <p className="text-gray-500 text-sm">📍 Quezon City, Philippines</p>
                    <p className="text-gray-500 text-sm">📞 +63 912 345 6789</p>
                </div>

                {/* Legal */}
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-gray-700">Legal</h2>
                    <a onClick={() => setShowModal(true)} className="text-gray-500 hover:text-[#134E5E] cursor-pointer transition duration-300">📋 Rules & Regulations</a>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-500 mt-8 pt-8 text-center text-gray-600 text-lg font-bold">
                © 2025 OJT Attendance System. All rights reserved.
            </div>
        </footer>

        {/* Modal */}
        {showModal && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
                <div className="bg-white shadow-xl max-w-lg w-200 max-h-[80vh] overflow-y-auto p-6">
                    
                    {/* Modal Header */}
                    <div className="flex justify-between items-center mb-4 border-b pb-3">
                        <h2 className="text-xl font-bold text-[#134E5E]">📋 Rules & Regulations</h2>
                        <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-red-500 text-2xl cursor-pointer transition duration-300">✕</button>
                    </div>

                    {/* Modal Content */}
                    <div className="flex flex-col gap-4 text-gray-600 text-sm">

                        <div>
                            <h3 className="font-bold text-[#134E5E] mb-1">1. Location-Based Attendance</h3>
                            <ul className="list-disc list-inside flex flex-col gap-1">
                                <li>This system uses <span className="font-semibold">Geolocation technology</span> to verify your physical location before allowing time in or time out.</li>
                                <li>You must be within <span className="font-semibold">5 meters</span> of the designated office location to successfully log your attendance.</li>
                                <li>If you are outside the 5-meter radius, the system will display a warning indicating how far you are from the office.</li>
                                <li>The office location is a <span className="font-semibold">fixed and constant value</span> set by the system administrator and cannot be changed by any user.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-[#134E5E] mb-1">2. Attendance Policy</h3>
                            <ul className="list-disc list-inside flex flex-col gap-1">
                                <li>Interns must time in and time out every working day using the system.</li>
                                <li>Time in must only be performed while physically present inside or within the office premises.</li>
                                <li>Late time in will be recorded and marked accordingly in the attendance sheet.</li>
                                <li>Failure to time in or time out will be recorded as absent or incomplete attendance.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-[#134E5E] mb-1">3. Anti-Cheating Policy</h3>
                            <ul className="list-disc list-inside flex flex-col gap-1">
                                <li>Attendance must be logged <span className="font-semibold">personally</span> by the intern only.</li>
                                <li>Logging attendance on behalf of another intern is <span className="font-semibold">strictly prohibited</span> and subject to disciplinary action.</li>
                                <li>Any attempt to manipulate or spoof your device's location to bypass the geolocation check is a serious violation.</li>
                                <li>The system is designed to detect and prevent fraudulent attendance logging.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-[#134E5E] mb-1">4. Location Privacy</h3>
                            <ul className="list-disc list-inside flex flex-col gap-1">
                                <li>Your device's location is accessed <span className="font-semibold">only during time in and time out</span>.</li>
                                <li>Location data is used <span className="font-semibold">solely for attendance verification purposes</span> and nothing else.</li>
                                <li>Your location is not stored, tracked, or shared beyond what is necessary for the system to function.</li>
                                <li>The system only checks whether you are within the 5-meter office radius — your exact coordinates are kept secure.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-[#134E5E] mb-1">5. System Usage</h3>
                            <ul className="list-disc list-inside flex flex-col gap-1">
                                <li>Interns must not share their login credentials with anyone.</li>
                                <li>You must allow location access on your device for the system to work properly.</li>
                                <li>Any misuse of the system will result in immediate disciplinary action.</li>
                                <li>Report any technical issues or concerns to your supervisor immediately.</li>
                            </ul>
                        </div>

                    </div>

                    {/* Modal Footer */}
                    <div className="mt-6 text-right">
                        <button onClick={() => setShowModal(false)}
                        className="bg-gradient-to-t from-[#134E5E] to-[#5f9e6e] text-white px-6 py-2 rounded-lg hover:opacity-80 transition duration-300 cursor-pointer">
                            I Understand
                        </button>
                    </div>

                </div>
            </div>
        )}
        </>
    );
}

export default LandingFooter;