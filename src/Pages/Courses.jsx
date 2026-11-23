import React from 'react'
import CourseCard from '../components/CourseCard'
import Navbar from '../components/Navbar'

const Courses = () => {
  return (
    <div className='text-black'>
      <Navbar/>
      <CourseCard />
    </div>
  )
}

export default Courses