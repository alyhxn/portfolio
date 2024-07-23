"use client"
import Image from 'next/image'
import ImageLoader from './components/ImageLoader'
import { useStateContext } from './ContextProvider'
import Link from 'next/link'


export default function Home() {
  const { setActiveSearch } = useStateContext()

  return (
    <main className="flex md-flex-col items-center justify-between max-w-1600 m-auto p-96 gap-40 fade-in">
      <ImageLoader className='rounded-6 img-common' src="/me2.jpg" alt='alihxn' width={300} height={300} />
      <div>
        <h1 className='font-bold font-48 pb-40 text-gradient bg-gradient-1'>Ali Hassan</h1>
        <div className='line-height-2'>Software Engineer</div>
        <div className='color-2 line-height-2'>I am a frontend web developer with a BS in Computer Science and a keen interest in AI. My knowledge in frontend development has been acquired through online courses, blog readings, and hands-on application to various projects during my free time. I have delved into the intricacies of the frontend development process, grasped essential concepts, and explored theoretical foundations. Additionally, my enthusiasm for the AI revolution fuels my passion for staying informed and engaged in this dynamic field. </div>
        <div className='flex sm-flex-col items-center pt-24 gap-4 font-14'>
          <button onClick={() => setActiveSearch(true)} className='flex items-center btn-unique btn-hover px-20 py-8 gap-4 rounded-6 cursor-pointer transition-colors duration-200'>
            Press <span className='font-mono bg-color-3 color-rev-1 px-4 rounded-4'>ctrl</span> <span className='font-mono bg-color-3 color-rev-1 px-4 rounded-4'>K</span> to start 
            <Image src="/arrow.svg" alt='arrow' width={20} height={20} />
          </button>
          <Link href='/resume.pdf' target='_blank' className='flex items-center btn-hover px-20 py-8 gap-4 rounded-6 cursor-pointer transition-colors duration-200'>
            Download Resume
            <Image src="/download.svg" alt='download' width={20} height={20} />
          </Link>
        </div>
      </div>
    </main>
  )
}