import React from 'react';
import girlImg from '../../images/girl.9aec55f4.svg';
import './ProblemArea.css';

const ProblemArea = () => {
    return (
        <div className="problem-area-section">
            <div className="container problem-area">
                <h3 className="text-center "><b>START TRAINING WITH VERV</b></h3>
                <h4 className="text-center"><b>Choose Your Problem Areas</b></h4>
                <div className="d-flex justify-content-center pb-5">
                <img src={girlImg} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProblemArea;