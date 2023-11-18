import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Avtar from 'assets/images/homepage/avtar.png'
import Clients from 'assets/images/homepage/clients.jpg'
import Quote from 'assets/icons/homepage/quote.svg'


const testimonials = [
    {
        id: 1,
        title: 'Alex Parkinson',
        designation: 'Chief Operating Officer',
        content: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>' +
            '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>',
        image: Avtar,
    },
    {
        id: 2,
        title: 'Alex Parkinson',
        designation: 'Chief Operating Officer',
        content: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>' +
            '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>',
        image: Avtar,
    },
    {
        id: 3,
        title: 'Alex Parkinson',
        designation: 'Chief Operating Officer',
        content: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>' +
            '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>',
        image: Avtar,
    },
    {
        id: 4,
        title: 'Alex Parkinson',
        designation: 'Chief Operating Officer',
        content: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>' +
            '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>',
        image: Avtar,
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
                                <h2 className="hdng-h2">Our Happy Clients</h2>
                                <p className="para-16">A happy customer is a repeat customer. To keep customers, businesses and enterprises are trying everything from operating social networking sites to running daily promotions.</p>
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
                                                <div className="testimonial-box-avtar">
                                                    <img src={testimonial.image} alt="" />
                                                </div>
                                                <div className="testimonial-box-avtar">
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
