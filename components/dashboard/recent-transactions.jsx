import React from 'react'
import PaddedContainer from '@/components/layout/padded-container'
import { HiOutlineChevronRight, HiOutlineChevronLeft} from 'react-icons/hi'

const transactions = [
    {
        title: "Widthdawal",
        timestamp: new Date(),
        amount: 850.57,
        from: "Hove",
        to: "Evo",
        naration: "Hello Some Business",
    }
]

const RecentTransactions = () => {



  return (
    <div className="mb-8">
        <PaddedContainer className="">
            
            <div className="flex justify-between align-center">
                <h2 className=''>Recent Activity</h2>

                <p className='text-center underline text-primary-400 flex align-center '>
                    History <HiOutlineChevronRight/> 
                </p>
            </div>

            <ul>
                {transactions.map((transact, index) => {
                    return <div key={index} className='flex justify-between'>
                        <div>
                            <h6>{transact.title}</h6>
                            <div></div>
                        </div>
                        <div>
                            <p className=''>{transact.amount}</p>
                        </div>


                    </div>
                })}
            </ul>
        </PaddedContainer>
    </div>
  )
}

export default RecentTransactions