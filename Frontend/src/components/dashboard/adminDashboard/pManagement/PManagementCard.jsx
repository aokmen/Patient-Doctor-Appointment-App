import React, { useState } from 'react'
import "./pManagement.css"
import profileImg from "./assets/65c9e35aa6fbdf54fffd0754-ProfileImg.png"
import fileImg from "./assets/65c9e35aa6fbdf54fffd0754-Bewerbungsdeckblatt-Aerztin.jpg"

import okImg from "../../../../assets/ok.png"
import deleteImg from "../../../../assets/delete.png"
import pendingImg from "../../../../assets/pending.png"
import okImg2 from "../../../../assets/ok2.png"
import deleteImg2 from "../../../../assets/delete2.png"
import pendingImg2 from "../../../../assets/pending2.png"
import useDataCall from '../../../../hooks/useDataCall'

const URL = process.env.REACT_APP_BASE_URL

const PManagementCard = ({ id, firstName, lastName, title, branch, cityName, street, zipCode, email, phone, website, languages, complaints, isActive, about, files
}) => {
  const { delData, putData } = useDataCall()
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(true)

  const handleShow = () => {
    setShow(!show)
    setShow2(!show2)
  }

  const fileImage = profileImg;


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