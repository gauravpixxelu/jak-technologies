import Countries from 'assets/icons/homepage/countries.svg'
import Customer from 'assets/icons/homepage/customer.svg'
import Industries from 'assets/icons/homepage/industries.svg'
import Software_Products from 'assets/icons/homepage/software-products.svg'
import Services from 'assets/icons/homepage/services.svg'


interface CustomFeatureDto {
    id: number;
    title: string;
    text: string;
    image: string;
}

const success = [
    {
        id: 1,
        title: "100+",
        text: "Customers",
        image: Customer,
    },
    {
        id: 2,
        title: "40+",
        text: "Countries",
        image: Countries,
    },
    {
        id: 3,
        title: "26+",
        text: "Industries",
        image: Industries,
    },
    {
        id: 4,
        title: "14",
        text: "Software Products",
        image: Software_Products,
    },
    {
        id: 5,
        title: "20",
        text: "Services",
        image: Services,
    },
];


type Props = {};

const SuccessSection = (props: Props) => {
    return (
        <>

            <section className="success-sec">
                <div className="container">
                    <div className="row">
                        {success.map((success) => (
                            <div className="col" key={success.id}>
                                <div className="success-sec-data">
                                    <div className="success-sec-img">
                                        <img src={success.image} alt="" />
                                    </div>
                                    <h2 className="hdng-h2">{success.title}</h2>
                                    <h6 className="hdng-h6">{success.text}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default SuccessSection;
