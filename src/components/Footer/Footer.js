import React from 'react';
import "./Footer.css";
//imports link from router to allow navigation between pages
import { Link } from 'react-router-dom';

function Footer(){
  return(
    <section className="footergrid">
    <Link to="/Contact"><h1 className="footcontact">
    Contact Us
    </h1></Link>
    <p className="footdetails">
      Manchester
      Bio-Store
      15-17 St Andrew Street
      Manchester
      M3 5NS</p>
      <p className="footdetails2">
        Newcastle
        Bio-Store
        35 Grey Street
        Newcastle
        NE11 6JB</p>
        <p className="footdetails3">
        Dublin
        Bio Store
        O’Connell Street Lower,
        North City,
        Dublin 1
        Ireland</p>
    </section>
  )
};

export default Footer;
