import BarSVG from 'assets/images/homepage/barsvg.svg'

type Props = {};



const OurStorySection = (props: Props) => {
    return (
        <>

            <section className="Our-journey-code">
                <div className="techno">
                    <div className="container">
                        <div className="hdng" data-aos="fade-up">
                            <h2 className="hdng-h2">Our Journey</h2>
                        </div>
                        <div className="bar-journey">
                            <img src={BarSVG} alt="" />

                            <div className="all-simple-box-class">

                            <div className="one-box-sec jorney-1" data-aos="fade-left">
                                <div className="month-code">
                                    <h4>2019</h4>
                                </div>
                                <ul className="listing-journey">
                                    <li>Product Ideation</li>
                                </ul>
                            </div>

                            <div className="one-box-sec jorney-2" data-aos="fade-right">
                                <div className="month-code">
                                    <h4>2020</h4>
                                </div>
                                <ul className="listing-journey">
                                    <li>Went into a business partnership</li>
                                    <li>Started BFSI specific business unit</li>
                                    <li>Team Formation & Business Growth</li>
                                </ul>
                            </div>

                            <div className="one-box-sec jorney-3" data-aos="fade-left">
                                <div className="month-code">
                                    <h4>2023 (Quarter 1)</h4>
                                </div>
                                <ul className="listing-journey">
                                    <li>Based on evolving business strategies and without diminishing the respect and goodwill established during our time together</li>
                                    <li>Amicably concluded our venture</li>
                                </ul>
                            </div>

                            <div className="one-box-sec jorney-4" data-aos="fade-right">
                                <div className="month-code">
                                    <h4>2023 (Q2)</h4>
                                </div>
                                <ul className="listing-journey">
                                    <li>3th March 2023 JAK Technologies was formed & registered</li>
                                    <li>30th June the entire business unit regrouped under JAK Technologies</li>
                                    <li>Strategic decision to focus on products</li>
                                    <li>ETLife our 1st Customer was onboarded</li>
                                </ul>
                            </div>

                            <div className="one-box-sec jorney-5" data-aos="fade-left">
                                <div className="month-code">
                                    <h4>2023 (Q3)</h4>
                                </div>
                                <ul className="listing-journey">
                                    <li>Fully encrypted HR datamart delivered to ETLife</li>
                                    <li>Partnership with Orgnomics to develop and support People Analytics Platform</li>
                                    <li>7th November - Phase I of Data Blend IQ Launched</li>
                                    <li>5 deliveries completed for Edelweiss Tokio life</li>
                                </ul>
                            </div>

                            <div className="one-box-sec jorney-6" data-aos="fade-right">
                                <div className="month-code">
                                    <h4>2024 (Q4)</h4>
                                </div>
                                <ul className="listing-journey">
                                    <li>Exco Assistant</li>
                                </ul>
                            </div>

                        </div>
                        </div>

                        
                    </div>
                </div>
            </section>

        </>

    );
};

export default OurStorySection;