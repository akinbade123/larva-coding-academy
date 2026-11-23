import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { cart } from '../data/data'
import NotFound from './NotFound'

const CourseReg = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const carting = cart.find((item) => item.id === Number(id))
  if (!carting) return <NotFound />

  const price = `₦${carting.price.toLocaleString()}`

  return (
    <main className="bg-gray-50">
      <PageHero title="Course Cart" subtitle="Course Price Details" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Cart table (desktop / tablet) */}
        <div className="hidden sm:block rounded-xl overflow-hidden shadow-sm text-white">
          <table className="w-full text-sm md:text-base">
            <thead className="bg-[#C68253] font-semibold uppercase tracking-wide text-xs md:text-sm">
              <tr>
                <th className="px-5 py-4 text-left">Product</th>
                <th className="px-5 py-4 text-center">Price</th>
                <th className="px-5 py-4 text-center">Quantity</th>
                <th className="px-5 py-4 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody className="bg-[#D38944]">
              <tr>
                <td className="px-5 py-5 font-medium">{carting.title}</td>
                <td className="px-5 py-5 text-center">{price}</td>
                <td className="px-5 py-5 text-center">1</td>
                <td className="px-5 py-5 text-right font-semibold">{price}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart card (mobile) */}
        <div className="sm:hidden rounded-xl overflow-hidden bg-[#D38944] text-white shadow-sm">
          <p className="bg-[#C68253] px-5 py-3 text-xs font-semibold uppercase tracking-wide">Product</p>
          <dl className="px-5 py-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4"><dt className="opacity-80">Course</dt><dd className="font-semibold text-right">{carting.title}</dd></div>
            <div className="flex justify-between gap-4"><dt className="opacity-80">Price</dt><dd>{price}</dd></div>
            <div className="flex justify-between gap-4"><dt className="opacity-80">Quantity</dt><dd>1</dd></div>
            <div className="flex justify-between gap-4"><dt className="opacity-80">Subtotal</dt><dd className="font-semibold">{price}</dd></div>
          </dl>
        </div>

        {/* Totals */}
        <div className="mt-8 md:mt-10 w-full sm:max-w-sm sm:ml-auto bg-linear-to-r from-[#D38944] to-[#C68253] text-white rounded-xl overflow-hidden shadow-sm">
          <div className="flex justify-between px-5 py-4 border-b border-white/20">
            <span>Subtotal</span>
            <span>{price}</span>
          </div>
          <div className="flex justify-between px-5 py-4 font-bold text-lg">
            <span>Total</span>
            <span>{price}</span>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10 gap-5">
          <Link
            to={`/course-regs/${carting.id}`}
            className="w-full sm:w-auto text-center px-12 py-3.5 rounded-full text-white font-semibold bg-linear-to-r from-purple-600 to-orange-400 shadow-md hover:shadow-lg transition"
          >
            Proceed to Payment
          </Link>

          <button onClick={() => navigate(-1)} className="text-red-500 underline text-sm">
            Back to Previous Page
          </button>
        </div>
      </div>
    </main>
  )
}

export default CourseReg
