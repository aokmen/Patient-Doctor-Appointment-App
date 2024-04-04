import React from 'react'
import "./messageFindPatient.css"
import patientImage from '../../../../../assets/profil_image2.png'


const MessageFindPatient = ({id, street, firstName, lastName, zipCode, cityId, profilePic, setPatientInfo}) => {

  const handleClick = () => {
    setPatientInfo({
      id:id,
      firstName:firstName,
      lastName:lastName
    })
  };
const patientImg = patientImage || `${URL}/img/${id.slice(-15)}.jpg` 
  return (
    <div className="messageFindDoctor">
      <div className="p-message-doctorImage">
        <img src={patientImg} alt="patientImage" />
      </div>
      <div className="p-message-doctorInfo">

        <div className="p-message-doctor-middleInfo">
          <div className="p-message-doctorName ml-20">
            <h2> {firstName} {lastName}</h2>
            <p className='p-message-address'><span>Adresse: </span>{street.split(" ").slice(0, 2).join(" ")} </p>
            <p className='p-message-city'>{zipCode}, {cityId?.name} </p>
          </div>

        </div>

        <button className="p-message-doctor-info-btn" onClick={handleClick}>Nachricht senden</button>
      </div>


    </div>
  )
}

export default MessageFindPatient