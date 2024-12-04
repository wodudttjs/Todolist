import React from "react";

function HabitItem({ habit, onToggle }) {
  return (
    <li 
      onClick={onToggle} 
      style={{
        textDecoration: habit.completed ? "line-through" : "none",
        color: habit.completed ? "green" : "black",
        cursor: "pointer",
      }}
    >
      {habit.name}
    </li>
  );
}

export default HabitItem;
