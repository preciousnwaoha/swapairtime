import React from 'react'
import PaddedContainer from '@/components/layout/padded-container'
import { HiOutlineChevronRight, HiOutlineChevronLeft} from 'react-icons/hi'
import Transaction from "@/components/transactions/transaction"

const transactions = [
    {
        title: "Widthdawal",
        time: new Date(),
        amount: 850.57,
        from: "Hove",
        to: "Evo",
        naration: "Hello Some Business",
        status: 'Successful'
    },
    {
        title: "Widthdawal",
        time: new Date(),
        amount: 850.57,
        from: "Hove",
        to: "Evo",
        naration: "Hello Some Business",
        status: 'Successful'
    }
]

const RecentTransactions = () => {



  return (
    <div className="mb-8">
        <PaddedContainer className="">
            
            <div className="flex justify-between align-center mb-2">
                <h2 className='text-sm'>Recent Activity</h2>

                <div className='text-sm flex items-center text-center text-primary-400 flex align-center '>
                    <p>History</p> <HiOutlineChevronRight/> 
                </div>
            </div>

            <ul>
                {transactions.map((transaction, index) => {
                     const {type, time, amount} = transaction
                     return <Transaction key={index} amount={amount}
                       type={type}
                       date={time}
                     />
                })}
            </ul>
        </PaddedContainer>
    </div>
  )
}

export default RecentTransactions