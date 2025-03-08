import React from 'react'

const Title = ({ text, mini_text, className , span_text, }) => {
    return (
        <div className='text-center mt-[122px] '>
            <h2 className={`text-3xl font-bold ${className}`}>{text} <span className='text-[#F48C06]'>{span_text}</span></h2>
            <p className={`text-xl text-gray-400 ${className}`}>{mini_text}</p>
        </div>
    )
}

export default Title