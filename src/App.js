import React  from 'react';
import "./App.css";
//imports each component/webpage
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
  return(
    <Router>
    <section className="grid">
      <Nav />
      <Switch>
        //using route the path to each component is constructed.
        <Route path='/' exact component={Home} />
          <Route path='/Products' component={Products} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
      </Switch>
      <Footer />
    </section>
  </Router>
  );
}

export default App;
