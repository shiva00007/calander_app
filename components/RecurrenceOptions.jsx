"use client";
import React from "react";
import useDatePickerStore from "../store/datePickerStore";

const RecurrenceOptions = () => {
  const { recurrencePattern, setRecurrencePattern } = useDatePickerStore();

  return (
    <div className="my-4">
      <label className="block font-semibold">Recurrence Pattern:</label>
      <select
        value={recurrencePattern}
        onChange={(e) => setRecurrencePattern(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
