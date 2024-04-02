import Image from 'next/image'
import ImageLoader from '../components/ImageLoader'

const Contact = () => {
  return (
    <main className="flex md-flex-col items-center justify-between max-w-1600 m-auto p-96 gap-40 fade-in">
      <ImageLoader className='rounded-6 img-common' src="/contact.jpg" alt='contact' width={300} height={300} />
      <div>
        <h1 className='font-bold font-48 pb-40 text-gradient bg-gradient-2'>Contact me.</h1>
        <p className=' text-gray-400'>
          Need something built? Reach me out at
        </p>
        <a href='mailto:hassanali8812@gmail.com' className='color-yellow hover:underline cursor-pointer'>
          hassanali8812@gmail.com
        </a>
        <div className='flex gap-20 py-20'>
          <a target='_blank' href='https://github.com/alyhxn'>
            <Image src="/github.svg" alt='github' width={30} height={30} />
          </a>
          <a target='_blank' href='https://www.linkedin.com/in/alyhxn/'>
            <Image src="/linkedin.svg" alt='linkedin' width={30} height={30} />
          </a>
          <a target='_blank' href='https://www.instagram.com/hassanali8812/'>
            <Image src="/instagram.svg" alt='instagram' width={30} height={30} />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Contact