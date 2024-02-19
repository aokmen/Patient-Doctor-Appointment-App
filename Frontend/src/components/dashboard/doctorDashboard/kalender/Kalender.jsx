import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import './calendar.css'
import { useSelector } from 'react-redux'
import useDataCall from '../../../../hooks/useDataCall'
import PatientInfo from './PatientInfo'
import Events from './Events'
import Feiertage from './Feiertage'
import moment from 'moment'


const Kalender = () => {

    const {appointments} = useSelector((state)=>state.data)
    const {getData} = useDataCall()

    const doctor_id = "65ca8f41c6ee1815e06c1a74";
    const dateToday = new Date().toISOString()

    let appsThisDoctor = appointments.filter((item) => {return item.doctorId === doctor_id})
    let todayAppsThisDoctor = appsThisDoctor.filter((item) => {return item.date === dateToday.split('T')[0]})

    const [appsThisDoctorSelectedDate, setAppsThisDoctorSelectedDate] = useState([])
    const [selectedDate, setSelectedDate] = useState(dateToday.split('T')[0])
    const [patient, setPatient] = useState("")

    const [holidayArray, setHolidayArray] = useState([])
    let dayData = []
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {

        getData("appointments")
        const AppsToday = appsThisDoctor.filter((item) => {return item.date === dateToday.split('T')[0]})
        setAppsThisDoctorSelectedDate(AppsToday)

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    const handleDateSelect = async (value) => {
  
        const dateArray = value.toLocaleString().split(' ').slice(0,1)[0].split('.')
        const datum = dateArray[2]+"-"+dateArray[1]+"-"+dateArray[0]
        console.log("dateArray:",dateArray)
        console.log("value:",value)
        setSelectedDate(datum)
        const AppsSelectedDate = appsThisDoctor.filter((item) => {return item.date === datum})
        setAppsThisDoctorSelectedDate(AppsSelectedDate)

        dayData = await holidays.filter((item) =>  item.date.iso === datum)
    
        setHolidayArray(dayData)
    }
    console.log("selectedDate2:",selectedDate);
    
  return (
    <div className='grid gap-5 grid-cols-5 bg-white h-[100vh] pt-6'>
        <div className='col-span-2 rounded-3xl'>
            <div className='border-2 bg-[#F1F7FE] rounded-3xl max-h-[60vh] min-h-[60vh] ml-5'>
                <Calendar 
                className="react-calendar2 mx-auto mt-12" 
                defaultView="month" 
                locale="de-DE" 
                onChange={handleDateSelect}
                tileClassName={({ date, view }) => {
                    //holidays.map((item) => console.log(item.date.iso))
                    if(holidays.find((dat) => dat.date.iso === moment(date).format('YYYY-MM-DD'))){
                        return 'highlight'
                    }
                  }}
                />
            </div>
            <div className='border-2 bg-[#F1F7FE] rounded-3xl max-h-[33vh] min-h-[33vh] ml-5 mt-5 flex flex-col'>
                <h1 className='text-3xl text-[#38638D] mx-auto border-b-2 border-[#38638D] px-10 my-3'>Feiertage</h1>
                <Feiertage holidayArray={holidayArray} holidays={holidays} setHolidays={setHolidays}/>
            </div>
        </div>
        
        <div className='col-span-3 flex flex-col mr-6'>
        
            <div className='max-h-[55vh] min-h-[55vh] py-3 rounded-3xl bg-[#F1F7FE] flex flex-col'>
                <h1 className='text-3xl text-[#38638D] mx-auto border-b-2 border-[#38638D] px-10 mb-3'>Meine Termine</h1>
                <div className='max-h-[48vh] min-h-[48vh] flex flex-row'>
                    <div className='overflow-scroll rounded-3xl max-w-[22vw] min-w-[22vw]'>
                   <table className='bg-slate-100 mx-auto mt-3 border-2 border-[#38638D]'>
                        <thead>
                            <tr>
                                <th colSpan='2' className='w-[120px] text-center border-2 border-[#38638D] p-2 text-lg'>{selectedDate || dateToday.split('T')[0]}</th>
                            </tr>
                            <tr>
                                <th className='w-[120px] text-center border-2 border-[#38638D] p-2'>Uhrzeit</th>
                                <th className='w-[120px] text-center border-2 border-[#38638D] p-2'>Patient</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {
                                selectedDate === dateToday.split('T')[0] ? 
                                todayAppsThisDoctor.map((item, index) => { 
                                    return <tr key={index}>
                                        <td className={`w-[120px] text-center border-r-2 border-[#38638D] p-1 ${index % 2 === 0 ? 'bg-purple-200' : 'bg-slate-100'}`}>{item.timeStart}</td>
                                        <td onClick={()=>setPatient(item.patientId)} className={`w-[240px] flex items-center justify-center text-center p-1 ${item.patientId && 'hover:underline hover:cursor-pointer'} ${index % 2 === 0 ? 'bg-purple-200' : 'bg-slate-100'}`}><p className={`w-[15px] h-[15px] mr-2 rounded-full ${(item.patientId && !item.isCancelled) ? 'bg-green-500' : ((item.patientId && item.isCancelled) ? 'bg-red-600' : null) }`}></p>{!(item.patientId) ? "frei" : (item?.patientId?.firstName + " " + item.patientId?.lastName) }</td>
                                    </tr>
                                })
                                :
                                (
                                    appsThisDoctorSelectedDate.length ? appsThisDoctorSelectedDate.map((item, index) => { 
                                    return <tr key={index}>
                                                <td className={`w-[120px] text-center border-r-2 border-[#38638D] p-1 ${index % 2 === 0 ? 'bg-purple-200' : 'bg-slate-100'}`}>{item.timeStart}</td>
                                                <td onClick={()=>setPatient(item.patientId)} className={`w-[240px] flex items-center justify-center text-center p-1 ${item.patientId && 'hover:underline hover:cursor-pointer'} ${index % 2 === 0 ? 'bg-purple-200' : 'bg-slate-100'}`}><p className={`w-[15px] h-[15px] mr-2 rounded-full ${(item.patientId && !item.isCancelled) ? 'bg-green-500' : ((item.patientId && item.isCancelled) ? 'bg-red-600' : null) }`}></p>{!(item.patientId) ? "frei" : (item?.patientId?.firstName + " " + item.patientId?.lastName) }</td>
                                            </tr>
                                            
                                })
                                :
                                    <tr>
                                        <td colSpan='2' className="w-[120px] text-center border-r-2 border-[#38638D] p-1 bg-purple-200">Ihre Termine sind an diesem Tag geschlossen.</td>
                                        
                                    </tr>
                                )
                                
                            }
                        </tbody>
                    </table> 
                </div>
                <div className=' rounded-3xl max-w-[27vw] min-w-[27vw] flex justify-center'>
                    <PatientInfo appsThisDoctorSelectedDate={appsThisDoctorSelectedDate} appsThisDoctor={appsThisDoctor} patient={patient} selectedDate={selectedDate}/>
                </div>
                </div>
                
            </div>
            <div className='max-h-[37vh] min-h-[37vh] py-3 mt-6 rounded-3xl bg-[#F1F7FE] flex flex-col'>
                <h1 className='text-3xl text-[#38638D] mx-auto border-b-2 border-[#38638D] px-10 mb-3'>Events</h1>
                <div className='max-h-[35vh] min-h-[35vh]'>
                    <Events selectedDate={selectedDate}/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Kalender