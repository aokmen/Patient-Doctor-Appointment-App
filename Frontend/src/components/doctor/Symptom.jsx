import React from 'react'

const Symptom = () => {
  return (
    <div className='sypmtoms h-48 text-center flex flex-col justify-center items-center'>
      <p className='text-xl symptoms-title font-bold'>Leistungsspektrum und behandelte Symptome</p>
      <div className='sypmtoms h-48 text-center flex justify-around flex-wrap'>
        <span className='symptom-buttons text-lg'>Kopfschmerzen</span>
        <span className='symptom-buttons text-lg'>Zahnschmerzen</span>
        <span className='symptom-buttons text-lg'>Fieber</span>
        <span className='symptom-buttons text-lg'>Schwindelgefühl</span>
        <span className='symptom-buttons text-lg'>Erkältung</span>
        <span className='symptom-buttons text-lg'>Schnupfen</span>
        <span className='symptom-buttons text-lg'>Zittern</span>
        <span className='symptom-buttons text-lg'>Rückenschmerzen</span>
        <span className='symptom-buttons text-lg'>Husten</span>
      </div>
      
    </div>
  )
}

export default Symptom