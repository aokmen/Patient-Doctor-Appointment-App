import React from 'react'

const Service = ({services}) => {
  return (
    <div className='services h-48 text-center flex flex-col justify-center items-center'>
      <p className='text-xl services-title font-bold'>Leistungsspektrum und behandelte Symptome</p>
      <div className='service-buttons text-center flex justify-around flex-wrap'>
<h1>{services}</h1>
      </div>
      
    </div>
  )
}

export default Service