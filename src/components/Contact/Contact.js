import React from 'react';
import './Contact.scss';
import { FaMailBulk, FaMailchimp, FaLocationArrow, FaEnvelope, FaMapPin, FaMapMarkedAlt, FaUniversity } from 'react-icons/fa';


class Contact extends React.Component {
    render() {
        return (
            <section className="navbar-tab" id="my-contact">
                <div className="div-content">
                    <h2 className="title">Contact Me</h2>
                </div>
                <div className="div-content">
                    <p className="plain-text">
                        Let's build something together.<br/>
                        Feel free to get in touch if you want to know more about my path, or just want to connect.<br/> 
                    </p>
                </div>
                <div className="contacts">

                    <div className="contact-item">
                        <FaEnvelope className="icon-item"/>
                        <a href="mailto:patriciareiasilva@gmail.com">
                        <p className="plain-text">patriciareiasilva@gmail.com</p> 
                        </a>
                    </div >
                    <div  className="contact-item">
                        <FaUniversity className="icon-item"/> 
                        <p className="plain-text "> University of Porto</p>
                    </div>
                    <div  className="contact-item">
                        <FaMapPin className="icon-item"/> 
                        <p className="plain-text ">Porto, Portugal</p>

                    </div>
                </div>

            </section>
        );
    }
}

export default Contact;