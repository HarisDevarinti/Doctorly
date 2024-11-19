import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white  bottom-0 w-full z-10 shadow-md p-4 flex items-center justify-between">
      <div className="ml-8 text-sm text-gray-600">
        &copy; 2024 YourCompany. All Rights Reserved.
      </div>

      <div className="mr-8 flex gap-4 text-sm text-black"> 
        <Link to="/pharmacovigilance" className="hover:border-b-2 hover:border-green-500 text-gray-600">
          Pharmacovigilance
        </Link>
        <Link to="/support" className="hover:border-b-2 hover:border-green-500 text-gray-600">
          Support
        </Link>
        <Link to="/privacy-policy" className="hover:border-b-2 hover:border-green-500 text-gray-600">
          Privacy Policy
        </Link>
        <Link to="/terms-and-conditions" className="hover:border-b-2 hover:border-green-500 text-gray-600">
          Terms and Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
