import React from 'react'

import locationIcon from '../../assets/locationIcon.png'
import phoneIcon from '../../assets/phone.png'
import webIcon from '../../assets/web.png'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const DoctorProfil = ({ branchId, cityId, phone, website, title, firstName, lastName, avatar }) => {

  const { currentUser } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const check = () => {
    currentUser ? navigate("/patient") : navigate("/login")
  }

  return (
    <>
    <div className='flex flex-col justify-center items-center p-1 profil-doctor'>
      <img className='doctor-image' src={avatar ? avatar : 'https://www.thewmch.com/wp-content/uploads/2023/02/female-doctor-using-her-digital-tablet-free-vector.jpg'} alt="doctor-pic"/>
      <h1 className='text-xl font-bold doctor-profil-name'> {title}. {firstName} {lastName}</h1>
      <h2 className='text-xl doctor-profil-name'>{branchId?.name}</h2>
      </div>  
      <div className='flex justify-start doctor-profil-location'>
        <img src={locationIcon} className="mr-3 w-4 h-6" alt="locationIcon" />
        <h3>{cityId?.name}</h3>
      </div>
      <div className='flex doctor-profil-phone'>
        <img src={phoneIcon} className="mr-1 w-5 h-5" alt="phoneIcon" />
        <h3>{phone}</h3>
      </div>
      <div className='flex doctor-profil-website'>
      <img src={webIcon} className="mr-1 w-6 h-6" alt="webIcon" />
      {website ? <a href="www.example.com"> {website}</a> : "Keine Webseite Vorhanden"}
      </div>
      <button className='flex justify-center termin-button duration-150 mx-auto' onClick={() => check()}>TERMIN VEREINBAREN</button>
      
    
    </>
    
  )
}

export default DoctorProfil