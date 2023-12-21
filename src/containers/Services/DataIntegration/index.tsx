import { useEffect } from 'react';
import BannerSection from 'components/Services/DataIntegration/BannerSection'
import ServicesSlider from 'components/Services/DataIntegration/ServicesSlider'
import TestimonialSection from 'components/Common/TestimonialSection'
import CounterSection from 'components/Common/CounterSection'
import BlogSection from 'components/Common/BlogSection'

const DataIntegration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);   
  return (
    <>

      <div className="home-page">
        <BannerSection />
        <ServicesSlider />
        <TestimonialSection />
        <CounterSection />
        <BlogSection />
      </div>

    </>
  );
};

export default DataIntegration;
