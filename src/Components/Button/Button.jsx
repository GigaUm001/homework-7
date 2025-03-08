import React from 'react'

const Button = ({text, className}) => {
  return (
    <>
        <button className={`px-[50px] py-[13px] rounded-4xl ${className}`}>{text}</button>
    </>
)
}

export default Button