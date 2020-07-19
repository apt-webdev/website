import React from 'react';
import './Works.scss';



class Works extends React.Component {
    render() {
        return (
            <section className="navbar-tab" id="my-works">
                <div className="div-content">
                    <h1 className="title">Works</h1>
                </div>
                <div className="div-content works-list">
                    <div className="div-content">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio aliquam error, est odio numquam modi officiis tempora molestias nesciunt! Corrupti consequatur laborum velit vitae adipisci quod nemo maxime autem quam!

                    </div>
                    <div className="work-item">
                        <h4>title</h4>
                        <p>description</p>
                        <p>js</p>
                        <p>css</p>
                        <a href="">link to the project</a>
                    </div>
                    <div className="work-item">
                        <h4>title</h4>
                        <p>description</p>
                        <p>js</p>
                        <p>css</p>
                        <a href="">link to the project</a>
                    </div>
                    <div className="work-item">
                        <h4>title</h4>
                        <p>description</p>
                        <p>js</p>
                        <p>css</p>
                        <a href="">link to the project</a>
                    </div>
                    <div className="work-item">
                        <h4>title</h4>
                        <p>description</p>
                        <p>js</p>
                        <p>css</p>
                        <a href="">link to the project</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Works;