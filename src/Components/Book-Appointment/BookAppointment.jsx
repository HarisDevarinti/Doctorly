import React, { useState } from 'react';
import AppointmentTypeSelector from './AppointmentTpeSelector.jsx';
import DatePicker from './DatePicker.jsx';
import TimeSlotSelector from './TimeSlotSelector.jsx';
import SubmitButton from './SubmitButton.jsx';
import { FaSearch } from 'react-icons/fa'; 

const BookAppointment = () => {
  const [appointmentType, setAppointmentType] = useState('Tele-Consultation');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Appointment booked: 
      Type: ${appointmentType}, 
      Date: ${selectedDate.toLocaleDateString()}, 
      Time: ${selectedTime}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl w-full mx-10">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">BOOK AN APPOINTMENT</h1>

        <AppointmentTypeSelector
          appointmentType={appointmentType}
          setAppointmentType={setAppointmentType}
        />

        <hr className="border-gray-300 my-6"/>

        <div className="border border-gray-300 rounded-lg p-6 mt-8">

<div className="grid grid-cols-[1fr_auto_1fr] gap-4">

  <div>
    <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
  </div>

  <div className="flex justify-center items-center">
    <div className="border-l border-gray-300 h-full"></div>
  </div>

  <div>
    <TimeSlotSelector selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
  </div>
</div>

</div>
        <hr className="border-gray-300 my-6"/>


        <div className="mt-8">
  <label className="block text-lg font-semibold mb-3 text-black">3. Select Patient</label>
  <div className="flex items-center space-x-2">
    <input
      type="text"
      placeholder="Search by patient name,email or number"
      value={searchTerm}
      onChange={handleSearch}
      className="border rounded-lg px-4 py-2 w-1/2 bg-gray-200 text-black"/>
    <button className="bg-green-500 text-white p-2 rounded-lg">
      <FaSearch />
    </button>
  </div>
</div>

<hr className="border-gray-300 my-6"/>

<div className="grid grid-cols-2 gap-4 mt-6">
    <div>
      <label className="block text-lg font-semibold mb-3 text-black">4.Symptoms</label>
      <input
        type="text"
        placeholder="Enter symptoms"
        className="border rounded-lg px-4 py-2 w-full bg-gray-200 text-black" 
      />
    </div>
    <div>
      <label className="block text-lg font-semibold mb-3 text-black">Reason for Consultation</label>
      <input
        type="text"
        placeholder="Enter reason for consultation"
        className="border rounded-lg px-4 py-2 w-full bg-gray-200 text-black"
      />
    </div>
  </div>


        <SubmitButton
          handleSubmit={handleSubmit}
          isDisabled={!selectedDate || !selectedTime} 
        />
      </div>
    </div>
  );
};

export default BookAppointment;
