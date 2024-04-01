import React, { useEffect} from 'react'
import useDataCall from '../../../../hooks/useDataCall'
import { useSelector } from 'react-redux';

const ShowDays = ({name, appointmentDuration, startHour, finishHour, lunchStart, lunchFinish, doctor_id, id}) => {



    // const { appointments } = useSelector((state) => state.data);
    const { getData, delData } = useDataCall()
    // const {weekdays} = useSelector()
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
    const removeData = () => {
        delData("weekdays", id)
        window.location.reload();
        console.log("week-Id:",id);
        // console.log("weekdays:",weekdays);
    }

    
  return (
    <div className='d-man-tag-main flex justify-center items-center'>

         <div className='d-man-tag-main-title w-[120px]'>
         <h3 htmlFor="days" className=' text-xl mr-3'>{name}:</h3> 
        </div>   
        
        <div className='d-man-tag-create flex justify-center items-center' id="days">
            <div className="d-man-tag-create-sub flex justify-center items-center">
            <div className="d-man-tag-title w-24 flex flex-col justify-center items-center">
                <label className="  text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">Tagesanfang</label>
                <div className="relative">
                    <div name="startHour" className="d-man-tag-title-box appearance-none  w-[70px]  bg-white border-2 text-center border-[#d9e4f0] text-gray-700 " id="grid-state">
                        <p>{startHour}</p>
                    </div>
                </div>
            </div>
            <div className="d-man-tag-title w-24 flex flex-col justify-center items-center">
                <label className="  text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">Tagesende</label>
                <div className="relative">
                    <div className="d-man-tag-title-box appearance-none  w-[70px]  bg-white border-2 text-center border-[#d9e4f0] text-gray-700 " id="grid-state">
                        <p>{finishHour}</p>
                    </div>
                </div>
            </div>
            <div className="d-man-tag-title w-24 flex flex-col justify-center items-center">
                <label className="  text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state"> Mittagspause</label>
                <div className="relative">
                    <div  className="d-man-tag-title-box appearance-none  w-[70px]  bg-white border-2 text-center border-[#d9e4f0] text-gray-700 " id="grid-state">
                        {
                            lunchStart ? <p>{lunchStart}</p> : <p>-</p>
                        }
                    </div>
                </div>
            </div>
            <div className="d-man-tag-title w-24 flex flex-col justify-center items-center">
                <label className="d-man-tag-title-pause text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">Ende der Pause</label>
                <div className="relative">
                    <div  className="d-man-tag-title-box appearance-none  w-[70px]  bg-white border-2 text-center border-[#d9e4f0] text-gray-700 " id="grid-state">
                        {
                            lunchFinish ? <p>{lunchFinish}</p> : <p>-</p>
                        }
                    </div>
                </div>
            </div>
            <div className="d-man-tag-title w-24 flex flex-col justify-center items-center">
                <label className="  text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">Termindauer</label>
                <div className="relative">
                    <div className="d-man-tag-title-box appearance-none  w-[70px] bg-white border-2 text-center border-[#d9e4f0] text-gray-700 " id="grid-state">
                        <p className='d-man-tag-title-pag'>{appointmentDuration} Min</p>
                    </div>
                </div>
              </div>
            </div>
            <div>
              {/* {
                  receivedAppThisDoctor.length !== 0 ?   //!Burasi normalde calisiyor ama istersen silemeyecek sekilde düzeltirsin
                      <div className=''>
                          <button disabled className='md:w-[10rem] md:h-[3rem] bg-red-600 rounded-xl text-white mt-5' onClick={() => delData("weekdays", id)}>LÖSCHEN</button>
                          <p className='text-red-600'>Bevor Sie Ihre Termine löschen, müssen Sie alle vereinbarten Termine stornieren.</p>
                      </div>
                      : */}
                      <button className='d-man-tag-btn-del w-[10rem] h-[3rem] ml-3 bg-red-600 rounded-xl text-white hover:bg-red-500 duration-150' onClick={()=>delData("weekdays", id)}>LÖSCHEN</button>
              {/* } */}
            </div>
           
     
 
               

             
            
        </div>
    </div>
  )
}

export default ShowDays