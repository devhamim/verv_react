import React from 'react';
import bodyImg1 from '../../images/logo.6b82fa76.svg';
import reviewer1 from '../../images/review-1.3b1dfeb2.png';
import reviewer2 from '../../images/review-2.7987f5c0.png';
import reviewer3 from '../../images/review-3.dc6cc28e.png';
import './Community.css';


const Community = () => {
    return (
        <div className="community-section">
            <div className="container">
            <h3 className="text-center community-title"><b>Join our worldwide community<br />and do your best with VERV</b></h3>

            <div className="d-flex align-items-center justify-content-center">
                    <img className="community-img" src={bodyImg1} alt="" />
                    <p className="community-text m-4"><i className="fab fa-apple"></i> App Store Reviews <br />
                    <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span> 22K Ratings</p>

                </div>

                <div className="row review-section">
                    <div className="col-12 col-md-6 mx-auto">
                    <div class="review-card card mb-3 ">
                        <div class="row g-0 d-flex align-items-center">
                            <div class="col-4 ">
                            <div className="m-3">
                            <div className="mx-auto">
                            <img src={reviewer1} class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <p className="text-center"><small ><i>_16_ana^_^</i></small></p>
                            </div>
                            
                            </div>
                            <div class="col-8">
                            <div class="card-body">
                        
                                
                                <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                                <p class="card-text">Great app for home motivation to workout! Really love the app and the fact that it allows you and recommends to also connect built in music playlists!</p>
                                
                            </div>
                            </div>
                        </div>
                        </div>

                        <div class="review-card card mb-3 ">
                        <div class="row g-0 d-flex align-items-center">
                            <div class="col-4 ">
                            <div className="m-3">
                            <img src={reviewer2} class="img-fluid rounded-start" alt="..."/>
                            <p className="text-center"><small ><i>Just Matt</i></small></p>
                            </div>
                            
                            </div>
                            <div class="col-8">
                            <div class="card-body">
                        
                                
                                <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                                <p class="card-text">I love 5 mins workouts I can sneak between my busy schedule. Price is great too compared to other apps I have tried. Love this app and I recommend this to everyone.</p>
                                
                            </div>
                            </div>
                        </div>
                        </div>

                        <div class="review-card card mb-3 ">
                        <div class="row g-0 d-flex align-items-center">
                            <div class="col-4 ">
                            <div className="m-3">
                            <img src={reviewer3} class="img-fluid rounded-start" alt="..."/>
                            <p className="text-center"><small ><i>nakeyya</i></small></p>
                            </div>
                            
                            </div>
                            <div class="col-8">
                            <div class="card-body">
                        
                                
                                <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                                <p class="card-text">Go by what works for you and shapes and sizes and performances levels through your own desire.</p>
                                
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;