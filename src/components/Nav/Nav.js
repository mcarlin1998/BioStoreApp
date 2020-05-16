import React from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';
import logo from './images/ColourLogo1.png';

function Nav(){
  const navStyle = {
    color: 'white'
  };


  return(
    <nav>
      <h1 className="slogan">Everything Solid is 100% Biodegradeable</h1>
      <img className="logo"src={logo} alt="Company Logo." />
      <ul className="nav-links">
        <Link style={navStyle} to='/'>
        <li>Home</li>
        </Link>
        <Link style={navStyle} to='/Products'>
        <li>Products</li>
        </Link>
        <Link style={navStyle} to='/About'>
        <li>About</li>
        </Link>
        <Link style={navStyle} to='/Contact'>
        <li>Contact Us</li>
        </Link>
      </ul>
    </nav>

  );
}

export default Nav;
