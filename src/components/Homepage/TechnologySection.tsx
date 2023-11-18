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
        text: "Pentaho / SSIS / SAP BODS",
        bgColor: "#EAF5FF",
        textColor: "#024A87",
    },
    {
        id: 2,
        image: React,
        text: "React JS",
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
        text: "Pandas",
        bgColor: "#ECE8FF",
        textColor: "#1B00B0",
    },
    {
        id: 5,
        image: Postgre,
        text: "Postgres SQL",
        bgColor: "#EAF5FF",
        textColor: "#336790",
    },
    {
        id: 6,
        image: Flask,
        text: "Flask",
        bgColor: "#F9F9F9",
        textColor: "#000000",
    },
    {
        id: 7,
        image: OpenAI,
        text: "Open AI",
        bgColor: "#E9FFFA",
        textColor: "#068C6B",
    },
    {
        id: 8,
        image: Echarts,
        text: "Apache E Charts",
        bgColor: "#FFEDF1",
        textColor: "#E43961",
    },
    {
        id: 9,
        image: Spacy,
        text: "Spacy",
        bgColor: "#F4FCFF",
        textColor: "#09A3D5",
    },
    {
        id: 10,
        image: LangChain,
        text: "Langchain",
        bgColor: "#EAF5FF",
        textColor: "#0B448C",
    },
    {
        id: 11,
        image: Sap,
        text: "MSBI / SAP BI / Tableau",
        bgColor: "#EAF5FF",
        textColor: "#0B1C71",
    },    
    {
        id: 12,
        image: Amazon,
        text: "AWS RDS For Storage Data/AWS Services (EC2, S3, API Gateway, Lambda...)",
        bgColor: "#FFF4E8",
        textColor: "#F68D11",
    },
];


type Props = {};

const TechnologySection = (props: Props) => {
    return (
        <>

            <section className="technology-sec">
                <div className="techno">
                    <div className="container">
                        <div className="hdng" data-aos="fade-up">
                            <h2 className="hdng-h2">Our Technological Expertise & Tech Stack</h2>
                            <p className="para-16">As a leading Data Transformation company, JAK Tech possesses profound expertise in implementing BI, Analytics, Big Data, and Data Science projects. Our capabilities span various facets, encompassing data integration, governance, dashboard and report development, ad-hoc analysis, real-time analytics, migration, big data analytics, data science, mobile BI, cloud BI, and production support. Across diverse technology stacks, we have successfully delivered solutions, including specialized offerings in Pentaho, SAP BI, MS BI, services and beyond</p>
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
