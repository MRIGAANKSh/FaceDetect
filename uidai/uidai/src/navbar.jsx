import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-blue-900 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <a href="#home">
            <img src="https://uidai.gov.in/images/logo/aadhaar_english_logo.svg" alt="UIDAI Logo" className="w-24" />
          </a>
        </div>

        {/* Main Menu */}
        <ul className="menu flex space-x-8">
          <li>
            <a href="#about" className="hover:text-gray-300">About UIDAI</a>
          </li>
          <li className="relative">
            <a href="#aadhar" className="hover:text-gray-300" onClick={toggleDropdown}>
              My Aadhaar
            </a>
            {isOpen && (
              <ul className="dropdown-menu absolute bg-blue-800 p-4 mt-2 space-y-2 shadow-lg">
                <li><a href="#enrolment" className="block hover:text-gray-300">Enrolment & Update</a></li>
                <li><a href="#download" className="block hover:text-gray-300">Download Aadhaar</a></li>
                <li><a href="#verify" className="block hover:text-gray-300">Verify Aadhaar</a></li>
              </ul>
            )}
          </li>
          <li>
            <a href="#ecosystem" className="hover:text-gray-300">Ecosystem</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">Contact & Support</a>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Navbar;
