import { Link } from "react-router-dom";
import Product_Logo from 'assets/images/homepage/product-logo.svg'

interface CustomFeatureDto {
    id: number;
    title: string;
    text: string;
    image: string;
    link: string;
}

const product = [
    {
        id: 1,
        image: Product_Logo,
        title: "An end-to-end digital airport solution",
        text: "Airports, Malls, Shopping Centers, Travel Retail and More",
        link: "#",
    },
    {
        id: 2,
        image: Product_Logo,
        title: "An end-to-end digital airport solution",
        text: "Airports, Malls, Shopping Centers, Travel Retail and More",
        link: "#",
    },
    {
        id: 3,
        image: Product_Logo,
        title: "An end-to-end digital airport solution",
        text: "Airports, Malls, Shopping Centers, Travel Retail and More",
        link: "#",
    },
    {
        id: 4,
        image: Product_Logo,
        title: "An end-to-end digital airport solution",
        text: "Airports, Malls, Shopping Centers, Travel Retail and More",
        link: "#",
    },
    {
        id: 5,
        image: Product_Logo,
        title: "An end-to-end digital airport solution",
        text: "Airports, Malls, Shopping Centers, Travel Retail and More",
        link: "#",
    },
    {
        id: 6,
        image: Product_Logo,
        title: "An end-to-end digital airport solution",
        text: "Airports, Malls, Shopping Centers, Travel Retail and More",
        link: "#",
    },
    {
        id: 7,
        image: Product_Logo,
        title: "An end-to-end digital airport solution",
        text: "Airports, Malls, Shopping Centers, Travel Retail and More",
        link: "#",
    },
    {
        id: 8,
        image: Product_Logo,
        title: "An end-to-end digital airport solution",
        text: "Airports, Malls, Shopping Centers, Travel Retail and More",
        link: "#",
    },
];


type Props = {};

const ProductSection = (props: Props) => {
    return (
        <>

            <section className="product-sec">
                <div className="product-inner">
                    <div className="container">
                        <div className="hdng">
                            <h2 className="hdng-h2">Our Products</h2>
                            <h6 className="hdng-h6">Digital Transformation simplified</h6>
                        </div>
                        <div className="row">
                            {product.map((products) => (
                                <div className="col-md-3" key={products.id}>
                                    <div className="product-box">
                                        <div className="product-box-img">
                                            <img src={products.image} alt="" />
                                        </div>
                                        <div className="product-box-data">
                                            <h4>{products.title}</h4>
                                            <p className="para-16">{products.text}</p>
                                        </div>
                                        <div className="product-box-link">
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
