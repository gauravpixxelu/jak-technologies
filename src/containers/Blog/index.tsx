import Blog from 'components/Blog/Blog';
import TestimonialSection from 'components/Common/TestimonialSection'
import CounterSection from 'components/Common/CounterSection'

const BlogPage = () => {
    return (
        <>
            <div className="home-page">
                <Blog />
                <TestimonialSection />
                <CounterSection />
            </div>

        </>
    );
};

export default BlogPage;