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
                    <div className="div-content">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio aliquam error, est odio numquam modi officiis tempora molestias nesciunt! Corrupti consequatur laborum velit vitae adipisci quod nemo maxime autem quam!

                    </div>

                    <ul className="skills">
                        <li>
                            JavaScript
                        </li>
                        <li>
                            HTML5 and CSS
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

            </section>
        );
    }
}

export default Skills;