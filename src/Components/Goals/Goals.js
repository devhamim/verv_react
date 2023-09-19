import React from 'react';
import appStore from '../../images/appstore.d591cb8f.svg';
import logoImg from '../../images/logo.6b82fa76.svg';
import './Goals.css';

const Goals = () => {
    return (
        <div className="goal-section">
            <div className="container">
                <div className="d-flex justify-content-center">
                <img className="mt-5 goal-logo" src={logoImg} alt="" />
                </div>

                <div className="text-center">
                    <h3 className="mt-4">Verv is here to help you <br />reach your goals</h3>

                    <p className="mt-4 w-75 mx-auto">Work out, improve your mind and body health, boost productivity, keep up with the latest trends and much more with just one app</p>
                </div>

                <div className="d-flex justify-content-center my-5">
                <img className="img-fluid" src={appStore} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Goals;