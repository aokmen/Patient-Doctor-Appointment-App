import React from 'react'
import UserPNG from '../../../../assets/user.png'
import locationIcon from '../../../../assets/locationIcon.png'
import phoneIcon from '../../../../assets/phone.png'
import DeleteAppoModal from './DeleteAppoModal'

const PatientInfo = ({patient, appsThisDoctor, appsThisDoctorSelectedDate, selectedDate}) => {

    //console.log(patient)
    let termin = []
    if(patient){
        termin = appsThisDoctor.filter((item) => item.patientId === patient).filter((item) => item.date === selectedDate)
    }
    else{
        termin = []
    }
    
    
    console.log(termin)

    const isExist = appsThisDoctorSelectedDate.some((item) => item.patientId)
    //console.log(isExist)

    const [showModal, setShowModal] = React.useState(false);

  return (
    <div className='flex flex-col justify-center items-center'>
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
                            <h1 className='text-2xl mb-5 text-[#38638D]'>{patient?.firstName} {patient?.lastName}</h1>
                            <h1 className='text-xl mb-2'>Datum: {termin[0]?.date}</h1>
                            <h1 className='text-xl mb-2'>Uhrzeit: {termin[0]?.timeStart}</h1>
                            <h1 className='text-xl mb-5'>Complaints: {termin[0]?.complaints}</h1>

                            <div className='flex justify-start'>
                                <img src={locationIcon} className="mr-2 w-4 h-6" alt="locationIcon" />
                                <h1 className='text-lg'>{patient?.street}, {patient?.zipCode} </h1>
                            </div>
                            <div className='flex'>
                                <img src={phoneIcon} className="mr-1 w-5 h-5" alt="phoneIcon" />
                                <h1 className='text-lg'>{patient?.phone} </h1>
                            </div>
            
                        </div>
                        <div className='flex justify-evenly items-center w-[20vw] ml-3'>
                            <button className='mt-10 bg-sky-600 text-white text-lg py-3 px-4 rounded-xl hover:bg-sky-700 duration-150'>SEND NACHRICHT</button>
                            <button onClick={()=>setShowModal(true)} className='mt-10 bg-red-600 text-white text-lg py-3 px-4 rounded-xl hover:bg-red-700 duration-150'>STORNIEREN</button>
                        </div>
                        
 
                    </>
                    :
                    <div className='w-[23rem] text-center'>

                        <h1 className='mt-20 text-2xl'>Bitte klicken Sie auf eine Patient-Name links um ihre/seine Info zu sehen.</h1>
                    </div>
                )
            )
            
        }
        <DeleteAppoModal showModal={showModal} setShowModal={setShowModal} termin={termin}/>
           </div>
  )
}

export default PatientInfo