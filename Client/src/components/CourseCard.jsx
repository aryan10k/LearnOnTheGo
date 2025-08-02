import React from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CourseCard = ({course}) => {
  const navigate = useNavigate()
  const {user} = useSelector(store=>store.auth)
  return (
    <Card key={course._id} className="bg-white shadow-lg">
      <img src={course.courseThumbnail} alt="" className='w-full h-48 object-cover'/>
      <div className='p-6'>
        <h2 className='text-xl font-semibold text-green-800 mb-3'>{course.courseTitle}</h2>
        <p className='text-gray-600 mb-4'>{course.subTitle}</p>
        <Button onClick={()=>navigate(user ? `/courses/${course._id}`:"/login")} className="bg-green-800 text-white font-bold py-2 px-4 rounded hover:bg-green-700">Learn More</Button>
      </div>
    </Card>
  )
}

export default CourseCard
