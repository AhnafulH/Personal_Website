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
        <div className="group">
          <CardBody className="bg-gray-50 dark:bg-black w-auto sm:w-[30rem] h-auto rounded-3xl p-6 border transition-transform duration-200 group-hover:scale-105 group-hover:translateY-2">
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
              Make things float in air
            </CardItem>
            <CardItem translateZ="40" scale={1.05}>
              <p className="text-sm lg:text-xl font-light text-gray-700 line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardItem>
            <div className="flex justify-start items-center mt-10 gap-2">
              <CardItem translateZ="20" translateX={-30}>
                <img src="/devpost-icon.svg" alt="Devpost" height={30} width={30} />
              </CardItem>
              <CardItem translateZ="20" translateX={-30}>
                <img src="/iconmonstr-github-1.svg" alt="GitHub" />
              </CardItem>
            </div>
          </CardBody>
        </div>

        {/* Project 2 */}
        <div className="group">
          <CardBody className="bg-gray-50 dark:bg-black w-auto sm:w-[30rem] h-auto rounded-3xl p-6 border transition-transform duration-200 group-hover:scale-105 group-hover:translateY-2">
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
              Another Amazing Project
            </CardItem>
            <CardItem translateZ="40" scale={1.05}>
              <p className="text-sm lg:text-xl font-light text-gray-700 line-clamp-2">
                This project explores something new and exciting, showcasing innovative solutions and advanced technologies.
              </p>
            </CardItem>
            <div className="flex justify-start items-center mt-10 gap-2">
              <CardItem translateZ="20" translateX={-30}>
                <img src="/devpost-icon.svg" alt="Devpost" height={30} width={30} />
              </CardItem>
              <CardItem translateZ="20" translateX={-30}>
                <img src="/iconmonstr-github-1.svg" alt="GitHub" />
              </CardItem>
            </div>
          </CardBody>
        </div>
      </CardContainer>
    </section>
  );
};

export default Project;
