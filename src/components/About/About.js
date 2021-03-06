import React from 'react';
import './About.scss';
// import { FaGithub, FaCodepen } from 'react-icons/fa';
// import { FaLinkedinIn } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
// import { FaBehance } from 'react-icons/fa';
import SocialMedia from '../SocialMedia/SocialMedia';
import { FaArrowRight } from 'react-icons/fa';


class About extends React.Component {
    render() {
        return (
            <section className="navbar-tab" id="about-me">
                <div className="div-content">
                    <h1 className="intro-text">Hello,<br/> my name is <br/> <span className="name">Patrícia Areias Silva</span>. <br/>A Front End Developer <br/> and a dreamer.</h1>
                </div>
                <SocialMedia />
                
                <div className="div-content pictures">
                    <img src="./pictures/me1.png" alt="me"/>
                </div>
                <div className="div-content text-about-me">
                    <p className="plain-text"> 
                        I am a senior at the Master's degree in network and information systems engineering.
                        <br/><br/>
                        I am very proud of my academic and career paths, though I believe the best is yet to come. 
                        Raising my standards for new challenges, I aspire to grow as a front-end developer while learning more about applying interface designs and new programming technologies to set up web applications on a new level of usability.
                    </p>
                    <p className="plain-text">
                        At my hometown, I am committed to various extracurricular activities and involvement in the community around me. 
                        I am a creative and motivated person, and I have a passion for basketball and soccer, travelling, literature and art.
                    </p>
                    <div className="link-cv">
                        <a href="./docs/patricia-cv.pdf" target="_blank">
                            Resume
                            <span>
                                <FaArrowRight className="icon-resume" />
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;