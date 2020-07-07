import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import './About.scss';
class About extends React.Component {
    render() {
        return (
            <div className="navbar-tab" id="about-me">
                <h1 className="about-text box-text">Hello,<br/> my name is <br/> <span className="name">Patrícia Areias Silva</span>. <br/>A Font End Developer <br/> and a dreamer.</h1>
                <div className="social-media"> 
                    <div className="animated-bar">
                        <a className="media-icon" href="https://github.com/apt-webdev" target="_black">
                            <FaGithub/>
                        </a>
                        <a className="media-icon" href="https://www.linkedin.com/in/patriciareiasilva/" target="_black">
                            <FaLinkedinIn/>
                        </a>
                        <a className="media-icon" href="https://www.behance.net/patriciare7ba2" target="_black">
                            <FaBehance/>
                        </a>
                        <a className="media-icon" href="http://www.instagram.com/patriciareiasilva/" target="_black">
                            <FaInstagram/>
                        </a>
                    </div>
                </div>
                <div className="pictures">
                    <img src="./me1.png" alt="me"/>
                </div>
            </div>
        );
    }
}

export default About;