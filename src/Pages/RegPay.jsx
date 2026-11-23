import React, { useState } from 'react'
import { cart } from '../data/data'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import NotFound from './NotFound'

const methods = [
    {
        value: "mastercard",
        name: "Credit card",
        number: "5105 **** **** 0505",
        logo: <span className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white">MC</span>,
    },
    {
        value: "visa",
        name: "Debit card",
        number: "3566 **** **** 0505",
        logo: <span className="w-10 h-10 flex items-center justify-center text-blue-600 font-extrabold italic">VISA</span>,
    },
]

const RegPay = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [selected, setSelected] = useState("mastercard")

    const carting = cart.find(item => item.id === Number(id))
    if (!carting) return <NotFound />

    const price = `₦${carting.price.toLocaleString()}`

    return (
        <main className="bg-gray-100">
            <PageHero title="Course Payment Details" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">

                {/* Order summary — first on mobile, right column on desktop */}
                <section className="lg:order-last lg:sticky lg:top-6">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Your Order</h2>
                    <div className="rounded-2xl overflow-hidden shadow-sm">
                        <div className="flex justify-between px-5 py-4 bg-linear-to-r from-[#ce8a5b] via-[#a37676] to-[#9a7188] text-sm font-bold text-white uppercase tracking-wide">
                            <span>Product</span>
                            <span>Total</span>
                        </div>
                        <div className="flex justify-between gap-4 px-5 py-8 bg-white text-base sm:text-lg text-gray-600">
                            <span>{carting.title}</span>
                            <span className="font-semibold text-gray-800 shrink-0">{price}</span>
                        </div>
                    </div>
                </section>

                {/* Coupon + payment */}
                <section>
                    <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Coupon Code</h2>
                    <div className="flex gap-2 sm:gap-3 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <input
                                key={i}
                                maxLength={1}
                                aria-label={`Coupon character ${i + 1}`}
                                className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-200 rounded-lg text-center text-lg font-semibold uppercase focus:outline-none focus:ring-2 focus:ring-[#a37676]"
                            />
                        ))}
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm mb-10">
                        We've sent your coupon code to your email. Go to your email and verify
                    </p>

                    <h2 className="text-base sm:text-lg font-semibold mb-1 text-gray-800">
                        Make Payment Using Your Debit/Credit Card
                    </h2>
                    <p className="text-gray-400 mb-4 text-sm">Payment Methods</p>

                    <fieldset className="space-y-4">
                        <legend className="sr-only">Payment method</legend>
                        {methods.map((m) => {
                            const isOn = selected === m.value
                            return (
                                <label
                                    key={m.value}
                                    className={`flex items-center justify-between gap-4 p-4 rounded-2xl cursor-pointer transition border ${isOn
                                        ? "bg-[#2b2b2b] text-white border-gray-700"
                                        : "bg-white text-gray-900 border-transparent hover:border-gray-300"}`}
                                >
                                    <span className="flex items-center gap-3 sm:gap-4 min-w-0">
                                        {m.logo}
                                        <span className="min-w-0">
                                            <span className="block font-medium text-sm sm:text-base">{m.name}</span>
                                            <span className="block text-xs sm:text-sm text-gray-400 truncate">{m.number}</span>
                                        </span>
                                    </span>
                                    <input
                                        type="radio"
                                        name="method"
                                        value={m.value}
                                        checked={isOn}
                                        onChange={() => setSelected(m.value)}
                                        className="w-5 h-5 accent-orange-500 shrink-0"
                                    />
                                </label>
                            )
                        })}
                    </fieldset>

                    <label className="flex items-center gap-2 mt-6 cursor-pointer">
                        <input type="checkbox" className="accent-red-500" />
                        <span className="text-xs sm:text-sm text-gray-500">Save card details for future payments</span>
                    </label>

                    <Link
                        to={`/pay-page/${carting.id}`}
                        className="mt-8 block w-full sm:w-auto sm:min-w-56 sm:inline-block text-center px-10 py-3.5 text-white font-semibold rounded-xl bg-linear-to-r from-[#ce8a5b] via-[#a37676] to-[#9a7188] shadow-sm hover:shadow-md transition"
                    >
                        Next
                    </Link>

                    <div className="mt-8">
                        <button onClick={() => navigate(-1)} className="text-red-500 underline text-sm">
                            Back to Previous Page
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default RegPay
