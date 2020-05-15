import React from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';

function Nav(){
  const navStyle = {
    color: 'white'
  };


  return(
    <nav>
      <h3> Navigation </h3>
      <ul className="nav-links">
        <Link style={navStyle} to='/Home'>
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
