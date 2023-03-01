import React from 'react'
import { ImageProps } from './Image.type'

const Image = ({src,alt,width, height,loading, onLoad,  onError}:ImageProps ) => {
  return (
    <div className='image-container'>
      <img src={src} alt={alt} width={width} height={height} className={`image`} />
    </div>
  )
}

export default Image
