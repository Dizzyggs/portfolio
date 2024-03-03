import React, { useState, useEffect } from 'react';
import './SideMenu.scss';
import { useWindowSize } from '../../Hooks/useWindowSize';
import { NavItems } from '../TopNavMenu/Navs';

const SideMenu = () => {
  const isMobile = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    const toggleButton = document.querySelector('.togglebutton');
    const sidebar = document.querySelector('.sidebar');
  
    if (!menuOpen && toggleButton && isMobile) {
      toggleButton.style.display = 'none';
      if (sidebar) {
        sidebar.style.zIndex = 10;
      }
    } else {
      console.log("hide the menu!")
      toggleButton.style.display = 'flex';
      if (sidebar) {
        sidebar.style.zIndex = 1;
      }
    }
  
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    {isMobile && 
      <div className='sidebar'>
      <div className={`navbar ${menuOpen ? 'show' : ''}`}>
          <span className='xIcon' onClick={toggleMenu}>X</span>
          <ul>
            {NavItems?.map((item) => (
              <li key={item.label}>
                <a href={item.link}>
                  <p>{item.label}</p>
                </a>
              </li>
            ))}
          </ul>
      </div>
      <div>
        <button onClick={toggleMenu} className='togglebutton'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7H19" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
            <path d="M5 12H15" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
            <path d="M5 17H11" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
    }
    </>
  );
};

export default SideMenu;
