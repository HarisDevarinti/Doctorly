import React from 'react';

const AppointmentTypeSelector = ({ appointmentType, setAppointmentType }) => {
  return (
    <div className="mb-8">
      <label className="block text-lg font-semibold mb-3 text-black">1. Appointment Type</label>
      <div className="flex space-x-4">
        <button
          onClick={() => setAppointmentType('Tele-Consultation')}
          className={`px-4 py-2 rounded-lg ${appointmentType === 'Tele-Consultation' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Tele-Consultation
        </button>
        <button
          onClick={() => setAppointmentType('In-Person')}
          className={`px-4 py-2 rounded-lg ${appointmentType === 'In-Person' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          In-Person
        </button>
      </div>
    </div>
  );
};

export default AppointmentTypeSelector;
