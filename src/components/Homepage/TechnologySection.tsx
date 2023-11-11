import Welspun from 'assets/images/homepage/welspun.svg'
import Wipro from 'assets/images/homepage/wipro.svg'


interface CustomFeatureDto {
    id: number;
    text: string;
    image: string;
    bgColor: string;
}

const technology: CustomFeatureDto[] = [
    {
        id: 1,
        image: Welspun,
        text: "Wipro is an Indian multinational corporation that provides information technology.",
        bgColor: "#DFF3F7",
    },
    {
        id: 2,
        image: Wipro,
        text: "Wipro is an Indian multinational corporation that provides information technology.",
        bgColor: "#DFF4D9",
    },
    {
        id: 3,
        image: Welspun,
        text: "Wipro is an Indian multinational corporation that provides information technology.",
        bgColor: "#FDE3BC",
    },
    {
        id: 4,
        image: Wipro,
        text: "Wipro is an Indian multinational corporation that provides information technology.",
        bgColor: "#FCD8D5",
    },
    {
        id: 5,
        image: Welspun,
        text: "Wipro is an Indian multinational corporation that provides information technology.",
        bgColor: "#D9E7F1",
    },
    {
        id: 6,
        image: Wipro,
        text: "Wipro is an Indian multinational corporation that provides information technology.",
        bgColor: "#ECECEC",
    },
    {
        id: 7,
        image: Welspun,
        text: "Wipro is an Indian multinational corporation that provides information technology.",
        bgColor: "#E7E1EF",
    },
    {
        id: 8,
        image: Wipro,
        text: "Wipro is an Indian multinational corporation that provides information technology.",
        bgColor: "#F5FEAB",
    },
    {
        id: 9,
        image: Welspun,
        text: "Wipro is an Indian multinational corporation that provides information technology.",
        bgColor: "#D9F1D3",
    },
    {
        id: 10,
        image: Wipro,
        text: "Wipro is an Indian multinational corporation that provides information technology.",
        bgColor: "#FDE0C3",
    },
    {
        id: 11,
        image: Welspun,
        text: "Wipro is an Indian multinational corporation that provides information technology.",
        bgColor: "#EBE8F2",
    },
    {
        id: 12,
        image: Wipro,
        text: "Wipro is an Indian multinational corporation that provides information technology.",
        bgColor: "#E9F9A2",
    },
];


type Props = {};

const TechnologySection = (props: Props) => {
    return (
        <>

            <section className="technology-sec">
                <div className="techno">
                    <div className="container">
                        <div className="hdng">
                            <h2 className="hdng-h2">Two+ million man-hours across technology stacks</h2>
                            <p className="para-16">Jak Technologies, as a Business Intelligence and Analytics company, has deep experience in executing BI, Analytics, Big Data, and Data Science projects covering data integration, data governance, dashboards & reports, ad-hoc analysis, migration, big data analytics, data science, real-time analytics, mobile BI, cloud BI, and production support. GrayMatter has worked across technology stacks and delivered offerings including</p>
                        </div>
                        <div className="row">
                            {technology.map((technologies) => (
                                <div className="col-md-3" key={technologies.id}>
                                    <div className="technology-sec-data" style={{ backgroundColor: technologies.bgColor }}>
                                        <img src={technologies.image} alt="" />
                                        <p>{technologies.text}</p>
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
