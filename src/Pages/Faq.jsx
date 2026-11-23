import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import faqs from '../data/faq'
import Ready from '../components/Ready'
import Navbar from '../components/Navbar'


const Faq = () => {
  const [open, setOpen] = useState(0)

  return (
    <main className="bg-gray-100">
      <Navbar />

      {/* Heading */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 text-center">
        <img
          src="/Image/frequent.svg"
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute left-4 lg:left-8 top-8 w-24 lg:w-32"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          <span className="text-gray-800">Frequently </span>
          <span className="text-orange-400">Asked Questions?</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed">
          Checkout answers for your questions from the listed categories. Please contact us if you are not getting
          what you are looking for
        </p>
      </section>

      {/* Questions + illustration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
        <ul className="flex flex-col gap-4">
          {faqs.map(({ question, answer }, i) => {
            const isOpen = open === i
            return (
              <li key={question} className="bg-amber-50 rounded-2xl shadow-sm overflow-hidden">
                <h2>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-2xl"
                  >
                    <span className={`text-base sm:text-lg ${isOpen ? "text-gray-900 font-semibold" : "text-gray-600"}`}>{question}</span>
                    <ChevronDown
                      size={22}
                      className={`text-orange-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </h2>
                <div
                  id={`faq-answer-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">{answer}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="relative hidden lg:flex justify-center">
          <img src="/Image/Ellipse 6.svg" alt="" aria-hidden="true" className="absolute bottom-10 left-0 w-36" />
          <img src="/Image/faqimage.svg" alt="FAQ character" className="relative max-h-[34rem] w-auto" />
        </div>
      </section>

      <Ready />
    </main>
  )
}

export default Faq
