import React, { use } from 'react'
import ServiceCard from './ServiceCard'

const ServicesCard = ({ servicePromise }) => {
    const serviceData = use(servicePromise)
    console.log(serviceData)
    return (

        <div className='grid grid-cols-3 gap-5'>
            {
                serviceData.map(data => <ServiceCard data={data}></ServiceCard>)
            }
        </div>
    )
}

export default ServicesCard