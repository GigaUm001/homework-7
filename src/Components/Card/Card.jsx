import React from 'react'

const Card = ({ className, userName, userJob, img, btn }) => {
    return (
        <div className={`p-4 w-[300px] bg-white`}>
            <div className='w-[250px]'>
                <img className='w-full' src={img} alt="" />
            </div>
            <h1 className='text-xl text-blue-400'>{userName}</h1>
            <p>{userJob}</p>
            <button className={`${className}`}>{btn}</button>
        </div>
    )
}

export default Card