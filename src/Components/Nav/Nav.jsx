import React from 'react'
import logo from './../../assets/img/logo.svg'
import Button from '../Button/Button'
function Nav() {
    return (
        <nav className='flex justify-between py-'>
            <div className=''>
                <img src={logo} alt="" />
            </div>
            <ul className='flex items-center gap-[80px]'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About Us</a></li>
                <div className='flex gap-[34px]'>
                    <Button text={"Login"} className={'bg-white'} />
                    <Button text={"Sign Up"} className={'bg-[#F48C06]'} />
                </div>
            </ul>
        </nav>
    )
}

export default Nav