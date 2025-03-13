import React from 'react'
import Nav from './../Nav/Nav.jsx';
import header from './../../assets/img/header.png';
const Header = () => {
    return (
        <header className='bg-[#FFF2E1] pt-6'>
            <div className='max-w-[90%] mx-auto'>
                <Nav />
                <div className='flex justify-between items-center'>

                    <div className="max-w-lg">
                        <h1 className="text-3xl md:text-5xl font-bold">
                            <span className="text-orange-500">Studying</span>{" "}
                            <span className="text-[#3c2676]">Online is now much easier</span>
                        </h1>
                        <p className="text-gray-600 mt-4 text-xl">
                            Skilline is an interesting platform that will teach you in a more an
                            interactive way.
                        </p>

                        <div className="flex items-center mt-6 gap-4">
                            <button className="bg-orange-500 text-white text-xl font-semibold py-3 px-6 rounded-full shadow-md hover:bg-orange-600 transition">
                                Join for free
                            </button>
                            <button className="flex items-center text-xl text-gray-700 font-medium">
                                <span className="w-10 h-10 text-xl flex items-center justify-center bg-white rounded-full shadow-md mr-3">
                                    ▶️
                                </span>
                                Watch how it works
                            </button>
                        </div>
                    </div>

                    <div className="mt-10 w-[600px]">
                        <img
                            src={header}
                            alt="Student"
                            className="w-full  rounded-lg"
                        />


                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header