import Image from 'next/image'
import PaddedContainer from '@/components/layout/padded-container'
import {PiEyeClosed, PiEye, PiPhone, PiEnvelope, PiWhatsappLogo} from "react-icons/pi"
import Options from '@/components/dashboard/options'
import DashboardHeader from '@/components/dashboard/header'
import Updates from '@/components/dashboard/updates'

export default function AccountManager() {
  return (
    <main className="min-h-screen ">
      
      
      <DashboardHeader />
      

    <PaddedContainer >
          <h1 className='mb-4 text-center font-semibold text-xl'>Customer care</h1>
          <p className='mb-4 text-center text-md'>Were are here to assist <span className="font-semibold text-primary-400">you</span>!</p>
    </PaddedContainer>

    <div className="flex flex-col">
              

           
    <PaddedContainer className=''>
         
         <div className='flex flex-col items-center text-center  py-4'>
               <PiPhone className='text-primary-400 text-5xl mb-4' />
                 <p className='text-md'>09025672256</p>
             </div>
     </PaddedContainer>

     <PaddedContainer className='bg-primary-400'>
     <div className='flex flex-col items-end self-end  py-4 text-right'>
      {/* <div className='border'> */}
      <PiEnvelope className=' text-white text-5xl text-right mb-4 ' />
      {/* </div> */}
               
             <p className='text-md'>contact@swapairtime.com</p>
             </div>
     </PaddedContainer>

     <PaddedContainer className='bg-black'>
       <div className=' text-white flex flex-col  py-4'>
               <PiWhatsappLogo className='text-primary-400 text-5xl mb-4' />
             <p className='text-md'>+234679976456</p>
             </div>
       </PaddedContainer>

          

      </div>

             

              

     
        

     
    </main>
  )
}
