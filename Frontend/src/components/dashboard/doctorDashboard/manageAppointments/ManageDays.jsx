import React, { useEffect, useState } from 'react'
import useDataCall from '../../../../hooks/useDataCall';
import { useSelector } from 'react-redux';

const ManageDays = ({hours, dauer, days, doctor_id, firstDate, secondDate}) => {

    //console.log(weekdays)
    const [name, setName] = useState("")
    const [startHour, setStartHour] = useState("")
    const [finishHour, setFinishHour] = useState("")
    const [lunchStart, setLunchStart] = useState("")
    const [lunchFinish, setLunchFinish] = useState("")
    const [appointmentDuration, setAppointmentDuration] = useState("")


    const {postData, getData} = useDataCall()

    const {weekdays} = useSelector((state)=>state.data)

    const handleCreateWeekday = async (e) => {

        e.preventDefault()
        
        postData("weekdays", {
            doctorId: doctor_id,
            name: name,
            startHour: startHour,
            finishHour: finishHour,
            lunchStart: lunchStart,
            lunchFinish: lunchFinish,
            appointmentDuration: appointmentDuration.split(" ")[0],
            isFilled: true,
            startingDate: firstDate,
            endingDate: secondDate
        })

        await getData("weekdays")

        setName("")
        setStartHour("")
        setFinishHour("")
        setLunchStart("")
        setLunchFinish("")
        setAppointmentDuration("")

        await getData("weekdays")
    }

    useEffect(() => {
        getData("weekdays")

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //console.log(days)
    
    let weekDaysThisDoctor = weekdays.filter((weekD)=>weekD.doctorId === doctor_id)
    //console.log(weekDaysThisDoctor)

    let fullDays = weekDaysThisDoctor.map((tag) => {return tag.name})
    //console.log(fullDays)

    
    let remainedDays = days.filter((element) => !fullDays.includes(element))
    //console.log(remainedDays)
    
    
    
  return (
    <div className='flex justify-center items-center w-full mb-12'>
            
        <div className="w-full md:w-1/6 pr-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state1">Tag</label>
            <div className="relative">
                <select onChange={(e)=>setName(e.target.value)} name="tag" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state1">
                    {
                        remainedDays.map((item, index) => {
                                return <option key={index} disabled={ item === '-----' && true } selected={ item === '-----' && true } hidden={ item === '-----' && true } name="tag" value={item}>{item}</option>
                        })
                    }
                </select>
                                            
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div> 
        <div className='w-full flex item-center ml-12 mt-5' id="days">
            <div className="w-full md:w-1/6 pr-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state2">TAGESAnfang</label>
                <div className="relative">
                    <select onChange={(e)=>setStartHour(e.target.value)} name="startHour" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state2">
                        {
                            hours.map((item, index) => {
                                return <option key={index} disabled={ item === '--.--' && true } selected={ item === '--.--' && true } hidden={ item === '--.--' && true } name="startHour" value={item}>{item}</option>
                            })
                        }
                    </select>
                                            
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state3">tagesende</label>
                <div className="relative">
                    <select onChange={(e)=>setFinishHour(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state3">
                        {
                            hours.map((item, index) => {
                                return <option key={index}  disabled={ item === '--.--' && true } selected={ item === '--.--' && true } hidden={ item === '--.--' && true } name="finishHour" value={item}>{item}</option>
                            })
                        }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state4">MITTAGSPAUSE</label>
                <div className="relative">
                    <select  onChange={(e)=>setLunchStart(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state4">
                        {
                            hours.map((item, index) => {
                                return <option key={index}  disabled={ item === '--.--' && true } selected={ item === '--.--' && true } hidden={ item === '--.--' && true } name="lunchStart" value={item}>{item}</option>
                            })
                        }
                    </select>
                                            
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state5">PAUSEENDE</label>
                <div className="relative">
                    <select  onChange={(e)=>setLunchFinish(e.target.value)}  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state5">
                        {
                            hours.map((item, index) => {
                                return <option key={index}  disabled={ item === '--.--' && true } selected={ item === '--.--' && true } hidden={ item === '--.--' && true } name="lunchFinish" value={item}>{item}</option>
                            })
                        }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state6">Termin Dauer</label>
                <div className="relative">
                    <select onChange={(e)=>setAppointmentDuration(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state6">
                        {
                            dauer.map((item, index) => {
                                return <option key={index}  disabled={ item === '---' && true } selected={ item === '---' && true } hidden={ item === '---' && true } name="appointmentDuration" value={item}>{item}</option>
                            })
                        }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            <button type='submit' className='md:w-[10rem] md:h-[3rem] bg-emerald-600 rounded-xl text-white mt-5 hover:bg-emerald-500 duration-150' onClick={handleCreateWeekday}>ERSTELLEN</button>
                </div>
    </div>
  )
}

export default ManageDays