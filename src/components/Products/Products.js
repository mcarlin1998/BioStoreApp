import React from 'react';
import "./Products.css";
import gloves from './images/Gloves_1.png';
import apron from './images/apron_1.png';
import straws from './images/Straws_1.png';
import { Link } from 'react-router-dom';


function Products(){
  return(
    <section className="subgrid1">
      <h1 className="prodtitle">Products Page</h1>
      <p className="prodintro">
        Welcome to our products page, where
        you will find a wide range of biodegradeable
        alternatives to damaging plastics.
      </p>
      <p className="stock">
        In Stock
      </p>
      <Link to="/Products">
      <img className="gloves1"src={gloves} alt="Bio Gloves." />
      <button className="buttonr1">Buy</button></Link>
      <p className="title1">Bio-Degradeable Gloves</p>
      <ol clasName="des1">
        <li>An economical alternative for those with latex allergies.</li>

        <li>Beaded cuff and smooth surface ensures strength and dexterity.
        </li>
        <li>Complies with EN455-2.</li>
        <li>
          Powder free material minimises powder contamination and allergies.
        </li>
        <li>
        Industry standard 240mm cuff length.
        </li>
        <li>
        Quality management in accordance with ISO 9001 and ISO 13485.
        </li>
        <li>
        Supplied in dispenser boxes of 100 ambidextrous gloves
        </li>
      </ol>
        <Link to="/Products">
      <img className="apron1"src={apron} alt="Bio Aprons" />
        <button className="buttonr2">Buy</button></Link>
          <p className="title3">Bio-Degradeable Apron</p>
          <p className="des2">Polycare biodegradable aprons are adjustable to fit all shapes and builds. Supplied on rolls for
            easy dispensing. Polycare biodegradable aprons are for use in all departments and medical
            specialisations including nursing, midwifery, infection control, domestic, paediatric and
theatre.    </p>
            <ol className="des3">
              <li>
                Standard quantity = 5 rolls of 200 aprons in biodegradable sleeves.
              </li>
              <li>
                CE Certified.
              </li>
              <li>
                Boxed in cardboard outers which can be recycled.
              </li>
              <li>
                18 – 36 months to commence break down once sent to landfill.
              </li>
            </ol>
          <Link to="/Products">
      <img className="straws1"src={straws} alt="Bio Straws." />
      <button className="buttonr3">Buy</button>
    </Link>
    <p className="title3">Bio-Degradeable Straws</p>
    <ol className="des4">
      <li>
        18 – 36 months to commence break down once sent to landfill.
      </li>
      <li>
        Smooth surface ensures strength and dexterity.
      </li>
      <li>
        Complies with EN455-2.
      </li>
      <li>
        Minimises contamination.
      </li>
      <li>
        Industry standard.
      </li>
      <li>
        Quality management in accordance with ISO 9001 and ISO 13485.
      </li>
      <li>
        Supplied in boxes of 250.
      </li>
    </ol>
    </section>
  );
}

export default Products;
