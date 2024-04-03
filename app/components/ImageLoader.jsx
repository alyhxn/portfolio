"use client"

import React, { useRef, useState } from 'react'
import Image from 'next/image'

const ImageLoader = ({ className, src, alt, width, height }) => {
  const [loaded, setLoaded] = useState(false);
  const styles = {
    maxWidth: width,
    height,
    overflow: 'hidden',
    width: '100%',
    minWidth: 'fit-content'
  }

  return (
    <div style={styles} className={`relative`}>
      <Image onLoad={() => setLoaded(true)} priority className={`${className} ${!loaded && 'opacity-0'}`} src={src} alt={alt} width={width} height={height}/>
      <div style={styles} className={`absolute top-0 img-overlay ${loaded && 'opacity-0'}`}></div>
    </div>
  )
}

export default ImageLoader