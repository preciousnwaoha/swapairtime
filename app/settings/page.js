'use client';
import React, {useState} from 'react';
import Image from 'next/image'
import PaddedContainer from '@/components/layout/padded-container'
import {PiEyeClosed, PiEye} from "react-icons/pi"
import Options from '@/components/dashboard/options'
import DashboardHeader from '@/components/dashboard/header'
import Updates from '@/components/dashboard/updates'
import ProfileSettings from '@/components/settings/profile-settings'
import BankAccountSettings from '@/components/settings/bank-account-settings'
import SecuritySettings from '@/components/settings/security-settings'
import NotificationSettings from '@/components/settings/notification-settings';
import VerificationSettings from '@/components/settings/verification';

export default function Home() {
  const [open, setOpen] = useState(0)

  const handleOpenSettingsPart = (item) => {
    setOpen(item)
  }
  
  
  return (
    <main className="min-h-screen ">

    <PaddedContainer className='' >
        <h1 className="text-lg font-semibold mb-8 mt-8">Settings</h1>
         <div className='mb-8 flex flex-col align-center text-center'>
            <div className='inline-block rounded-full mx-[auto] w-28 h-28 relative  mb-8 shadow-lg p-1.5'>
               <div className='rounded-full w-full h-full bg-gray-400'>

               </div>

               <div className='absolute right-[-6px] top-[24px] w-6 h-6 bg-white rounded-full flex align-center justify-center text-center border'  > + </div>
            </div>

            <p className='font-semibold mb-2 text-lg'>Precious Nwaoha</p>
            <p className='text-sm'>examplepreshemail@gmail.com</p>

        </div>

        <ProfileSettings open={open === 0} onToggleOpen={handleOpenSettingsPart} />
        <BankAccountSettings  open={open === 1} onToggleOpen={handleOpenSettingsPart} />
        <NotificationSettings open={open === 2} onToggleOpen={handleOpenSettingsPart} />
        <SecuritySettings open={open === 3} onToggleOpen={handleOpenSettingsPart} />
        <VerificationSettings open={open === 4} onToggleOpen={handleOpenSettingsPart} />
    </PaddedContainer>
        

     
    </main>
  )
}
