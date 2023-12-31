import { Link } from "react-router-dom";
import Service_1 from 'assets/images/services/service-1.png'
import Service_2 from 'assets/images/services/service-2.png'
import Service_3 from 'assets/images/services/service-3.png'
import Service_4 from 'assets/images/services/service-4.png'
import Service_5 from 'assets/images/services/service-5.png'
import Service_6 from 'assets/images/services/service-6.png'
import Service_7 from 'assets/images/services/service-7.png'
import Service_8 from 'assets/images/services/service-8.png'
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
        image: Service_1,
        title: 'Data Integration',
        text: "Streamline your business processes by seamlessly combining data from diverse sources. Our robust data integration solutions ensure real-time access and synchronization, fostering...",
        link: "/coming-soon",
    },
    {
        id: 2,
        image: Service_2,
        title: 'Data Quality',
        text: "Elevate the reliability of your data with our comprehensive data quality services. From data profiling and cleansing to validation and enrichment, we meticulously enhance the accuracy and consistency...",
        link: "/coming-soon",
    },
    {
        id: 3,
        image: Service_3,
        title: 'Data Governance & MDM',
        text: "Establish control and maximize the value of your data assets through our Data Governance and Master Data Management (MDM) services. Implement policies, processes, and technologies...",
        link: "/coming-soon",
    },
    {
        id: 4,
        image: Service_4,
        title: 'Data Science',
        text: "Uncover actionable insights and patterns hidden within your data with our cutting-edge Data Science solutions. Leveraging advanced analytics, machine learning, and predictive modeling, we help...",
        link: "/coming-soon",
    },
    {
        id: 5,
        image: Service_5,
        title: 'Real-Time Analytics',
        text: "Harness the power of instant insights with our Real-Time Analytics services. From monitoring key metrics to detecting emerging trends in real-time, we empower your organization to make swift...",
        link: "/coming-soon",
    },
    {
        id: 6,
        image: Service_6,
        title: 'Mobile & Cloud BI',
        text: "Access critical business intelligence on-the-go and from anywhere with our Mobile & Cloud BI solutions. We ensure seamless integration and secure access to your data, enabling you to stay...",
        link: "/coming-soon",
    },
    {
        id: 7,
        image: Service_7,
        title: 'Executive Dashboards',
        text: "Elevate your decision-making with visually compelling Executive Dashboards. Our customized dashboards provide a consolidated and real-time view of key performance indicators...",
        link: "/coming-soon",
    },
    {
        id: 8,
        image: Service_8,
        title: 'Support',
        text: "Ensure the continuous efficiency of your data infrastructure with our comprehensive support services. From troubleshooting and maintenance to user training, our dedicated support team...",
        link: "/coming-soon",
    },
];

type Props = {};

const ServiceSection = (props: Props) => {
    return (
        <>

            <section className="service-sec" id="service">
                <div className="container">
                    <div className="hdng" data-aos="fade-up">
                        <h2 className="hdng-h2">Our Services</h2>
                        <h6 className="hdng-h6">Driven by Passion, Enhanced by Knowledge, Empowered by Technology’</h6>
                    </div>
                    <div className="row" data-aos="fade-up">
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
