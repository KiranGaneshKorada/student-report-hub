import React from 'react'

const loading = () => {
  return (
    <div className="flex flex-col items-center p-5">
    <div className="space-y-3 w-full max-w-2xl p-5 bg-white shadow-lg rounded-lg animate-pulse">
      <div className="w-full">
        <label className="block text-lg font-medium mb-2">Title</label>
        <div className="py-3 px-4 w-full border border-gray-200 rounded-lg bg-gray-200"></div>
      </div>

      <div>
        <label className="block text-lg font-medium mb-2">Category</label>
        <div className="py-3 px-4 w-full bg-gray-200 border-transparent rounded-lg"></div>
      </div>

      <div className="w-full">
        <label className="block text-lg font-medium mb-2">Location</label>
        <div
          className="py-3 px-4 block w-full bg-gray-200 border-transparent rounded-lg"
          style={{ height: "72px" }}
        ></div>
      </div>

      <div className="w-full">
        <label className="block text-lg font-medium mb-2">
          Description
        </label>
        <div
          className="py-3 px-4 block w-full bg-gray-200 border-transparent rounded-lg"
          style={{ height: "120px" }}
        ></div>
      </div>

      <div>
        <label className="block text-lg font-medium mb-2">Urgency</label>
        <div className="py-3 px-4 w-full bg-gray-200 border-transparent rounded-lg"></div>
      </div>

      <div>
        <label className="block text-lg font-medium mb-2">Status</label>
        <div className="py-3 px-4 w-full bg-gray-200 border-transparent rounded-lg"></div>
      </div>
    </div>


    <div className="flex space-x-3 mt-5">
      <div className="py-3 px-5 bg-gray-200 rounded-lg"></div>
    </div>
  </div>
  )
}

export default loading
