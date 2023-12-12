import Story from 'assets/images/homepage/our-story.png';




type Props = {};

const OurStorySection = (props: Props) => {
    return (
        <>
        
        <div className="our-story-sec" id="story">
            <div className="container">
                <div className="row"  data-aos="fade-up">
                    <div className="col-md-6">
                        <img src={Story} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="our-story-content">
                            <h2 className="hdng-h2">Our Story</h2>
                            <p className="all-pargraph-design"> At JAK Technologies, our story is rooted in a passion for democratizing data. We firmly believe that data infographics and analytics should not be a privilege, but a readily accessible tool empowering individuals and businesses across every corner of the world.</p>
                            <p className="all-pargraph-design">Our journey began in the depths of data, where in our past lives, we were immersed in the intricate world of building and scaling Data Warehouses, crafting Data Lakes, and implementing a myriad of Visualization tools. However, amid these endeavors, a common thread of frustration wove through our experiences. We found ourselves grappling with data inefficiencies, extended timelines for generating insights, soaring operational costs, and a noticeable gap in the level of engagement from both individuals and leadership in the realm of data modeling and dashboards.</p>
                            <p className="all-pargraph-design">This frustration became the catalyst for change.</p>
                            <p className="all-pargraph-design">Motivated by the desire to transcend these challenges, we embarked on a mission to redefine the landscape of data utilization. We set out to create a platform where data isn't just a resource but a catalyst for innovation and growth. At JAK Technologies, our commitment is to empower businesses and individuals alike, ensuring that the benefits of data analytics are not confined to a select few but are accessible to everyone.</p>
                            <p className="all-pargraph-design">Join us in this transformative journey where data becomes a universal language, bridging gaps, unlocking insights, and fostering a new era of possibilities. Our story is a testament to the belief that innovation begins with inclusivity, and we invite you to be a part of the narrative at JAK Technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>  
    );
};

export default OurStorySection;