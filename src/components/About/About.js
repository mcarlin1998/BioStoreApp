import React from 'react';
//imports stylesheet
import "./About.css";
//Import of images
import jen from './images/jennifer-robertson.jpeg';
import alex from './images/alex-carter.jpeg';
import harry from './images/harry-robertson.jpeg';
import jess from './images/jessica-brotherton.jpeg';
import josh from './images/josh-manningham.jpeg';
import laura from './images/laura-lago.jpeg';






//html information for system
function About(){
  return(
    //declares subgrid
    <section className="subgrid2">
      <p className="abouttitle">About Page</p>
      <img className="jen"src={jen} alt="Owner of Company" />
      <p className="p1">Jennifer Robertson:
        Founder of Bio-Store,
        MSc in Conservation Management</p>
      <img className="harry"src={harry} alt="Production Manager" />
      <p className="p2">Harry Robertson:
        Production Manager,
        BA in Business </p>
      <img className="josh"src={josh} alt="Store Team Manager" />
      <p className="p3">Josh Manningham:
        Store Team Manager,
        BA in Retail Management</p>
      <img className="alex"src={alex} alt="Lead Developer" />
      <p className="p4">Alex Carter:
          Lead Developer,
          BSc in Ethical Product Development</p>
        <img className="jess"src={jess} alt="Head of Finance" />
      <p className="p5">Jessica Brotherton:
        Head of Finance
        </p>
      <img className="laura"src={laura} alt="Head of Distribution" />
      <p className="p6">Laura Lago:
        Head of Distribution</p>
    </section>
  );
}

export default About;
