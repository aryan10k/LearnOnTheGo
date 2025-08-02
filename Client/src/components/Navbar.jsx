import React from 'react'
import { GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(store => store.auth)

    const logoutHandler = async (e) => {
        try {
            const res = await axios.get('http://localhost:8000/api/v1/user/logout', {withCredentials:true});
            if(res.data.success){
                navigate('/')
                dispatch(setUser(null))
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }
    return (
        <div className='bg-black z-50 w-full py-3 fixed top-0'>
            <div className='max-w-7xl mx-auto flex justify-between'>
                {/* logo section */}
                <Link to='/'>
         <div className='flex items-center gap-2'> 
            <GraduationCap className='text-green-700 w-10 h-10' />
         <div>
            <h1 className='text-green-700 text-3xl font-bold leading-tight'>Learn on the go</h1>
            <p className='text-green-700 text-sm font-bold leading-tight'>An LMS App</p>
        </div>
         </div>
        </Link>
               

                {/* menu section */}
                <nav>
                    <ul className='flex gap-7 text-xl items-center font-semibold text-white'>
                        <Link to="/"><li className='cursor-pointer transition-colors hover:text-green-800'>Home</li></Link>
                        <Link to="/courses"><li className='cursor-pointer transition-colors hover:text-green-800'>Courses</li></Link>

                        {
                            !user ? (
                                <div className='flex gap-3'>
                                    <Link to="/login"><Button className="bg-green-700 hover:bg-green-600">Login</Button></Link>
                                    <Link to="/signup"><Button className="bg-gray-700 hover:bg-gray-800">Signup</Button></Link>
                                </div>
                            ) : (
                                <div className='flex items-center gap-7'>
                                    {
                                        user.role === "instructor" && <Link to="/admin/dashboard"><li className='cursor-pointer transition-colors hover:text-green-800'>Admin</li></Link>
                                    }
                                    <Link to="/profile">
                                        <Avatar>
                                            <AvatarImage src={user.photoUrl} alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </Link>

                                    <Button onClick={logoutHandler} className="bg-green-700 hover:bg-black">Logout</Button>
                                </div>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
