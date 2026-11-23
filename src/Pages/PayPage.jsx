import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { cart } from '../data/data';

const PayPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [paid, setPaid] = useState(false);
    const [viewReceipt, setViewReceipt] = useState(false);

    const carting =
        location.state?.carting ||
        cart.find(item => item.id === Number(id));

    if (!carting) return <p className="text-center py-20">Course not found</p>;

    return (
        <section className="relative min-h-screen bg-gray-100">

            {/* MAIN */}
            <div className={`${(paid || viewReceipt) ? 'pointer-events-none' : ''}`}>
                <Navbar />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start px-4 py-6 md:py-10">

                    {/* LEFT */}
                    <div className="space-y-5 md:space-y-6">
                        <div className="w-full max-w-sm md:max-w-md rounded-xl p-5 md:p-6 bg-linear-to-r from-blue-700 via-purple-600 to-indigo-800 text-white shadow-lg md:shadow-xl">
                            <h2 className="text-xs md:text-sm tracking-widest uppercase">Bank Name</h2>

                            <div className="mt-6 md:mt-10 text-lg md:text-xl tracking-[0.2em]">
                                4532 3100 9999 1048
                            </div>

                            <div className="flex justify-between mt-6 md:mt-10 text-[9px] md:text-[10px] uppercase opacity-80">
                                <span>Cardholder Name</span>
                                <span>Expires</span>
                            </div>

                            <div className="flex justify-between text-xs md:text-sm uppercase">
                                <span>John Doe</span>
                                <span>08/29</span>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-400 text-xs md:text-sm">Product:</p>
                            <h3 className="font-bold text-base md:text-lg">{carting.title}</h3>
                        </div>

                        <div>
                            <p className="text-gray-400 text-xs md:text-sm">Amount to Pay:</p>
                            <h3 className="font-bold text-base md:text-lg text-indigo-700">
                                ₦{carting.price.toLocaleString()}
                            </h3>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm md:shadow-none">
                        <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6">
                            Payment <span className="text-orange-400">Details</span>
                        </h2>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setPaid(true);
                            }}
                            className="space-y-4 md:space-y-5"
                        >
                            <input type="text" placeholder="Card Holder Name" required className="w-full p-3 border rounded-lg text-sm md:text-base" />
                            <input type="text" placeholder="Card Number" required className="w-full p-3 border rounded-lg text-sm md:text-base" />

                            <div className="grid grid-cols-3 gap-3 md:gap-4">
                                <input placeholder="MM" required className="p-3 border rounded-lg text-sm" />
                                <input placeholder="YYYY" required className="p-3 border rounded-lg text-sm" />
                                <input placeholder="CVV" required className="p-3 border rounded-lg text-sm" />
                            </div>

                            <button className="w-full py-3 md:py-4 rounded-lg bg-gradient-to-r from-purple-600 to-orange-400 text-white font-bold text-sm md:text-base">
                                Pay ₦{carting.price.toLocaleString()}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {(paid || viewReceipt) && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-sm p-3 md:p-4 overflow-y-auto">

                    {/* SUCCESS */}
                    {paid && !viewReceipt && (
                        <div className="bg-white rounded-[30px] md:rounded-[40px] max-w-md w-full p-6 md:p-10 text-center shadow-lg md:shadow-none">

                            <div className="flex justify-center mb-5 md:mb-6">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-[#A172AF] to-[#F19B38] flex items-center justify-center">
                                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeWidth="4" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-[#6D4C9E] mb-2">Success!</h2>
                            <div className="text-4xl md:text-5xl mb-5 md:mb-6">👍🤩</div>

                            <p className="text-gray-500 text-xs md:text-sm">Your payment was successful.</p>
                            <p className="text-gray-500 text-xs md:text-sm mb-6 md:mb-8">
                                A receipt for your purchase has been sent to your email.
                            </p>

                            <button
                                onClick={() => setViewReceipt(true)}
                                className="w-full py-3 md:py-4 rounded-xl bg-gradient-to-r from-[#A874A3] to-[#D58A4F] text-white font-bold text-sm md:text-base mb-4"
                            >
                                View Receipt
                            </button>

                            <button onClick={() => navigate('/')} className="text-red-500 text-sm underline">
                                Back to Home Page
                            </button>
                        </div>
                    )}

                    {/* RECEIPT */}
                    {viewReceipt && (
                        <div
                            id="printable-receipt"
                            className="bg-white rounded-[20px] md:rounded-[24px] 
                            w-full max-w-md md:max-w-xl 
                            max-h-[90vh] overflow-y-auto
                            p-6 md:p-10 text-center
                            shadow-lg md:shadow-none"
                        >

                            {/* ICON */}
                            <div className="flex justify-center mb-5 md:mb-6">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-b from-[#A172AF] to-[#F19B38] flex items-center justify-center">
                                    <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeWidth="4" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* TITLE */}
                            <h2 className="text-xl md:text-2xl font-semibold text-[#6D4C9E] mb-6 md:mb-8 leading-relaxed max-w-sm mx-auto">
                                Your transfer has successfully been processed
                            </h2>

                            {/* DETAILS */}
                            <div className="space-y-3 md:space-y-4 text-xs md:text-base mb-6 md:mb-8">
                                <div className="flex justify-between text-gray-500">
                                    <span>Confirmation Number:</span>
                                    <span className="text-gray-300">324678553946579</span>
                                </div>

                                <div className="flex justify-between text-gray-500">
                                    <span>Payment Amount:</span>
                                    <span className="text-gray-300">₦ {carting.price.toLocaleString()}</span>
                                </div>

                                <hr className="border-dashed border-gray-200" />

                                <div className="flex justify-between text-gray-500">
                                    <span>Payment Time:</span>
                                    <span className="text-gray-300">
                                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>

                                <div className="flex justify-between text-gray-500">
                                    <span>Payment Date:</span>
                                    <span className="text-gray-300">
                                        {new Date().toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </span>
                                </div>

                                <hr className="border-dashed border-gray-200" />

                                <div className="flex justify-between text-gray-500">
                                    <span>From:</span>
                                    <span className="text-gray-300">John Doe</span>
                                </div>

                                <div className="flex justify-between text-gray-500">
                                    <span>To:</span>
                                    <span className="text-gray-300">Larva Coding Academy</span>
                                </div>
                            </div>

                            {/* FOOTER */}
                            <div className="text-gray-400 text-[11px] md:text-sm space-y-2 mb-6 md:mb-8 max-w-md mx-auto">
                                <p>
                                    The details of your payment were sent to your email:
                                    <span className="text-gray-300"> johndoe@gmail.com</span>
                                </p>
                                <p>If you need any assistance, call 09158476665</p>
                                <p>Please print and retain a copy of this confirmation.</p>
                            </div>

                            {/* ACTIONS */}
                            <div className="flex flex-col items-center gap-3 md:gap-4">
                                <button
                                    onClick={() => window.print()}
                                    className="w-36 md:w-40 py-2.5 rounded-lg bg-gradient-to-r from-[#A874A3] to-[#D58A4F] text-white font-semibold text-sm"
                                >
                                    Print
                                </button>

                                <button
                                    onClick={() => navigate('/')}
                                    className="text-red-500 text-sm underline"
                                >
                                    Back to Home Page
                                </button>
                            </div>

                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

export default PayPage;