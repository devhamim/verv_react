import React from "react";
import logo from "../../images/logo.6b82fa76.svg";
import "./InstallSection.css";

const InstallSection = () => {
  return (
    <div className="install-section fixed-bottom">
      <div className="container">
        <div className="py-4 d-flex justify-content-between">
          <div className=" d-flex align-items-center">
            <img className="sticky-img" src={logo} alt="" />
            <div className="ms-3">
              <p className="mb-0 sticky-text">
                <b>Verv: Body & Mind Health</b>
              </p>
              <span>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
            </div>
          </div>

          <div className="d-flex align-items-center">
          <button className="install-btn">Install Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallSection;
