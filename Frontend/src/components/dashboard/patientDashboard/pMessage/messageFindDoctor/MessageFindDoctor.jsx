import React from 'react'
import "./messageFindDoctor.css"
import doctorImage from './assets/doctor.png'
import starIcon from './assets/star.png'
import { useNavigate, useParams } from 'react-router-dom';


const MessageFindDoctor = ({id, street, title, firstName, lastName, zipCode, branchId, cityId, setDoctorInfo}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    setDoctorInfo({
      id:id,
      title:title,
      firstName:firstName,
      lastName:lastName,
    })
  };

  return (
    <div className="messageFindDoctor">
      <div className="p-message-doctorImage">
        <img src={doctorImage} alt="doctorImage" />
      </div>
      <div className="p-message-doctorInfo">

        <div className="p-message-doctor-middleInfo">
          <div className="p-message-doctorName">
            <h2><span>{title}.</span>  {firstName} {lastName}</h2>
            <h3>{branchId?.name}</h3>
            <p className='p-message-address'><span>Adresse: </span>{street.split(" ").slice(0, 2).join(" ")} </p>
            <p className='p-message-city'>{zipCode}, {cityId?.name} </p>
          </div>

        </div>

        <button className="p-message-doctor-info-btn" onClick={handleClick}>Nachricht senden</button>
      </div>


    </div>
  )
}

export default MessageFindDoctor