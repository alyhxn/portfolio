"use client"
import { Comfortaa } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useStateContext } from '../ContextProvider'

const inter = Comfortaa({ subsets: ['latin'], weight: ['400'] })

const Navbar = () => {
  const { setActiveSearch } = useStateContext();
  const current_page = usePathname();
  const pages = ['PROJECTS', 'CONTACT', 'ABOUT'];
  return (
    <header className='flex flex-wrap py-20 px-15 justify-around items-center fade-in gap-10 sticky top-0 '>
      <Link className='font-20 font-bold' href='/'>alihxn</Link>
      <ul className={`${inter.className} flex font-11 font-bold letter-spacing-2 py-8 sm-order-1 gap-20 overflow-x-scroll overflow-y-hidden`}>
        {pages.map(page => (
          <li key={page} className={current_page.includes(page.toLowerCase()) ? 'color-1' : 'color-2'}>
            <Link className='px-20 py-8 btn-hover rounded-6 cursor-pointer' href={`/${page.toLowerCase()}`}>{page}</Link>
          </li>
        ))}
      </ul>

      <Image onClick={() => setActiveSearch(true)} src="/search.svg" alt='search' className='p-8 rounded-6 cursor-pointer btn-hover' width={34} height={34} />
    </header>
  )
}

export default Navbar