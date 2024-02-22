import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useDataCall from '../../../../hooks/useDataCall'

const Termine = ({date, timeStart, doctorId}) => {

    const { doctors } = useSelector((state) => state.data)
    const {getData} = useDataCall()

    
  
    useEffect(() => {
      getData("doctors")
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let doctorInfo = []
    if(doctors && doctors.length !== 0){
        doctorInfo = doctors.data?.filter((doct) => {return doct.id === doctorId})
        //console.log(doctorInfo[0])
    }

  return (
    <div className='flex flex-col justify-center items-center border-x-8 border-y-2 border-[#B7D8F8] mt-4 min-w-[12rem] max-w-[22rem] mx-auto'>
        <div className='flex flex-row justify-evenly'>
            <h3  className='text-[#38638D] text-lg font-bold'>{doctorInfo[0]?.branch}</h3>
        </div>
        <div className='flex justify-evenly mt-1'>
            <h3 className='mr-20 text-[#38638D]'>{date}</h3>
            <h3 className='text-[#38638D] font-bold'>Uhrzeit: {timeStart}</h3>
        </div>
    </div>
  )
}

export default Termine