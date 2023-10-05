import React from 'react'
import PaddedContainer from '../layout/padded-container'

const CreateSwap = () => {
  return (
    <div>
      <div className='grid grid-cols-4 gap-4 mb-4'>
            <div className='h-12 flex items-center justify-center text-center text-primary-400 rounded-lg border-2 border-primary-400 cursor-pointer hover:bg-primary-400 hover:text-white'>
                Mtn
            </div>
            <div className='h-12 flex items-center justify-center text-center text-primary-400 rounded-lg border-2 border-primary-400 cursor-pointer hover:bg-primary-400 hover:text-white'>
                Glo
            </div>
            <div className='h-12 flex items-center justify-center text-center text-primary-400 rounded-lg border-2 border-primary-400 cursor-pointer hover:bg-primary-400 hover:text-white'>
                Airtel
            </div>
            <div className='h-12 flex items-center justify-center text-center text-primary-400 rounded-lg border-2 border-primary-400 cursor-pointer hover:bg-primary-400 hover:text-white'>
                9mobile
            </div>

        </div>

        
        <div className="flex flex-col mb-2">
          <label htmlFor="swap-amount" className='mb-1.5 text-sm'>Amount:</label>
        <input id="swap-amount" className=" px-4 py-1.5 rounded-md border-2 focus:border-none focus:outline-none" placeholder="100-10000" type="number" />
        </div>

        <div className="flex flex-col mb-4">
        <label htmlFor="swap-number" className='text-sm'>Phone Number:</label>
        <input id="swap-number" className=" px-4 py-1.5 rounded-md border-2 focus:border-none focus:outline-none" placeholder="100-10000" type="number" />
        </div>

        <div className="grid grid-cols-5 gap-4 mb-4 text-white">
          <div className='bg-primary-400 rounded-lg p-4 text-center flex items-center justify-center col-span-2'>
            <h4 className='text-md font-semibold mr-2'>Rate:</h4>
            <p className='text-xl font-bold '>X%</p>
          </div>

          <div className='bg-primary-400 rounded-lg p-4 text-center flex items-center justify-center col-span-3'>
            <h4 className='text-md font-semibold mr-2'>Get:</h4>
            <p className='text-xl font-bold '>NXXXXX.XX</p>
          </div>
        </div>

        <div className="rounded-lg bg-black p-4 text-primary-400 mb-8 text-sm">
          - A ticket would be created.
          <br/>
          - Send Airtime to the number on the ticket.
          <br/>
          - Wait for balance.
        </div>

        <button className='btn btn-contained'>
          Create Ticket
        </button>
    </div>
  )
}

export default CreateSwap