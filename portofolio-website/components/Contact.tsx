import React from 'react'

const Contact2 = () => {
  return (
    <section className="border-2 border-red-200 scroll-mt-28"
      id="contact"
    >
        <div className="text-center mb-10 mt-10">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-gray-600">Say hello</p>
        </div>
        
        <div className="w-full border-2 border-green-300 flex justify-center">
          <form className="mt-10 flex flex-col w-[min(100%,50rem)] border-2 border-blue-300">
          <div className="flex space-x-3 mb-3">
          <input className="h-14 px-4 rounded-lg border border-black/10 flex-1"
              type="text"
              name="senderName"
              required
              placeholder="Your name"
              maxLength={500}
            />
            <input className="h-14 px-4 rounded-lg border border-black/10 flex-1"
              type="email"
              name="senderEmail"
              required
              placeholder="someone@example.com"
              maxLength={500}
            />
            </div>
            <input className="h-14 px-4 rounded-lg border border-black/10"
              type="text"
              name="Subject"
              required
              placeholder="Subject"
              maxLength={500}
            />
            <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <div className="flex items-center justify-start mb-3">
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" 
            type="submit">Submit</button>
          </div>
          </form>

        </div>
    </section>
  )
}

export default Contact2