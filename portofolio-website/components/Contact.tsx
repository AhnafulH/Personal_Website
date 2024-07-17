import React from 'react'

const Contact2 = () => {
  return (
    <div>
        <div className="text-center mb-10 mt-10">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-gray-600">Say hello</p>
        </div>

        <div className="border-2 border-red-300">
            <div className="border-2 border-green-300 w-full bg-slate-200 rounded-xl mb-3">
                Name
            </div>
            <div className="border-2 border-green-300 w-full bg-slate-300 rounded-xl">
                email
            </div>
        </div>
    </div>
  )
}

export default Contact2