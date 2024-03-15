import React from 'react'
import "./cardDoctor.css"
import doctorImage from './assets/doctor.png'
import starIcon from './assets/star.png'
import { useNavigate, useParams } from 'react-router-dom';
import profil_image from "../../assets/profil_image.png"
import dr1 from "../../assets/dr-avatar.png"
import dr2 from "../../assets/dr2-avatar.png"


const CardDoctor = ({id, street, title, firstName, lastName, zipCode, branchId, cityId, avatar, gender}) => {
  const navigate = useNavigate()
  const URL = process.env.REACT_APP_BASE_URL
  const fileImage = avatar && `${URL}/img/${id.slice(-15)}.jpg`

  
  return (
    <div className='cardDoctor'>
      <div className="doctorImage w-20 h-20 ml-2">
        <img className="w-full h-full object-cover rounded-full ring-offset-2 ring-main-light-blue2 ring-2 " src={fileImage || (gender==="Male" ? dr1 : ((gender==="Female" ? dr2 : profil_image)))} alt="doctorImage" />
      </div>
      <div className="doctorInfo">

        <div className="doctor-middleInfo">
          <div className="doctorName">
            <h2><span>{title}.</span>  {firstName} {lastName}</h2>
            <h3>{branchId?.name}</h3>
            <p className='address'><span>Adresse: </span>{street.split(" ").slice(0, 2).join(" ")} </p>
            <p className='city'>{zipCode}, {cityId?.name} </p>
          </div>

          {/* <div className="doctorRate">
            <div className="starRate">
              <img src={starIcon} alt="" />
              <p>4.9</p>
            </div>
            <p> <span>5</span> Jahre Erfahrung</p>

          </div> */}
        </div>

        <button className="doctor-info-btn" onClick={()=>navigate(`/search/${id}/`)}>MEHR INFOS</button>
      </div>


    </div>
  )
}

export default CardDoctor