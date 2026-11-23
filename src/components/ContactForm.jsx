import React, { useState } from 'react'

const inputClass =
    "w-full bg-gray-50 border border-gray-300 px-4 py-3.5 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A5DA8]/40 focus:border-[#7A5DA8] transition"

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: send formData to a backend / email service once one is available.
        setSent(true)
        setFormData({ name: '', email: '', message: '' })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setSent(false)
    }

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-sm ring-1 ring-gray-100">
                <div className="bg-[#fdf2e9] p-8 sm:p-10 lg:p-12 flex items-center justify-center">
                    <img
                        src="/Image/FormImage.svg"
                        alt="Character illustration"
                        loading="lazy"
                        className="w-full max-w-xs md:max-w-sm h-auto object-contain"
                    />
                </div>

                <div className="p-6 sm:p-10 lg:p-14">
                    <header className="mb-8">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
                            Get In <span className="text-orange-500">Touch</span>
                        </h2>
                        <p className="text-gray-500 mt-2">Contact our friendly reception staff with any enquiry</p>
                    </header>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <label className="sr-only" htmlFor="cf-name">Name</label>
                        <input id="cf-name" name="name" type="text" placeholder="Name" required
                            value={formData.name} onChange={handleChange} className={inputClass} />

                        <label className="sr-only" htmlFor="cf-email">Email Address</label>
                        <input id="cf-email" name="email" type="email" placeholder="Email Address" required
                            value={formData.email} onChange={handleChange} className={inputClass} />

                        <label className="sr-only" htmlFor="cf-message">Message</label>
                        <textarea id="cf-message" name="message" placeholder="Message" rows="6" required
                            value={formData.message} onChange={handleChange} className={`${inputClass} resize-y min-h-36`} />

                        {sent && (
                            <p className="text-green-600 font-medium" role="status">
                                Thanks! Your message has been received. We will get back to you soon.
                            </p>
                        )}

                        <button
                            type="submit"
                            className="w-full py-4 mt-2 font-bold text-white rounded-xl bg-linear-to-br from-[#7A5DA8] to-[#F39821] shadow-sm hover:shadow-md hover:opacity-95 transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
