'use client';
import React, {useState} from 'react'
import { HiOutlineChevronUp, HiOutlineChevronDown} from 'react-icons/hi'
import {SlLayers} from "react-icons/sl"

const VerificationSettings = ({open=false, onToggleOpen}) => {
    const handleOpen = () => {
        onToggleOpen(4)
    }
    
  return (
    <div className="mb-4">
    <div onClick={handleOpen} className={`${open ? "rounded-t-md" : "rounded-md"} cursor-pointer px-4 py-2 border border-slate-100 flex justify-between items-center`}>
        <div className="flex items-center">
            <SlLayers className="mr-2 text-lg" />
            <h4 className='text-md font-medium'>Verification</h4>
        </div>
        <div className="text-lg" >
            {open ? 
            <HiOutlineChevronUp />
            : <HiOutlineChevronDown /> }

        </div>
    </div>
    {open && <div className='bg-slate-100 px-8 py-4 rounded-b-md'>
        <div className='mb-4'>
            <h6 className='text-sm mb-4 font-medium'>No bank account available</h6>
        </div>

        <button className="btn btn-contained ">ADD NEW BANK ACCOUNT</button>
    </div>}
</div>
  )
}

export default VerificationSettings