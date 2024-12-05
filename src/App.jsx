import React from "react";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import WeeklySchedule from "./components/WeeklySchedule";
import "./styles.css";
import "./components/weekly-schedule.css";
function App() {
  return (
    <div className="App"><br></br>
      <Header/>
      <main className="main-content" >
        <Calendar/>
        <WeeklySchedule/>
      </main>
    </div>
  );
}

export default App;
