import React, { useEffect} from 'react'
import useDataCall from '../../../../hooks/useDataCall'

const ShowDays = ({name, appointmentDuration, startHour, finishHour, lunchStart, lunchFinish, doctor_id, id}) => {



    const {getData, delData} = useDataCall()


    useEffect(() => {
        getData("weekdays")

        // let relatedDay = days.filter((day) => {return day.nm === result.name})
        // console.log(days)

        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //console.log(days)

    // const handleDeleteWeekday = (id) => {
    //     delData("weekdays", id)
    // }
  return (
    <div className='flex justify-center items-center w-full'>
            
        <h3 htmlFor="days" className='text-2xl w-[10rem]'>{name}</h3> 
        <div className='w-full flex item-center ml-12 mt-5' id="days">
            <div className="w-full md:w-1/6 pr-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">TAGESAnfang</label>
                <div className="relative">
                    <div name="startHour" className="block appearance-none w-full bg-white border-2 border-[#38638D] text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight" id="grid-state">
                        <p>{startHour}</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">tagesende</label>
                <div className="relative">
                    <div className="block appearance-none w-full bg-white border-2 border-[#38638D] text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight" id="grid-state">
                        <p>{finishHour}</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">MITTAGSPAUSE</label>
                <div className="relative">
                    <div  className="block appearance-none w-full bg-white border-2 border-[#38638D] text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight" id="grid-state">
                        {
                            lunchStart ? <p>{lunchStart}</p> : <p>-</p>
                        }
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">PAUSEENDE</label>
                <div className="relative">
                    <div  className="block appearance-none w-full bg-white border-2 border-[#38638D] text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight" id="grid-state">
                        {
                            lunchFinish ? <p>{lunchFinish}</p> : <p>-</p>
                        }
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">Termin Dauer</label>
                <div className="relative">
                    <div className="block appearance-none w-full bg-white border-2 border-[#38638D] text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight" id="grid-state">
                        <p>{appointmentDuration} Min</p>
                    </div>
                </div>
            </div>
            <button className='md:w-[10rem] md:h-[3rem] bg-red-600 rounded-xl text-white mt-5 hover:bg-red-500 duration-150' onClick={()=>delData("weekdays", id)}>LÖSCHEN</button>
        </div>
    </div>
  )
}

export default ShowDays