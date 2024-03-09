import React, { useEffect } from 'react'
import UserPNG from '../../../../assets/user.png'
import locationIcon from '../../../../assets/locationIcon.png'
import phoneIcon from '../../../../assets/phone.png'
import { useSelector } from 'react-redux'
import useDataCall from '../../../../hooks/useDataCall'
import CancelAppoModal from './CancelAppoModal'

const TerminInfo = ({termin}) => {

    const { doctors } = useSelector((state) => state.data)
    const {getData} = useDataCall()

  
    useEffect(() => {
      getData("doctors")
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let doctorInfo = []
    if(doctors && doctors.length !== 0){
        doctorInfo = doctors.data?.filter((doct) => {return doct.id === termin.doctorId})
        // console.log(doctorInfo)
    }

    //const termin = todayAppsThisDoctor.filter((item) => item.patientId === patient)

    const [showModal, setShowModal] = React.useState(false);

  return (
    <div className='flex flex-col justify-center items-center'>
        {
            termin.date ? 
            <>
                <img src={doctorInfo[0]?.profilePic || UserPNG} alt="termin" className='w-[7rem] h-[7rem] mt-3'/>
                <div className='flex flex-col justify-center items-center'>
                    
                    <h1 className='text-xl mb-2'>Datum: {termin?.date}</h1>
                    <h1 className='text-xl mb-2'>Uhrzeit: {termin?.timeStart}</h1>
                    <h1 className='text-xl mb-2'>Name der Arzt/in: {doctorInfo[0]?.title}. {doctorInfo[0]?.firstName} {doctorInfo[0]?.lastName}</h1>
                    <h1 className='text-xl mb-5'>Complaints: {termin?.complaints}</h1>

                    <div className='flex justify-start'>
                        <img src={locationIcon} className="mr-2 w-4 h-6" alt="locationIcon" />
                        <h1 className='text-lg'>{doctorInfo[0]?.street}, {doctorInfo[0]?.zipCode} </h1>
                     </div>
                    <div className='flex'>
                        <img src={phoneIcon} className="mr-1 w-5 h-5" alt="phoneIcon" />
                        <h1 className='text-lg'>{doctorInfo[0]?.phone} </h1>
                    </div>
                    {
                        termin.isCancelled && <h1 className='absolute text-5xl text-red-600 font-bold opacity-50'>STORNIERT</h1>
                    }
                </div>
                {
                    termin.isCancelled ? 
                    <div>
                        {
                            termin.cancelUserType === "doctor" ? 
                            <h1 className='text-red-600 mt-10 text-lg font-bold'>Termin ist von dem Arzt/ der Ärztin storniert worden.</h1>
                            :
                            (
                                termin.cancelUserType === "admin" ?
                                <h1 className='text-red-600 mt-10 text-lg font-bold'>Termin ist von Website Admin storniert worden.</h1>
                                :
                                <h1 className='text-red-600 mt-10 text-lg font-bold'>Termin ist von Ihnen storniert worden.</h1>
                            )
                        }
                        <h1 className='text-red-600'>Stornierungsgrund: {termin?.cancelReason}</h1>
                    </div>
                    :
                    <div className='flex justify-evenly items-center w-[20vw] ml-3'>
                    <button className='mt-10 bg-sky-600 text-white text-lg py-3 px-4 rounded-xl hover:bg-sky-700 duration-150'>SEND NACHRICHT</button>
                    <button onClick={()=>setShowModal(true)} className='mt-10 bg-red-600 text-white text-lg py-3 px-4 rounded-xl hover:bg-red-700 duration-150'>STORNIEREN</button>
                </div>
                }
                <CancelAppoModal showModal={showModal} setShowModal={setShowModal} termin={termin} doctorInfo={doctorInfo}/>
            </>
            :
            <div className='w-[30rem] text-center'>

                <h1 className='mt-20 text-2xl'>Bitte klicken Sie auf einen Termin links um seine Detail zu sehen.</h1>
            </div>
            
        }
           </div>
  )
}

export default TerminInfo