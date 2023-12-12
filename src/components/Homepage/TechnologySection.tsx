import Pentaho from 'assets/images/homepage/pentaho.png'
import React from 'assets/images/homepage/react.png'
import Pythan from 'assets/images/homepage/pythan.png'
import Pandas from 'assets/images/homepage/pandas.png'
import Postgre from 'assets/images/homepage/postgre.png'
import Flask from 'assets/images/homepage/flask.png'
import OpenAI from 'assets/images/homepage/openai.png'
import Amazon from 'assets/images/homepage/amazon.png'
import Echarts from 'assets/images/homepage/echarts.png'
import Spacy from 'assets/images/homepage/spacy.png'
import LangChain from 'assets/images/homepage/langchain.png'
import Sap from 'assets/images/homepage/sap.png'

interface CustomFeatureDto {
    id: number;
    text: string;
    image: string;
    bgColor: string;
    textColor: string;
}

const technology: CustomFeatureDto[] = [
    {
        id: 1,
        image: Pentaho,
        text: "",
        bgColor: "#EAF5FF",
        textColor: "#024A87",
    },
    {
        id: 2,
        image: React,
        text: "",
        bgColor: "#E2FBFF",
        textColor: "#009DBA",
    },
    {
        id: 3,
        image: Pythan,
        text: "NLTK/Python",
        bgColor: "#FFF9E0",
        textColor: "#E9BC00",
    },
    {
        id: 4,
        image: Pandas,
        text: "",
        bgColor: "#ECE8FF",
        textColor: "#1B00B0",
    },
    {
        id: 5,
        image: Postgre,
        text: "",
        bgColor: "#EAF5FF",
        textColor: "#336790",
    },
    {
        id: 6,
        image: Flask,
        text: "",
        bgColor: "#F9F9F9",
        textColor: "#000000",
    },
    {
        id: 7,
        image: OpenAI,
        text: "",
        bgColor: "#E9FFFA",
        textColor: "#068C6B",
    },
    {
        id: 8,
        image: Echarts,
        text: "",
        bgColor: "#FFEDF1",
        textColor: "#E43961",
    },
    {
        id: 9,
        image: Spacy,
        text: "",
        bgColor: "#F4FCFF",
        textColor: "#09A3D5",
    },
    {
        id: 10,
        image: LangChain,
        text: "",
        bgColor: "#EAF5FF",
        textColor: "#0B448C",
    },
    {
        id: 11,
        image: Sap,
        text: "",
        bgColor: "#EAF5FF",
        textColor: "#0B1C71",
    },    
    {
        id: 12,
        image: Amazon,
        text: "",
        bgColor: "#FFF4E8",
        textColor: "#F68D11",
    },
];


type Props = {};

const TechnologySection = (props: Props) => {
    return (
        <>

            <section className="technology-sec" id="partner">
                <div className="techno">
                    <div className="container">
                        <div className="hdng" data-aos="fade-up">
                            <h2 className="hdng-h2">Unveiling Our Technological Prowess: A Dive into Our Robust Tech Stack</h2>
                            <p className="para-16">Data at the heart & Technology as the pulse, powering innovation and shaping tomorrow. As a forefront Data Transformation entity, JAK Tech holds extensive proficiency in executing BI, Analytics, Big Data, and Data Science initiatives. Our competencies cover a spectrum of areas, including data integration, governance, development of dashboards and reports, ad-hoc analysis, real-time analytics, migration, big data analytics, data science, mobile BI, cloud BI, and production support.</p>
                        </div>
                        <div className="row" data-aos="fade-up">
                            {technology.map((technologies) => (
                                <div className="col-md-3" key={technologies.id}>
                                    <div className="technology-sec-data" style={{ backgroundColor: technologies.bgColor }}>
                                        <img src={technologies.image} alt="" />
                                        <p style={{ color: technologies.textColor }}>{technologies.text}</p>
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

export default TechnologySection;
