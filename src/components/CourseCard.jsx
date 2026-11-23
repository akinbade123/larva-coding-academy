import React from 'react';
import { courseData } from '../data/data';
import { BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = () => {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">
          <span className="text-orange-500">Courses</span> We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {courseData.map((item) => (
            <article key={item.id} className="relative group flex flex-col">
              {/* Image */}
              <div className="relative h-52 sm:h-56 lg:h-64 w-full rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                {/* Price badge */}
                <span className="absolute top-4 right-4 bg-amber-500 text-white text-sm font-bold py-1 px-4 rounded-full shadow-lg">
                  {item.price}
                </span>
              </div>

              {/* Content card */}
              <div className="relative -mt-14 mx-auto w-[90%] flex-1 flex flex-col items-center text-center bg-white pt-7 pb-6 px-5 sm:px-6 rounded-3xl shadow-xl border border-gray-100">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <BadgeCheck className="text-amber-500 w-5 h-5 shrink-0 fill-amber-50" />
                  <h3 className="text-lg font-black text-gray-800 leading-tight">{item.title}</h3>
                </div>

                <span className="inline-block bg-amber-50 text-amber-600 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-tight">
                  {item.duration}
                </span>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {item.description}
                </p>

                <Link
                  to={`/course/${item.id}`}
                  className="relative text-amber-500 font-black uppercase tracking-widest text-xs py-1 hover:text-amber-600 transition-colors after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-amber-500 after:-bottom-0.5 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
