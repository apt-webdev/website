import React from 'react';
import './Works.scss';



class Works extends React.Component {
    render() {
        return (
            <section className="navbar-tab" id="my-works">
                <div className="div-content">
                    <h1 className="title">Work</h1>
                </div>
                <div className="div-content plain-text">
                    Go check some of my recent projects. 
                </div>
                <div className="div-content works-list plain-text">
                    <div className="work-item plain-text ">
                        <h4>title</h4>
                        <p>description</p>
                        <p>js</p>
                        <p>css</p>
                        <a href="">link to the project</a>
                    </div>
                    <div className="work-item plain-text">
                        <h4>title</h4>
                        <p>description</p>
                        <p>js</p>
                        <p>css</p>
                        <a href="">link to the project</a>
                    </div>
                    <div className="work-item plain-text">
                        <h4>title</h4>
                        <p>description</p>
                        <p>js</p>
                        <p>css</p>
                        <a href="">link to the project</a>
                    </div>
                    <div className="work-item plain-text">
                        <h4>title</h4>
                        <p>description</p>
                        <p>js</p>
                        <p>css</p>
                        <a href="">link to the project</a>
                    </div>
                l</div>
            </section>
        );
    }
}

export default Works;