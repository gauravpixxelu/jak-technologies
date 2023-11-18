import { Link } from "react-router-dom";
import Image1 from 'assets/images/homepage/logo-client-1.png';
import Image2 from 'assets/images/homepage/logo-client-2.png';
import Image3 from 'assets/images/homepage/logo-client-3.png';
import Image4 from 'assets/images/homepage/logo-client-4.png';
import Image5 from 'assets/images/homepage/logo-client-5.png';


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
    return (
        <>

            <section className="banner">
                <div className="container">
                    <div className="banner-data" data-aos="fade-up">
                        <h1 className="hdng-h1">Simplify Your Data & Digital Transformation Journey with JAK Technologies</h1>
                        <p>Engaging visuals & infographics that represent the essence of Data & Digital Transformation Simplified.</p>
                        <Link className="custom-btn" to="mailto:support@jaktech.in"><span>Get in Touch</span></Link>
                    </div>
                    <div className="logos-clients" >
                        <div className="Featured-in-code" data-aos="fade-right">
                            <h4>Featured in</h4>
                        </div>
                        {clients.map((client) => (
                            <div className="images-featured" key={client.id} data-aos="fade-left">
                                <img src={client.image} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default BannerSection;
