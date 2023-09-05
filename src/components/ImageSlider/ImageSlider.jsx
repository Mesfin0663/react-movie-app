import React from 'react'
import './imageSlider.css'
function ImageSlider({images}) {
    console.log(images)
  return (
    <div>
      {
        images.map((img)=>(
            <img className='header_background' src={img.url} alt="background" />

        ))
      }
    </div>
  )
}

export default ImageSlider
