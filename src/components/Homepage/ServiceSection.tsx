import { Link } from "react-router-dom";
import Service_img from 'assets/images/homepage/service-image.jpg'

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
        image: Service_img,
        title: 'Data Integration',
        text: "Diverse data sources & data types, huge data volumes, complex transformation rules, all handled with ease.",
        link: "#",
    },
    {
        id: 2,
        image: Service_img,
        title: 'Data Integration',
        text: "Diverse data sources & data types, huge data volumes, complex transformation rules, all handled with ease.",
        link: "#",
    },
    {
        id: 3,
        image: Service_img,
        title: 'Data Integration',
        text: "Diverse data sources & data types, huge data volumes, complex transformation rules, all handled with ease.",
        link: "#",
    },
    {
        id: 4,
        image: Service_img,
        title: 'Data Integration',
        text: "Diverse data sources & data types, huge data volumes, complex transformation rules, all handled with ease.",
        link: "#",
    },
    {
        id: 5,
        image: Service_img,
        title: 'Data Integration',
        text: "Diverse data sources & data types, huge data volumes, complex transformation rules, all handled with ease.",
        link: "#",
    },
    {
        id: 6,
        image: Service_img,
        title: 'Data Integration',
        text: "Diverse data sources & data types, huge data volumes, complex transformation rules, all handled with ease.",
        link: "#",
    },
    {
        id: 7,
        image: Service_img,
        title: 'Data Integration',
        text: "Diverse data sources & data types, huge data volumes, complex transformation rules, all handled with ease.",
        link: "#",
    },
    {
        id: 8,
        image: Service_img,
        title: 'Data Integration',
        text: "Diverse data sources & data types, huge data volumes, complex transformation rules, all handled with ease.",
        link: "#",
    },
];

type Props = {};

const ServiceSection = (props: Props) => {
    return (
        <>

            <section className="service-sec">
                <div className="container">
                    <div className="hdng">
                        <h2 className="hdng-h2">Our Services</h2>
                        <h6 className="hdng-h6">Covering Data Integration to Artificial Intelligence</h6>
                    </div>
                    <div className="row">
                        {service.map((services) => (
                            <div className="col-md-3" key={services.id}>
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
                    </div>
                </div>
            </section>

        </>
    );
};

export default ServiceSection;
