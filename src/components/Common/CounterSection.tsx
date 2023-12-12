import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import Delivery from 'assets/icons/homepage/delivery.svg';
import Retention from 'assets/icons/homepage/retention.svg';
import Success from 'assets/icons/homepage/success.svg';

interface CounterProps {
  endValue: number;
  suffix: string;
  icon: string;
  title: string;
}

const Counter: React.FC<CounterProps> = ({ endValue, suffix, icon, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className="col-md-4" ref={counterRef}>
      {isVisible && (
        <div className="counter-sec-data">
          <img src={icon} alt="" />
          <h2 className="hdng-h2">
            <CountUp end={endValue} suffix={suffix} />
          </h2>
          <p>{title}</p>
        </div>
      )}
    </div>
  );
};

const CounterSection: React.FC = () => {
  return (
    <section className="counter-sec">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <Counter endValue={98.5} suffix=".5%" icon={Success} title="Success Rate" />
          <Counter endValue={97.5} suffix=".5%" icon={Retention} title="Customer Retention" />
          <Counter endValue={95.5} suffix=".5%" icon={Delivery} title="One-time Delivery" />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;