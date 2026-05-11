import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const RootLayout = () => {
  return (
    <div className='bg-gray-100'>
      <div className='flex min-h-screen flex-col'>
        <div>
          <Navbar></Navbar>
        </div>
        <div className='flex-1 w-11/12 mx-auto'>
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default RootLayout