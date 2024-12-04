import React from "react";

function WeeklySchedule() {
  const events = [
    { day: "Monday", event: "팀 미팅", time: "10:00 AM" },
    { day: "Wednesday", event: "헬스장 가기", time: "6:00 PM" },
    { day: "Friday", event: "프로젝트 마감일", time: "11:59 PM" },
    { day: "Saturday", event: "러닝 하기", time: "8:00 AM" },
  ];

  return (
    <section className="weekly-schedule">
      <h3>This Week</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <span>{`${event.day} - ${event.event}`}</span>
            <span className="event-time">{event.time}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WeeklySchedule;
