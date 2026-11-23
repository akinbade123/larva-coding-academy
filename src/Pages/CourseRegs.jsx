import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'

const inputClass = (hasError) =>
    `w-full px-4 py-3.5 bg-white text-gray-900 rounded-xl border ${hasError ? "border-red-400" : "border-gray-300"} placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a37676]/40 focus:border-[#a37676] transition`

const Field = ({ label, name, type = "text", placeholder, value, error, onChange, className = "" }) => (
    <div className={className}>
        <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
        <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={name === "email" ? "email" : name === "firstName" ? "given-name" : "family-name"}
            aria-invalid={!!error}
            className={inputClass(error)}
        />
        {error && <p className="text-red-500 text-sm mt-1.5">{error}</p>}
    </div>
)

const CourseRegs = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subscribe: false
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let newErrors = {}

        if (!formData.firstName) newErrors.firstName = "First name is required"
        if (!formData.lastName) newErrors.lastName = "Last name is required"
        if (!formData.email) newErrors.email = "Email is required"
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Enter a valid email address"

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        // Pass the same course id forward
        navigate(`/reg-pay/${id}`)
    }

    return (
        <main className="bg-gray-100">
            <PageHero title="Course Registration" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Personal Details</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="First Name" name="firstName" placeholder="First Name"
                            value={formData.firstName} error={errors.firstName} onChange={handleChange} />
                        <Field label="Last Name" name="lastName" placeholder="Last Name"
                            value={formData.lastName} error={errors.lastName} onChange={handleChange} />
                        <Field label="Email" name="email" type="email" placeholder="you@example.com" className="sm:col-span-2"
                            value={formData.email} error={errors.email} onChange={handleChange} />
                    </div>

                    <label className="flex items-start gap-3 mt-6 cursor-pointer">
                        <input
                            type="checkbox"
                            name="subscribe"
                            checked={formData.subscribe}
                            onChange={handleChange}
                            className="w-4 h-4 mt-0.5 accent-[#a37676] shrink-0"
                        />
                        <span className="text-sm text-gray-700">
                            Send notifications to my email concerning the school update and changes
                        </span>
                    </label>

                    <button
                        type="submit"
                        className="mt-8 w-full sm:w-auto sm:min-w-56 block mx-auto px-10 py-3.5 rounded-xl text-white font-semibold bg-linear-to-r from-[#ce8a5b] via-[#a37676] to-[#9a7188] shadow-sm hover:shadow-md transition"
                    >
                        Next
                    </button>
                </form>

                <div className="flex justify-center mt-8">
                    <button onClick={() => navigate(-1)} className="text-red-500 underline text-sm">
                        Back to Previous Page
                    </button>
                </div>
            </div>
        </main>
    )
}

export default CourseRegs
