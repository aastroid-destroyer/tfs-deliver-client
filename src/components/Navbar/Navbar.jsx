import React from 'react'
import Logo from '../Logo/Logo'
import { NavLink } from 'react-router'
import { IoArrowUpCircle } from 'react-icons/io5'

const Navbar = () => {
    const links = <>
        <li><NavLink>Services</NavLink></li>
        <li><NavLink>About Us</NavLink></li>
        <li><NavLink to={'/coverage'}>Coverage</NavLink></li>
    </>
    return (
        <div className='p-4 md:p-8'>
            <div className="navbar p-4 bg-base-100 shadow-sm ounded-[10px] md:rounded-[15px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div>
                        <Logo></Logo>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center justify-center gap-5'>
                        <a className="btn px-7 py-5 rounded-2xl">Log in</a>
                        <a className="btn bg-[#CAEB66] px-7 py-5 rounded-2xl">SIgn up</a>
                    </div>
                    <IoArrowUpCircle className='h-10 w-10 rotate-3' />
                </div>
            </div>
        </div>
    )
}

export default Navbar