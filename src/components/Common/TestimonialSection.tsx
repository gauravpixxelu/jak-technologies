import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Insurance from 'assets/images/homepage/Insurance.png'
import VPlife from 'assets/images/homepage/VP-life.png'
import founder from 'assets/images/homepage/founder.png'
import Clients from 'assets/images/homepage/clients.jpg'
import Quote from 'assets/icons/homepage/quote.svg'


const testimonials = [
    {
        id: 1,
        title: ' Co-founder Director',
        designation: 'Orgnomics ',
        content: '<p>At Orgnomics, our collaboration with JAK Technologies has been a cornerstone of our success. The teams dedication, expertise, and personalized solutions have not only met our expectations but consistently exceeded them. Their commitment to understanding our unique challenges and delivering innovative, tailored solutions has fostered a partnership that goes beyond the typical client-vendor dynamic.</p>',    
        image: founder,
    },
    {
        id: 2,
        title: 'Head of MIS',
        designation: ' Life Insurance Company',
        content: '<p>What sets JAK Technologies apart is not just their technical proficiency but also the human connection they bring to every interaction. The warmth, professionalism, and collaborative spirit of the JAK team have made them an integral part of our journey. As we express our sincere appreciation for the exceptional service and support, we look forward to the continued growth and success that our partnership promises. </p>',
        image: Insurance,
    },
    {
        id: 3,
        title: 'VP – Strategy & Analytics',
        designation: 'Life Insurance',
        content: '<p>We want to express our heartfelt gratitude for the exceptional partnership we enjoyed with your team. In the complex landscape of data, where the transition from raw information to meaningful insights is often challenging, your company stands out as our beacon of hope.</p>' +
            '<p>JAK Technologies, you are our Mr. Hope in the realm of data transformation. Your unparalleled ability to navigate the intricacies of data and translate them into actionable insights has been transformative for our organization. Not many companies possess the expertise and dedication required to achieve such a feat, and its with immense appreciation that we acknowledge the invaluable role you play in guiding us through this journey.</p>',
        image: VPlife,
    },
   
];


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
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

const TestimonialSection = (props: Props) => {
    return (
        <>
            <section className="testimonial-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hdng" data-aos="fade-up">
                                <h2 className="hdng-h2">Our Happy Clients, Our Best Advocates</h2>
                                <p className="para-16">At JAK Technologies, client happiness is our compass. Each smile represents a story of trust and excellence, turning clients into our most cherished advocates. Join our journey, where satisfaction speaks louder than words.</p>
                                <img src={Clients} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="testimonials" data-aos="fade-up">
                            <img src={Quote} alt="" className="quote"/>
                                <Slider {...settings}>
                                    {testimonials.map((testimonial) => (
                                        <div className="testimonial-box" key={testimonial.id}>
                                            <div className="testimonial-box-data">
                                                <div className="testimonial-box-avtar test-client-img">
                                                    <img src={testimonial.image} alt="" />
                                                </div>
                                                <div className="testimonial-box-avtar test-pergraph">
                                                    <h6>{testimonial.title}</h6>
                                                    <p>{testimonial.designation}</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-box-content">
                                                <p className="para-16" dangerouslySetInnerHTML={{ __html: testimonial.content }}></p>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialSection;
