import React from 'react'
import Link from "next/link"
import PaddedContainer from '../layout/padded-container'

const Hero = () => {
  return (
    <div className="relative h-full mb-8">
        <PaddedContainer className='pt-8'>
        <h1 className="text-primary-400 text-4xl font-bold mt-8 mb-6">Swap airtime get cash easily<br />
          <span className='text-black'>in Nigeria</span>
        </h1>
        <p className="mb-6">
        We make it easy for you to convert airtime on your sim to cash, buy airtime and data instantly or pay those bills. We’ve got you covered.
        </p>

        <Link href="/login">
        <button className="btn btn-contained">Get Started</button>
        </Link>
        </PaddedContainer>
        
    </div>
  )
}

export default Hero