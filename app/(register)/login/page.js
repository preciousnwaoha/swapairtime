import Auth from '@/components/auth/auth'
import ActionsList from '@/components/home/actions-list'
import Hero from '@/components/home/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen ">
      
      <Auth />

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       
      </div> */}
    </main>
  )
}
