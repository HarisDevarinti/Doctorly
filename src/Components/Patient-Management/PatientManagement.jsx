
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; 

const PatientManagement = () => {
    const navigate = useNavigate();

    const handleRegisterPatient = () => {
        navigate('/patient-registration');
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-black">Patient Management</h1>
            <button 
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded items-center" 
                onClick={handleRegisterPatient}
            >
                <FaUser className="mr-2" />  Register Patient
               
            </button>
        </div>
    );
};

export default PatientManagement;
