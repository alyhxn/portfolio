import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='m-auto flex gap-20 py-20 w-fit color-2'>
      <a className='flex gap-4 align-center link-hover' target='_blank' href='mailto:hassanali8812@gmail.com'>
        <span className='sm-hide'>Email</span> <Image src="/mail.svg" alt='email' width={20} height={20} />
      </a>
      <a className='flex gap-4 align-center link-hover' target='_blank' href='https://github.com/alyhxn'>
        <span className='sm-hide'>Github</span> <Image src="/github.svg" alt='github' width={20} height={20} />
      </a>
      <a className='flex gap-4 align-center link-hover' target='_blank' href='https://www.linkedin.com/in/alyhxn/'>
        <span className='sm-hide'>Linkedin</span> <Image src="/linkedin.svg" alt='linkedin' width={20} height={20} />
      </a>
      <a className='flex gap-4 align-center link-hover' target='_blank' href='https://www.instagram.com/hassanali8812/'>
        <span className='sm-hide'>Instagram</span> <Image src="/instagram.svg" alt='instagram' width={20} height={20} />
      </a>
    </div>
  )
}

export default Footer