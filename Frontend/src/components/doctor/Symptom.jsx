import React from 'react'

const Symptom = ({complaints}) => {
  return (
    <div className='sypmtoms h-48 text-center flex flex-col justify-center items-center'>
      <p className='text-xl symptoms-title font-bold'>Leistungsspektrum und behandelte Symptome</p>
      <div className='symptom-buttons text-center flex justify-around flex-wrap'>
        {complaints.map((item) => {
          return <span key={item.id} className='symptom-button text-lg flex justify-center items-center'>{item.name}</span>
        })}
      </div>
      
    </div>
  )
}

export default Symptom