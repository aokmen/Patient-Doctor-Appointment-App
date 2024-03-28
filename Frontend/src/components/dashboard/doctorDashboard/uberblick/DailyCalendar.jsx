import React from 'react'


const DailyCalendar = ({todayAppsThisDoctor, dateToday, setPatient}) => {

  

  return (
    <div >
      {
        todayAppsThisDoctor?.length ? 
        <table className='bg-slate-100 mx-auto border-2 border-[#38638D]'>
        <thead>
          <tr>
            <th className='w-[120px] text-center border-2 border-[#38638D] p-2'>{dateToday.split('T')[0]}</th>
            <th className='w-[240px] text-center border-2 border-[#38638D] p-2'>Termine</th>
          </tr>
        </thead>
        <tbody>
          {
          todayAppsThisDoctor?.map((item, index) => { 
            return <tr key={index}>
              <td className={`w-[120px] text-center border-r-2 border-[#38638D] p-1 ${index % 2 === 0 ? 'bg-slate-300' : 'bg-slate-100'}`}>{item.timeStart}</td>
              <td onClick={()=>setPatient(item.patientId)} className={`flex items-center justify-center text-center p-1 ${item.patientId && 'hover:underline hover:cursor-pointer'} ${index % 2 === 0 ? 'bg-slate-300' : 'bg-slate-100'}`}><p className={`w-[15px] h-[15px] mr-2 rounded-full ${(item.patientId && !item.isCancelled) ? 'bg-green-500' : ((item.patientId && item.isCancelled) ? 'bg-red-600' : null) }`}></p>{!(item.patientId) ? "frei" : (item?.patientId?.firstName + " " + item.patientId?.lastName) }</td>
            </tr>
          })
        }
        </tbody>
        
        
      </table>
      :
      <div className='flex justify-center'>
        <h1>Heute haben Sie keine Termine.</h1>
      </div>
      
      }
      

    

    </div>
  )
}

export default DailyCalendar