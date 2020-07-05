import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './components/Navbar';
import About from './components/About';

class App extends Component {

 
  render(){
    return(
      <div>
        <Navbar time="morning"/>
          <About />
        


      </div>
    );
  }
}

export default App;
