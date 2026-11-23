import React, { useEffect, useState } from 'react'
import SlideData from '../data/SlideData'
import CourseInfoList from './CourseInfoList'

const CourseSlider = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % SlideData.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [index]) // restart the timer after a manual dot click

    const currentItem = SlideData[index];

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-10 md:py-14 flex justify-center">
            <div className="bg-white shadow-lg ring-1 ring-gray-100 rounded-2xl p-5 sm:p-7 md:p-8 max-w-xl w-full">

                {/* Sliding title */}
                <div className="overflow-hidden relative mb-4">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {SlideData.map((item) => (
                            <div key={item.title} className="min-w-full">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{item.title}</h3>
                                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                                    Boost your chances to learn from top instructors...
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="border-gray-200" />

                <CourseInfoList
                    location={currentItem.location}
                    time={currentItem.time}
                    days={currentItem.days}
                    duration={currentItem.duration}
                />

                {/* Dots */}
                <div className="mt-5 sm:mt-6 flex justify-center gap-2">
                    {SlideData.map((item, i) => (
                        <button
                            key={item.title}
                            onClick={() => setIndex(i)}
                            aria-label={`Show ${item.title}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === i ? "bg-amber-400 w-6" : "bg-gray-300 hover:bg-gray-400 w-2"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CourseSlider
