import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import  "./index.css";
import WelcomePage from "./page/static";
import LandingPage from "./page/landing";
import LandingHeader from "./components/header/landing-header"
import LandingFooter from "./components/footer/landing-footer";
import AttendanceTable from "./page/attendance";
import RightSideBar from "./components/nav/right-sidebar";
import LeftSideBar from "./components/nav/left-sidebar";

function Landing(){
  return(
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
    <LandingHeader/>
    <main className="flex-1">
    <LandingPage/>  
    </main>
    <LandingFooter/>
    </div>
  );
}

function AttendanceSheet(){
  const [elapsedTime, setElapsedTime] = useState(null);
  return(
    <div className="flex min-h-screen">
      <LeftSideBar/>
     <main className="flex-1">
        <AttendanceTable elapsedTime={elapsedTime}/>
     </main>
     <RightSideBar setElapsedTime={setElapsedTime}/>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/attendance" element={<AttendanceSheet />} />
      </Routes>
    </HashRouter>
        
  );
}

export default App;