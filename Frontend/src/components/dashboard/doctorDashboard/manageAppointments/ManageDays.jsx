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

    const handleCreateWeekday =  (e) => {

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

        getData("weekdays")

        setName("")
        setStartHour("")
        setFinishHour("")
        setLunchStart("")
        setLunchFinish("")
        setAppointmentDuration("")

        getData("weekdays")
        window.location.reload();
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
    <div className='d-man-tag-main2 w-[900px] flex justify-center items-center mb-12 mt-5'>
            
        <div>
            <label className=" tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state1">Tag</label>
            <div className="relative">
                <select onChange={(e)=>setName(e.target.value)} name="tag" className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-2 pr-5 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state1">
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
        <div className='d-man-tag-create flex item-center justify-center items-center' id="days" >
            <div className="d-man-tag-create-sub flex justify-center items-center">
            <div className="d-man-tag-title w-24 flex flex-col justify-center items-center">
                <label className=" tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state2">Tagesanfang</label>
                <div className="relative">
                    <select onChange={(e)=>setStartHour(e.target.value)} name="startHour" className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-2 pr-5 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state2">
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
            <div className="d-man-tag-title w-24 flex flex-col justify-center items-center">
                <label className=" tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state3">Tagesende</label>
                <div className="relative">
                    <select onChange={(e)=>setFinishHour(e.target.value)} className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-2 pr-5 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state3">
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
            <div className="d-man-tag-title w-24 flex flex-col justify-center items-center">
                <label className=" tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state4">Mittagspause</label>
                <div className="relative">
                    <select  onChange={(e)=>setLunchStart(e.target.value)} className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-2 pr-5 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state4">
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
            <div className="d-man-tag-title w-24 flex flex-col justify-center items-center">
                <label className="d-man-tag-title-pause tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state5">Ende der Pause</label>
                <div className="relative">
                    <select  onChange={(e)=>setLunchFinish(e.target.value)}  className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-2 pr-5 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state5">
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
            <div className="d-man-tag-title w-24 flex flex-col justify-center items-center ">
                <label className=" tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state6">Termindauer</label>
                <div className="relative">
                    <select onChange={(e)=>setAppointmentDuration(e.target.value)} className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-2 pr-5 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state6">
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
            </div>
         
            <div>
            <button type='submit' className='d-man-tag-btn-del w-[10rem] h-[3rem] ml-3 bg-emerald-600 rounded-xl text-white hover:bg-emerald-500 duration-150' onClick={handleCreateWeekday}>ERSTELLEN</button>
            </div>
            
                </div>
    </div>
  )
}

export default ManageDays