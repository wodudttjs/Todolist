import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./custom-calendar.css";
import "./custom-todo.css";

const DevCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [todos, setTodos] = useState({});
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchEvents(date);
    loadTodos();
  }, [date]);

  const fetchEvents = async (selectedDate) => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    try {
      const response = await fetch(`https://api.example.com/events?date=${formattedDate}`);
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

  const loadTodos = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || {};
    setTodos(storedTodos);
  };

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;
    const formattedDate = date.toISOString().split("T")[0];
    const updatedTodos = { ...todos, [formattedDate]: [...(todos[formattedDate] || []), newTodo] };
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setNewTodo("");
  };

  const handleDeleteTodo = (index) => {
    const formattedDate = date.toISOString().split("T")[0];
    const updatedTodos = { ...todos };
    updatedTodos[formattedDate].splice(index, 1);
    if (updatedTodos[formattedDate].length === 0) delete updatedTodos[formattedDate];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">개발자 캘린더</h2>
      <Calendar onChange={handleDateChange} value={date} className="custom-calendar" />
      <p className="selected-date">선택한 날짜: {date.toLocaleDateString()}</p>
      
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
      
      <div className="todo-container">
        <h3 className="todo-title">📝 할 일 목록</h3>
        <div className="todo-input">
          <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="할 일을 입력하세요..." />
          <button onClick={handleAddTodo}>추가</button>
        </div>
        <ul className="todo-list">
          {(todos[date.toISOString().split("T")[0]] || []).map((todo, index) => (
            <li key={index} className="todo-item">
              {todo}
              <button className="delete-btn" onClick={() => handleDeleteTodo(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DevCalendar;