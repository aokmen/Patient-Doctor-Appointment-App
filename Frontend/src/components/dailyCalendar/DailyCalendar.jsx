import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useDataCall from '../../hooks/useDataCall'
import DemoApp from './Fullcalendar'

const DailyCalendar = () => {

const dateToday = new Date().toISOString()
//console.log(dateToday)

const {appointments} = useSelector((state)=>state.data)
const {getData} = useDataCall()

//console.log(appointments)

const doctor_id = "65c4ca42d00f6312f1dd348f";

let todayApps = appointments.filter((item) => {return item.date === dateToday.split('T')[0]})
let todayAppsThisDoctor = todayApps.filter((item) => {return item.doctorId === doctor_id})

useEffect(() => {
    
    getData("appointments")
    getData("doctors")
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
// console.log(todayAppsThisDoctor)

//.date 

  return (
    <div className='w-full'>
      {<table className='bg-slate-100 mx-auto border-4'>
        <thead>
          <tr>
            <th className='w-[100px] text-center border-4 p-2'>{dateToday.split('T')[0]}</th>
            <th className='w-[200px] text-center border-4 p-2'>Termine</th>
          </tr>
        </thead>
        <tbody>
          {
          todayAppsThisDoctor.map((item, index) => { 
            return <tr key={index}>
              <td className={`w-[200px] text-center border-r-2 p-1 ${index % 2 === 0 ? 'bg-slate-300' : 'bg-slate-100'}`}>{item.timeStart}</td>
              <td className={`w-[300px] flex items-center justify-center text-center p-1 ${index % 2 === 0 ? 'bg-slate-300' : 'bg-slate-100'}`}><p className={`w-[15px] h-[15px] mr-2 rounded-full ${(item.patientId && !item.isCancelled) ? 'bg-green-500' : ((item.patientId && item.isCancelled) ? 'bg-red-600' : null) }`}></p>{!(item.patientId) ? "frei" : (item?.isCancelled === true ? (item.patientId?.firstName + " " + item.patientId?.lastName) : (item.patientId?.firstName + " " + item.patientId?.lastName)) }</td>
            </tr>
          })
        }
        </tbody>
        
        
      </table>}

    

    </div>
  )
}

export default DailyCalendar