import React from 'react'
import truckVan from '../../assets/bookingIcon.png'

const HowItWorks = () => {
    return (
        <div className='mt-10 w-10/12 mx-auto mb-10'>
            <h1 className='text-2xl font-bold mb-10'>How It Works</h1>
            <div className='grid grid-cols-4 gap-10'>
                <div className='bg-white rounded-2xl p-7'>
                    <div><img src={truckVan} alt="" /></div>
                    <div>
                        <h1 className='font-bold'>Booking Pick & Drop</h1>
                        <p className='text-xs'>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
                <div className='bg-white rounded-2xl p-7'>
                    <div><img src={truckVan} alt="" /></div>
                    <div>
                        <h1 className='font-bold'>Booking Pick & Drop</h1>
                        <p className='text-xs'>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
                <div className='bg-white rounded-2xl p-7'>
                    <div><img src={truckVan} alt="" /></div>
                    <div>
                        <h1 className='font-bold'>Booking Pick & Drop</h1>
                        <p className='text-xs'>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
                <div className='bg-white rounded-2xl p-7'>
                    <div><img src={truckVan} alt="" /></div>
                    <div>
                        <h1 className='font-bold'>Booking Pick & Drop</h1>
                        <p className='text-xs'>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks