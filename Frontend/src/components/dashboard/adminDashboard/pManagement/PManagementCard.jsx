import React, { useState } from 'react'
import "./pManagement.css"
import profileImg from "../../../../assets/profil_image2.png"


import okImg from "../../../../assets/ok.png"
import deleteImg from "../../../../assets/delete.png"
import pendingImg from "../../../../assets/pending.png"
import okImg2 from "../../../../assets/ok2.png"
import deleteImg2 from "../../../../assets/delete2.png"
import pendingImg2 from "../../../../assets/pending2.png"
import useDataCall from '../../../../hooks/useDataCall'

const URL = process.env.REACT_APP_BASE_URL

const PManagementCard = ({ id,profilePic, firstName, lastName, cityName, street, zipCode, email, phone, isActive
}) => {
  const { delData, putData } = useDataCall()

  let fileImage = profileImg;

  if(profilePic) {
    const avatarSplit = profilePic.split('\\')
    const avatarFindName =avatarSplit[avatarSplit.length-1]
    fileImage = `${URL}/img/${id}-${avatarFindName}`
   }

  return (
    <div className="apanel-p-view--main">
      <div className="apanel-p-view-patient">
        <div className="apanel-p-view-patient-left">
          <div className="apanel-p-view-patientImg">
            <img src={fileImage} alt="" />
          </div>
          <div className="apanel-p-view-patientInfo">
            <ul>
              <div className='patientInfo1'>
                <li> <span>Name:</span> {firstName} {lastName}</li>
                <li> <span>Adresse:</span> {street}, {zipCode} {cityName}</li>
                <li> <span>E-Mail:</span> {email}</li>
                <li> <span>Tel:</span> {phone}</li>
              </div>

              



            </ul>

          </div>
        </div>
        <div className="apanel-p-view-patient-right-btn">
        <div className="apanel-p-view-patient-btn">
          
   
          </div>
          <div className="apanel-p-view-patientInfo-Ok">
            <div className="okIcons">
              <div className="okIconsFlex okIconsFlex1" onClick={() => putData("patients", id, { isActive: false })}>
                <img src={isActive ? pendingImg2 : pendingImg} alt="" />
                <p>Ausstehend</p>
              </div>

              <div className="okIconsFlex okIconsFlex2">
                <img src={deleteImg2} alt="" />
                <p onClick={() => delData("patients", id)}>Löschen</p>
              </div>

              <div className="okIconsFlex okIconsFlex3" onClick={() => putData("patients", id, { isActive: true })}>
                <img src={isActive ? okImg : okImg2} alt="" />
                <p>Genehmigt</p>
              </div>
            </div>
          </div>
          
        </div>



      </div>


    </div>
  )
}

export default PManagementCard