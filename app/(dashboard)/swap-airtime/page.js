'use client';
import React, {useState} from "react"
import Image from 'next/image'
import PaddedContainer from '@/components/layout/padded-container'
import {PiEyeClosed, PiEye} from "react-icons/pi"
import Options from '@/components/dashboard/options'
import DashboardHeader from '@/components/dashboard/header'
import Updates from '@/components/dashboard/updates'
import CreateSwap from "@/components/actions/create-swap"

import ConfirmTicket from "@/components/actions/confirm-ticket"

export default function Home() {
  const [createdTicket, setCreatedTicket] = useState(false)

  const handleCreateTicket = () => {
    console.log("created ticket")
    setCreatedTicket(prev => !prev)
  }

  return (
    <main className="min-h-screen ">
      
      
      <DashboardHeader />

      

    <PaddedContainer >

        <h1 className='text-lg font-semibold mb-2 text-center'>Swap Airtime </h1>

        <p className='text-sm mb-8 text-center'>Turn your airtime into cash in minutes, <br/> without stress.</p>
      
        {
          createdTicket ?
          <CreateSwap onCreateTicket={handleCreateTicket} />
          : <ConfirmTicket />
        }
        

        



    </PaddedContainer>

     
    </main>
  )
}
