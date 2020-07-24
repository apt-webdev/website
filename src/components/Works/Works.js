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
                    <Project name={'Portfolio Site'} image={'./portfolio.png'} desc={'A single-page application using react and npm packages, making an efficient use of react components and bulma templates.'} label1={'react.js'}  label2={'npm'} label3={'netlify'} date={'July 23, 2020'} ibe={'behance'} igit={'github'} behref={'https://www.behance.net/gallery/101210221/patriciareiasilva'} githref={'https://github.com/apt-webdev/website'} />
                    <Project name={'Snake Game'} image={'./snakegame_cut.png'} desc={'A basic retro game with game name and score points display, made with curses library that use the command line as a board.'} label1={'python'}  label2={'curses-gui'} label3={''} date={'June 15, 2020'} igit={'github'} behref={''} githref={'https://github.com/apt-webdev/snakegame'} />
                    <Project name={'Responsive Website'}  image={'./responsiveweb.png'} desc={'A web page with responsive design and some animations on components, with basic examples of flexbox and css grid system.'} label1={'javascript'}  label2={'html'} label3={'css'} date={'June 16, 2020'} igit={'github'} behref={''} githref={'https://github.com/apt-webdev/basicwebsite'} />
                    {/* <Project name={'Timer App'} image={'./pat.png'} desc={''} label1={''}  label2={''} label3={''}  date={'coming soon'} icon={''} behref={''} githref={''} />
                    <Project name={'GraphQL Project'} image={'./pat.png'} desc={''} label1={''}  label2={''} label3={''}  date={'coming soon'} icon={''} behref={''} githref={''}/>
                    <Project name={'Random Quote Machine'} image={'./pat.png'} desc={''} label1={''}  label2={''} label3={''} date={'coming soon'} icon={''} behref={''} githref={''}/>
                   */}
                </div>
            </section>
        );
    }
}

export default Works;