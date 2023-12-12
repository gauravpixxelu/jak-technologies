import { Link } from "react-router-dom";
import Our_1 from 'assets/images/homepage/our-1.png';
import Our_2 from 'assets/images/homepage/our-2.png';
import Our_3 from 'assets/images/homepage/our-3.png';
import Our_4 from 'assets/images/homepage/our-4.png';
import Loop from 'assets/images/homepage/loop.png';


const product = [
    {
        id: 1,
        image: Our_1,
        title: "Data Catalog",
        text: "Is our inhouse tool and methodology to discover the user data schema and predict our end-to-end data journey with KPI usage of the data set",
        link: "/comming-soon",
    },
    {
        id: 2,
        image: Our_2,
        title: "Integrify",
        text: "Empower your organization with the data confidence needed to drive strategic initiatives, reduce errors, and enhance overall operational efficiency.",
        link: "/comming-soon",
    },
    {
        id: 3,
        image: Our_3,
        title: "Intelli Dash Pro",
        text: "Where Data Comes to Life 📊 Unleash the Power of Visualization with CustomBI or PowerBI.",
        link: "/comming-soon",
    },
    {
        id: 4,
        image: Our_4,
        title: "Insight IQ",
        text: "Elevate Your Data Insights with InsightIQ 📈🔍 Empower Yourself to Analyze, Explore, and Create Data Pipelines with Ease.",
        link: "/comming-soon",
    },
    
];


type Props = {};

const ProductSection = (props: Props) => {
    return (
        <>

            <section className="product-sec" id="product">
                <div className="product-inners">
                    <div className="container">
                        <div className="hdng classicl-dotts"  data-aos="fade-up">
                            <h2 className="hdng-h2">Our Products</h2>
                            <h6 className="hdng-h6">Digital Transformation simplified</h6>
                            <p className="all-pargraph-design">In our pursuit to democratize data management we are proud to Launch our data management Suite i.e. Data Blend IQ</p>
                        </div>
                        <div className="row loop-info-code" data-aos="fade-up">
                            <div className="col-md-5">
                                <div className="loop-code-op">
                                    <img src={ Loop } alt="" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="loop-content-opt">
                                     <h4 className="classic-gold">Data Blend IQ: Complete Data Management and Insights Suite</h4>   
                                     <p className="all-pargraph-design">This comprehensive suite will provide your organization a competitive edge by harnessing the true potential of your data, driving growth, innovation, and strategic excellence.</p>
                                    <h5 className="complete-date-management">Elevate your data game with Data Blend IQ today!</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row boxing-tebs" data-aos="fade-up">
                            {product.map((products) => (
                                <div className="col-md-3" key={products.id}>
                                    <div className="product-box">
                                        <div className="product-box-img">
                                            <img src={products.image} alt="" />
                                        </div>
                                        <div className="product-box-data">
                                            <h4>{products.title}</h4>
                                            <p className="para-16">{products.text}</p>
                                            <Link to={products.link}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>                        
                    </div>
                </div>
            </section>

        </>
    );
};

export default ProductSection;
