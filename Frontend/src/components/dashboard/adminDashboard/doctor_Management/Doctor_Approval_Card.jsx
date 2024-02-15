import React, { useState } from 'react'
import "./doctor_Management.css"
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

const Doctor_Approval_Card = ({ id, firstName,lastName, title, branch, cityName, street,zipCode,email,phone, website,languages,complaints, isApproved, about,files
}) => {
  const { delData, putData } = useDataCall()
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(true)

const handleShow = () => {
  setShow(!show)
  setShow2(!show2)
}

const fileImage = files.length > 0 ? `${URL}/img/${files[0].fileName}` : profileImg;


  return (
    <div className="apanel-view--main">
    <div className="apanel-view-doctor">
      <div className="apanel-view-doctor-left">
      <div className="apanel-view-doctorImg">
        <img src={fileImage} alt="" />
      </div>
      <div className="apanel-view-doctorInfo">
        <ul>
          <div className='doctorInfo1'>
            <li >{title} {firstName} {lastName}</li>
             <li >{branch}</li>
             <li >{street}, {zipCode}</li>
          </div>
          <div className='doctorInfo5'>
            <li>{email}</li>
             <li>{phone}</li>
             <li >{cityName}</li>
          </div>
          

         
          
          <div className="apanel-view-doctorInfo-Ok">
              <div className="okIcons">
              <div className="okIconsFlex okIconsFlex1" onClick={()=>putData("doctors", id, {isApproved:false})}>
                 <img src={ isApproved ? pendingImg2 : pendingImg} alt="" /> 
                 <p>Ausstehend</p>
                </div>
   
                <div className="okIconsFlex okIconsFlex2">
                <img src={deleteImg2} alt="" /> 
                <p onClick={()=>delData("doctors",id)}>Löschen</p>
                </div>

                <div className="okIconsFlex okIconsFlex3" onClick={()=>putData("doctors", id, {isApproved:true})}>
                <img src={ isApproved ? okImg : okImg2} alt="" /> 
                <p>Genehmigt</p>
                </div>
              </div>

          </div>
        </ul>
   
      </div>
      </div>
      <div className="apanel-view-doctor-right">
      {
        show && !show2 && <div className='deneme'><img src={fileImg} alt="fileImg" /></div>

      }
      {
       show2 && !show && <div className='deneme2'> 
       <h1>Webseite: </h1> <p> {website}</p>
       <h1>Sprache: </h1> <p>{languages}</p>
       <h1>Symptome: </h1> <p>{complaints}</p>
       <h1>Über mich: </h1> <p> {about}
        </p> 
       </div>
      }
        </div>
      
   
      
    
    </div>
    <div className="apanel-view-doctor-btn">
      <button onClick={()=>handleShow()}>Zulassungsurkunde</button>
      {/* <button onClick={()=>handleShow2()}>Andere Infos</button> */}
    </div>
   
    </div>
  )
}

export default Doctor_Approval_Card