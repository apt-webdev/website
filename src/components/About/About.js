import React from 'react';
import { FaGithub, FaCodepen } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import './About.scss';
class About extends React.Component {
    render() {
        return (
            <div className="navbar-tab" id="about-me">
                <h1 className="about-text box-text">Hello,<br/> my name is <br/> <span className="name">Patrícia Areias Silva</span>. <br/>A Font End Developer <br/> and a dreamer.</h1>
                <div className="social-media"> 
                    {/* <div className="animated-bar"> */}
                        <a className="media-icon" href="https://www.linkedin.com/in/patriciareiasilva/" target="_black">
                            <FaLinkedinIn/>
                        </a>
                        <a className="media-icon" href="https://www.behance.net/patriciare7ba2" target="_black">
                            <FaBehance/>
                        </a>
                        <a className="media-icon" href="https://github.com/apt-webdev" target="_black">
                            <FaGithub/>
                        </a>
                        <a className="media-icon" href="https://www.behance.net/patriciare7ba2" target="_black">
                            <FaCodepen/>
                        </a>
                        {/* <a className="media-icon" href="http://www.instagram.com/patriciareiasilva/" target="_black">
                            <FaInstagram/>
                        </a> */}
                    {/* </div> */}
                </div>
                <div className="pictures">
                    <img src="./me1.png" alt="me"/>
                </div>
                <div>
                    <p className="plain-text"> I'm in my senior year of the science college, styding Master's Degree in Network and Information Systems Engineering.
                        <br/>

                        So I'm very proud of my (not perfect) journey, but I believe that the best is yet to come.
                        So my ambitions are to build the best way frameworks that help people in their lives. 
                        We need more people helping more people and I do not want to die without someone remenber my name.

                    </p>
                    <p className="plain-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti sequi ad laborum magni illum quidem eos culpa eius impedit. Voluptates obcaecati suscipit sint eum nesciunt officia velit perspiciatis quis?</p>
                    <p className="plain-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse maiores quae odit velit, laudantium quas tenetur neque doloribus beatae delectus animi repudiandae et, porro laboriosam eius vero iste facilis eveniet?</p>
                </div>
            </div>
        );
    }
}

export default About;