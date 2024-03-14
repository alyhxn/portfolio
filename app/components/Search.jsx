"use client"
import React from 'react'
import { useStateContext } from '../ContextProvider'

const Search = () => {
  const { activeSearch, setActiveSearch } = useStateContext();

  function handleBur(event){
    event.relatedTarget === null && setActiveSearch(false)
  }
  return activeSearch && (
    <section className='fixed flex justify-center items-center z-50 w-screen bg-black bg-opacity-60 h-screen top-0 left-0'>
      <div tabIndex={1} onBlur={handleBur} className='w-1/2 h-[512px] backdrop-blur-lg rounded-lg bg-gray-500 bg-opacity-25 overflow-hidden popup'>
        <input autoFocus className='w-full p-2 outline-none bg-transparent' placeholder='Type in a command or search...'></input>
      </div>
    </section>
  )
}

export default Search