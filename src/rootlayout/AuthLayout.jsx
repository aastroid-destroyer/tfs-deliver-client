import React from 'react'
import Logo from '../components/Logo/Logo'
import { Outlet } from 'react-router'
import authImage from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        // Set overflow-hidden to prevent body scroll if the layout is exactly 100vh
        <div className='w-11/12 mx-auto h-screen flex flex-col overflow-hidden'>
            <div className='py-4'>
                <Logo />
            </div>

            {/* Main container: flex-grow fills the remaining screen height */}
            <div className='flex flex-1 items-stretch justify-center pb-8 gap-8'>

                {/* Left side: Outlet container */}
                <div className='flex-1 flex flex-col'>
                    <Outlet />
                </div>

                {/* Right side: Image container */}
                <div className='hidden md:flex flex-1'>
                    <img
                        src={authImage}
                        alt="Auth"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout