import React from 'react'
import PaddedContainer from '@/components/layout/padded-container'
import {CgData, CgCreditCard} from "react-icons/cg"
import {AiOutlineSwap} from "react-icons/ai"

const Options = () => {

  return (
    <div>
        <PaddedContainer className="grid grid-cols-4 gap-2 text-black mb-4">
            <div className='flex flex-col items-center text-center border'>
                 <div className='w-10 h-10 mb-2  flex items-center justify-center '>
                    <AiOutlineSwap />
                 </div>
                <h6 className='text-xs p-0'>Swap Airtime</h6>
            </div>

             <div className='flex flex-col items-center text-center border'>
                 <div className='w-10 h-10 mb-2 flex items-center justify-center'>
                    <CgData />
                 </div>
                <h6 className='text-xs p-0'>Buy Data</h6>
            </div>

             <div className='flex flex-col items-center text-center border'>
                 <div className='w-10 h-10 mb-2 flex items-center justify-center'>
                    <CgCreditCard />
                 </div>
                <h6 className='text-xs p-0'>Buy Airtime</h6>
            </div>
        </PaddedContainer>
    </div>
  )
}

export default Options