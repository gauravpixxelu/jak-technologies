import BarSVG from 'assets/images/homepage/barsvg.png'
import Echo from 'assets/images/homepage/ECHO.png'
type Props = {};



const OurStorySection = (props: Props) => {
    return (
        <>

            <section className="Our-journey-code" id="journey">
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
                                        <li>Initiated a business partnership, establishing a foundation for collaborative ventures.</li>
                                        <li>Launched a specialized BFSI business unit to cater to industry-specific demands.</li>
                                        <li>Dynamically formed and expanded teams, propelling business growth.</li>
                                    </ul>
                                </div>

                                <div className="one-box-sec jorney-3" data-aos="fade-left">
                                    <div className="month-code">
                                        <h4>2023 (Quarter 1)</h4>
                                    </div>
                                    <ul className="listing-journey">
                                        <li>Executed strategic transitions with a commitment to maintaining respect and goodwill.</li>
                                        <li>Successfully concluded our venture through amicable agreements and understanding.</li>
                                        <li>March 13, 2023: JAK Technologies officially formed and registered.</li>
                                    </ul>
                                </div>

                                <div className="one-box-sec jorney-4" data-aos="fade-right">
                                    <div className="month-code">
                                        <h4>2023 (Quarter 2)</h4>
                                    </div>
                                    <ul className="listing-journey">
                                        <li>June 30: Consolidated & rebuild the entire business unit under the umbrella of JAK Technologies.</li>
                                        <li>Made a strategic decision to shift focus towards creation of a data platform & product development.</li>
                                        <li>Onboarded our inaugural customer, ETLife, marking a significant milestone.</li>
                                        <li>Delivered a fully encrypted HR datamart to enhance data security for ETLife.</li>
                                    </ul>
                                </div>

                                <div className="one-box-sec jorney-5" data-aos="fade-left">
                                    <div className="month-code">
                                        <h4>2023 (Quarter 3)</h4>
                                    </div>
                                    <ul className="listing-journey">
                                        <li>Forged a partnership with Orgnomics to develop and support a cutting-edge People Analytics Platform.</li>
                                        <li>November 7: Launched Phase I of Data Blend IQ, a significant achievement in our journey.</li>
                                        <li>Completed five successful deliveries for Edelweiss Tokio Life, showcasing our commitment to excellence.</li>
                                    </ul>
                                </div>

                                <div className="one-box-sec jorney-6" data-aos="fade-right">
                                    <div className="month-code">
                                        <h4>2024 (Quarter 4)</h4>
                                    </div>
                                    <ul className="listing-journey list-close-value">
                                        <li className='cloud-list-close'><img src={Echo} alt="" /> Exco Assistant</li>
                                    </ul>
                                </div>


                                <div className="one-box-sec jorney-7" data-aos="fade-right">
                                    <ul className="listing-journey list-close-value">
                                        <li className='cloud-post-block'>Continuous Innovation is a commitment to ourselves</li>
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