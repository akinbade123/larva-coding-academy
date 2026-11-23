import React from 'react'
import AbotSec from '../components/AbotSec'
import Navbar from '../components/Navbar'

const points = [
  {
    title: "Experienced Trainers and Accreditation",
    text: "Our full-time trainers bring over 25 years of experience in website design and software programming. They are professional developers dedicated to passing on their knowledge. Our certification is accredited by both the Ministry of Education, Abuja, Nigeria, and the Skills Development Council of Canada.",
  },
  {
    title: "Industry-Focused Curriculum and Hands-On Learning",
    text: "Larva Coding Academy offers an innovative, industry-focused curriculum designed to meet current standards. With expert instructors and a hands-on learning approach, students gain practical skills to excel in real-world tech challenges.",
  },
  {
    title: "Innovation, Support, and Career Success",
    text: "We foster critical thinking, innovation, and problem-solving, preparing graduates for success. Our supportive community, cutting-edge resources, and career-focused environment help you unlock your potential.",
  },
]

const About = () => {
  return (
    <main>
      <Navbar />

      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image composition */}
          <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
            <img
              src="/Image/image 71.svg"
              alt=""
              aria-hidden="true"
              className="absolute -top-8 -left-8 sm:-top-12 sm:-left-14 w-40 sm:w-56 lg:w-64"
            />
            <div className="relative aspect-square overflow-hidden border-8 sm:border-12 border-orange-400 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]">
              <img src="/Image/AboutImage.svg" alt="Our team" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-gray-900 font-bold text-base sm:text-lg uppercase tracking-wider mb-2">
              About <span className="text-orange-400">Us</span>
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              We're proud to offer top-quality training
            </h1>
            <div className="w-32 sm:w-38 h-1.5 mt-5 bg-linear-to-r from-[#F39C12] to-[#D35400] rounded-full mx-auto lg:mx-0" />

            <div className="space-y-8 mt-10 text-left">
              {points.map((p) => (
                <div key={p.title}>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{p.title}</h2>
                  <p className="text-gray-500 leading-relaxed text-sm sm:text-base">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AbotSec />
    </main>
  )
}

export default About
