
import React from 'react'

export default function CarrouselImg({url_img, title}) {
  return (
    <div className='flex justify-center pt-32'>
        <img src={`img/${url_img}`} alt={title} className=''/>
    </div>
  )
}
