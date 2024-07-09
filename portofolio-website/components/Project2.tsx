"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/project-card";
import Link from "next/link";

const Project2 = () => {
  return (
    <section>
       <div className="text-center mt-10">
        <h2 className="font-bold text-4xl md:text-5xl text-center">Projects</h2>
        <p className="text-lg text-gray-600 py-5">A small selection of recent projects</p>
      </div>
      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-3xl p-6 border  ">
        <CardItem 
          translateZ="100" className="w-full mt-4"
          // rotateX={20}
          // rotateY={10}
          // rotateZ={10}
        >
          <Image
            src="/images/smart_traffic_control.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          as="h1"
          className="lg:text-2xl md:text-xl text-base line-clamp-1 font-bold text-neutral-600 dark:text-white mt-4"
        >
          Make things float in air
        </CardItem>
        <CardItem
          translateZ={40}
        >
        <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "black",
                  margin: "1vh 0",
                }}
              >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
        </CardItem>
        <div className="flex justify-start items-center mt-10 gap-2">
          <CardItem
            translateZ={20}
            translateX={-30}
          >
            <img
              src="/devpost-icon.svg"
              alt="github"
              height={30}
              width={30}
            />
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={-30}
          >
            <img
              src="/iconmonstr-github-1.svg"
              alt="github"
            />
          </CardItem>
        </div>
      </CardBody>

      
    </CardContainer>

  </section>

  

  
  )
}

export default Project2