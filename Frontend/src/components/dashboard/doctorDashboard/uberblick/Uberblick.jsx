import React, { useEffect, useState } from 'react'
import DailyCalendar from './DailyCalendar'
import { useSelector } from 'react-redux'
import useDataCall from '../../../../hooks/useDataCall'
import Calendar from 'react-calendar'
import moment from 'moment'
import { getGermanHolidays } from './HolidayService.js';
import PatientInfo from './PatientInfo.jsx'
import '../../../doctor/ReactCalendar.css'



const Uberblick = () => {

    const [patient, setPatient] = useState("")
    const [holidayArray, setHolidayArray] = useState([])
    let dayData = []

    const [holidays, setHolidays] = useState([]);  

    const dateToday = new Date().toISOString()
//console.log(dateToday)

const {appointments} = useSelector((state)=>state.data)
const {getData} = useDataCall()

//console.log(appointments)

const doctor_id = "65cdd8623302b5068be75a3e";

let todayApps = appointments.filter((item) => {return item.date === dateToday.split('T')[0]})
let todayAppsThisDoctor = todayApps.filter((item) => {return item.doctorId === doctor_id})

// useEffect(() => {
    
//     getData("appointments")
//     getData("doctors")
//     // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [])
// console.log(todayAppsThisDoctor)

/* ---------------------------------------------------------------------------------------------------- */

useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const holidayData = await getGermanHolidays();
        setHolidays(holidayData);
      } catch (error) {
        console.error('Error fetching holidays:', error);
      }
    };

    //fetchHolidays();

    getData("appointments").then(()=>getData("doctors"))
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

//console.log(holidays)

const handleDateSelect = async (value) => {
    //console.log("Hello")
    const dateArray = value.toLocaleString().split(',').slice(0,1)[0].split('/')
    const datum = dateArray[2]+"-"+dateArray[1]+"-"+dateArray[0]

    dayData = await holidays.filter((item) =>  item.date.iso === datum)
    
    setHolidayArray(dayData)
}

//console.log(holidayArray)
//.date 

  return (
    <div className='px-14 py-10 h-[100vh] w-[87vw]'>
        <div className='mb-6 h-28 flex justify-between items-center bg-white w-full rounded-3xl'>
            <div>
                <h1 className='text-4xl font-bold w-80 text-[#38638D] ml-14'>Überblick</h1>
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
        <div className='grid grid-cols-11 gap-8 rounded-3xl'>
            <div className='col-span-3 bg-white flex flex-col max-h-[80vh] overflow-scroll rounded-l-3xl'>
                <div className='flex flex-col justify-center items-center border-b-4 border-[#38638D] w-[22rem] mx-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#38638D] mt-4">
                        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                    </svg>

                    <h2 className='text-3xl text-[#38638D] my-4'>Heutige Termine</h2>
                </div>
                <div className='mt-8'>
                   <DailyCalendar todayAppsThisDoctor={todayAppsThisDoctor} dateToday={dateToday} setPatient={setPatient}/> 
                </div>
            </div>
            <div className='col-span-4 grid grid-rows-7 gap-8'>
                <div className='col-span-1 row-span-2 bg-white flex flex-col justify-evenly text-center p-3 max-h-[13rem] min-h-[13rem] max-w-[17rem]'>
                    <h1 className='text-3xl wrap text-[#38638D]'>Gesamtzahl der Patienten</h1>
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 border-r-4 border-[#B7D8F8] text-[#B7D8F8] pr-3">
                            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                        </svg>
                        <p className='text-3xl text-[#38638D] font-bold pl-3'>111</p>
                    </div>
                </div>
                <div className='col-span-1 row-span-2 bg-white flex flex-col justify-evenly text-center p-3 max-h-[13rem] min-h-[13rem] max-w-[17rem]'>
                    <h1 className='text-3xl wrap text-[#38638D]'>Gesamtzahl der Termine</h1>
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 border-r-4 border-[#B7D8F8] text-[#B7D8F8] pr-3">
                            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                        </svg>
                        <p className='text-3xl text-[#38638D] font-bold pl-3'>3234</p>
                    </div>
                </div>
                <div className='col-span-2 row-span-5 bg-white min-h-[53vh]'>
                    <div className='text-3xl w-[16rem] mt-3 text-[#38638D] border-b-2 border-[#38638D] mx-auto text-center'><h1>Patient Info</h1></div>
                    <PatientInfo patient={patient} todayAppsThisDoctor={todayAppsThisDoctor}/>
                </div>
                
            </div>
            <div className='col-span-4 grid grid-rows-7 gap-8'>
                <div className='col-span-1 row-span-2 bg-white flex flex-col justify-evenly text-center p-3 max-h-[13rem] min-h-[13rem] max-w-[17rem] min-w-[15rem]'>
                    <h1 className='text-3xl wrap text-[#38638D]'>Heutige Termine</h1>
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 border-r-4 border-[#B7D8F8] text-[#B7D8F8] pr-3">
                            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                        </svg>

                        <p className='text-3xl text-[#38638D] font-bold pl-3'>21</p>
                    </div>
                </div>
                <div className='col-span-1 rounded-tr-3xl row-span-2 bg-white flex flex-col justify-evenly text-center p-3 max-h-[13rem] min-h-[13rem] max-w-[17rem] min-w-[15rem]'>
                    <h1 className='text-3xl wrap text-[#38638D]'>Gesamtbewertung</h1>
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 border-r-4 border-[#B7D8F8] text-[#B7D8F8] pr-3">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <p className='text-3xl text-[#38638D] font-bold pl-3'>4.7</p>
                    </div>
                </div>
                
                <div className='col-span-2 row-span-5 bg-white rounded-br-3xl min-h-[53vh] flex flex-col items-center'>
                    <div className='text-3xl w-[16rem] mt-3 text-[#38638D] border-b-2 border-[#38638D] mx-auto text-center'><h1>Kalender</h1></div>
                    <Calendar className="react-calendar mx-auto mt-5" defaultView="month" locale="de-DE" onChange={handleDateSelect} 
                        tileClassName={({ date, view }) => {
                            //holidays.map((item) => console.log(item.date.iso))
                            if(holidays.find((dat) => dat.date.iso === moment(date).format('YYYY-MM-DD'))){
                                return 'highlight'
                            }
                            // if(holidays.find(x=>x===moment(date).format("YYYY-MM-DD"))){
                            //  return  'highlight'
                            // }
                          }}
                    />
                    <table className='mt-5 text-start text-[#38638D] min-w-[27rem] max-w-[27rem] wrap'>
                       {

                            holidayArray.map((item) => {
                                
                                return (
                                    <>
                                        <tr><th className='text-[#6f48eb]'>{item.date.iso}</th></tr>
                                        <tr className='flex justify-center items-center border-2'>
                                            <td className='py-1 px-2'>{item.name}</td>
                                            <td className='border-l-2 pl-2'>
                                               {
                                                    item.states !== "All" ? item.states?.map((stat) => {
                                                        return (
                                                            <>
                                                                {stat.name},
                                                            </>
                                                        )
                                                    })
                                                    :
                                                    "Alle Länder"
                                                } 
                                            </td>
                                            
                                        
                                        </tr>
                                        
                                    </>
                                
                                )

                            })
                        } 
                    </table>
                    
                    
                </div>   
                </div>

        </div>

    </div>
  )
}

export default Uberblick