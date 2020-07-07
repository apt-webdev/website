import React from 'react';
import './Navbar.scss';
// import { render } from '@testing-library/react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this. state= {
            // comment
            name: '', 
            greeting: `good ${this.props.time}`
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    dropdownContent(params) {
        alert("click burger!!");
        
    }


    render() {
        return (
            <div className="" id="navbar-component">
                <nav className='navbar is-transparent is-fixed-top' role='navigation' aria-label='main navigation'>
                    <div className='navbar-brand'>
                        <p className="brand-name">patriciareiasilva.</p>
                        <a
                            role='button'
                            className={'navbar-burger burger'}
                            aria-label='menu'
                            aria-expanded='false'
                            data-target='navbarBasicExample'
                            onClick={this.dropdownContent}
                        >
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                        </a>
                    </div>
                    <div id='navbarBasicExample' className='navbar-menu'>
                        <div className='navbar-end'>
                            <div className='navbar-item'>
                                <a href='#about-me' className='item navbar-item'>
                                    About
                                </a>
                                <a href='#my-skills' className='item navbar-item'>
                                    Skills
                                </a>
                                <a href='#my-works' className='item navbar-item'>
                                    Works
                                </a>
                                <a href='#my-collabs' className='item navbar-item'>
                                    Collabs
                                </a>
                                <a href='#my-contact' className='item navbar-item'>
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>



                {/* <h2>I am a Car!</h2>
                <section className="section">
                    <label className="label">Name:</label>
                    <input className="input" name="name" placeholder="Enter your name..." onChange={this.onChange} />
                </section>
                <section className="section">
                    <p>{this.state.greeting} {this.state.name}</p>
                </section> */}

              
            </div>
        );
    }
}

export default Navbar;
// ReactDOM.render(<Greeting time="morning" />, document.getElementById('app'));