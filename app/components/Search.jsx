"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useStateContext } from '../ContextProvider'
import Link from 'next/link';
import Image from 'next/image';



const result = [
  {
    group_name: 'navigation',
    items: [
      {title: 'Home', link: '/'},
      {title: 'Projects', link: '/projects'},
      {title: 'Contact', link: '/contact'},
      {title: 'About', link: '/about'}
    ]

  },
  {
    group_name: 'Follow me',
    items: [
      {title: 'Linkedin', link: 'https://www.linkedin.com/in/alyhxn/', icon: '/linkedin.svg', target: '_blank'},
      {title: 'Github', link: 'https://github.com/alyhxn', icon: '/github.svg', target: '_blank'},
      {title: 'Facebook', link: 'https://www.facebook.com/alihassan8812/', icon: '/facebook.svg', target: '_blank'},
      {title: 'Instagram', link: 'https://www.instagram.com/hassanali8812/', icon: '/instagram.svg', target: '_blank'}
    ]
  },
  {
    group_name: 'About me',
    items: [
      {title: 'Resume', link: '/resume.pdf', icon: '/download.svg', target: '_blank'},
    ]
  }
]

const Search = () => {
  const { activeSearch, setActiveSearch } = useStateContext();
  const [ filteredResult, setFilteredResult ] = useState(result);
  const hoverRef = useRef(null);
  const searchRef = useRef(null);
  const listRef = useRef(null);
  const router = useRouter()

  useEffect(() => {
    if(activeSearch === true){
      searchRef.current.focus()
      if(hoverRef.current)
        return
      hoverRef.current  = listRef.current.firstElementChild;
      hoverRef.current.classList.add('hover');
    }
    return
  }, [activeSearch])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()
        setActiveSearch(!activeSearch)
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSearch, setActiveSearch]);

  function handleBur(event){
    event.relatedTarget === null && setActiveSearch(false)
  }

  const [query, setQuery] = useState('');

  useEffect(() => {
    setFilteredResult(result.map(group => {
      const new_group = {...group}
      new_group.items = group.items.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      return new_group.items.length > 0 ? new_group : null;
    }).filter(group => group !== null));

    return
  }, [query])

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    
    setTimeout(() => {
      if (listRef.current){
        if(hoverRef.current)
          hoverRef.current.classList.remove('hover');
        hoverRef.current  = listRef.current.firstElementChild;
        hoverRef.current.classList.add('hover');
      }
      event.target.parentElement.style.maxHeight = event.target.nextElementSibling.getBoundingClientRect().height + 30 + 'px';
    }, 100)
  };

  const handleHover = (event) => {
    hoverRef.current.classList.remove('hover')
    hoverRef.current = event.target.parentElement
    hoverRef.current.classList.add('hover')
  }

  const handleKeyPress = (event) => {
    let temp, temp1
    switch (event.key) {
      case 'ArrowUp':
        temp = hoverRef.current.parentElement.parentElement
        hoverRef.current.classList.remove('hover')
        if (hoverRef.current.previousElementSibling){
          hoverRef.current = hoverRef.current.previousElementSibling
        }
        else {
          const first_checkpoint = temp.previousElementSibling
          if(first_checkpoint)
            hoverRef.current = first_checkpoint.lastElementChild.lastElementChild
        }
        hoverRef.current.classList.add('hover')
        temp1 = temp.parentElement
        if(hoverRef.current.offsetTop < temp1.scrollTop + 40)
          temp1.scrollTop = hoverRef.current.offsetTop - 40
        break;

      case 'ArrowDown':
        temp = hoverRef.current.parentElement.parentElement
        hoverRef.current.classList.remove('hover')
        if (hoverRef.current.nextElementSibling){
          hoverRef.current = hoverRef.current.nextElementSibling
        }
        else {
          const first_checkpoint = temp.nextElementSibling
          if(first_checkpoint)
            hoverRef.current = first_checkpoint.lastElementChild.firstElementChild
        }
        hoverRef.current.classList.add('hover')
        temp1 = temp.parentElement
        if(hoverRef.current.offsetTop > temp1.clientHeight)
          temp1.scrollTop = hoverRef.current.offsetTop - temp1.clientHeight + 20
        break;
      case 'Enter':
        setActiveSearch(false)
        router.push(hoverRef.current.firstElementChild.href)
        break;
      case 'Escape':
        setActiveSearch(false)
        break;
    }
  };


  return (
    <section className={`search-overlay fixed flex justify-center w-screen h-screen top-0 left-0 color-2 ${activeSearch && 'active'}`}>
      <div className='mx-20' tabIndex={1} onBlur={handleBur}>
        <input ref={searchRef} autoFocus value={query} onChange={handleInputChange} onKeyDown={handleKeyPress} className='w-full px-15 py-8 bg-transparent border-bottom-1' placeholder='Type in a command or search...'></input>
        <ul className='overflow-y-scroll'> {filteredResult.map((group, index) => (
          <li className='bb-grey-1' key={group.group_name}>
            <p className='font-10 uppercase px-15 py-8 color-3'>{group.group_name}</p>
            <ul ref={index === 0 ? listRef : null}>
              {group.items.map(item => (
                <li className='search-item' onMouseOver={handleHover} key={item.title}>
                  <Link target={item.target} className='flex gap-4 items-center block w-full px-15 py-12 font-14' href={item.link} onClick={() => setActiveSearch(false)}>  
                    {item.icon && <Image className='svg-grey' src={item.icon} alt={item.title} width={20} height={20} />}
                    {item.title} 
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))} </ul>
      </div>
    </section>
  )
}

export default Search