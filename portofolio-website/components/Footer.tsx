import React from 'react'
import ConfettiButton from '@/components/ui/Confetti'
import { LinkPreview } from "@/components/ui/link-preview";
import { FaLinkedin, FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full pt-20 pb-10">
      <div className="flex flex-col items-center">
        <h3 className="heading text-[40px] md:text-5xl lg:max-w-[45vw] text-center font-bold">
        Thanks for scrolling! Now, let&apos;s write the next chapter together
        </h3>
        <div className="flex space-x-6 mt-5">
          <LinkPreview url="https://www.linkedin.com/in/ahnaful-hoque/" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-900 transition duration-300" />
            </div>
            </LinkPreview>
          <LinkPreview url="https://github.com/AhnafulH">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <FaGithub className="text-3xl text-gray-800 hover:text-black transition duration-300" />
              </div>
          </LinkPreview>
          <LinkPreview url="https://devpost.com/Ahnaful" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img src="/devpost-logo.svg" alt="Devpost" className="w-8 h-8 hover:opacity-80 transition duration-300" />
            </div>
          </LinkPreview>
        </div>
      </div>

      <div className="flex mt-12 md:flex-row flex-col justify-center items-center">
        <p className="md:text-lg text-base md:font-normal font-medium">
          Copyright © Ahnaful – Built with love, laughter, and lots of late nights
        </p>
      </div>
    </section>
  )
}

export default Footer