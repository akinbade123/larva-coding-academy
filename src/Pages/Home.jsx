import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import CourseCard from "../components/CourseCard";
import TestimonialSlider from "../components/TestimonialSlider";
import FollowUs from "../components/FollowUs";
import UpComing from "../components/UpComing";
import CourseSlider from "../components/CourseSlider";
import Ready from "../components/Ready";

const Home = () => {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="relative bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-sm sm:text-base md:text-lg font-raleway text-[#D99B52] font-semibold mb-3">
              Perfect Place to Begin or Grow Your Tech Career
            </p>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#333333] leading-tight">
              Your Gateway to the
              <span className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-3 sm:mt-5">
                <img
                  src="/Image/Group 1.png"
                  alt="Tech"
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                />
                <span>World</span>
              </span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
              News, reviews, tutorials and more. Elevate your Tech knowledge today.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex justify-center px-8 py-4 text-white text-sm sm:text-base font-semibold rounded-xl bg-linear-to-br from-[#7A5DA8] to-[#F39821] shadow-md hover:shadow-lg hover:opacity-95 transition-all"
              >
                Contact Us
              </Link>
              <Link
                to="/courses"
                className="inline-flex justify-center px-8 py-4 text-[#7A5DA8] text-sm sm:text-base font-semibold rounded-xl border-2 border-[#7A5DA8]/30 hover:border-[#7A5DA8] bg-white transition-all"
              >
                Explore Courses
              </Link>
            </div>
          </div>

          <div className="w-full max-w-md sm:max-w-lg mx-auto lg:max-w-none">
            <img src="/Image/image 52.svg" alt="Students learning tech" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Separator line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-linear-to-r from-[#7A5DA8] to-[#F39821]" />
        </div>
      </section>

      <Slide />
      <Section1 />
      <Section2 />
      <CourseCard />
      <TestimonialSlider />
      <FollowUs />
      <UpComing />
      <CourseSlider />
      <Ready />
    </main>
  );
};

export default Home;
