import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./custom-calendar.css"; // Custom CSS for calendar
import "./events-list.css"; // Custom CSS for events list

const DevCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents(date);
  }, [date]);

  const fetchEvents = async (selectedDate) => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    try {
      const response = await fetch(`tphts://api.example.com/events?date=${formattedDate}`);
      if (!response.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");
      const data = await response.json();
      setEvents(data.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
      setEvents([]);
    }
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg w-80">
      <h2 className="text-xl font-bold mb-4">개발자 캘린더</h2>
      <Calendar 
        onChange={handleDateChange} 
        value={date} 
        className="custom-calendar rounded-lg shadow-md p-2 transition-all duration-300 hover:scale-105 hover:shadow-lg" 
      />
      <p className="mt-4 text-gray-700 font-semibold">
        선택한 날짜: {date.toLocaleDateString()}
      </p>
      <div className="events-container">
        <h3 className="events-title">📌 공지사항</h3>
        {events.length > 0 ? (
          <ul className="events-list">
            {events.map((event, index) => (
              <li key={index} className="event-item">{event}</li>
            ))}
          </ul>
        ) : (
          <p className="no-events">해당 날짜에 공지사항이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default DevCalendar;
