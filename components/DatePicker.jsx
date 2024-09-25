// components/DatePicker.js
import React from "react";
import RecurrenceOptions from "./RecurrenceOptions";
import RecurrenceCustomization from "./RecurrenceCustomization";
import DateRangePicker from "./DateRangePicker";
import CalendarPreview from "./CalendarPreview";

const DatePicker = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Date Picker with Recurrence</h2>
      <RecurrenceOptions />
      <RecurrenceCustomization />
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
};

export default DatePicker;
