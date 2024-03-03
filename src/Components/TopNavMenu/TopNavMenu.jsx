import React from 'react';
import './TopNavMenu.scss';
import { NavItems } from './Navs';
import { Link } from 'react-router-dom';

const TopNavMenu = () => {
  return (
    <div className="TopNavMenu">
      {NavItems.map((item) => (
        <span>
          <Link to={item.link} key={item.label}>{item.label}</Link>
        </span>
      ))}
    </div>
  );
};

export default TopNavMenu;