import React, { useState } from "react";

function AddHabitForm({ onAdd }) {
  const [habit, setHabit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit.trim()) {
      onAdd(habit);
      setHabit("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a new habit" 
        value={habit} 
        onChange={(e) => setHabit(e.target.value)} 
      />
      <button type="submit">추가하기</button>
    </form>
  );
}

export default AddHabitForm;
