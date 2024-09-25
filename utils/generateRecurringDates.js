// utils/generateRecurringDates.js
const generateRecurringDates = (pattern, customRecurrence, start, end) => {
  if (!start) return [];

  let dates = [];
  const currentDate = new Date(start);

  // Simplified logic for example purposes
  for (let i = 0; i < 10; i++) {
    dates.push(currentDate.toDateString());
    currentDate.setDate(currentDate.getDate() + customRecurrence.every);
  }

  return dates;
};

export default generateRecurringDates;
