import About_Img from 'assets/images/homepage/about-us.jpg'

type Props = {};

const AboutSection = (props: Props) => {
    return (
        <>

            <section className="about-sec">
                <div className="container">
                    <div className="hdng">
                        <h2 className="hdng-h2">About Us</h2>
                        <h6 className="hdng-h6">Our Company’s Overview</h6>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-sec-img">
                                <img src={About_Img} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-sec-txt">
                                <h5>Impact Story</h5>
                                <h4 className="hdng-h4">Detailed information about Jak Technologies, its history, and core values. Profiles of key team members.</h4>
                                <p className="para-18">Describe your company's mission, vision, and values. Highlight your expertise in digital transformation.</p>
                                <ul>
                                    <li>The About Us page of your website is an essential source of information for all who want to know more about your business.</li>
                                    <li>The design, written content, and visual or video elements together tell an important story about who you are and why you do it.</li>
                                    <li>In this article, you’ll learn what makes an exceptional About Us page and find 25 about us page examples of the best ones out there to inspire your own About Us page design and content.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutSection;
