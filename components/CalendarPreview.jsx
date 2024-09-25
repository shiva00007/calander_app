"use client";
import React from "react";
import useDatePickerStore from "../store/datePickerStore";
import generateRecurringDates from "../utils/generateRecurringDates";

const CalendarPreview = () => {
  const { recurrencePattern, customRecurrence, startDate, endDate } =
    useDatePickerStore();

  const recurringDates = generateRecurringDates(
    recurrencePattern,
    customRecurrence,
    startDate,
    endDate
  );

  return (
    <div className="my-4">
      <h3 className="font-semibold">Preview Recurring Dates:</h3>
      <div className="grid grid-cols-7 gap-2">
        {recurringDates.map((date, index) => (
          <div key={index} className="border p-2 rounded">
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPreview;
