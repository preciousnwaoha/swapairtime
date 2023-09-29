'use client';
import React, {useState} from 'react'
import { HiOutlineChevronUp, HiOutlineChevronDown} from 'react-icons/hi'
import {SlLock} from "react-icons/sl"

const SecuritySettings = ({open=false, onToggleOpen}) => {
    const handleOpen = () => {
        onToggleOpen(3)
    }
    
  return (
    <div className="mb-4">
    <div onClick={handleOpen} className={`${open ? "rounded-t-md" : "rounded-md"} cursor-pointer px-4 py-2 border border-slate-100 flex justify-between items-center`}>
        <div className="flex items-center">
            <SlLock className="mr-2 text-lg" />
            <h4 className='text-md font-medium'>Security</h4>
        </div>
        <div className="text-lg" >
            {open ? 
            <HiOutlineChevronUp />
            : <HiOutlineChevronDown /> }

        </div>
    </div>
    {open && <div className='bg-slate-100 px-8 py-4 rounded-b-md'>
        
        <div className='mb-4'>
            <h5 className='text-sm mb-2 font-medium'>Reset Password</h5>
            <p className='text-2xs'>To sign in, your password is required</p>
            <button className="btn btn-contained">RESET</button>
        </div>

        <div className='mb-4'>
            <h5 className='text-sm mb-2 font-medium'>Reset PIN</h5>
            <p className='text-2xs'>Forgot your 4 digit pin? You can reset it now!</p>
            <button className="btn btn-contained">RESET</button>
        </div>

    </div>}
</div>
  )
}

export default SecuritySettings