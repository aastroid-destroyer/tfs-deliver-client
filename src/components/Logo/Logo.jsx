import React from 'react'
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex items-center gap-1'>
            <img src={logo} alt="" />
            <h1 className='text-3xl font-extrabold -ms-2'>TFSDeliver</h1>
        </div>
    )
}

export default Logo