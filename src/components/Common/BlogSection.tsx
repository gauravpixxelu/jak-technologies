import { Link } from "react-router-dom";
import Blog_1 from 'assets/images/homepage/Revolutioniz.jpg'
import Blog_3 from 'assets/images/homepage/Data-Platforms.jpg'
import Blog_2 from 'assets/images/homepage/Unleashing.jpg'

interface CustomFeatureDto {
    id: number;
    text: string;
    image: string;
    title: string;
    date: string;
    link: string;
}

const blog: CustomFeatureDto[] = [
    {
        id: 1,
        image: Blog_3,
        date: "October 18, 2023",
        title: "Generative AI and Data Platforms with JAK Technologies",
        text: "In the ever-evolving landscape of Insurtech, JAK Technologies stands at the forefront, driving innovation through the convergence of Generative AI and cutting-edge Data Platforms. Our commitment to reshaping the future of insurance is reflected in our pioneering....",
        link: "/Generative",
    },
    {
        id: 2,
        image: Blog_1,
        date: "October 18, 2023",
        title: "The Role of Generative AI in Shaping the Future",
        text: "In the dynamic realm of technology, the marriage of Generative AI and Insurtech is proving to be a game-changer. At JAK Technologies, we're at the forefront of this transformative intersection, harnessing the power of Generative AI to redefine the landscape of insurance technology....",
        link: "/role-of-generative-AI",
    },
    {
        id: 3,
        image: Blog_2,
        date: "October 18, 2023",
        title: "Teaching Language Models Algorithmic Thinking",
        text: "In the ever-evolving landscape of artificial intelligence, the quest to enhance language models reaches new heights. At JAK Technologies, we are committed to pushing the boundaries of what language models can achieve. Today, we delve into a fascinating realm – teaching language models to reason algorithmically....",
        link: "/teaching-language-models",
    },
];

type Props = {};

const BlogSection = (props: Props) => {
    return (
        <>

            <section className="blog-sec" id="blog">
                <div className="container">
                    <div className="hdng" data-aos="fade-up">
                        <h2 className="hdng-h2">Our Blog and Insight</h2>
                        <p className="para-16">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
                    </div>
                    <div className="row" data-aos="fade-up">
                        {blog.map((blogs) => (
                            <div className="col-md-4" key={blogs.id}>
                                <div className="blog-box">
                                    <div className="blog-box-img">
                                        <img src={blogs.image} alt="" />
                                    </div>
                                    <div className="blog-box-txt">
                                        <h4>{blogs.title}</h4>
                                        <p>{blogs.text}</p>
                                        <Link to={blogs.link}>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="blog-btn" data-aos="fade-up">
                        <Link className="custom-btn2" to="/blog"><span>View All Blogs</span></Link>
                    </div>
                </div>
            </section>

        </>
    );
};

export default BlogSection;
