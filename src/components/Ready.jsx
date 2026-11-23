import React from 'react'
import { Link } from 'react-router-dom'

const Ready = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-[#7E61AD] px-6 py-12 sm:px-10 md:px-16 md:py-20 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Ready to get started?
        </h2>

        <p className="mx-auto mb-8 md:mb-10 max-w-2xl text-sm sm:text-base md:text-lg font-light leading-relaxed opacity-90">
          Join us at Larva Tech Academy to be one of tech expert.
          Make your tech dreams come true. A trial will convince you
        </p>

        <Link
          to="/contact"
          className="inline-block rounded-xl bg-white px-8 py-4 text-sm md:text-base font-semibold text-[#7E61AD] transition-all hover:bg-gray-100 hover:shadow-lg active:scale-95"
        >
          Apply now
        </Link>
      </div>
    </section>
  )
}

export default Ready
