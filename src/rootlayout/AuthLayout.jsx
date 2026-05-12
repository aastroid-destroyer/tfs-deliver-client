import React from 'react'
import Logo from '../components/Logo/Logo'
import { Outlet } from 'react-router'
import authImage from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto min-h-screen'>
            <Logo></Logo>
            <div className='flex items-center justify-center'>
                <div className='flex-1'>
                    <Outlet />
                </div>
                <div className='flex-1'>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout