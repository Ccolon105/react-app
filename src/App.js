import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from './components/Footer';
import "./App.css"

class App extends Component {

  render() {
    return (
      <Router>
        <>
          <Navbar />
          <div className="container" >
            <Route path ="/" component ={Home} />
            <Route exact path ="/react-portfolio/" component= {Home} />
            {/* <Route exact path ="/about" component ={About} /> */}
            <Route exact path ="/portfolio" component ={Portfolio} />
            <Route exact path ="/contact" component ={Contact} />

          </div>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
