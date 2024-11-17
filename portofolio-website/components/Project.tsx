"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/project-card";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

const Project = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section id="projects" ref={ref} className="scroll-mt-28">
      <div className="text-center mb-0">
        <h2 className="font-medium text-4xl mb-2">Projects</h2>
        <p className="text-lg text-gray-600">A small selection of recent projects</p>
      </div>

      <CardContainer className="inter-var flex flex-wrap justify-center gap-8">
        {/* Project 1 */}
        <div className="group flex flex-col relative">
          <CardBody className="bg-gray-50 dark:bg-black w-auto sm:w-[30rem] h-[30rem] rounded-3xl p-6 border transition-transform duration-200 group-hover:scale-105 relative">
            <CardItem
              translateZ="100"
              rotateX={5}
              rotateY={5}
              scale={1.05}
              className="w-full mt-4"
            >
              <Image
                src="/images/smart_traffic_control.png"
                alt="Smart Traffic Control"
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              rotateX={2}
              rotateY={5}
              scale={1.1}
              as="h1"
              className="text-xl md:text-2xl font-bold text-neutral-600 dark:text-white mt-4"
            >
              Smart Traffic Control
            </CardItem>
            <CardItem translateZ="40" scale={1.05}>
              <p className="text-xs lg:text-sm font-light text-gray-700 dark:text-gray-400 line-clamp-4 mt-4">
                A smart traffic control system that prioritizes the pedestrians and public transit, while cutting down wait times for individual cars.
              </p>
            </CardItem>
            <div className="absolute bottom-6 left-6 flex gap-4">
              <CardItem translateZ="20">
                <a href="https://devpost.com/software/smart-traffic-control" target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src="/devpost-logo.svg"
                    alt="Devpost"
                    className="w-8 h-8"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </div>

        {/* Project 2 */}
        <div className="group flex flex-col relative">
          <CardBody className="bg-gray-50 dark:bg-black w-auto sm:w-[30rem] h-[30rem] sm:h-[33] rounded-3xl p-6 border transition-transform duration-200 group-hover:scale-105 relative">
            <CardItem
              translateZ="100"
              rotateX={5}
              rotateY={5}
              scale={1.05}
              className="w-full mt-4"
            >
              <Image
                src="/images/java_p.png"
                alt="Event Lottery System"
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              rotateX={2}
              rotateY={5}
              scale={1.1}
              as="h1"
              className="text-xl md:text-2xl font-bold text-neutral-600 dark:text-white mt-4"
            >
              Event Lottery System Application
            </CardItem>
            <CardItem translateZ="40" scale={1.05}>
              <p className="text-xs lg:text-sm font-light text-gray-700 dark:text-gray-400 line-clamp-4 mt-4">
                A mobile app that uses a lottery system to fairly allocate spots for high-demand community events, ensuring equal access for everyone, including those with time constraints or disabilities.
              </p>
            </CardItem>
            <div className="absolute bottom-6 left-6 flex gap-4">
              <CardItem translateZ="20">
                <a href="https://github.com/CMPUT301F24fusion1s/fusion1-events" target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src="/iconmonstr-github-1.svg"
                    alt="GitHub"
                    className="w-8 h-8"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </div>
      </CardContainer>
    </section>
  );
};

export default Project
