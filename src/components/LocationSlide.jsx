// slider component

import React from 'react'

function LocationSlide({data}) {
    console.log(data);
  return (
    <div> 
        <p className='text-3xl'>{data.text}</p>
        <p className='pt-8'>{data.author}<br/> Trainer at Recoded</p>
    </div>
  )
}

export default LocationSlide
