import React from 'react'
import PaddedContainer from '../layout/padded-container'

const Auth = () => {


  return (
    <div>
        <PaddedContainer >
            <h1 className=' text-2xl font-semibold mt-8 mb-8 text-center'>Create <span className='text-primary-400'>your</span> SwapAirtime account</h1>

            <form className='flex flex-col items-center'>
                <input type='text' className="w-full px-4 py-2 font-light text-sm border border-slate-100 rounded-md mb-4" placeholder='Full name'/>

                <input type='phone' className="w-full px-4 py-2 font-light text-sm border border-slate-100 rounded-md mb-4" placeholder='Phone number'/>

                <input type='text' className="w-full px-4 py-2 font-light text-sm border border-slate-100 rounded-md mb-4" placeholder='Email'/>

                <input type='text' className="w-full px-4 py-2 font-light text-sm border border-slate-100 rounded-md mb-4" placeholder='Password'/>

                <p className='text-xs mb-4'>By clicking &apos;Create axxount, I acknowledge that i have read and do hereby accept the terms and conditions of SwapAirtime. </p>

                <button className='btn btn-contained mb-4'>
                    Create account
                </button>

                <p>Already have an account? <span>Log in</span></p>
            </form>
            
        </PaddedContainer>

    </div>
  )
}

export default Auth