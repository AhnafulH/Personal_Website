"use client"
import React, {useEffect} from 'react'
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { sendEmail } from '@/app/api/send/sendEmail';
import toast from 'react-hot-toast';
import SubmitBtn from './submit_btn';
import FireworksConfetti from './ui/FireworksConfetti';


const Contact2 = () => {
  const {ref, inView}= useInView({
    threshold: 0.4,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section className="scroll-mt-28"
      id="contact" ref={ref}
    >
        <div className="text-center mb-10 mt-10">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-gray-600">Say hello</p>
        </div>
        
        <div className="w-full flex justify-center">
          <form className="mt-10 flex flex-col w-[min(100%,50rem)]" action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
  
            toast.success("Email delivered! We’ll be in touch shortly");
            FireworksConfetti();
          }}>
          <div className="flex space-x-3 mb-3">
          <div className="flex-1">
                <label htmlFor="senderName" className="block mb-1 text-sm font-medium text-gray-700">Name:</label>
                <input className="h-14 px-4 rounded-lg border border-black/10 w-full"
                  type="text"
                  id="senderName"
                  name="senderName"
                  required
                  placeholder="John Doe"
                  maxLength={500}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="senderEmail" className="block mb-1 text-sm font-medium text-gray-700">Email:</label>
                <input className="h-14 px-4 rounded-lg border border-black/10 w-full"
                  type="email"
                  id="senderEmail"
                  name="senderEmail"
                  required
                  placeholder="someone@example.com"
                  maxLength={500}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-700">Subject:</label>
              <input className="h-14 px-4 rounded-lg border border-black/10 w-full"
                type="text"
                id="subject"
                name="subject"
                placeholder="Let's collaborate!"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">Message:</label>
              <textarea
                className="h-52 rounded-lg border-black p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full"
                id="message"
                name="message"
                placeholder="Hi Ahnaful,"
                required
              />
            </div>
          <div className="flex items-center justify-start mb-3">
            {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" 
            type="submit">Submit</button> */}
            <SubmitBtn />
          </div>
          </form>

        </div>
    </section>
  )
}

export default Contact2