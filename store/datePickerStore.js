// store/datePickerStore.js
import { create } from "zustand";

const useDatePickerStore = create((set) => ({
  recurrencePattern: "daily",
  customRecurrence: { every: 1, daysOfWeek: [] },
  startDate: null,
  endDate: null,
  setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
  setCustomRecurrence: (custom) => set({ customRecurrence: custom }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));

export default useDatePickerStore;
