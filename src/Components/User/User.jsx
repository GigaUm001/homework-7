import React from 'react'

const User = ({ className, userName, userJob, img, btn }) => {
    return (
        <>
            <div className={`p-4 text-center ${className}`}>
                <div className='w-[250px]'>
                    <img className='w-full' src={img} alt="" />
                </div>
                <h1 className='text-3xl'>{userName}</h1>
                <p>{userJob}</p>
            </div>
            {/* <div className={`p-4 text-center w-[300px]`}>
                <h1 className='text-3xl'>OAisko</h1>
                <p>ctvbnm</p>
            </div> */}
        </>

    )
}

export default User