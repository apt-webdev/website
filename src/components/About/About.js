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
                    <h1 className="intro-text">Hello,<br/> my name is <br/> <span className="name">Patrícia Areias Silva</span>. <br/>A Font End Developer <br/> and a dreamer.</h1>
                </div>
                <SocialMedia />
                
                <div className="div-content pictures">
                    <img src="./me1.png" alt="me"/>
                </div>
                <div className="div-content text-about-me">
                    <p className="plain-text"> I'm in my senior year of the science college, styding master's degree in network and information systems engineering.
                        <br/><br/>
                        I take every oportunity that 
                        So I'm very proud of my journey, but I believe that the best is yet to come.
                        So My ambitions are to grown as a front-end developer and raise my standards for new challanges.
                        We need more people helping more people and I do not want to die without someone remenber my name.

                    </p>
                    {/* <p className="plain-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti sequi ad laborum magni illum quidem eos culpa eius impedit. Voluptates obcaecati suscipit sint eum nesciunt officia velit perspiciatis quis?</p> */}
                    <p className="plain-text">I have develop a criative mind and prepare myselt to new chalanges.
                    </p>
                </div>
            </section>
        );
    }
}

export default About;