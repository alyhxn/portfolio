import Image from 'next/image'
import ImageLoader from '../components/ImageLoader'

const Contact = () => {
  return (
    <main className="flex items-center justify-center max-w-[1600px] m-auto p-24 gap-10 fade-in">
      <ImageLoader className='rounded-md aspect-square object-cover bg-gradient-to-r to-yellow-200 from-pink-400' src="/contact.jpg" alt='contact' width={300} height={300} />
      <div>
        <h1 className='font-bold text-5xl pb-10 bg-gradient-to-r to-yellow-200 from-pink-400 bg-clip-text text-transparent'>Contact me.</h1>
        <p className=' text-gray-400'>
          Need something built? Reach me out at
        </p>
        <a href='mailto:hassanali8812@gmail.com' className='text-yellow-200 hover:underline cursor-pointer'>
          hassanali8812@gmail.com
        </a>
        <div className='flex gap-5 py-10'>
          <a target='_blank' href='https://github.com/alyhxn'>
            <Image src="/github.svg" alt='github' width={30} height={30} />
          </a>
          <a target='_blank' href='https://www.linkedin.com/in/alyhxn/'>
            <Image src="/linkedin.svg" alt='linkedin' width={30} height={30} />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Contact