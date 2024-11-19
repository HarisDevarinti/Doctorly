import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { FaBars, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };

  return (
    <>
     <div className={`transition-opacity duration-300 ${isSidebarOpen ? 'opacity-50' : 'opacity-100'} mt-16`}>
    <header className="bg-white fixed top-0 w-full z-10 shadow-md p-4 flex items-center justify-between ">

      <div className="flex items-center gap-4 ml-8"> 
        <div className="text-gray-600 text-2xl">
        <FaBars className="text-gray-600 mr-4 cursor-pointer" onClick={toggleSidebar} />
        </div>
        <div className="text-green-500 text-xl font-bold">
          Doctorly
        </div>
      </div>

     
      <nav className="flex gap-10">
                        <Link to="#dashboard" className="text-gray-600 hover:border-b-2 hover:border-green-500">
                            Dashboard
                        </Link>
                        <Link to="/patient-management" className="text-gray-600 hover:border-b-2 hover:border-green-500">
                            Patient Management
                        </Link>
                        <Link to="#knowledge-center" className="text-gray-600 hover:border-b-2 hover:border-green-500">
                            Knowledge Center
                        </Link>
                    </nav>

      <div className="flex gap-4 text-gray-600 text-2xl mr-8">
        <FaSearch className="hover:text-green-500" />
        <FaBell className="hover:text-green-500" />
        <FaUserCircle className="hover:text-green-500" />
      </div>
    </header>
    </div>
    

    <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />


{isSidebarOpen && (
  <div className="fixed inset-0 bg-white opacity-50" onClick={toggleSidebar}></div>
)}
    </>
    
  );
};

export default Header;
