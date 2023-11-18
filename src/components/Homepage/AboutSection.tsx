import About_Img from 'assets/images/homepage/about-us.jpg'

type Props = {};

const AboutSection = (props: Props) => {
    return (
        <>

            <section className="about-sec">
                <div className="inner-section">
                <div className="container">
                    <div className="row"  data-aos="fade-up">
                        <div className="col-md-6">
                            <div className="about-sec-img">
                                <img src={About_Img} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-sec-txt">
                                <div className="hdng">
                                    <h2 className="hdng-h2">About Us</h2>
                                    <h6 className="hdng-h6">Our Company’s Overview</h6>
                                </div>
                                <p><strong>JAK Technologies</strong> is a Product Engineering & Technology Services Company, with a team of Techno-Functional SME’s having deep passion, expertise and proven track record in Data Management, Data Visualization, Analytics, Robotic Process Automation, Web & Mobility technologies.</p>
                                <p>JAKTech strives to democratize data management by providing user-friendly, cost-effective solutions for collection, purification, visualization, and analysis. Our aim is to empower everyday users with efficient, revenue-generating results, benefiting both users and investors alike.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutSection;
