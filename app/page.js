import ActionsList from '@/components/home/actions-list'
import FAQs from '@/components/home/faqs'
import Hero from '@/components/home/hero'
import WhyUs from '@/components/home/why-us'
import BottomCall from '@/components/layout/bottom-call'
import Image from 'next/image'
import PaddedContainer from '@/components/layout/padded-container'

export default function Home() {
  return (
    <main className="min-h-screen ">
     <Hero />
     <ActionsList />

     <WhyUs />


     <PaddedContainer className='mb-8'>
      <div className='mb-8'>
        <div className='w-full h-[30vh] bg-primary-400 mb-6 '></div>
        <p className='text-sm text-center'>A platform for you, whether you&apos;re a big business or a solo artist</p>
      </div>

      <p className='text-2xl font-light mb-6'>Let&apos;s not waste thet airtime, shall we? You focus on bringing your amazing ideas to life and we focus on providing all the conversion tools you need.</p>

      <button className='btn btn-contained bg-black py-4'>Okay, let&apos;s go</button>
     </PaddedContainer>

     <FAQs />

     <BottomCall 
     text="Create an account and instantly start converting airtime to cash, buying aitime and data."
     />
    </main>
  )
}
