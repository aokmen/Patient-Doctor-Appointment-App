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

    const doctor_id = "65cdd8623302b5068be75a3e";
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
        const dateArray = value.toLocaleString().split(',').slice(0,1)[0].split('/')
        const datum = dateArray[2]+"-"+dateArray[1]+"-"+dateArray[0]
        //console.log(datum)
        setSelectedDate(datum)
        const AppsSelectedDate = appsThisDoctor.filter((item) => {return item.date === datum})
        setAppsThisDoctorSelectedDate(AppsSelectedDate)

        dayData = await holidays.filter((item) =>  item.date.iso === datum)
    
        setHolidayArray(dayData)
    }
    
    const [iSEventsShown, setiSEventsShown] = useState(false)
    
  return (
    <div className='px-14 py-10 h-[100vh] w-[87vw]'>
        <div className='mb-6 h-28 flex justify-between items-center bg-white w-full rounded-3xl'>
            <div>
                <h1 className='text-4xl font-bold w-80 text-[#38638D] ml-14'>Kalender</h1>
            </div>
            <div className='flex justify-evenly items-center flex-1'>
                <div className='flex justify-start items-center border-2 py-1 px-4 w-[28rem] border-[#38638D] rounded-lg bg-[#F1F7FE]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-[#38638D] font-bold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" className='p-2 w-full focus:outline-none text-lg bg-[#F1F7FE]' placeholder='Suchen'/>

                </div>
                <div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 mx-2 text-[#38638D] font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 mx-2 text-[#38638D] font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 mx-2 text-[#38638D] font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
        <div className='grid grid-cols-2 gap-8 rounded-3xl'>
            <div className='col-span-1 bg-white rounded-l-3xl max-h-[80vh] flex flex-col'>
                
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
                
                <div className=' rounded-3xl max-h-[33vh] min-h-[32vh] mt-5 flex flex-col'>
                    <h1 className='text-3xl text-[#38638D] mx-auto border-b-2 border-[#38638D] px-10 my-3'>Feiertage</h1>
                    <Feiertage holidayArray={holidayArray} holidays={holidays} setHolidays={setHolidays}/>
                </div>
            </div>

            <div className='col-span-1 bg-white rounded-r-3xl max-h-[80vh] flex flex-col'>
                <div className='py-3 rounded-3xl flex flex-col items-center'>
                    <div className='flex justify-start items-center border-2 w-[32rem] border-[#38638D] rounded-lg bg-[#F1F7FE] mb-6 mt-3'>
                        <button onClick={()=>setiSEventsShown(false)} className={`w-1/2 py-2 px-3 flex justify-center items-center text-3xl  ${!iSEventsShown ? 'bg-[#38638D]' : ''} ${!iSEventsShown ? 'text-white' : 'text-[#38638D]'}`}>Termine</button>
                        <button onClick={()=>setiSEventsShown(true)} className={`flex-1 py-2 px-3 border-l-2 border-[#38638D] flex justify-center items-center text-3xl ${iSEventsShown ? 'bg-[#38638D]' : ''} ${iSEventsShown ? 'text-white' : 'text-[#38638D]'}`}>Events</button>
                    </div>
                    {
                        !iSEventsShown ?    
                            <div className='max-h-[67vh] min-h-[67vh] flex flex-row'>
                                <div className='overflow-scroll rounded-3xl max-w-[18vw] min-w-[18vw]'>
                                    <table className='bg-slate-100 mx-auto my-5 border-2 border-[#38638D]'>
                                        <thead>
                                            <tr>
                                                <th colSpan='2' className='w-[120px] text-center border-2 border-[#38638D] p-2 text-lg'>Termine am {selectedDate || dateToday.split('T')[0]}</th>
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
                                <div className=' rounded-3xl max-w-[20vw] min-w-[20vw] flex justify-center'>
                                    <PatientInfo appsThisDoctorSelectedDate={appsThisDoctorSelectedDate} appsThisDoctor={appsThisDoctor} patient={patient} selectedDate={selectedDate}/>
                                </div>
                            </div>
                        :
                            <div className='max-h-[66vh] min-h-[66vh] py-3 mt-6 rounded-3xl flex flex-col'>
                                <div className='max-h-[35vh] min-h-[35vh]'>
                                    <Events selectedDate={selectedDate}/>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
        
        
        
        
    </div>
  )
}

export default Kalender