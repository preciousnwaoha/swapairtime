'use client'
import Image from 'next/image'
import PaddedContainer from '@/components/layout/padded-container'
import DashboardHeader from '@/components/dashboard/header'
import Transaction from '@/components/transactions/transaction'

const ACTIVITY = [
  {
    type: "Airtime Swap",
    date: "04 10 2023",
    amount: "-NXXXX.XX"
  },
  {
    type: "Airtime Swap",
    date: "04 10 2023",
    amount: "-NXXXX.XX"
  },
  {
    type: "Airtime Swap",
    date: "04 10 2023",
    amount: "-NXXXX.XX"
  }
]

export default function Transactions() {
  return (
    <main className="min-h-screen ">
      
      
      <DashboardHeader />
      

    <PaddedContainer >
      <h1 className="mb-4">Transactions History</h1>
      

      <ul className='w-full'>
          {ACTIVITY.map((transaction, index) => {
            const {type, date, amount} = transaction
            return <Transaction key={index} amount={amount}
              type={type}
              date={date}
            />
          })}
        </ul>
    </PaddedContainer>

        

     
    </main>
  )
}
