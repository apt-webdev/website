import React from 'react';
import './Skills.scss';




class Skills extends React.Component {
    render() {
        return (
            <div className="navbar-tab" id="my-skills">
                <h1 className="title box-text">Skills</h1>
                <ul className="skills box-text">
                    <li>
                        JavaScript
                    </li>
                    <li>
                        HTML and CSS
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Vue.js
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Bulma and Bootstrap
                    </li>
                    <li>
                        Git
                    </li>
                    <li>
                        PHP and SQLite3
                    </li>
                </ul>

            </div>
        );
    }
}

export default Skills;