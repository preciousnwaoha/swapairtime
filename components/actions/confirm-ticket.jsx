import React from 'react'
import PaddedContainer from "@/components/layout/padded-container"
import {PiCopy} from "react-icons/pi"
import HowToSendAirtime from '@/components/actions/how-to-send-airtime'

const ConfirmTicket = () => {

  return (
    <div>
        <PaddedContainer className='mb-8'>
        <h1 className='text-lg font-semibold mb-2 text-center'>Airtime Swap Ticket Recieved! </h1>

        <p className='text-sm mb-8 text-center'>Your request to convert airtime to cash was succefully created. Follow the steps below to get get your money.</p>

          <div className='mb-8'>
          <h2 className='text-lg mb-2 font-semibold'>Do This</h2>
            <p className="text-sm mb-2">Transfer NXXX.XX worth of airtime to the phone number below</p>
            <div className='rounded-lg bg-primary-400 text-white py-2 px-4 flex justify-between items-center text-lg mb-2'>
              09035362826
              <PiCopy />
            </div>
            <p className='text-red-500 text-sm'>Note: The number is temporal. Please never save the above number. we do not accept external transfer.</p>
       
          </div>
  
            

           <HowToSendAirtime />
            
            <button className='btn btn-contained'>
                Complete
            </button>
        </PaddedContainer>
    </div>
  )
}

export default ConfirmTicket