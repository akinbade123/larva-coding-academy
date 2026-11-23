import React from 'react'
import { courseData, modules } from "../data/data";
import { Link, useParams } from 'react-router-dom';
import { ChevronsRight, LockIcon } from 'lucide-react';
import PageHero from '../components/PageHero';
import CourseInfoList from '../components/CourseInfoList';
import NotFound from './NotFound';

const CourseDetail = () => {
    const { id } = useParams()

    const course = courseData.find((item) => item.id === Number(id))
    const courseModules = modules.filter((item) => item.courseId === Number(id))
    const totalTopics = courseModules.reduce((sum, m) => sum + m.topics, 0)

    if (!course) return <NotFound />

    return (
        <main className="w-full bg-gray-50 pb-16">
            <PageHero title={course.title} subtitle="Course Details" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 lg:mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">

                    {/* Price / register card — first on mobile, overlaps the hero on desktop */}
                    <aside className="order-first lg:order-last lg:-mt-48 lg:sticky lg:top-6 w-full max-w-md mx-auto lg:max-w-none">
                        <div className="bg-white p-3 rounded-2xl shadow-xl">
                            <div className="bg-gray-100 rounded-2xl overflow-hidden">
                                <div className="bg-linear-to-br from-purple-700 via-purple-600 to-orange-400 p-6 text-white min-h-40 sm:min-h-48 flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold leading-tight">{course.title}</h2>
                                        <p className="mt-2 font-semibold">{course.duration}</p>
                                    </div>
                                    <div className="w-10 h-10 bg-white/20 rounded-full self-end" />
                                </div>

                                <div className="p-6 text-center">
                                    <Link
                                        to={`/course-registration/${course.id}`}
                                        className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
                                    >
                                        REGISTER
                                    </Link>

                                    <p className="mt-6 text-2xl font-bold text-gray-800">{course.price}</p>

                                    <div className="mt-6 text-left border-t border-gray-200 pt-6">
                                        <h3 className="text-xs text-gray-500 uppercase font-semibold mb-3">Course Includes</h3>
                                        <ul className="space-y-2 text-gray-600 text-sm">
                                            {[`${courseModules.length} Modules`, `${totalTopics} Topics`, "Course Certificate"].map((t) => (
                                                <li key={t} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0" />
                                                    {t}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Course description */}
                    <section className="lg:col-span-2 bg-white p-5 sm:p-8 rounded-2xl shadow-md">
                        <p className="text-sm sm:text-base leading-relaxed text-gray-700">{course.descriptionCard}</p>

                        {course.new && <p className="mt-6 text-sm sm:text-base text-gray-700">{course.new}</p>}

                        <p className="text-xl sm:text-2xl lg:text-3xl font-bold mt-2 text-purple-800 whitespace-normal">
                            {course.cohort.replace(/\s+-\s+/, " – ")}
                        </p>

                        <div className="mt-6 border-t border-gray-100 pt-2">
                            <CourseInfoList
                                location={course.location}
                                time={course.time}
                                days={course.days}
                                duration={course.classDuration}
                            />
                        </div>

                        <button className="mt-8 w-full sm:w-auto bg-linear-to-r from-purple-600 to-orange-400 hover:from-purple-700 hover:to-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-sm">
                            Download Curriculum
                        </button>
                    </section>
                </div>

                {/* Course content */}
                <section className="lg:w-2/3 mt-12 md:mt-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 uppercase tracking-tight mb-6">
                        Course Content
                    </h2>

                    <ol className="space-y-3 sm:space-y-4">
                        {courseModules.map((module, i) => (
                            <li
                                key={module.id}
                                className="group flex items-center justify-between gap-4 p-4 sm:p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
                                    <ChevronsRight size={20} className="text-purple-600 shrink-0 mt-0.5 sm:mt-0 transition-transform group-hover:translate-x-1" />
                                    <div className="min-w-0">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-700 leading-snug">
                                            Module {i + 1}: {module.title}
                                        </h3>
                                        <p className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400 font-medium mt-1">
                                            <LockIcon size={13} className="shrink-0" aria-label="Locked" />
                                            {module.topics} Topics
                                        </p>
                                    </div>
                                </div>
                                <span className="w-6 h-6 border-2 border-orange-400 rounded-full shrink-0" />
                            </li>
                        ))}
                    </ol>
                </section>
            </div>
        </main>
    )
}

export default CourseDetail
