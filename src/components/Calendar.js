import React from "react";

function Calendar() {
  return (
    <section className="calendar">
      <div className="calendar-header">
        <h2>November 2023</h2>
        <div className="calendar-nav">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {/* Example rows */}
          <tr>
            <td></td>
            <td></td>
            <td className="selected">2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          {/* More rows as needed */}
        </tbody>
      </table>
    </section>
  );
}

export default Calendar;
