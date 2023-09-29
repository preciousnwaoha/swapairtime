import Image from 'next/image'
import PaddedContainer from '@/components/layout/padded-container'
import {PiEyeClosed, PiEye} from "react-icons/pi"
import Options from '@/components/dashboard/options'
import DashboardHeader from '@/components/dashboard/header'
import Updates from '@/components/dashboard/updates'

export default function AccountManager() {
  return (
    <main className="min-h-screen ">
      
      
      <DashboardHeader />
      

    <PaddedContainer >
      <div className='rounded-lg bg-primary-400 p-4 mb-8'>
            <div className='text-white'>
                <p className='text-xs'>Your Balance</p>
                <div className='flex items-center'>
                  <p className="text-2xl font-bold my-4 mr-2">1000.00 </p>
                  <>
                    <PiEye />
                    <PiEyeClosed />
                  </>
                </div> 
            </div>

            <div className="flex  text-center">
              <button className='btn btn-contained bg-white text-black rounded-3xl mr-4'>Swap</button>
              <button className='btn btn-contained bg-white text-black rounded-3xl'>Fund</button>
            </div>
        </div>
    </PaddedContainer>

    <Options />

    <Updates />
        

     
    </main>
  )
}
