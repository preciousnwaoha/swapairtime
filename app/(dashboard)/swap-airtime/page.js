'use client';
import Image from 'next/image'
import PaddedContainer from '@/components/layout/padded-container'
import {PiEyeClosed, PiEye} from "react-icons/pi"
import Options from '@/components/dashboard/options'
import DashboardHeader from '@/components/dashboard/header'
import Updates from '@/components/dashboard/updates'
import CreateSwap from "@/components/actions/create-swap"

export default function Home() {
  return (
    <main className="min-h-screen ">
      
      
      <DashboardHeader />
      

    <PaddedContainer >
      

        <CreateSwap />



    </PaddedContainer>

     
    </main>
  )
}
