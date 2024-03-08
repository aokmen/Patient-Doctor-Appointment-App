import React, { useEffect, useState } from 'react'
import ManageDays from './ManageDays'
import { useSelector } from 'react-redux'
import useDataCall from '../../../../hooks/useDataCall'
import ShowDays from './ShowDays'

const ManageAppo = ({id}) => {

    const {weekdays} = useSelector((state)=>state.data)
    const {getData} = useDataCall()
    const doctor_id = id;
    //console.log(id)

    useEffect(() => {

        getData("weekdays")
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      

    const days = ["-----", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]

    const hours = ["--.--", "00.00", "00.30", "01.00", "01.30", "02.00", "02.30", "03.00", "03.30", "04.00", 
    "04.30", "05.00", "05.30", "06.00", "06.30", "07.00", "07.30", "08.00", "08.30","09.00", "09.30",
    "10.00",  "10.30", "11.00", "11.30", "12.00", "12.30", "13.00",  "13.30", "14.00", "14.30", "15.00",  "15.30",
    "16.00",  "16.30", "17.00",  "17.30", "18.00",  "18.30", "19.00",  "19.30", "20.00",  "20.30", "21.00",  "21.30", 
    "22.00",  "22.30", "23.00",  "23.30", 
    ]
    const dauer = ["---", "5 Min", "10 Min", "15 Min", "20 Min", "30 Min", "60 Min"]

    const dateToday = new Date().toISOString().split("T")[0]
    //console.log(dateToday)

    const [firstDate, setFirstDate] = useState("")
    const [secondDate, setSecondDate] = useState("")
    const [isLaterThan, setIsLaterThan] = useState(true)
    
    const [isDateSelected, setIsDateSelected] = useState(true)

    //const [isChecked, setIsChecked] = useState(false)


    const handleDateControl = (e) => {
        e.preventDefault()
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

    

    

    useEffect(() => {
        
     
        if(weekDaysThisDoctor.length === 0){
            setIsDateSelected(false)
        }
        else{
            setIsDateSelected(true)
            setFirstDate(weekDaysThisDoctor[0].startingDate)
            setSecondDate(weekDaysThisDoctor[0].endingDate)
        }
        
    
    }, [weekDaysThisDoctor])
    
    


    // const submitDateSelect = (e) => {
    //     e.preventDefault()
    //     setIsDateSelected(true)
    // }

    
  return (

    <div className='h-[100vh] w-[87vw]'>
        <div className=' bg-white rounded-3xl max-h-[86vh] min-h-[86vh] flex flex-col ml-[-8rem]'>
        {weekDaysThisDoctor.length === 0 && <>
            <div className='flex justify-center items-center'>
                    <div className='bg-white w-[70vw] p-5 rounded-xl'>
                        <h3 className='text-lg'>Sobald Sie den Datumsbereich für Ihre Termine ausgewählt haben, können Sie ihn <span className='underline'>nicht mehr ändern</span>. Bevor Sie Ihre Termine anlegen, sollten Sie daher <span className='underline'>sorgfältig entscheiden</span>, in welchem Zeitraum Sie unsere Anwendung nutzen wollen. Die erstellten Termine werden erst wieder wählbar, wenn Ihr erster Terminzeitraum endet. Wenn Sie zum Beispiel einen Termin für einen 6-monatigen Projektzeitraum anlegen, können Sie innerhalb dieses Zeitraums keinen weiteren Termin anlegen. </h3>
                    </div>
                </div>
                <div className='flex justify-center items-center w-[24vw] mx-auto rounded-xl'>
                    <div className=' w-[24vw] p-5'>
                        <h3 className='text-red-600 text-lg'>Ich habe es gelesen und damit einverstanden.</h3>
                    </div>
            
                    <input type="checkbox" className='w-[1.5rem] h-[1.5rem]' />
            </div>
        </>
        }
        <form className="w-full max-w-4xl mx-auto mt-8">
            <div className='flex justify-center items-center'>
                {
                    weekDaysThisDoctor.length === 0 ? 
                    <label htmlFor="rangeDatum" className='max-w-md text-lg'>Von welchem Datum bis zu welchem Datum möchten Sie Ihre Termine anlegen:</label>
                    :
                    <label htmlFor="rangeDatum" className='max-w-md text-lg'>Ausgewählte Daten:</label>
                }
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
                {/* {
                    isDateSelected ? <button disabled className={`px-3 py-2 text-lg bg-teal-600 rounded-lg ml-6 text-white duration-150`}>GEWÄHLT</button>
                    :
                    <button className={`px-3 py-2 text-lg bg-teal-600 rounded-lg ml-6 text-white hover:bg-teal-700 duration-150`} onClick={submitDateSelect}>ANFANGEN</button>
                } */}
                
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
    </div>
  )
}

export default ManageAppo