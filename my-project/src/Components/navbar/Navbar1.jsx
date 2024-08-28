import React, { useState } from "react";
import './navbar1.css'
import { useNavigate } from 'react-router-dom';
function Navbar1() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navigate = useNavigate();
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        LOGO
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="FaceDetect\my-project\src\Components\login\login.jsx" className="nav__link"  onClick={(e) => {
        e.preventDefault();
        navigate('/login-signup');
      }}>
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="FaceDetect\my-project\src\Components\scndpage\scndpage.jsx" className="nav__link"  onClick={(e) => {
        e.preventDefault();
        navigate('/face-detect');
      }}>
            Face-Test
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact-us
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Portfolio
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar1;