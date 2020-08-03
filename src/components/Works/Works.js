import React from 'react';
import './Works.scss';
import Project from '../Project/Project';



class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state= {};
    }
    render() {
        return (
            <section className="navbar-tab" id="my-works">
                <div className="div-content">
                    <h1 className="title">Work</h1>
                </div>
                <div className="div-content plain-text">
                    I believe in a combination of humbleness, passion, hard work and fun for a successful path. 
                    <br/>
                    Check out some of my latest projects below.
                </div>
                <div className="div-content works-list plain-text">
                    <Project name={'Portfolio Site'} image={'./pictures/site_0.png'} desc={'A single-page application using react and npm packages, making an efficient use of react components and bulma templates.'} label1={'react.js'}  label2={'npm'} label3={''} date={'July 23, 2020'} ibe={'behance'} igit={'github'} behref={'https://www.behance.net/gallery/101210221/patriciareiasilva'} githref={'https://github.com/apt-webdev/website'} />
                    <Project name={'Snake Game'} image={'./pictures/snake_0.png'} desc={'A basic retro game with game name and score points display, made with curses library that use the command line as a board.'} label1={'python'}  label2={'curses-gui'} label3={''} date={'June 15, 2020'} igit={'github'} behref={''} githref={'https://github.com/apt-webdev/snakegame'} />
                    <Project name={'Responsive Website'}  image={'./pictures/responsive_0.png'} desc={'A web page with responsive design and some animations on components, with basic examples of flexbox and css grid system.'} label1={'javascript'}  label2={'html'} label3={'css'} date={'June 16, 2020'}  igit={'github'} behref={''} githref={'https://github.com/apt-webdev/basicwebsite'} />
                    <Project name={'Random Quote API'} image={'./pictures/quote.png'} desc={'An application that arbitrarily displays a quote, a full-stack API with back-end and front-end integration using React and Express.'} label1={'react.js'}  label2={'express.js'} label3={''} date={'coming soon'} icon={''} behref={''} githref={''}/>
                    <Project name={'Thesis Project'} image={'./pictures/toolkit.png'} desc={'A Python toolkit that evaluates the usability of mobile applications. The goal is through click logs of users, evaluate its use over a specific period, to identify weak points that can be indicators of usability errors.'} label1={'python'}  label2={'tkinter'} label3={''}  date={'coming soon'} icon={''} behref={''} githref={''}/>
                    {/* <Project name={'Timer App'} image={'./pictures/site_0.png'} desc={'A web page with responsive design and some animations on components, with basic examples of flexbox and css grid system.'} label1={'react.js'}  label2={'server'} label3={''}  date={'coming soon'} ibe={''} igit={'github'} behref={''} githref={'https://github.com/apt-webdev/timer'} /> */}
                  
                </div>
            </section>
        );
    }
}

export default Works;