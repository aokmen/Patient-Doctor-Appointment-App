import React from 'react'

const Service = ({services}) => {
  return (
    <div className='services h-48 text-center flex flex-col justify-center items-center'>
      <p className='text-xl services-title font-bold'>Leistungsspektrum und behandelte Symptome</p>
      <div className='service-buttons text-center flex justify-around flex-wrap'>
        {services.map((item) => {
          return <span key={item.id} className='service-button text-lg flex justify-center items-center'>{item.name}</span>
        })}
      </div>
      
    </div>
  )
}

export default Service