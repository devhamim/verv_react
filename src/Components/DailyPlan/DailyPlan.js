import React from 'react';
import workoutplan2 from '../../images/meal-plan.75b06bd3.png';
import workoutplan1 from '../../images/workout-plan.5f3f76bb.svg';
import './DailyPlan.css';

const DailyPlan = () => {
    return (
        <div className="plan-section">
            <div className="container daily-plan">
            <h3 className="text-center "><b>GET YOUR <br />CUSTOMIZED PROGRAM</b></h3>
                <h4 className="text-center"><b>Daily workout plan</b></h4>

                <div className="d-flex justify-content-center work-out-img">
                <img src={workoutplan1} className="img-fluid w-100" alt="" />
                </div>
                <h4 className="text-center"><b>Meal plan</b></h4>
                <div className="d-flex justify-content-center work-out-img">
                <img src={workoutplan2} className="img-fluid w-100" alt="" />
                </div>

            </div>
        </div>
    );
};

export default DailyPlan;