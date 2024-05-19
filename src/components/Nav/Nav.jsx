import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
// import { BiBook } from 'react-icons/bi';
// import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleNavClick = (navId, event) => {
    event.preventDefault();
    setActiveNav(navId);
  };

  return (
    <nav>
      <a href="/" onClick={(e) => handleNavClick('/', e)} className={activeNav === '/' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about"  className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      {/* <a href="#experience"  className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a> */}
      {/* <a href="#services" onClick={(e) => handleNavClick('#services', e)} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a> */}
      <a href="#contact"  className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  );
};

export default Nav;

