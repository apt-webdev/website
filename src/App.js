import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
// import Collabs from './components/Collabs/Collabs';
import Footer from './components/Footer/Footer';
import { ReactComponent as Logo} from './name.svg';
import './App.scss';
import 'bulma/css/bulma.css';
// import { useMediaQuery } from 'react-responsive';
// import 'styles/_colors.scss';


class App extends Component {

 
  render(){
    return(
      <div>
        <div id="welcome-page">
          <Logo />
        </div>
        <div id="content-page">
          <Navbar time="morning"/>
          <About />
          <Skills />
          <Works />
          {/* <Collabs /> */}
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
