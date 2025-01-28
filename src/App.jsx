import React, { useState } from "react";
import CalendarComponent from "./components/Calendar";
import "./style.css";

function App() {
  const [todos, setTodos] = useState([]); // 할 일 목록
  const [todoInput, setTodoInput] = useState(""); // 할 일 입력 상태
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택된 날짜

  const addTodo = () => {
    const trimmedInput = todoInput.trim(); // 공백 제거
    if (trimmedInput) {
      const newTodo = { text: trimmedInput, date: selectedDate }; // 새 할 일
      setTodos([...todos, newTodo]);
      setTodoInput(""); // 입력 초기화
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos); // 삭제 후 상태 업데이트
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <header>
        <h1>Todo List</h1>
      </header>
      <main>
        <CalendarComponent onDateSelect={setSelectedDate} />
        <div className="todo-input">
          <input
            type="text"
            placeholder="할 일을 입력하세요..."
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <button className="addbutton" onClick={addTodo}>
            추가
          </button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              <span>
                {todo.text} ({todo.date.toLocaleDateString()})
              </span>
              <button onClick={() => deleteTodo(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
