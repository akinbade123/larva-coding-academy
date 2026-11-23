import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const NotFound = () => {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-6 py-32 px-6 text-center">
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <p className="text-gray-500 text-lg">
          This page is <span className="text-orange-400">coming soon</span> or doesn't exist.
        </p>
        <Link
          to="/"
          className="px-7 py-4 text-white text-sm font-medium rounded-xl bg-linear-to-br from-[#7A5DA8] to-[#F39821] shadow-sm hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound
