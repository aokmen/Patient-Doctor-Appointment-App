import React from 'react'
import UserPNG from '../../../../assets/user.png'
import locationIcon from '../../../../assets/locationIcon.png'
import phoneIcon from '../../../../assets/phone.png'

const PatientInfo = ({patient, todayAppsThisDoctor}) => {

    const termin = todayAppsThisDoctor.filter((item) => item.patientId === patient)
    //console.log(termin)

  return (
    <div className='flex flex-col justify-center items-center'>
        {
            patient ? 
            <>
                <img src={patient?.profilePic || UserPNG} alt="Patient" className='w-[7rem] h-[7rem] mt-3'/>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-2xl mb-5 text-[#38638D]'>{patient?.firstName} {patient?.lastName}</h1>
                    <h1 className='text-xl mb-2'>Termin: {termin[0]?.timeStart}</h1>
                    <h1 className='text-xl mb-5'>Complaints: {termin[0]?.complaints}</h1>

                    <div className='flex justify-start'>
                        <img src={locationIcon} className="mr-2 w-4 h-6" alt="locationIcon" />
                        <h1 className='text-lg'>{patient.street}, {patient.zipCode} </h1>
                     </div>
                    <div className='flex'>
                        <img src={phoneIcon} className="mr-1 w-5 h-5" alt="phoneIcon" />
                        <h1 className='text-lg'>{patient.phone} </h1>
                    </div>
            
                </div>
                <button className='mt-10 bg-[#6f48eb] text-white text-lg py-3 px-6 rounded-xl hover:bg-[#7055cb]'>SEND MESSAGE</button>
 
            </>
            :
            <div className='w-[30rem] text-center'>

                <h1 className='mt-20 text-2xl'>Dieser Termin ist frei. Bitte klicken Sie auf eine Patient-Name links um ihre/seine Info zu sehen.</h1>
            </div>
            
        }
           </div>
  )
}

export default PatientInfo