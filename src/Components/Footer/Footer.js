import React from 'react';
import fb from '../../images/fb.287547fb.svg';
import insta from '../../images/insta.08af9746.svg';
import logo from '../../images/logo-white.1434c666.svg';
import tw from '../../images/tw.c76b7a2f.svg';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <ul className="social-link d-flex justify-content-center">
                    <li><img src={fb} alt="" /></li>
                    <li><img src={insta} alt="" /></li>
                    <li><img src={tw} alt="" /></li>
                </ul>

                <div className="link ">
                    <div className="d-flex justify-content-center">
                    <a href="/">about us</a>
                    <a href="/">Privacy policy</a>
                    </div>
                    
                    <a className="text-center d-block" href="/">Term & Conditions</a>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                    <img src={logo} alt="" />
                </div>
                <p className="text-center credit pt-4  mb-0">© 2020 Verv Inc. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;