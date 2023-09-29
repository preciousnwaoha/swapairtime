import React from 'react'
import PaddedContainer from '@/components/layout/padded-container'
import {BsBell, BsHeadset} from "react-icons/bs"
import {PiEyeClosed, PiEye} from "react-icons/pi"
import MenuIcon from "@/components/ui/menu-icon"

const DashboardHeader = () => {
  return (
    <PaddedContainer>
    <div className='flex items-center justify-between mb-4 py-4'>
      <div className="flex items-center"> 
        {/* <div className="rounded-full w-5 h-5 bg-slate-100 mr-4"></div> */}
        <MenuIcon />
        <h2>Hi Precious</h2>
      </div>
      
      
      <div className='flex iteme-center '>
          <div className='mr-4'> <BsBell /> </div>
          <div className='relative '>  
              <BsHeadset />
              <div className='absolute w-4 h-4 rounded-full bd-red-300'></div>
           </div>
      </div>
    </div>
    </PaddedContainer>
  )
}

export default DashboardHeader