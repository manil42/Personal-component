import React from 'react'
import { ImageProps } from './Image.type'

const Image = ({src,alt,width, height,loading, onLoad,  onError, variant}:ImageProps ) => {
  return (
    <div className='image-container'>
      <img src={src} alt={alt} width={width} height={height}  loading={loading} className={`image ${variant ? `image-${variant}`:""}`} />
    </div>
  )
}

export default Image
