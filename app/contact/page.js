'use client'

import { useState } from 'react'
import Image from 'next/image'
import ImageLoader from '../components/ImageLoader'
import { toast } from 'sonner'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    if(response.status === 200)
      toast.success(result.message);
    else
      toast.error(result.message)
  };
  return (
    <main className='fade-in m-auto my-80 px-30'>
      <section className="flex md-flex-col items-center justify-center max-w-1600 gap-40 mb-80">
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
      </section>
      <form onSubmit={handleSubmit} className='flex flex-col gap-20 max-w-1200 bg-color-4 p-16 rounded-6'>
        <h2>Send a message</h2>
        <div className='flex gap-20'>
          <div className='w-full'>
            <label className='block mb-8'>Name</label>
            <input name='name' onInput={handleChange} className='p-8 w-full'></input>
          </div>
          <div className='w-full'>
            <label className='block mb-8'>Email</label>
            <input name='email' type='email' onInput={handleChange} className='p-8 w-full'></input>
          </div>
        </div>
        <div>
          <label className='block mb-8'>Message</label>
          <textarea name='message' minLength={20} maxLength={500} onInput={handleChange} className='p-8 w-full min-h-200'></textarea>
        </div>
        <button type='submit' className='w-full btn-hover rounded-6 p-8'>
          Send
        </button>
      </form>
    </main>
  )
}

export default Contact