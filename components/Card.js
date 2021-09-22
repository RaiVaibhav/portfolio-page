import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Card = ({ children, className }) => {
  const [fadeClass, SetFadeClass ] = useState('opacity-0');
  let [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  useEffect(() => {
    if(inView) {
      SetFadeClass('fade-in-project-card');
    }
  }, [inView])
  return (
    <div ref={ref} className={`flex mb-16 p-8 sm:p-12 grid-gap-4 project-card-bg-color flex-col xl:flex-row flex-wrap shadow-2xl flex-1 card-height container shadow-lg rounded-md justify-center ${className || ''} ${fadeClass}`}>
      {children}
    </div>
  );
};

export default Card
