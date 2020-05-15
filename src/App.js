import React  from 'react';
import "./App.css";
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
  return(
    <Router>
    <section className="grid">
      <Nav />
      <Switch>
        <Route path='/' component={Home} />
          <Route path='/Products' component={Products} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
      </Switch>
    </section>
  </Router>
  );
}

export default App;
