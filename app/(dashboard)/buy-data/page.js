import Image from 'next/image'
import PaddedContainer from '@/components/layout/padded-container'
import DashboardHeader from '@/components/dashboard/header'

export default function Home() {
  return (
    <>
      <header>
        <DashboardHeader />
      </header>

      <main className="min-h-screen w-full ">
        <PaddedContainer className='flex flex-col text-center items-center'>
        <h2 className="text-xl font-bold mb-8">Feature is coming <span className='text-primary-400'>soon.</span></h2>

        <div>
          <button className="btn btn-text">Get Notified</button>
        </div>
      </PaddedContainer>
      </main>
    </>    

  )
}
