import Delivery from 'assets/icons/homepage/delivery.svg'
import Retention from 'assets/icons/homepage/retention.svg'
import Success from 'assets/icons/homepage/success.svg'


interface CustomFeatureDto {
    id: number;
    title: string;
    text: string;
    image: string;
}

const counter: CustomFeatureDto[] = [
    {
        id: 1,
        title: "59.5%",
        text: "Success Rate",
        image: Success,
    },
    {
        id: 2,
        title: "59.7%",
        text: "Customer Retention",
        image: Retention,
    },
    {
        id: 3,
        title: "57.5%",
        text: "One-time Delivery",
        image: Delivery,
    },
];


type Props = {};

const CounterSection = (props: Props) => {
    return (
        <>

            <section className="counter-sec">
                <div className="container">
                    <div className="row">
                        {counter.map((counters) => (
                            <div className="col-md-4" key={counters.id}>
                                <div className="counter-sec-data">
                                    <img src={counters.image} alt="" />
                                    <h2 className="hdng-h2">{counters.title}</h2>
                                    <p>{counters.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default CounterSection;
