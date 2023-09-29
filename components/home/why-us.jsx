import React from 'react'
import PaddedContainer from '../layout/padded-container'

const REASONS = [
    {
        icon: "ICON",
        text: "Best and cheapest rates",
        description: "With airtimeflip you always get the best rates and prices on everything from airtime and data transactions and even your bill payments."
    },
    {
        icon: "ICON",
        text: "Best and cheapest rates",
        description: "With airtimeflip you always get the best rates and prices on everything from airtime and data transactions and even your bill payments."
    },
    {
        icon: "ICON",
        text: "Best and cheapest rates",
        description: "With airtimeflip you always get the best rates and prices on everything from airtime and data transactions and even your bill payments."
    },
    {
        icon: "ICON",
        text: "Best and cheapest rates",
        description: "With airtimeflip you always get the best rates and prices on everything from airtime and data transactions and even your bill payments."
    }
]

const WhyUs = () => {
  return (
    <div className="bg-slate-950 py-4 mb-8">
        <PaddedContainer >
            <h2 className='mt-8 mb-6 text-center text-white text-xl font-bold'>Why use SwapAirtime</h2>
            <p className="text-sm text-center mb-6 text-white">There&apos;s like a million reasons to use airtimeflip but here are 4 of them we really think you should hear.</p>

            <div >
                {REASONS.map((reason, index) => {
                    return <div key={index} className='mb-6 rounded-xl p-4 text-white bg-slate-900'>
                        <div>{reason.icon}</div>
                        <h4 className='text-white font-semibold text-sm mb-4'>{reason.text}</h4>
                        <p className='text-white text-sm'>{reason.description}</p>
                    </div>
                })}
            </div>
            
            
        </PaddedContainer>
    </div>
  )
}

export default WhyUs