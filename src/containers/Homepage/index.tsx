import BannerSection from 'components/Homepage/BannerSection'
import OurStorySection from 'components/Homepage/OurStorySection'
import ProductSection from 'components/Homepage/ProductSection'
import AboutSection from 'components/Homepage/AboutSection'
import OurJourneysection from 'components/Homepage/OurJourneysection'
import ServiceSection from 'components/Homepage/ServiceSection'
import TechnologySection from 'components/Homepage/TechnologySection'
import TestimonialSection from 'components/Common/TestimonialSection'
import CounterSection from 'components/Common/CounterSection'
import BlogSection from 'components/Common/BlogSection'

const Homepage = () => {
  return (
    <>

      <div className="home-page">
        <BannerSection />
        <AboutSection />
        <OurJourneysection />
        <OurStorySection />
        <ProductSection />         
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