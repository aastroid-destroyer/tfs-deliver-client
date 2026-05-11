import React from 'react'
import serviceImg from '../../assets/service.png'

const ServiceCard = ({ data }) => {
    return (
        <div className=' bg-white rounded-2xl p-10 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <div className='mb-3'>
                    <img src={serviceImg} alt="" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-3'>
                        {data.title}
                    </h1>
                    <p>
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard