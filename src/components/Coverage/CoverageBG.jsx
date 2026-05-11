import React from 'react'
import Coverage from './Coverage'

const CoverageBG = () => {
    return (
        <div className='bg-white rounded-3xl p-15 '>
            <h1 className='text-3xl font-extrabold text-[#03373D]'>We are available in 64 districts</h1>
            <div className='border border-gray-400 mt-20 mb-20'></div>
            <h1 className='text-2xl font-bold text-[#03373D] mb-10'>We deliver almost all over Bangladesh</h1>
            <Coverage></Coverage>
        </div>
    )
}

export default CoverageBG