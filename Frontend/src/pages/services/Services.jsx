import React from 'react'
import serviceImg1 from '../../assets/service-img1.png'
import serviceImg2 from '../../assets/service-img2.png'
import appoint from '../../assets/appointment.png'
import comment from '../../assets/comments.png'
import communi from '../../assets/communication.png'
import dataLock from '../../assets/data-lock.png'
import doctor from '../../assets/doctor.png'
import notification from '../../assets/notification.png'
import patient from '../../assets/patient.png'
import seclock from '../../assets/security-lock.png'
import './services.css'
import BottomLine from '../../components/footer/BottomLine'

const Services = () => {
  let servicesNameArr = ["Online Terminebuchung", "Arzt - Anmeldung & Profilverwaltung", "Patienten - Anmeldung & Profilverwaltung", "Kommunikation zwischen Patient und Arzt", "Benachrichtiguns- & Erinnerungsdienst", "Bewertung & Kommentare von Ärzten", "Datensichereit & Gewährleistung der Sicherheit", "Datenschutz Vertraulichkeit von Patientendaten"]
  let serviceImgArr = [appoint, doctor, patient, communi, notification, comment, seclock, dataLock]

  let serviceObjArr = []

  for(let i = 0; i < servicesNameArr.length; i++){
    serviceObjArr.push({
      serName: servicesNameArr[i],
      serImg: serviceImgArr[i]
    })
  }

  //console.log(serviceObjArr)

  return (
    <>
    <div className='flex flex-col justify-center items-center w-full h-[140vh] md:h-[150vh] lg:h-[140vh] bg-[#F1F7FE]'>
      <div className='w-[400px] mb-[55rem] md:mb-[58rem] md:w-[600px] xl:w-[900px] md:ml-[-15rem] lg:mb-[58rem] xl:mb-[47rem] lg:ml-[-65rem] xl:ml-[-65rem] absolute z-40'>
        <img className='w-[400px] md:w-[600px] xl:w-[900px] rounded-full border-b-4 lg:border-r-8 service1 bg-[#F1F7FE]' src={serviceImg1} alt="services1" />
      </div>
      {/* <div className='absolute border-8 border-cyan-700 mt-[-78vh] rounded-full'></div>
      <div className='absolute border-2 border-cyan-700 h-[80vh] mt-8'></div>
      <div className='absolute border-8 border-cyan-700 mt-[85vh] rounded-full'>

      </div> */}
      <div className='flex flex-wrap justify-center items-center border-r-8 md:border-l-8 md:border-r-0 lg:border-b-8 border-[#345b83] rounded-full lg:rounded-3xl py-[6rem] lg:py-0 lg:pb-[5rem] lg:pt-12 md:py[10rem] px-10 md:px-0 md:pl-3 w-[75vw] md:w-[90vw] lg:w-[70vw] lg:ml-[10rem] lg:pl-[5rem] xl:pl-[17rem] xl:mt-[-8rem] lg:mb-[17rem] xl:mb-[23rem] xl:pb-[15rem] xl:mr-[-20rem] md:h-[80vh] lg:h-[85vh] mt-[2rem] md:mt-[4rem] lg:absolute'>
        {
          
          serviceObjArr.map((item, index) => (
            <div key={index} className='w-[130px] h-[125px] flex flex-col bg-white items-center text-center rounded-lg service-card py-1 mx-1 sm:mx-3 sm:my-4 mt-3 md:mx-4 md:w-[150px] md:h-[150px] md:my-0 md:ml-12 lg:h-[160px]'>
              <img src={item.serImg} alt="appointment" className='w-8 h-8 mt-3 lg:w-12 lg:h-12'/>
              <h3 className='text-sm md:text-lg lg:text-lg mt-2 text-[#345b83]'>{item.serName}</h3>
            </div>
          ))
        }
        
      </div>
      <div className='w-[400px] mt-[55rem] sm:mt-[58rem] md:mt-[65rem] lg:mt-[50rem] xl:mt-[30rem] md:w-[600px] xl:w-[900px] md:ml-[10rem] lg:ml-[50rem] xl:ml-[63rem] absolute'>
        <img className='service2 w-[400px] md:w-[600px] xl:w-[900px] rounded-full border-t-4 lg:border-l-8 bg-[#F1F7FE]' src={serviceImg2} alt="services2" />
      </div>

    </div>
    <BottomLine/>
    </>
  )
}

export default Services