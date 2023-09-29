'use client';
import React, {useState} from 'react'
import { HiOutlineChevronUp, HiOutlineUser, HiOutlineChevronDown} from 'react-icons/hi'


const ProfileSettings = ({open=false, onToggleOpen}) => {

    const handleOpen = () => {
        onToggleOpen(0)
    }
    
    

  return (
    <div className="mb-2">
        <div onClick={handleOpen} className={`${open ? "rounded-t-lg" : "rounded-lg"} cursor-pointer px-4 py-2 border border-slate-100 flex justify-between items-center`}>
            <div className="flex items-center">
                <HiOutlineUser className='text-lg mr-2' /> 
                <h4 className='text-md font-medium '> 
                Profile
                </h4>
            </div>
            <div className="text-lg" >
            {open ? 
            <HiOutlineChevronUp />
            : <HiOutlineChevronDown /> }

            </div>
        </div>
        {open && <div className='bg-slate-100 px-8 py-4 rounded-b-md'>
            <div className='mb-4'>
                <h6 className='text-xs mb-0.5 font-medium'>Full Name</h6>
                <p className='font-semibold text-sm'>Precious Nwaoha</p>
            </div>
            <div className='mb-4'>
                <h6 className='text-xs mb-0.5 font-medium'>Email</h6>
                <p className='font-semibold text-sm'>exampleswaper@gmail.com</p>
            </div>
            <div className='mb-4'>
                <h6 className='text-xs mb-0.5 font-medium'>Mobile Number</h6>
                <p className='font-semibold text-sm'>09003839202</p>
            </div>
            <div className='mb-4'>
                <h6 className='text-xs mb-0.5 font-medium'>Username</h6>
                <p className='font-semibold text-sm'>preciousnwaoha</p>
            </div>

            <button className="btn btn-contained ">EDIT PROFILE</button>
        </div>}
    </div>
  )
}

export default ProfileSettings