import React from 'react'
import "./sidebar.css"
import { useNavigate } from 'react-router-dom'
import profil_info from "../../../assets/profil_info.png"
import calender from "../../../assets/calender.png"
import logo from "../../../assets/Logo2.png"
import message from "../../../assets/message.png"
import home from "../../../assets/home.png"
import back from "../../../assets/logout.png"






const Sidebar = () => {

  const navigate = useNavigate();
  

  return (
    <div className="sidebar-main">
      <div className="h-[165px] flex ">
        <div className="top">
          <div className="cursor-pointer"  onClick={() => navigate("/")}><img src={logo} alt="profil_image" /></div> 
        </div>

      </div>
      <div className="middleSlide pt-10">

        <div className="mid middle1" onClick={() => navigate("/")}>
          <img src={home} alt="dashboard" /> <h1>Home</h1>
        </div>
        <div className="mid middle2" onClick={() => navigate("/services")}>
          <img src={calender} alt="profil_info" /> <h1>Service</h1>
        </div>
        <div className="mid middle3" onClick={() => navigate("/about")}>
          <img src={profil_info} alt="calender" /> <h1>Über uns</h1>
        </div>
        <div className="mid middle4" onClick={() => navigate("/contact")}>
          <img src={message} alt="message" /> <h1>Kontakt</h1>
        </div>

       

      </div>
      <div className="bottomSlide">
      <div className="mid middle5" onClick={() => navigate(-1)}>
          <img src={back} alt="task" /> <h1>Züruck</h1>
        </div>
      </div>
      

    </div>
  )
}

export default Sidebar