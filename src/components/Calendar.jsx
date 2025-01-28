import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function CalendarComponent({ onDateSelect }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date); // 날짜 상태 업데이트
    onDateSelect(date); // 부모 컴포넌트로 전달
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <div>
            <input ref={inputRef} {...inputProps} />
            {InputProps?.endAdornment}
          </div>
        )}
      />
    </LocalizationProvider>
  );
}

export default CalendarComponent;
