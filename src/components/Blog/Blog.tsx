import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Blog_1 from 'assets/images/homepage/Revolutioniz.jpg'
import Blog_2 from 'assets/images/homepage/Is-Generative.jpg'
import Blog_3 from 'assets/images/homepage/Data-Platforms.jpg'
import Blog_4 from 'assets/images/homepage/Unleashing.jpg'

import TestimonialSection from 'components/Common/TestimonialSection'
import CounterSection from 'components/Common/CounterSection'



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
        image: Blog_2,
        date: "October 18, 2023",
        title: "Is Generative AI Good or Bad for the future?",
        text: "Step into the fascinating world of Artificial Intelligence, where machines possess the power to create and innovate like never before. One particular branch of AI is capturing the attention and imagination of technologists, scientists, and enthusiasts alike.....",
        link: "/Generative-AI-Good-or-Bad",
    },
    {
        id: 2,
        image: Blog_1,
        date: "October 18, 2023",
        title: "The Role of Generative AI in Shaping the Future",
        text: "In the dynamic realm of technology, the marriage of Generative AI and Insurtech is proving to be a game-changer. At JAK Technologies, we're at the forefront of this transformative intersection, harnessing the power of Generative AI to redefine the landscape....",
        link: "/role-of-generative-AI",
    },
    {
        id: 3,
        image: Blog_4,
        date: "October 18, 2023",
        title: "Teaching Language Models Algorithmic Thinking",
        text: "In the ever-evolving landscape of artificial intelligence, the quest to enhance language models reaches new heights. At JAK Technologies, we are committed to pushing the boundaries of what language models can achieve. Today, we delve into a fascinating realm....",
        link: "/teaching-language-models",
    },
    {
        id: 4,
        image: Blog_3,
        date: "October 18, 2023",
        title: "Generative AI and Data Platforms with JAK Technologies",
        text: "In the ever-evolving landscape of Insurtech, JAK Technologies stands at the forefront, driving innovation through the convergence of Generative AI and cutting-edge Data Platforms. Our commitment to reshaping the future of insurance is reflected in our....",
        link: "/Generative",
    },
];



type Props = {};


const Blog = (props: Props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);  
    
    return (
        <>

            <section className="blog-sec blog-page-code" id="blog">
                <div className="blog-breadcrumb-colum">
                </div>
                <div className="container">
                    <div className="hdng" data-aos="fade-up">
                        <h2 className="hdng-h2">Our Blog and Insight</h2>
                        <p className="para-16">'Dive into the depths of data brilliance. Explore Our Blog & Insights for cutting-edge perspectives on data warehousing, visualization, generative AI, machine learning and analytics – where innovation meets information.'</p>
                    </div>
                    <div className="row" data-aos="fade-up">
                        {blog.map((blogs) => (
                            <div className="col-md-4" key={blogs.id}>
                                <div className="blog-box closed-blog" >
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
                </div>
            </section>

            

        </>
    );
};

export default Blog;
