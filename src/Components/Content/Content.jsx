import React from 'react'
import Title from '../Title/Title'

const Content = ({className,span_text, mini_text,text,img}) => {
  return (
    <div className={`flex justify-between items-center my-[113px] ${className}`}>
        <div className='w-[468px]'>
            <h2 className={`text-3xl mb-[20px] font-bold`}><span className='text-[#F48C06]'>{span_text}</span> {text}</h2>
            <p className={`text-xl text-gray-400}`}>{mini_text}</p>
        </div>
        <div className='w-[500px]'>
            <img className='w-full' src={img} alt="" />
        </div>
    </div>
  )
}

export default Content