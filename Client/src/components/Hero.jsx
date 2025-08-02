import { Award, Search, User } from 'lucide-react'
import React from 'react'
import HeroImg from '../assets/HeroImg.png'
import CountUp from 'react-countup'

const Hero = () => {
    return (
        <div className='bg-green-800 pt-14'>
            <div className='lg:h-[700px] max-w-7xl mx-auto flex md:flex-row flex-col gap-10 items-center'>
                {/* text section */}
                <div className='space-y-7 px-4 md:px-0'>
                    <h1 className='text-4xl mt-10 md:mt-0 md:text-6xl font-extrabold text-gray-200'>Explore Our <span className='text-black'>Advanced level</span> <br /> Online courses for all</h1>
                    <p className='text-gray-300 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, consectetur adipiscing elit tempor ut labore</p>
                    <a
                     href="/courses"
                        className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                         Browse All Our Courses
                    </a>
                </div>
                {/* image section */}
                <div className='flex md:h-[700px] items-end relative px-4 md:px-0'>
                    <img src={HeroImg} alt="" className='w-[750px] shadow-blue-500 drop-shadow-lg' />
                    <div className='bg-slate-200 hidden md:flex gap-3 items-center rounded-md absolute top-[35%] right-0 px-4 py-2'>
                        <div className='rounded-full bg-green-400 p-2 text-white'>
                            <User />
                        </div>
                        <div>
                            <h2 className='font-bold text-2xl'><CountUp end={10} />+</h2>
                            <p className='italic text-sm text-gray-600 leading-none'>Active Students</p>
                        </div>
                    </div>
                    <div className='bg-slate-200 hidden md:flex gap-3 items-center rounded-md absolute top-[15%] left-8 px-4 py-2'>
                        <div className='rounded-full bg-green-400 p-2 text-white'>
                            <Award />
                        </div>
                        <div>
                            <h2 className='font-bold text-2xl'><CountUp end={10} />+</h2>
                            <p className='italic text-sm text-gray-600 leading-none'>Certified Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
