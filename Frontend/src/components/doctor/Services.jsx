import React from 'react'

const Service = ({services}) => {
  // const Symptome = services[0].split(",")
  return (
    <div className='services h-48 text-center flex flex-col justify-center items-center'>
      <p className='text-xl services-title font-bold'>Leistungsspektrum und behandelte Symptome</p>
      <div className='service-buttons text-center flex justify-around flex-wrap'>
      {/* {Symptome.map((item,i)=><span key={i} className='bg-main-dark-blue p-2 text-main-light-blue2 rounded-xl text-center m-1'> {item} </span>) } */}
        <h1>{services}</h1>
      </div>     
    </div>
  )
}

export default Service