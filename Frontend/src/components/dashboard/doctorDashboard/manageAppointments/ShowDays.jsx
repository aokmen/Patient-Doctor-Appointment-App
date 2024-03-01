import React, { useEffect} from 'react'
import useDataCall from '../../../../hooks/useDataCall'
import { useSelector } from 'react-redux';

const ShowDays = ({name, appointmentDuration, startHour, finishHour, lunchStart, lunchFinish, doctor_id, id}) => {



    // const { appointments } = useSelector((state) => state.data);
    const { getData, delData } = useDataCall()
    // const { userId } = useSelector((state) => state.auth);

    // useEffect(() => {
    //   getData("doctors");
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    
    // let allAppointmentsThisDoctor = appointments.filter((item) => {
    //   return item.doctorId === userId;
    // });
    // let receivedAppThisDoctor = allAppointmentsThisDoctor.filter((app) => {
    //   return app.patientId;
    // });
    // console.log(receivedAppThisDoctor)


    useEffect(() => {
        getData("weekdays")

        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
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
              {/* {
                  receivedAppThisDoctor.length !== 0 ?   //!Burasi normalde calisiyor ama istersen silemeyecek sekilde düzeltirsin
                      <div className=''>
                          <button disabled className='md:w-[10rem] md:h-[3rem] bg-red-600 rounded-xl text-white mt-5' onClick={() => delData("weekdays", id)}>LÖSCHEN</button>
                          <p className='text-red-600'>Bevor Sie Ihre Termine löschen, müssen Sie alle vereinbarten Termine stornieren.</p>
                      </div>
                      : */}
                      <button className='md:w-[10rem] md:h-[3rem] bg-red-600 rounded-xl text-white mt-5 hover:bg-red-500 duration-150' onClick={()=>delData("weekdays", id)}>LÖSCHEN</button>
              {/* } */}
            
        </div>
    </div>
  )
}

export default ShowDays