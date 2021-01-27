import React from 'react';
import './Footer.scss';
import SocialMedia from '../SocialMedia/SocialMedia';

class Footer extends React.Component {
    render() {
        return ( 
        <footer >
            <h5 className = "footer" >
                <p> Designed by patriciareiasilva &copy; {new Date().getFullYear()}</p>
                <div className = "footer-social" >
                    <SocialMedia/>
                </div>
            </h5> 
        </footer>
        // <div className="navbar-tab" id="my-footer">
        // <p className=" footer"> Powered by patriciareiasilva 2020</p>
        // {/* </div> */}
        );
    }
}

export default Footer;