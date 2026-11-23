import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import upcomImg from "../assets/upcom.svg";
import coneImg from "../assets/cone.svg";

const socials = [
    { Icon: BsInstagram, label: "Instagram" },
    { Icon: BsTwitterX, label: "X (Twitter)" },
    { Icon: BsFacebook, label: "Facebook" },
    { Icon: BsLinkedin, label: "LinkedIn" },
]

const FollowUs = () => {
    return (
        <section className="relative bg-white text-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

                {/* LEFT: image with offset colour blocks */}
                <div className="relative w-full max-w-md sm:max-w-lg mx-auto pr-6 pb-6 sm:pr-10 sm:pb-10">
                    <div className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-purple-500 rounded-3xl" />
                    <div className="absolute right-3 bottom-3 sm:right-5 sm:bottom-5 w-3/4 h-3/4 bg-orange-400 rounded-2xl" />

                    <div className="relative aspect-square overflow-hidden rounded-3xl shadow-xl">
                        <img src={upcomImg} alt="Team of trainers" loading="lazy" className="w-full h-full object-cover" />
                    </div>

                    {/* Floating "Follow Us" card */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-right-2 bg-orange-400 px-6 py-4 rounded-2xl shadow-xl">
                        <p className="text-gray-900 font-bold text-center mb-2">Follow Us</p>
                        <div className="flex justify-center gap-5 text-gray-900 text-xl">
                            {socials.map(({ Icon, label }) => (
                                <span key={label} title={label} aria-label={label} className="hover:text-white transition-colors">
                                    <Icon />
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT: content */}
                <div className="relative z-10 text-center lg:text-left">
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">
                        About <span className="text-orange-400">Us</span>
                    </h2>

                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        We're proud to offer <br className="hidden sm:block" />
                        top-quality training
                    </p>

                    <div className="w-32 sm:w-38 h-1.5 bg-linear-to-r from-[#F39C12] to-[#D35400] rounded-full mb-6 mx-auto lg:mx-0" />

                    <div className="space-y-4 text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed text-base sm:text-lg">
                        <p>
                            Our trainers are present full-time in our school with a cumulative experience of over 25 years in website design and software programming. They are professional developers who want to pass on their knowledge and passion for programming to our students.
                        </p>
                        <p>
                            Our certificate is accredited by the Ministry of Education, Abuja, Nigeria and also the Skills Development Council of Canada.
                        </p>
                    </div>

                    <Link
                        to="/about"
                        className="inline-block mt-8 rounded-xl bg-linear-to-br from-[#7A5DA8] to-[#F39821] px-10 py-4 font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                    >
                        Read more
                    </Link>
                </div>
            </div>

            {/* Decorative cone (desktop only) */}
            <img
                src={coneImg}
                alt=""
                aria-hidden="true"
                className="hidden lg:block absolute -bottom-16 right-10 w-56 xl:w-72 pointer-events-none opacity-90"
            />
        </section>
    )
}

export default FollowUs
