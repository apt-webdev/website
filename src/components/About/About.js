import React from 'react';
import './About.scss';
// import { FaGithub, FaCodepen } from 'react-icons/fa';
// import { FaLinkedinIn } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
// import { FaBehance } from 'react-icons/fa';
import SocialMedia from '../SocialMedia/SocialMedia';

class About extends React.Component {
    render() {
        return (
            <section className="navbar-tab" id="about-me">
                <div className="div-content">
                    <h1 className="intro-text">Hello,<br/> my name is <br/> <span className="name">Patrícia Areias Silva</span>. <br/>A Front End Developer <br/> and a dreamer.</h1>
                </div>
                <SocialMedia />
                
                <div className="div-content pictures">
                    <img src="./me1.png" alt="me"/>
                </div>
                <div className="div-content text-about-me">
                    <p className="plain-text"> 
                        I am in my senior year of the Master's degree in network and information systems engineering.
                        <br/><br/>
                        I am very proud of my journey, and I believe that the best is yet to come. 
                        My ambitions are to grow as a front-end developer and raise my standards for new challenges; 
                        Learn more about user interface designs and new programming technologies to set up web applications to a new level of usability. 
                    </p>
                    <p className="plain-text">
                        But there is more, I like to be part of the community around me and actively contribute to it.
                        So, I love to connect to people and make new friends. I am also enthusiastic with sports, like basketball and soccer. 
                        Finally, I love to travel, read books, see old films, go out with friends and visit art galleries.
                    </p>
                </div>
            </section>
        );
    }
}

export default About;