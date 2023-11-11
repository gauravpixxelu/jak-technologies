import BannerSection from 'components/Homepage/BannerSection'
import SuccessSection from 'components/Homepage/SuccessSection'
import ProductSection from 'components/Homepage/ProductSection'
import AboutSection from 'components/Homepage/AboutSection'
import ServiceSection from 'components/Homepage/ServiceSection'
import TechnologySection from 'components/Homepage/TechnologySection'
import TestimonialSection from 'components/Homepage/TestimonialSection'
import CounterSection from 'components/Homepage/CounterSection'
import BlogSection from 'components/Homepage/BlogSection'

const Homepage = () => {
  return (
    <>

      <div className="home-page">
        <BannerSection />
        <SuccessSection />
        <ProductSection />
        <AboutSection />
        <ServiceSection />
        <TechnologySection />
        <TestimonialSection />
        <CounterSection />
        <BlogSection />
      </div>

    </>
  );
};

export default Homepage;
