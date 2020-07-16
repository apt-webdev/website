import React, { Component } from 'react';
// import { useMediaQuery } from 'react-responsive';
// import 'styles/_colors.scss';
import './App.scss';
import 'bulma/css/bulma.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Collabs from './components/Collabs/Collabs';
import Footer from './components/Footer/Footer';
import { ReactComponent as Logo} from './name.svg';


class App extends Component {

 
  render(){
    return(
      <div>
        <section id="welcome_page">
          <Logo />
        </section>
        <section id="pages">
          <Navbar time="morning"/>
          <About />
          <Skills />
          <Works />
          <Collabs />
          <Contact />
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
