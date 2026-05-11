import React from 'react'
import ServicesCard from './ServicesCard'

const servicePromise = fetch('../services.json').then(res => res.json())

const OurServices = () => {


    return (
        <div className='bg-[#03373D] p-15 rounded-3xl'>
            <div className='mb-7'>
                <h1 className='text-center text-white text-3xl font-extrabold mt-10 mb-5'>Our Services</h1>
                <p className='text-center text-xs text-white mb-10'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
                <ServicesCard servicePromise={servicePromise}></ServicesCard>
            </div>
        </div>
    )
}

export default OurServices