import React from 'react'
import PaddedContainer from './padded-container'
import Link from "next/link"

const BottomCall = ({text="", heading="Ready to get started?", actionText="Get started", linkText="", link="" }) => {
  return (
    <div className='mb-8'>
        <PaddedContainer>
            <div className='bg-black rounded-xl px-4 py-6 shadow'>
                <h2 className='text-white font-bold mb-4 mt-4 text-lg'>
                    {heading}
                </h2>
                <p className='text-white mb-8'>
                    {text}
                </p>

                <div className='flex items-center'>
                    <Link href="/login">
                    <button className='btn btn-contained bg-white text-black hover:bg-white'>{actionText} </button>
                    </Link>
                
                </div>
                
            </div>
        </PaddedContainer>
    </div>
  )
}

export default BottomCall