import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Styles/Calendar.css";


const DatePicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="mb-8">
      <label className="block text-lg font-semibold mb-3 text-black">2. Appointment Date & Timings</label>
      
      <Calendar 
        onChange={setSelectedDate} 
        value={selectedDate} 
        className="w-full text-black" 
      />
    </div>
  );
};

export default DatePicker;
