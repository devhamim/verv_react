import React from 'react';
import bodyImg2 from '../../images/app-of-the-day.9d852b46.png';
import appleStorelogo from '../../images/app-store.5ac532ec.png';
import hederBody from '../../images/fat.png';
import headerLogo from '../../images/logo-full.d00d2c84 (1).svg';
import bodyImg1 from '../../images/verv-logo.5ba42acb.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header-logo d-flex justify-content-center my-3">
                <img src={headerLogo} alt="" />
            </div>
            <div className="header-body">
                <div className="top-header">
                <div className="d-flex align-items-center justify-content-center">
                    <img className="verv-img" src={bodyImg1} alt="" />
                    <p className="verv-text m-4"><b>Personalize Workout <br /> Program with VERV</b></p>

                </div>
                <p className="text-center verv-title">Lose weight and strengthen your body</p>
                
                <div className="d-flex justify-content-center">
                <img className="apple-store-img" src={bodyImg2} alt="" />
                </div>

                </div>
                
                
                <div className="image-container">
                <div className="">
                <img className="img-fluid w-100" src={hederBody} alt="" />
               
                </div>
                <img className="apple-store-logo img-fluid" src={appleStorelogo} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Header;