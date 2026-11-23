import { Mail } from 'lucide-react';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const columns = [
    {
        title: "Company",
        links: [
            { to: "/about", label: "About Larva Coding Academy" },
            { to: "/news", label: "News" },
            { to: "/cert", label: "Certification" },
            { to: "/partners", label: "Our Partners" },
        ],
    },
    {
        title: "Courses",
        links: [
            { to: "/course/1", label: "Full Stack Development" },
            { to: "/course/2", label: "Front End Development" },
            { to: "/course/3", label: "Back End Development" },
            { to: "/course/5", label: "Cyber Security" },
            { to: "/course/4", label: "Product Design" },
            { to: "/courses", label: "See More..." },
        ],
    },
    {
        title: "Support",
        links: [
            { to: "/privacy", label: "Privacy Policy" },
            { to: "/terms", label: "Terms of Use" },
            { to: "/faq", label: "FAQ" },
            { to: "/contact", label: "Contact Us" },
        ],
    },
]

const socials = [
    { src: "/Image/instagram-line.png", label: "Instagram" },
    { src: "/Image/twitter-x-fill.png", label: "X (Twitter)" },
    { src: "/Image/facebook pr.png", label: "Facebook" },
    { src: "/Image/linkedin.png", label: "LinkedIn" },
]

const Footer = () => {
    const footerLink = ({ isActive }) =>
        `hover:text-yellow-400 transition-colors ${isActive ? "text-white font-semibold" : "text-zinc-200"}`;

    return (
        <footer className="bg-zinc-500 text-zinc-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 md:pt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-12">

                    {/* Brand + contact */}
                    <div className="space-y-5 sm:col-span-2 lg:col-span-1">
                        <Link to="/" className="inline-block">
                            <img src="/Image/Vector.png" alt="Larva Coding Academy" className="h-11 md:h-12 w-auto" />
                        </Link>

                        <div className="space-y-4 text-sm leading-relaxed max-w-sm">
                            <h3 className="font-bold text-white text-lg">Join us at:</h3>
                            <p>Ibadan Address: NO 5, Akinsehinwa Street, Beside Adis Hotel, Off Favos bus stop, New Bodija, Ibadan.</p>

                            <p className="flex items-start gap-3">
                                <img src="/Image/whatsapp-line.png" alt="" className="w-5 h-5 mt-0.5 shrink-0" />
                                <span>
                                    <span className="font-bold text-white">Call/WhatsApp: </span>
                                    <a href="tel:09158476665" className="hover:text-yellow-400 transition-colors">09158476665</a>
                                </span>
                            </p>

                            <p className="flex items-start gap-3">
                                <Mail size={20} className="mt-0.5 shrink-0" />
                                <span className="break-all">
                                    <span className="font-bold text-white">Email: </span>
                                    <a href="mailto:Larvanigeria@gmail.com" className="hover:text-yellow-400 transition-colors">Larvanigeria@gmail.com</a>
                                </span>
                            </p>
                        </div>
                    </div>

                    {columns.map((col) => (
                        <div key={col.title} className="lg:pt-14">
                            <h3 className="font-bold text-white text-lg mb-4 md:mb-6">{col.title}</h3>
                            <ul className="space-y-3 md:space-y-4 text-sm">
                                {col.links.map((l) => (
                                    <li key={l.to}><NavLink to={l.to} className={footerLink}>{l.label}</NavLink></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-6 border-t border-white/20 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
                    <p>© {new Date().getFullYear()} Larva Coding Academy. All rights reserved.</p>
                    <div className="flex gap-6">
                        {socials.map((s) => (
                            <img key={s.label} src={s.src} alt={s.label} title={s.label} className="w-5 h-5 opacity-90 hover:opacity-100" />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
