import React from 'react'
import classImgImg from "../assets/ClassImg.svg";

const UpComing = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-14 md:pt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 md:gap-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Upcoming <span className="text-orange-400">Classes</span>
        </h2>

        <img
          src={classImgImg}
          alt="Students in a Larva Coding Academy class"
          loading="lazy"
          className="w-full max-w-5xl rounded-2xl object-contain"
        />

        <p className="max-w-3xl text-gray-600 text-base sm:text-lg leading-relaxed">
          Don’t miss your chance to learn from top instructors and take the next step in your tech journey.
          Keep an eye on this section for updates and enrollment dates.
          Your future in tech starts here!
        </p>
      </div>
    </section>
  )
}

export default UpComing
