import React from "react";
import resultbg from '../../images/result-bg.1b466339.jpg';
import './Result.css';

const Result = () => {
  return (
    <div>
      <div className="result-area">
        <h3 className="text-center ">
          <b>EXCITE THE RESULT</b>
        </h3>
        
          <img src={resultbg} className="img-fluid w-100" alt="" />
       
      </div>
    </div>
  );
};

export default Result;
