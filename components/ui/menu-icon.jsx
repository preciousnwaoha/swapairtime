'use client';
import React from 'react'

const MenuIcon = ({onClick, className}) => {



    const handleClick = () => {
        onClick()
    }

  return (
    <button className={`w-5 h-8  flex flex-col items-center justify-center cursor-pointer ${className || ""} `} onClick={handleClick}>
        <div className='w-full h-0.5 rounded-full bg-slate-950 mb-1'></div>
        <div className='w-full h-0.5 rounded-full bg-slate-950'></div>
    </button>
  )
}

export default MenuIcon