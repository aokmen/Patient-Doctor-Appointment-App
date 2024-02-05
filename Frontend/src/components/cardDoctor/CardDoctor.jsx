import React from 'react'
import "./cardDoctor.css"
import doctorImage from './assets/doctor.png'
import starIcon from './assets/star.png'
import { useNavigate, useParams } from 'react-router-dom';



const CardDoctor = ({id, street, title, firstName, lastName, zipCode, branchId, cityId}) => {
  const navigate = useNavigate()

  return (
    <div className='cardDoctor'>
      <div className="doctorImage">
        <img src={doctorImage} alt="doctorImage" />
      </div>
      <div className="doctorInfo">

        <div className="doctor-middleInfo">
          <div className="doctorName">
            <h2><span>{title}.</span>  {firstName} {lastName}</h2>
            <h3>{branchId?.name}</h3>
            <p className='address'><span>Adresse: </span>{street.split(" ").slice(0, 2).join(" ")} </p>
            <p className='city'>{zipCode}, {cityId?.name} </p>
          </div>

          <div className="doctorRate">
            <div className="starRate">
              <img src={starIcon} alt="" />
              <p>4.9</p>
            </div>
            <p> <span>5</span> Jahre Erfahrung</p>

          </div>
        </div>

        <button className="doctor-info-btn" onClick={()=>navigate(`/search/${id}/`)}>MEHR INFOS</button>
      </div>


    </div>
  )
}

export default CardDoctor