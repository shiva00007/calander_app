// pages/index.js
import React from "react";
import DatePicker from "../components/DatePicker";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">Recurring Date Picker Example</h1>
      <DatePicker />
    </div>
  );
};

export default HomePage;
