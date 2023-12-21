import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image1 from 'assets/images/homepage/logo-client-1.png';
import Image2 from 'assets/images/homepage/logo-client-2.png';
import Image3 from 'assets/images/homepage/logo-client-3.png';
import Image4 from 'assets/images/homepage/logo-client-4.png';
import Image5 from 'assets/images/homepage/logo-client-5.png';

import PopupForm from '../Common/PopupForm';
import { useState } from 'react';
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

interface CustomFeatureDto {
    id: number;
    image: string;
}

const clients: CustomFeatureDto[] = [
    {
        id: 1,
        image: Image1,
    },
    {
        id: 2,
        image: Image2,
    },
    {
        id: 3,
        image: Image3,
    },
    {
        id: 4,
        image: Image4,
    },
    {
        id: 5,
        image: Image5,
    },
];

type Props = {};

const BannerSection = (props: Props) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };
    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="banner-data" data-aos="fade-up">
                        <h1 className="hdng-h1">
                            Simplify Your Data & Digital Transformation Journey with JAK Technologies</h1>
                        <p>Engaging visuals & infographics that represent the essence of Data & Digital Transformation Simplified.</p>
                        <button className="custom-btn" onClick={openPopup}><span>Get in Touch</span></button>
                        <PopupForm isOpen={isPopupOpen} onRequestClose={closePopup} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerSection;
