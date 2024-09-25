"use client";
import React from "react";
import useDatePickerStore from "../store/datePickerStore";

const DateRangePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useDatePickerStore();

  return (
    <div className="my-4">
      <label className="block font-semibold">Select Date Range:</label>
      <input
        type="date"
        value={startDate || ""}
        onChange={(e) => setStartDate(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="date"
        value={endDate || ""}
        onChange={(e) => setEndDate(e.target.value)}
        className="border p-2 rounded ml-4"
      />
    </div>
  );
};

export default DateRangePicker;
