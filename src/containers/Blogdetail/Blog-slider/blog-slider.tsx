import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Blog_1 from 'assets/images/homepage/Revolutioniz.jpg'
import Blog_2 from 'assets/images/homepage/Is-Generative.jpg'
import Blog_3 from 'assets/images/homepage/Data-Platforms.jpg'
import Blog_4 from 'assets/images/homepage/Unleashing.jpg'
interface CustomFeatureDto {
    id: number;
    text: string;
    image: string;
    title: string;
    link: string;
}

const service: CustomFeatureDto[] = [
    {
        id: 1,
        image: Blog_2,
        title: "Is Generative AI Good or Bad for the future?",
        text: "Step into the fascinating world of Artificial Intelligence, where machines possess the power to create and innovate like never before. One particular branch of AI is capturing the attention and imagination of technologists, scientists, and enthusiasts alike.....",
        link: "/Generative-AI-Good-or-Bad",
    },
    {
        id: 2,
        image: Blog_1,
        title: "The Role of Generative AI in Shaping the Future",
        text: "In the dynamic realm of technology, the marriage of Generative AI and Insurtech is proving to be a game-changer. At JAK Technologies, we're at the forefront of this transformative intersection, harnessing the power of Generative AI to redefine the landscape....",
        link: "/role-of-generative-AI",
    },
    {
        id: 3,
        image: Blog_4,
        title: "Teaching Language Models Algorithmic Thinking",
        text: "In the ever-evolving landscape of artificial intelligence, the quest to enhance language models reaches new heights. At JAK Technologies, we are committed to pushing the boundaries of what language models can achieve. Today, we delve into a fascinating realm....",
        link: "/teaching-language-models",
    },
    {
        id: 4,
        image: Blog_3,
        title: "Generative AI and Data Platforms with JAK Technologies",
        text: "In the ever-evolving landscape of Insurtech, JAK Technologies stands at the forefront, driving innovation through the convergence of Generative AI and cutting-edge Data Platforms. Our commitment to reshaping the future of insurance is reflected in our....",
        link: "/Generative",
    },
];


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1
            }
        }
    ],
};

type Props = {};

const blogdetailslider = (props: Props) => {
    return (
        <>

            <section className="service-slider">
                <div className="container" data-aos="fade-up">
                    <div className="hdng">
                        <h2 className="hdng-h2">Explore our other services</h2>
                    </div>
                    <div className="row">
                    <Slider {...settings}>
                        {service.map((services) => (
                            <div className="slider-services" key={services.id}>
                                <div className="service-box">
                                    <img src={services.image} alt="" />
                                    <div className="service-box-txt">
                                        <h4>{services.title}</h4>
                                        <p>{services.text}</p>
                                        <Link to={services.link}>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </Slider>
                    </div>
                </div>
            </section>

        </>
    );
};

export default blogdetailslider;
