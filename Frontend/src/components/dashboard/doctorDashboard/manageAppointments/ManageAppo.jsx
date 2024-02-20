import React, { useEffect, useState } from 'react'
import ManageDays from './ManageDays'
import { useSelector } from 'react-redux'
import useDataCall from '../../../../hooks/useDataCall'
import ShowDays from './ShowDays'

const ManageAppo = () => {

    const {weekdays} = useSelector((state)=>state.data)
    const {getData} = useDataCall()
    const doctor_id = "65d4c8f1db0d1dec3f2bf3f7";

    useEffect(() => {

        getData("weekdays")
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      

    const days = ["Wahl", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]

    const hours = ["00.00", "00.30", "01.00", "01.30", "02.00", "02.30", "03.00", "03.30", "04.00", 
    "04.30", "05.00", "05.30", "06.00", "06.30", "07.00", "07.30", "08.00", "08.30","09.00", "09.30",
    "10.00",  "10.30", "11.00", "11.30", "12.00", "12.30", "13.00",  "13.30", "14.00", "14.30", "15.00",  "15.30",
    "16.00",  "16.30", "17.00",  "17.30", "18.00",  "18.30", "19.00",  "19.30", "20.00",  "20.30", "21.00",  "21.30", 
    "22.00",  "22.30", "23.00",  "23.30", 
    ]
    const dauer = ["Wahl", "5 Min", "10 Min", "15 Min", "20 Min", "30 Min", "60 Min"]

    const dateToday = new Date().toISOString().split("T")[0]
    //console.log(dateToday)

    const [firstDate, setFirstDate] = useState("")
    const [secondDate, setSecondDate] = useState("")
    const [isLaterThan, setIsLaterThan] = useState(true)
    
    const [isDateSelected, setIsDateSelected] = useState(true)



    const handleDateControl = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setSecondDate(e.target.value)
        if(secondDate <= firstDate){
            setIsLaterThan(false)
        }
        else{
            setIsLaterThan(true)
        }
        // firstDateChosen = firstDate
        // secondDateChosen = secondDate
    }

    let weekDaysThisDoctor = weekdays.filter((weekD)=>weekD.doctorId === doctor_id)
    console.log(weekDaysThisDoctor)
    

    

    useEffect(() => {
        console.log(weekDaysThisDoctor)
        if(weekDaysThisDoctor.length === 0){
            setIsDateSelected(false)
        }
        else{
            setIsDateSelected(true)
            setFirstDate(weekDaysThisDoctor[0].startingDate)
            setSecondDate(weekDaysThisDoctor[0].endingDate)
        }
    }, [weekDaysThisDoctor])
    
    
    console.log(isDateSelected)

    const submitDateSelect = (e) => {
        e.preventDefault()
        setIsDateSelected(true)
    }

    
  return (

    <div className='px-14 py-10 h-[100vh] w-[87vw]'>
        <div className='mb-6 h-28 flex justify-between items-center bg-white w-full rounded-3xl'>
            <div>
                <h1 className='text-4xl font-bold w-80 text-[#38638D] ml-14'>Termin-Einstellungen</h1>
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
        
        
        <form className="w-full max-w-4xl mx-auto">
            <div className='flex justify-center items-center'>
                <label htmlFor="rangeDatum" className='max-w-md text-lg'>Von welchem Datum bis zu welchem Datum möchten Sie Ihre Termine anlegen:</label>
                <div className="flex flex-wrap -mx-3 mb-6 ml-3" id="rangeDatum">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-von-datum">
                            Von
                        </label>
                        {
                            isDateSelected ? <input disabled value={firstDate} onChange={(e)=>setFirstDate(e.target.value)} className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-von-datum" type="date" placeholder="Jane" min={dateToday} max="2025-12-31"/>
                            :
                            <input value={firstDate} onChange={(e)=>setFirstDate(e.target.value)} className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-von-datum" type="date" placeholder="Jane" min={dateToday} max="2025-12-31"/>
                        }
                        
                        
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-bis-datum">
                            Bis
                        </label>
                        {
                            isDateSelected ? <input disabled value={secondDate} className={`appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-bis-datum" type="date" placeholder="Doe" min={dateToday} max="2025-12-31"/>
                            : 
                            <input value={secondDate} onChange={handleDateControl} className={`appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-bis-datum" type="date" placeholder="Doe" min={dateToday} max="2025-12-31"/>
                        }
                        
                    </div>
                    {
                        !isLaterThan ? <p className='text-red-600 italic'>Das zweite Datum kann nicht vor dem ersten Datum liegen.</p> : ''
                    }
                    
                </div>
                {
                    isDateSelected ? <button disabled className={`px-3 py-2 text-lg bg-teal-600 rounded-lg ml-6 text-white duration-150`}>GEWÄHLT</button>
                    :
                    <button className={`px-3 py-2 text-lg bg-teal-600 rounded-lg ml-6 text-white hover:bg-teal-700 duration-150`} onClick={submitDateSelect}>ANFANGEN</button>
                }
                
            </div>
            { (weekDaysThisDoctor || isDateSelected) &&
            <div className="flex flex-wrap -mx-3 mb-2">

                <h3 className='text-lg mx-auto'>Bitte geben Sie unten Ihre wöchentlichen Arbeitszeiten ein, um Ihre Termine zu erstellen:</h3>
                <ManageDays hours={hours} dauer={dauer} days={days} doctor_id={doctor_id} firstDate={firstDate} secondDate={secondDate}/>
                {
                    weekDaysThisDoctor.map((item, index) => {
                        return <div key={index} className='w-full'>
                                    <ShowDays {...item} doctor_id={doctor_id}/>
                                </div>
                    
                    })
                }    
            </div>
            }
        </form>
    </div>
  )
}

export default ManageAppo