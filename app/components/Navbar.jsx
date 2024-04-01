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
    <nav className='flex py-20 px-40 justify-between items-center fade-in'>
      <Link className='font-20 font-bold' href='/'>AliHxn</Link>
      <ul className='flex gap-20 font-sans'>
        {pages.map(page => (
          <li key={page} className={current_page.includes(page.toLowerCase()) ? 'color-1' : 'color-3'}>
            <Link className='px-20 py-8 btn-hover rounded-6 cursor-pointer' href={`/${page.toLowerCase()}`}>{page}</Link>
          </li>
        ))}
      </ul>

      <Image onClick={() => setActiveSearch(true)} src="/search.svg" alt='search' className='p-8 rounded-6 cursor-pointer btn-hover' width={34} height={34} />
    </nav>
  )
}

export default Navbar