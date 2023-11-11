import { Link } from "react-router-dom";

type Props = {};

const BannerSection = (props: Props) => {
    return (
        <>

            <section className="banner">
                <div className="container">
                    <div className="banner-data">
                        <h1 className="hdng-h1">Simplify Your Digital Transformation Journey with <span>Jak Technologies</span></h1>
                        <p>Engaging visuals or infographics that represent the essence of Digital Transformation Simplified.</p>
                        <Link className="custom-btn" to="#"><span>Get in Touch</span></Link>
                    </div>
                </div>
            </section>

        </>
    );
};

export default BannerSection;
