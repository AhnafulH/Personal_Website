import React from 'react'
import ConfettiButton from '@/components/ui/Confetti'
const Footer = () => {
  return (
    // https://freecodez.com
    <section className="w-full pt-20 pb-10">
      <div className="flex flex-col items-center">
        <h3 className="heading text-[40px] md:text-5xl lg:max-w-[45vw] text-center font-bold">
        Thanks for scrolling! Now, let's write the next chapter together
        </h3>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-medium">
          {/* Copyright © 2024 Adrian Hajdin */}
          Copyright © Ahnaful – Built with love, laughter, and lots of late nights
          {/* All code, no nonsense */}
        </p>
      </div>
    </section>
  )
}

export default Footer