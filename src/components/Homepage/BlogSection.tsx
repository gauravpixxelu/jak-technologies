import { Link } from "react-router-dom";
import Blog_Img from 'assets/images/homepage/blog.jpg'

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
        image: Blog_Img,
        date: "October 18, 2023",
        title: "Apple's Secret AI Sauce: Cook Hints at a Game-Changing Update!",
        text: "Alright, imagine Apple's money situation like a big fruit stand. Now, their stand is usually jam-packed with people buying all sorts of things, but lately, they've noticed that folks aren't filling their baskets quite as much as before...",
        link: "#",
    },
    {
        id: 2,
        image: Blog_Img,
        date: "October 18, 2023",
        title: "Apple's Secret AI Sauce: Cook Hints at a Game-Changing Update!",
        text: "Alright, imagine Apple's money situation like a big fruit stand. Now, their stand is usually jam-packed with people buying all sorts of things, but lately, they've noticed that folks aren't filling their baskets quite as much as before...",
        link: "#",
    },
    {
        id: 3,
        image: Blog_Img,
        date: "October 18, 2023",
        title: "Apple's Secret AI Sauce: Cook Hints at a Game-Changing Update!",
        text: "Alright, imagine Apple's money situation like a big fruit stand. Now, their stand is usually jam-packed with people buying all sorts of things, but lately, they've noticed that folks aren't filling their baskets quite as much as before...",
        link: "#",
    },
];

type Props = {};

const BlogSection = (props: Props) => {
    return (
        <>

            <section className="blog-sec">
                <div className="container">
                    <div className="hdng">
                        <h2 className="hdng-h2">Our Blog and Insight</h2>
                        <p className="para-16">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
                    </div>
                    <div className="row">
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
                    <div className="blog-btn">
                        <Link className="custom-btn2" to="#"><span>View All Blogs</span></Link>
                    </div>
                </div>
            </section>

        </>
    );
};

export default BlogSection;
