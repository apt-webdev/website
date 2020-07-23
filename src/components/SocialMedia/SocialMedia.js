import React from 'react';
import './SocialMedia.scss';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
// import { FaCodepen } from 'react-icons/fa';


class SocialMedia extends React.Component {
    render() {
        return (
            <div className=" div-content social-media"> 
                <a className="media-icon" href="https://www.linkedin.com/in/patriciareiasilva/" target="_black">
                    <FaLinkedinIn/>
                </a>
                <a className="media-icon" href="https://www.behance.net/patriciare7ba2" target="_black">
                    <FaBehance/>
                </a>
                <a className="media-icon" href="https://github.com/apt-webdev" target="_black">
                    <FaGithub/>
                </a>
                {/* <a className="media-icon" href="https://www.behance.net/patriciare7ba2" target="_black">
                    <FaCodepen/>
                </a> */}
                {/* <a className="media-icon" href="http://www.instagram.com/patriciareiasilva/" target="_black">
                    <FaInstagram/>
                </a> */}
            </div>
        );
    }
}

export default SocialMedia;