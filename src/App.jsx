import React, { useState } from "react";
import "./style.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  // 할 일 추가 함수
  const addTodo = () => {
    const trimmedInput = todoInput.trim();
    if (trimmedInput) {
      setTodos([...todos, trimmedInput]);
      setTodoInput("");
    }
  };

  // 할 일 삭제 함수
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
      </header>

      <main>
        <div className="todo-input">
          <input
            type="text"
            placeholder="할 일을 입력하세요..."
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <button className="addbutton" onClick={addTodo} >추가</button>
        </div>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={() => deleteTodo(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
