import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarComponent({ onDateSelect }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateSelect(date); // 선택한 날짜를 부모 컴포넌트로 전달
  };

  return (
    <div className="calendar-container">
      <Calendar onChange={handleDateChange} value={selectedDate} />
    </div>
  );
}

export default CalendarComponent;
