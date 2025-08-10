import React from 'react'

const Hero = () => {
  return (
    <div className="m-10 p-10 text-center max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Latest Blogs</h1>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magni assumenda perspiciatis repudiandae quis commodi id non nisi? Quibusdam ipsum doloribus rem molestias voluptates deleniti eum totam, fugit provident iure.
      </p>
      <div className="flex justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded-l-md p-3 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          className="bg-blue-600 text-white px-5 rounded-r-md hover:bg-blue-700 transition-colors"
          type="button"
        >
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Hero
