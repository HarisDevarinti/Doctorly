// Sidebar.jsx
import React from 'react';
import { FaCalendarCheck, FaCalendarAlt, FaProjectDiagram, FaClipboardList, FaBook, FaUser, FaStar, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarLink = ({ icon: Icon, text, to, onClose }) => (
  <div className="flex items-center gap-4 py-3 border-b border-gray-300">
    <Icon className="text-green-500" />
    <Link to={to} className="text-gray-800 hover:text-green-500"
     onClick={onClose}> 
      {text}
    </Link>
  </div>
);

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-20`}
    >

      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-bold">Menu</h2>
        <FaTimes className="text-red-500 cursor-pointer" onClick={onClose} />
      </div>
      
      <nav className="flex flex-col p-4">
        <SidebarLink icon={FaCalendarCheck} text="My Appointments" to="/my-appointments" />
        <SidebarLink icon={FaCalendarAlt} text="My Calendar" to="/my-calendar" />
        <SidebarLink icon={FaProjectDiagram} text="Project Management" to="/project-management" />
        <SidebarLink icon={FaClipboardList} text="Knowledge Center" to="/knowledge-center" />
        <SidebarLink icon={FaBook} text="Book Appointment" to="/book-appointment" />
        <SidebarLink icon={FaUser} text="Front Desk" to="/front-desk" />
        <SidebarLink icon={FaStar} text="My Favourites" to="/my-favourites" />
      </nav>
    </div>
  );
};

export default Sidebar;
