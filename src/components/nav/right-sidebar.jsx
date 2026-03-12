import { useState, useEffect } from "react";
const OFFICE_LAT = 14.87699492620363;
const OFFICE_LNG = 121.0115508189621;
const ALLOWED_RADIUS = 10;

//exact location ng office
// const OFFICE_LAT = 14.862346668530373;
// const OFFICE_LNG = 120.95168122157881;

//for testing of geolocation Location of Ava's Sweet Choice
//LAT 14.862907390721409, 
//LNG 120.95170359194886

//my address
//LAT 14.87699492620363
//LNG 121.0115508189621

function RightSideBar({setElapsedTime }){
    const [hasTimeIn, setHasTimeIn] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log("LAT:", position.coords.latitude);
            console.log("LNG:", position.coords.longitude);
        },
        () => {
            console.log("Location denied");
        }
    );
}, []);
    
    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };
    // Calculate Distance
    const getDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371000;
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

     const handleClick = () => {
       if (!hasTimeIn) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const distance = getDistance(latitude, longitude, OFFICE_LAT, OFFICE_LNG);

                    if (distance <= ALLOWED_RADIUS) {
                        // kapag nasa office mag rurun yung timer
                        setIsRunning(true);
                        setHasTimeIn(true);
                    } else {
                        // kapag wala sa office
                        setModalMessage(`You are ${Math.round(distance)} meters away from the office.\nYou must be within 10 meters to Time In. \nNo cheating pleas...`);
                        setShowModal(true);
                    }
                },
                (error) => {
                    setModalMessage("Location access denied. Please enable location to Time In.");
                    setShowModal(true);
                }
            );
        }
        else {
            // Time Out
            setIsRunning(false);
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            setElapsedTime(`${hours}h ${minutes}m`);
        }
    };

    return(
        
        <div className="text-gray-200 bg-gradient-to-t from-[#5f9e6e] to-[#134E5E] text-center shadow-lg w-80">
            <div className="grid grid-cols-2 gap-2 py-5 px-2">
    
                <div className="flex items-center justify-between bg-gradient-to-b from-[#134E5E] to-[#25b3a7] hover:from-[#145061] hover:to-[#17a094] transition duration-500 text-gray-200 px-1 py-1 h-12 rounded-md cursor-pointer">
                    <p className="font-semibold text-sm leading-tight">📅 Weekly<br/>Schedule</p>
                    <span className="shrink-0">▾</span>
                </div>

                <div className="flex items-center justify-between bg-gradient-to-b from-[#134E5E] to-[#25b3a7] hover:from-[#145061] hover:to-[#17a094] transition duration-500 text-gray-100 px-1 py-1 h-12 rounded-md cursor-pointer">
                    <p className="font-semibold text-sm leading-tight">✅ Todo<br/>List</p>
                    <span className="shrink-0">▾</span>
                </div>

                <div className="flex items-center justify-between bg-gradient-to-b from-[#134E5E] to-[#25b3a7] hover:from-[#145061] hover:to-[#17a094] transition duration-500 text-gray-100 px-1 py-1 h-12 rounded-md cursor-pointer">
                    <p className="font-semibold text-sm leading-tight">📌 Important<br/>Meetings</p>
                    <span className="shrink-0">▾</span>
                </div>

                <div className="flex items-center justify-between bg-gradient-to-b from-[#134E5E] to-[#25b3a7] hover:from-[#145061] hover:to-[#17a094] transition duration-500 text-gray-100 px-1 py-1 h-12 rounded-md cursor-pointer">
                    <p className="font-semibold text-sm leading-tight">⚡ Complete<br/>Work</p>
                    <span className="shrink-0">▾</span>
                </div>

            </div>

        <div className="flex flex-col justify-center items-center gap-10 mt-20">
            <p className="text-3xl font-mono">{formatTime(seconds)}</p>
            
            <button onClick={handleClick}
            className="cursor-pointer  w-40 h-13 px-5 py-2 text-gray-100 font-semibold rounded-lg shadow-sm bg-gradient-to-t from-[#15586b] to-[#22a99d] hover:from-[#135163] hover:to-[#209e94] transition duration-300 ease-in-out border-1 border-gray-700">
                {hasTimeIn ? "❌Time Out" : "✅Time In"}
            </button>

            <button className="cursor-pointer text-gray-100 font-semibold mt-35 w-40 h-10 px-5 py-2 rounded-lg shadow-sm 
            bg-gradient-to-t from-[rgb(21,88,107)] to-[rgb(0,182,167)] hover:from-[rgb(18,76,92)] hover:to-[rgb(0,165,151)] transition duration-500 ease-in-out border border-gray-700">
                🚪 Sign Out
            </button>

        </div>
        

        {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                <div className="flex flex-col justify-center items-center shadow-2xl shadow-black/50 bg-white/85 p-10 rounded-3xl w-160 h-90">
                    <p className="text-4xl mb-3">⚠️</p>
                    <h2 className="text-3xl font-bold mb-2 text-[#3f3f3f]">Time in Denied!</h2>
                    <p className="text-lg flex-1 text-[#3f3f3f] whitespace-pre-line">{modalMessage}</p>
                    <button
                        onClick={() => setShowModal(false)}
                        className="text-center cursor-pointer bg-gradient-to-t from-[#134E5E] to-[#71B280] hover:from-[#114553] hover:to-[#51805c] text-2xl px-10 py-2 rounded-lg transition duration-400 ease-in-out text-white">
                        Okay
                    </button>
                </div>
            </div>
        )}

      </div>

        
    );
}
export default RightSideBar;