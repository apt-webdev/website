import React from 'react';
import './Works.scss';



class Works extends React.Component {
    render() {
        return (
            <div className="navbar-tab" id="my-works">
                <h1 className="title box-text">Works</h1>
                <div className="works-list box-text">
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
            </div>
        );
    }
}

export default Works;