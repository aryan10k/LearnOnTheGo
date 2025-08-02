import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import CourseTab from './CourseTab'

const UpdateCourse = () => {
    return (
        <div className='md:p-10 p-4'>
            <div className='flex items-center justify-between mb-5'>
                <h1 className='font-bold text-xl'>Add detail informatin regarding course</h1>
                <Link to="lecture">
                    <Button
                        onClick={() => navigate(user ? `/courses/${course._id}` : "/login")}
                        className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
                        >Go to lectures page
                    </Button>
                </Link>
            </div>
            <CourseTab/>
        </div>
    )
}

export default UpdateCourse
