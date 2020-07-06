import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';
// import 'styles/_colors.scss';
import './App.scss';
import 'bulma/css/bulma.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';

class App extends Component {

 
  render(){
    return(
      <div>
        <Navbar time="morning"/>
        <About />
        <Skills />
        <Works />
      </div>
    );
  }
}

export default App;
