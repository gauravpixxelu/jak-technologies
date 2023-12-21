import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Delivery from 'assets/icons/homepage/delivery.svg';
import Retention from 'assets/icons/homepage/retention.svg';
import Success from 'assets/icons/homepage/success.svg';

interface CounterProps {
  endValue: number;
  suffix: string;
  icon: string;
  title: string;
  duration?: number;
  delay?: number;
}

const Counter: React.FC<CounterProps> = ({ endValue, suffix, icon, title, duration = 2, delay = 1 }) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Only trigger once when in view
  });

  return (
    <div className="col-md-4" ref={inViewRef}>
      <div className="counter-sec-data">
        <img src={icon} alt="" />
        <h2 className="hdng-h2">
          {inView && <CountUp end={endValue} suffix={suffix} duration={duration} delay={delay} />}
        </h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

const CounterSection: React.FC = () => {
  return (
    <section className="counter-sec">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <Counter endValue={98.5} suffix=".5%" icon={Success} title="Success Rate" duration={3} delay={1} />
          <Counter endValue={97.5} suffix=".5%" icon={Retention} title="Customer Retention" duration={3} delay={1} />
          <Counter endValue={95.5} suffix=".5%" icon={Delivery} title="One-time Delivery" duration={3} delay={1} />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
  