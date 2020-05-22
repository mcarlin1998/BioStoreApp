import React from 'react';
//imports stylesheet
import "./Contact.css";

//html information to be displayed on web-page
function Contact(){
  return(
    <section className="subgrid3">
      <p className="contact">Contact Page</p>
      <p className="cintro">We have a wide range of biodegradable solutions. Feel free to drop into any of our branches, drop
        us a message on our contact form or give us a ring!</p>
      <p className="contactdetails">
          Manchester
          Bio-Store
          15-17 St Andrew Street
          Manchester
          M3 5NS</p>
        <p className="contactdetails2">
            Newcastle
            Bio-Store
            35 Grey Street
            Newcastle
            NE11 6JB</p>
          <p className="contactdetails3">
            Dublin
            Bio Store
            O’Connell Street Lower,
            North City,
            Dublin 1
            Ireland</p>

    </section>
  );
}

export default Contact;
