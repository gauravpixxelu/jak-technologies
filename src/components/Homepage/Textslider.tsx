import React, { useState, useEffect } from 'react';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const settings = {
    arrows: false,
    dots: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
};



const Textslider = () => {
    return (
        <>

            {/* <div className="banner-data-footer " data-aos="fade-up">
                <div className='container'>
                    <h1 className="hdng-h1">
                        <Slider {...settings}>
                            <div>Streamln</div>
                            <div>Unclutter</div>
                            <div>Easified</div>
                            <div>Clarify</div>
                            <div>Trimify</div>
                            <div>LightenUp</div>
                            <div>Untangle</div>
                            <div>Decipher</div>
                            <div>Smoothify</div>
                            <div>Facilify</div>
                        </Slider>
                        <h2>Your Data & Digital Transformation Journey with JAK Technologies</h2>
                    </h1>
                </div>
            </div> */}

            <div className="banner-data-footer " data-aos="fade-up">
                <div className='container'>

                    <h1 className="hdng-h1">
                        <div className='row'>
                            <div className='col-md-4'>
                                <Slider {...settings}>
                                    <div>Streamln</div>
                                    <div>Unclutter</div>
                                    <div>Easified</div>
                                    <div>Clarify</div>
                                    <div>Trimify</div>
                                    <div>LightenUp</div>
                                    <div>Untangle</div>
                                    <div>Decipher</div>
                                    <div>Smoothify</div>
                                    <div>Facilify</div>
                                </Slider>
                            </div>
                            <div className='col-md-8'>
                                <h2>Your Data & Digital Transformation Journey with JAK Technologies</h2>
                            </div>
                        </div>
                    </h1>
                </div>
            </div>


        </>
    );
};

export default Textslider;
