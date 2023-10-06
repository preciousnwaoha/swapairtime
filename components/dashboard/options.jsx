import React from 'react'
import PaddedContainer from '@/components/layout/padded-container'
import {CgData, CgCreditCard} from "react-icons/cg"
import {AiOutlineSwap} from "react-icons/ai"

const Options = () => {

  return (
    <div>
        <PaddedContainer className="grid grid-cols-4 gap-2 text-black mb-4">
            <div className='flex flex-col items-center text-center cursor-pointer rounded-lg hover:border hover:border-black '>
                
                    <AiOutlineSwap className="mb-4 text-2xl" />
                <h6 className='text-xs p-0'>Swap Airtime</h6>
            </div>

             <div className='flex flex-col items-center text-center cursor-pointer rounded-lg hover:border hover:border-black '>
                
                    <CgData className="mb-4 text-2xl"/>
                <h6 className='text-xs p-0'>Buy Data</h6>
            </div>

             <div className='flex flex-col items-center text-center cursor-pointer rounded-lg hover:border hover:border-black'>
                 
                    <CgCreditCard className="mb-4 text-2xl " />
                <h6 className='text-xs p-0'>Buy Airtime</h6>
            </div>
        </PaddedContainer>
    </div>
  )
}

export default Options