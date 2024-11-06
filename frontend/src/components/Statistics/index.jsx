"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaHandshake, FaProjectDiagram, FaAward } from "react-icons/fa";

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-gray-100 py-12 px-5 text-center">
      <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
        <div className="flex-1 min-w-[200px] mx-5 mb-5 text-center flex items-center flex-col">
          <FaHandshake className="text-6xl text-blue-900 mb-3" />
          <h3 className="text-4xl text-blue-900 mb-1 font-bold">
            {inView && <CountUp start={0} end={25} duration={2.75} />}+
          </h3>
          <p className="text-lg text-gray-600">Client Associations</p>
        </div>
        <div className="flex-1 min-w-[200px] mx-5 mb-5 text-center flex items-center flex-col">
          <FaProjectDiagram className="text-6xl text-blue-900 mb-3" />
          <h3 className="text-4xl text-blue-900 mb-1 font-bold">
            {inView && <CountUp start={0} end={150} duration={2.75} />}+
          </h3>
          <p className="text-lg text-gray-600">Completed Projects</p>
        </div>
        <div className="flex-1 min-w-[200px] mx-5 mb-5 text-center flex items-center flex-col">
          <FaAward className="text-6xl text-blue-900 mb-3" />
          <h3 className="text-4xl text-blue-900 mb-1 font-bold">
            {inView && <CountUp start={0} end={25} duration={2.75} />}+
          </h3>
          <p className="text-lg text-gray-600">Years of Experience</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
