import React from "react";
import HabitItem from "./HabitItem";
import AddHabitForm from "./AddHabitForm";

function HabitTracker({ habits, onAdd, onToggle }) {
  return (
    <div>
      <AddHabitForm onAdd={onAdd} />
      <ul>
        {habits.map((habit, index) => (
          <HabitItem 
            key={index} 
            habit={habit} 
            onToggle={() => onToggle(index)} 
          />
        ))}
      </ul>
    </div>
  );
}

export default HabitTracker;
