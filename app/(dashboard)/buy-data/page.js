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
        <h2>Feature is coming soon.</h2>

        <div>
          <button>Get Notified</button>
        </div>
      </PaddedContainer>
      </main>
    </>    

  )
}
