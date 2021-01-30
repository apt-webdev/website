import React from 'react';
import './SocialMedia.scss';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa';
//import { FaInstagram } from 'react-icons/fa';


class SocialMedia extends React.Component {
    render() {
        return ( 
        <div className = " div-content social-media" >
            <a className = "media-icon"
            rel = "noopener noreferrer"
            href = "https://www.linkedin.com/in/patriciareiasilva/"
            target = "_blank" >
                <FaLinkedinIn / >
            </a> 
            <a className = "media-icon"
            rel = "noopener noreferrer"
            href = "https://www.behance.net/patriciare7ba2"
            target = "_blank" >
                < FaBehance / >
            </a> 
            <a className = "media-icon"
            rel = "noopener noreferrer"
            href = "https://github.com/apt-webdev"
            target = "_blank" >
                < FaGithub / >
            </a>   
            <a className = "media-icon"
            rel = "noopener noreferrer"
            href = "https://codepen.io/patriciareiasilva/pens/showcase"
            target = "_black" >
                < FaCodepen / >
            </a>  {
                /* <a className="media-icon" rel="noopener noreferrer" href="https://codepen.io/patriciareiasilva" target="_black">
                                    <FaInstagram/>
                                </a> */ } 
        </div>
    );

}
}

export default SocialMedia;