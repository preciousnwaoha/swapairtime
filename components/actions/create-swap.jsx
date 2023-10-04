import React from 'react'
import PaddedContainer from '../layout/padded-container'

const CreateSwap = () => {
  return (
    <div>
      <div className='grid grid-cols-4 gap-4 mb-8'>
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

        
        <div className="flex items-end">
          <label htmlFor="swap-amount" className='mr-2'>Amount:</label>
        <input id="swap-amount" className=" px-4 py-0.5 border-b-2 focus:border-none focus:outline-none" placeholder="100-10000" type="number" />
        </div>

        <div className="flex items-end mb-8">
        <label htmlFor="swap-number">Phone Number:</label>
        <input id="swap-number" className=" px-4 py-0.5 border-b-2 focus:border-none focus:outline-none" placeholder="100-10000" type="number" />
        </div>

        <div className="rounded-lg bg-black p-4 text-primary-400 mb-8 ">
          A ticket would be created.
          <br/>
          Send Airtime to the number on the ticket.
          <br/>
          Wait for balance.
        </div>

        <button className='btn btn-contained'>
          Create Ticket
        </button>
    </div>
  )
}

export default CreateSwap