import React from 'react';

const TimeSlotSelector = ({ selectedTime, setSelectedTime }) => {
  const timeSlots = ['09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM','1:00 PM','03:00 PM','03:30 PM','04:00 PM'];

  return (
    <div className="mb-8 mt-24">
      <div className="grid grid-cols-2 gap-3">
        {timeSlots.map((time) => (
          <button
            key={time}
            className={`w-full py-2 px-4 border rounded-lg text-center 
              ${selectedTime === time ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotSelector;
