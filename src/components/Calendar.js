import React, { useState } from "react";

function Calendar() {
  // 상태: 현재 년/월 저장
  const [currentDate, setCurrentDate] = useState(new Date());

  // 날짜 계산
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate(); // 해당 월의 마지막 날짜 반환
  };

  // 현재 연도와 월 가져오기
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0: 1월, 11: 12월

  // 현재 달의 날짜 리스트 생성
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 시작 요일 (0: 일요일)
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // 이전/다음 달 변경
  const handleMonthChange = (direction) => {
    const newDate = new Date(year, month + direction, 1); // 새 날짜 계산
    setCurrentDate(newDate);
  };

  return (
    <section className="calendar">
      {/* 달력 헤더 */}
      <div className="calendar-header">
        <button onClick={() => handleMonthChange(-1)}>{"<"}</button>
        <h2>
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button onClick={() => handleMonthChange(1)}>{">"}</button>
      </div>

      {/* 달력 날짜 */}
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
          {/* 날짜 그리드 */}
          {Array.from({ length: Math.ceil((firstDayOfMonth + daysInMonth) / 7) }).map((_, weekIndex) => (
            <tr key={weekIndex}>
              {Array.from({ length: 7 }).map((_, dayIndex) => {
                const day =
                  weekIndex * 7 + dayIndex - firstDayOfMonth + 1;
                return (
                  <td key={dayIndex} className={day > 0 && day <= daysInMonth ? "valid-day" : ""}>
                    {day > 0 && day <= daysInMonth ? day : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Calendar;
