import React from 'react';
import './Skills.scss';




class Skills extends React.Component {
    render() {
        return (
            <section className="navbar-tab" id="my-skills">
                <div className="div-content">
                    <h1 className="title ">Skills</h1>
                </div>
                <div className="div-content">
                    <div className="plain-text">
                        During my academic path, I have gained a solid understanding of computer science, with a scientific and practical approach to computation and its applications. 
                        <br/>
                        Recently, I have been dedicating my free time to the web development area. 
                        <br/>
                        Some of the skills I master are listed below:
                    </div>

                    <ul className="skills plain-text">
                        <li>
                            JavaScript
                        </li>
                        <li>
                            HTML5 and SASS
                        </li>
                        <li>
                            React.js
                        </li>
                        <li>
                            Vue.js
                        </li>
                        <li>
                            Node.js and Express.js
                        </li>
                        <li>
                            Bulma and Bootstrap
                        </li>
                        <li>
                            Git
                        </li>
                        <li>
                            GraphQL and PHP
                        </li>
                        <li>
                            Python and SQLite3
                        </li>
                    </ul>
                </div>

            </section>
        );
    }
}

export default Skills;