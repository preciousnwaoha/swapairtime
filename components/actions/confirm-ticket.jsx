import React from 'react'
import PaddedContainer from "@/components/layout/padded-container"


const ConfirmTicket = () => {

  return (
    <div>
        <PaddedContainer>
  
            <h2 className='text-lg mb-8'>Step 1</h2>
       

            <div className=' mb-4'>
                <p className='mb-4'>Dail *777# </p>
                <p className='mb-4'>Send 500 to 09059383928</p>
                
                <p>Wait some minutes for balance update</p>
                
            </div>
            
            <button className='btn btn-contained'>
                Confirm Ticket
            </button>
        </PaddedContainer>
    </div>
  )
}

export default ConfirmTicket