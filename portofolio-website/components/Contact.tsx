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
          <form className="mt-10 flex flex-col w-[min(100%,50rem)]">
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
                required
                placeholder="Let's collaborate!"
                maxLength={500}
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