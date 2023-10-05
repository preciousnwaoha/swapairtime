import React from 'react'


const Transaction = ({amount, type, status, fee, date, from, to}) => {
  return (
    <li className="flex items-center ">
              <div className='w-10 h-10 bg-purple-500 text-white flex items-center justify-center text-center rounded-full mr-2'>

              </div>

              <div className='border-b w-full py-2'>
                <div className='flex justify-between '>
                  <h6 className='text-xs mb-1.5'>{type}</h6>
                  <p className="text-semibold text-sm mb-1.5">{amount}</p>
                  
                </div>

                <div  className="flex justify-between text-right">
                <p className='text-2xs'>{date}</p>
                  <p className='text-primary-400 text-2xs'>Successfull</p>

                </div>
              </div>

              

            </li>
  )
}

export default Transaction