"use client"

import React, { useRef, useState } from 'react'
import Image from 'next/image'

const ImageLoader = ( {className, src, alt, width, height } ) => {
  const [loaded, setLoaded] = useState(false);
  const styles = {
    minWidth: width,
    height,
  }

  return (
    <div className='relative' style={styles}>
      <Image onLoad={() => setLoaded(true)} priority className={`${className} ${loaded ? 'block' : 'hidden'}`} src={src} alt={alt} width={width} height={height}/>
      <div style={styles} className={`${className} absolute top-0 blur-sm opacity-60 transition-opacity duration-500 ${loaded && 'opacity-0'}`}></div>
    </div>
  )
}

export default ImageLoader