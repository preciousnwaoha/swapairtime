import React from 'react'
import PaddedContainer from '@/components/layout/padded-container'

const Updates = () => {
  return (
    <div className='mb-8'>
        <PaddedContainer>
            <div className=" h-36 relative rounded-lg bg-black text-white ">

                <div className="absolute bottom-0 left-[50%] translate-x-[-55%] flex flex-col items-center p-4">
                    <p className=' text-center underline text-primary-400 text-xs font-semibold mb-2'>LEARN MORE</p>

                    <div>
                        <div className='rounded-full w-2 h-2 bg-white'></div>
                    </div>
                </div>
               

            </div>
        </PaddedContainer>
    </div>
  )
}

export default Updates