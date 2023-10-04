'use client';
import { useContext, createContext, useState } from "react"
import PaddedContainer from '@/components/layout/padded-container'
import {BsBell, BsHeadset} from "react-icons/bs"
import {PiEyeClosed, PiEye} from "react-icons/pi"
import MenuIcon from "@/components/ui/menu-icon"
import {AppContext} from "@/context/app-context"

const DashboardHeader = () => {

  const { sidebarExpanded,  toggleSidebarExpanded } = useContext(AppContext)

  const  handleExpandSidebar = () => {
    toggleSidebarExpanded()
  }



  return (
    <PaddedContainer>
    <div className='flex items-center justify-between mb-4 py-4'>
      <div className="flex items-center"> 
        {/* <div className="rounded-full w-5 h-5 bg-slate-100 mr-4"></div> */}
        <MenuIcon onClick={handleExpandSidebar} className={`mr-4 cursor-pointer ${
          sidebarExpanded && "hidden"
        } `} />
        <h2>Hi Precious</h2>
      </div>
      
      
      <div className='flex iteme-center '>
          <div className='mr-4'> <BsBell /> </div>
          <div className=''>  
              <BsHeadset />
              {/* <div className='absolute w-4 h-4 rounded-full bd-red-300'></div> */}
           </div>
      </div>
    </div>
    </PaddedContainer>
  )
}

export default DashboardHeader