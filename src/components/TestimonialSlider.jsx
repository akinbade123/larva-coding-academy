import React, { useEffect, useState } from 'react'
import feedbackData from '../data/grad'
import { motion, AnimatePresence } from 'motion/react';

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % feedbackData.length)
        }, 6000);
        return () => clearInterval(timer)
    }, [currentIndex]) // restarting on change gives a full interval after a manual click

    const currentFeedback = feedbackData[currentIndex];

    return (
        <section className="bg-gray-100 py-14 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-6xl mx-auto bg-[#7D66AD] text-white rounded-3xl md:rounded-[40px] px-5 py-10 sm:px-10 md:px-20 md:py-16 text-center shadow-xl overflow-hidden">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">Graduates Feedback</h2>

                {/* Fixed min-height stops the page jumping as quotes of different lengths swap */}
                <div className="min-h-[22rem] sm:min-h-[17rem] md:min-h-[15rem] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.figure
                            key={currentIndex}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="flex flex-col items-center gap-6"
                        >
                            <blockquote className="text-sm sm:text-base md:text-lg max-w-3xl font-light leading-relaxed opacity-95">
                                “{currentFeedback.text}”
                            </blockquote>

                            <figcaption className="flex items-center gap-4 text-left">
                                <img
                                    src={currentFeedback.image}
                                    alt={currentFeedback.name}
                                    className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white object-cover"
                                />
                                <div>
                                    <p className="text-lg md:text-xl font-semibold leading-tight">{currentFeedback.name}</p>
                                    <p className="text-sm opacity-80">{currentFeedback.role}</p>
                                </div>
                            </figcaption>
                        </motion.figure>
                    </AnimatePresence>
                </div>

                <div className="flex items-center justify-center gap-2 mt-8 md:mt-10">
                    {feedbackData.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Show feedback from ${item.name}`}
                            aria-current={index === currentIndex}
                            className={`transition-all duration-300 rounded-full h-2 ${index === currentIndex
                                ? 'w-8 bg-white'
                                : 'w-2 bg-white/50 hover:bg-white/80'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialSlider
