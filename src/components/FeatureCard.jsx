import React from 'react'

// Image with a purple caption card overlapping its bottom edge.
// The caption stays inside the card's width at every screen size (no sideways overflow).
const FeatureCard = ({ image, alt, title, text }) => {
  return (
    <div className="relative pb-16 sm:pb-12">
      <img
        src={image}
        alt={alt ?? title}
        loading="lazy"
        className="w-full rounded-2xl object-cover aspect-505/401"
      />

      <div className="absolute bottom-0 left-3 right-3 sm:left-4 sm:right-auto sm:max-w-[85%] lg:-left-6 flex items-start gap-4 bg-[#7E65A8] text-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-lg">
        <span className="w-10 sm:w-12 h-1.5 bg-linear-to-r from-orange-400 to-orange-900 rounded-full mt-3 shrink-0" />
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-1.5">{title}</h3>
          <p className="text-sm leading-relaxed opacity-90">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
