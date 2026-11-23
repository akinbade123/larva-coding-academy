import React from 'react'
import FeatureCard from './FeatureCard'

const Section2 = () => {
  return (
    <section className="bg-white">
      {/* Why Larva */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Why <span className="text-orange-500">Larva?</span>
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-700 leading-tight mt-3 sm:mt-4">
            A place where Tech Experts Meet
          </p>

          <div className="w-32 sm:w-48 h-1.5 bg-linear-to-r from-orange-400 to-orange-900 rounded-full mt-6 sm:mt-8 mx-auto md:mx-0" />

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md mt-6 mx-auto md:mx-0">
            Larva Coding Academy stands out as one of the best institutions for anyone passionate about
            technology. With an industry-focused curriculum and expert instructors.
          </p>
        </div>

        <FeatureCard
          image="/Image/image 57.svg"
          title="Expert Tutors"
          text="Our tutors are highly experienced and knowledgeable in their fields."
        />
      </div>

      {/* More features */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        <FeatureCard
          image="/Image/image 81.svg"
          title="Tested & Trusted"
          text="We have our 100+ graduates who tested and trusted in us."
        />
        <FeatureCard
          image="/Image/image 62.svg"
          title="Conducive Environment"
          text="We’ve created a conducive environment that helps you focus."
        />
      </div>
    </section>
  )
}

export default Section2
