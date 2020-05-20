import React from 'react';
import "./Home.css";
import plastic1 from './images/Plastic_1.png';
import plastic2 from './images/Plastic_2.png';
import gloves from './images/Gloves_1.png';
import apron from './images/apron_1.png';
import straws from './images/Straws_1.png';
import planet from './images/g10.png';
import { Link } from 'react-router-dom';




function Home(){
  return(
    <section className="subgrid">
      <h1>Welcome to the Bio-Store</h1>
      <h3 className="subtitle">We are committed to providing biodegradable alternatives to the plastics
          that are damaging our planet.</h3>
          <img className="planet"src={planet} alt="plastic bottle" />
        <p className="intro">
          We are based in the North-West of England, but deliver worldwide and specialise in those products
          that are frequently disposed of all too readily.
        </p>
        <p className="intro2">
          So is it biodegradable gloves you need? Maybe aprons? Or are you in catering and require an
          alternative to those plastic straws that end up everywhere?
        </p>
        <Link to="/Products">
        <img className="gloves"src={gloves} alt="Bio Gloves." />
        <button className="button1">View</button></Link>
          <Link to="/Products">
        <img className="apron"src={apron} alt="Bio Aprons" />
          <button className="button2">View</button></Link>
            <Link to="/Products">
        <img className="straws"src={straws} alt="Bio Straws." />
        <button className="button3">View</button></Link>

        <p className="checkout">
          Check out our products page!
        </p>
        <span className="shape"></span>
        <p className="extra">
          We also offer different services such as:
          Environmentally-friendly cleaning
          Consultation on how to make your business eco-friendly
        </p>
        <h2>
          Costing the Earth -
        </h2>
        <h3 className="end">
          Plastic is currently <span>choking</span> the Earth’s oceans and suffocating the soil. Help us help you. Get in touch
          today.
        </h3>
        <img className="plastic1"src={plastic1} alt="Plastic Bottle." />
    </section>
  );
}


export default Home;
