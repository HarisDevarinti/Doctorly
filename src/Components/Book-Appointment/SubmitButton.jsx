import React from 'react';

const SubmitButton = ({ handleSubmit, isDisabled }) => {
  return (
    <div className="flex mt-10">
      <button
        onClick={handleSubmit}
        className={`px-6 py-2 rounded-lg ${isDisabled ? 'bg-gray-400' : 'bg-green-500 text-white'}`}
        disabled={isDisabled}
      >
        Confirm Appointment
      </button>
    </div>
  );
};

export default SubmitButton;
