import React from 'react'
import Navbar from './Navbar'
import card1Img from '../assets/Card1.svg'

// Purple/orange banner with the navbar on top, shared by the course & checkout pages.
const PageHero = ({ title, subtitle, children }) => {
  return (
    <header className="relative w-full overflow-hidden">
      <img
        src={card1Img}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-purple-700/80 via-pink-500/65 to-orange-400/75" />

      <Navbar transparent />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pt-12 sm:pb-20 md:pt-16 md:pb-28">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl lg:max-w-[62%]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/85 mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-medium">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </header>
  )
}

export default PageHero
