import { useState, useEffect } from "react";
import RightSideBar from "../components/nav/right-sidebar";

function AttendanceTable({ elapsedTime }){
  const today = new Date();
  const date = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
  });

  const [calendarDate, setCalendarDate] = useState(new Date())
  const [timeRecords, setTimeRecords] = useState(() => {
    return JSON.parse(localStorage.getItem("timeRecords")) || {}
  })

  // ← save logic
  const saveTodayRecord = () => {
    const now = new Date()
    const dateKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`
    const updatedRecords = { ...timeRecords, [dateKey]: elapsedTime }
    setTimeRecords(updatedRecords)
    localStorage.setItem("timeRecords", JSON.stringify(updatedRecords))
  }

  // ← Auto-save the elapsedTime
  useEffect(() => {
    if (elapsedTime) saveTodayRecord()
  }, [elapsedTime])

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then(res => res.json())
      .then(data => console.log(data.ip))
  }, [])

  return(
    <div className="bg-[#F0F7F4] text-[#2D4A3E] min-h-screen flex flex-col px-4 py-5">
      <div className="flex justify-between items-center bg-white py-1 px-2 rounded-md shadow-md">
          <h1 className="text-5xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                  </svg>
              </div>
              <div className="flex flex-col">
                  <p className="font-semibold">Intern</p>
                  <p className="text-sm text-gray-500">Intern@gmail.com</p>
              </div>
          </div>
      </div>

      {/* Attendance Content */}
      <div>
        <div className="text-2xl">
          <p>Date: {date}</p>
          <p>Time: {time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</p>
        </div>
      </div>

      {/* Calendar side*/}
      <div className="mt-5 bg-white rounded-md shadow-md p-4 w-200 h-auto">
        
        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-3">
          <button onClick={() => setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1))}
            className="cursor-pointer text-lg font-bold px-2 hover:text-[#25b3a7]">‹</button>
          <h2 className="font-bold text-lg">
            {calendarDate.toLocaleString("default", { month: "long", year: "numeric" })}
          </h2>
          <button onClick={() => setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1))}
            className="cursor-pointer text-lg font-bold px-2 hover:text-[#25b3a7]">›</button>
        </div>

        {/* Day Labels */}
        <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-400 mb-1 h-5">
          {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => <div key={d}>{d}</div>)}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 text-center text-sm">
          {(() => {
            const year = calendarDate.getFullYear()
            const month = calendarDate.getMonth()
            const firstDay = new Date(year, month, 1).getDay()
            const daysInMonth = new Date(year, month + 1, 0).getDate()
            const today = new Date()
            const cells = []

            for (let i = 0; i < firstDay; i++) {
              cells.push(<div key={`empty-${i}`}></div>)
            }

            for (let d = 1; d <= daysInMonth; d++) {
              const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear()
              const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`
              const storedTime = timeRecords[dateKey]

              cells.push(
                <div key={d} className={`py-1 rounded-full h-10 flex flex-col items-center ${isToday ? "bg-[#25b3a7] text-white font-bold" : "hover:bg-gray-100"}`}>
                  <span>{d}</span>
                  {storedTime && (
                    <span className={`text-[13px] leading-tight font-semibold ${isToday ? "text-white" : "text-[#25b3a7]"}`}>
                      {storedTime}
                    </span>
                  )}
                </div>
              )
            }
            return cells
          })()}
        </div>

      </div>

    <div className="flex items-center justify-center mt-5">
      <p className="text-3xl font-semibold">
        Total Time: {elapsedTime || ""}
      </p>
    </div>
      

    </div>
  );
}

export default AttendanceTable;