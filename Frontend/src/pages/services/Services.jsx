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
import Header from '../../components/header/Header'

const Services = () => {
  let servicesNameArr = ["Online Terminebuchung", "Arzt - Anmeldung & Profilverwaltung", "Patienten - Anmeldung & Profilverwaltung", "Kommunikation zwischen Patient und Arzt", "Benachrichtiguns- & Erinnerungsdienst", "Notizen und Aufgabe hinzufügen", "Datensichereit & Gewährleistung der Sicherheit", "Datenschutz Vertraulichkeit von Patientendaten"]
  let serviceImgArr = [appoint, doctor, patient, communi, notification, comment, seclock, dataLock]

  let serviceObjArr = []

  for (let i = 0; i < servicesNameArr.length; i++) {
    serviceObjArr.push({
      serName: servicesNameArr[i],
      serImg: serviceImgArr[i]
    })
  }

  //console.log(serviceObjArr)

  return (
    <div className='bg-[#F1F7FE] h-full  pb-40'>
      <h1 className="text-main-dark-blue text-3xl font-semibold text-center pt-40 pb-10">Services</h1>
      <div className='flex flex-wrap justify-center items-center w-full'>
        <div className='xl:flex-1 flex justify-center'> <img className='w-2/3 lg:w-[100%]' src={serviceImg1} alt="services1" /></div>
        <div className="xl:flex-1 flex flex-wrap justify-center xl:w-1/2 ">
          {
            serviceObjArr.map((item, index) => (
              <div key={index} className='w-[130px] h-[125px] flex flex-col  bg-white items-center text-center rounded-lg service-card py-1 mx-1 sm:mx-3 sm:my-4 mt-3 md:mt-6 md:w-[150px] md:h-[150px] md:my-0 md:ml-12 lg:h-[160px]'>
                <img src={item.serImg} alt="appointment" className='w-9 h-9 object-contain mt-3 ' />
                <h3 className='p-2 mt-2 text-[#345b83]'>{item.serName}</h3>
              </div>
            ))
          }

        </div>
        <div className='xl:flex-1 flex justify-center'> <img className='w-2/3 lg:w-[100%]' src={serviceImg2} alt="services2" /></div>
      </div>
      {/* <BottomLine/> */}
    </div>
  )
}

export default Services