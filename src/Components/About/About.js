import React from "react";
import achievement1 from "../../images/achievement-img-1.93fba96d.svg";
import achievement2 from "../../images/achievement-img-2.254599b8.svg";
import achievement3 from "../../images/achievement-img-3.f742af4e.svg";
import './About.css';
const About = () => {
  return (
    <div>
      <div className="container">
        <h3 className="text-center my-5">
          <b>WHY WE ARE THE BEST?</b>
        </h3>
        <div className="d-flex justify-content-center mb-4">
          <img src={achievement1} alt="" />

        </div>
        <div>
            <h4 className="text-center"><b>Active Users</b></h4>
            <p className="text-center about-text">Join our worldwide community and do your <br /> best with VERV</p>
        </div>

        <div className="d-flex justify-content-center mb-4">
          <img src={achievement2} alt="" />

        </div>
        <div>
            <h4 className="text-center"><b>Fitness Workouts</b></h4>
            <p className="text-center about-text">Enjoy full flexibility with personalized workouts <br /> tailored to your fitness goals</p>
        </div>

        <div className="d-flex justify-content-center mb-4">
          <img src={achievement3} alt="" />

        </div>
        <div>
            <h4 className="text-center"><b>Success Tracking</b></h4>
            <p className="text-center about-text">Keep an eye on activity results in your fitness <br /> profile and stay motivated all the time</p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
