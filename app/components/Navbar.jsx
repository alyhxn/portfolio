"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useStateContext } from '../ContextProvider'

const Navbar = () => {
  const { setActiveSearch } = useStateContext();
  const current_page = usePathname();
  const pages = ['Projects', 'Contact', 'About'];
  return (
    <div className='flex py-3 px-10 justify-between items-center fade-in'>
      <Link href='/'>AliHxn</Link>
      <ul className='flex list-none gap-5 font-sans'>
        {pages.map(page => (
          <li key={page} className={`text-gray-500 ${current_page.includes(page.toLowerCase()) && 'text-white'}`}>
            <Link className='px-5 py-2 hover:bg-gray-800 rounded-md hover:text-white cursor-pointer transition-colors duration-200 ' href={`/${page.toLowerCase()}`}>{page}</Link>
          </li>
        ))}
      </ul>

      <Image onClick={() => setActiveSearch(true)} src="/search.svg" alt='search' className='p-1 w-8 h-8 hover:bg-gray-800 rounded-md cursor-pointer transition-colors duration-200' width={20} height={20} />
    </div>
  )
}

export default Navbar