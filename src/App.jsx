import React, { useState } from "react";
import HabitTracker from "./components/HabitTracker";
import "./styles.css";

function App() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, { name: habit, completed: false }]);
  };

  const toggleHabit = (index) => {
    const newHabits = habits.map((habit, i) => 
      i === index ? { ...habit, completed: !habit.completed } : habit
    );
    setHabits(newHabits);
  };

  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      <HabitTracker habits={habits} onAdd={addHabit} onToggle={toggleHabit} />
    </div>
  );
}

export default App;

