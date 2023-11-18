import ServiceBanner from 'assets/images/services/services-banners/service-banner1.jpg';

type Props = {};

const BannerSection = (props: Props) => {
    return (
        <>

            <section className="services-banner">
                <div className="services-banner-img">
                    <img src={ServiceBanner} alt="Service1" />
                </div>
                <div className="container">
                    <div className="services-banner-data" data-aos="fade-up">
                        <h2 className="hdng-h2">Data Integration</h2>
                        <p>Data Integration is the backbone of a connected and efficient enterprise. Our services seamlessly unify data from diverse sources, including databases, applications, and cloud platforms. We design and implement robust integration solutions that ensure real-time data access, synchronization, and consistency. This results in improved operational efficiency, streamlined processes, and a holistic view of your business data. From legacy systems to modern applications, our Data Integration services enable you to break down data silos and harness the full potential of your information ecosystem.</p>
                    </div>
                </div>
            </section>

        </>
    );
};

export default BannerSection;
