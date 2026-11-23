import React from 'react'
import { Link } from 'react-router-dom'

const AbotSec = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#333]">
      <div className="absolute -left-20 top-1/2 h-64 w-64 rounded-full bg-purple-100/50 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-orange-100/50 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="text-center lg:text-left">
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Do You Want To{" "}
            <span className="bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Become An Instructor?
            </span>
          </h2>

          <p className="mb-8 md:mb-10 text-lg md:text-xl font-medium text-gray-500">We Can Do It Together</p>

          <Link
            to="/contact"
            className="inline-block rounded-xl bg-linear-to-r from-[#b388eb] via-[#d4a373] to-[#f4a261] px-10 py-4 font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            Contact Us
          </Link>
        </div>

        <div className="relative w-full max-w-lg mx-auto">
          <img
            src="/Image/image 72.png"
            alt=""
            aria-hidden="true"
            className="hidden sm:block absolute -top-8 -left-10 w-24 md:w-32 opacity-80"
          />
          <img
            src="/Image/FrameAb.svg"
            alt="Instructor illustration"
            loading="lazy"
            className="relative w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default AbotSec
