import React from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';
import logo from './images/react.svg';

function Nav(){
  const navStyle = {
    color: 'white'
  };


  return(
    //creates navigation for site using router dom to connect the systems components
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
