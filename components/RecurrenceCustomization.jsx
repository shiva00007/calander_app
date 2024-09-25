// components/RecurrenceCustomization.js
"use client";
import React from "react";
import useDatePickerStore from "../store/datePickerStore";

const RecurrenceCustomization = () => {
  const { customRecurrence, setCustomRecurrence } = useDatePickerStore();

  return (
    <div className="my-4">
      <label className="block font-semibold">Customize Recurrence:</label>
      <input
        type="number"
        value={customRecurrence.every}
        onChange={(e) =>
          setCustomRecurrence({ ...customRecurrence, every: e.target.value })
        }
        className="border p-2 rounded"
      />
      {/* Add further customization options here */}
    </div>
  );
};

export default RecurrenceCustomization;
