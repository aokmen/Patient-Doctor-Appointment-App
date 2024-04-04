import React from 'react'
import UserPNG from '../../../../assets/user.png'
import locationIcon from '../../../../assets/locationIcon.png'
import phoneIcon from '../../../../assets/phone.png'
import DeleteAppoModal from './DeleteAppoModal'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PatientInfo = ({patient, appsThisDoctor, appsThisDoctorSelectedDate, selectedDate}) => {
const navigate = useNavigate()
const {patients} = useSelector(state=>state.data)
const patientInfo = patients?.filter(item =>item.id===patient.patientId)
    let termin = []
    if(patient){
        termin = appsThisDoctor.filter((item) => item.patientId === patient.patientId).filter((item) => item.date === selectedDate)
    }
    else{
        termin = []
    }
    
    
   console.log("TERMIN:",termin);

    const isExist = appsThisDoctorSelectedDate.some((item) => item.patientId)
    console.log("patientInfopatientInfopatientInfo:",patient)

    const [showModal, setShowModal] = React.useState(false);

  return (
    <div className='flex ml-4 flex-col justify-center items-center max-w-[22rem] text-center'>
        {
            !appsThisDoctorSelectedDate.length ? 
            <div className='w-[23rem] text-center'>
                <h1 className='mt-20 text-2xl'>Ihre Termine sind an diesem Tag geschlossen.</h1>
            </div>
            :
            (
                !isExist ? 
                <div className='w-[20rem] text-center'>

                    <h1 className='mt-20 text-2xl'>An diesem Tag haben Sie keine vereinbarten Termine.</h1>
                </div>
                :
                (termin.length ? 
                    <>
                        <img src={patient?.profilePic || UserPNG} alt="Patient" className='w-[7rem] h-[7rem]'/>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-2xl mb-5 text-main-dark-blue'>{patientInfo[0]?.firstName} {patient?.lastName}</h1>
                            <h1 className='text-xl mb-2'>Datum: {patient?.date}</h1>
                            <h1 className='text-xl mb-2'>Uhrzeit: {patient?.timeStart}</h1>
                            <h1 className='text-xl mb-5'>Complaints: {patient?.complaints}</h1>

                            <div className='flex justify-start'>
                                <img src={locationIcon} className="mr-2 w-4 h-6" alt="locationIcon" />
                                <h1 className='text-lg'>{patientInfo[0]?.street}, {patientInfo[0]?.zipCode} </h1>
                            </div>
                            <div className='flex'>
                                <img src={phoneIcon} className="mr-1 w-5 h-5" alt="phoneIcon" />
                                <h1 className='text-lg'>{patientInfo[0]?.phone} </h1>
                            </div>
                            {
                                patient?.isCancelled  && <h1 className='absolute text-5xl text-red-600 font-bold opacity-10'>STORNIERT</h1>
                            }
                        </div>
                        {  
                           patient?.isCancelled ? 
                                <div className='w-[18vw] ml-3'>
                                    {
                                        patient.cancelUserType === "patient" ? 
                                            <h1 className='text-red-600 mt-10 text-lg font-bold mx-auto px-10'>Termin ist von dem Patient/der Patientin storniert worden.</h1>
                                        :
                                            (
                                                patient.cancelUserType === "admin" ?
                                                    <h1 className='text-red-600 mt-10 text-lg font-bold'>Termin ist von Website Admin storniert worden.</h1>
                                                :
                                                    <h1 className='text-red-600 mt-10 text-lg font-bold'>Termin ist von Ihnen storniert worden.</h1>
                                            )
                                    }
                                    <h1 className='text-red-600 px-10'>Stornierungsgrund: {patient?.cancelReason}</h1>
                                </div>
                            :
                                <div className='flex justify-evenly items-center w-[20vw] ml-3'>
                                    <button onClick={() => navigate("message")} className='mt-10 bg-sky-600 text-white text-lg py-3 px-4 rounded-xl hover:bg-sky-700 duration-150'>SEND NACHRICHT</button>
                                    {/* <button onClick={()=>setShowModal(true)} className='mt-10 bg-red-600 text-white text-lg py-3 px-4 rounded-xl hover:bg-red-700 duration-150'>STORNIEREN</button> */}
                                </div>
                        }
                        
                    </>
                    :
                    <div className='w-[23rem] text-center'>

                        <h1 className='mt-20 text-2xl'>Bitte klicken Sie auf eine Patient-Name links um ihre/seine Info zu sehen.</h1>
                    </div>
                )
            )
            
        }
        <DeleteAppoModal showModal={showModal} setShowModal={setShowModal} termin={termin} patient={patient} patientInfo={patientInfo}/>
           </div>
  )
}

export default PatientInfo