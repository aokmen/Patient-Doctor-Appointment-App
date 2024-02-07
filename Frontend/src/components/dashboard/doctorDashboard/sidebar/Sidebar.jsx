import React from 'react'
import "./sidebar.css"
import { useNavigate } from 'react-router-dom'
import useAuthCall from '../../../../hooks/useAuthCall'
import profil_image from "../../../../assets/profil_image.png"
import profil_info from "../../../../assets/profil_info.png"
import dashboard  from "../../../../assets/dashboard.png"
import statistic from "../../../../assets/statistic.png"
import patient2  from "../../../../assets/patient2.png"
import calender from "../../../../assets/calender.png"
import setting  from "../../../../assets/setting.png"
import account from "../../../../assets/account.png"
import logoutI from "../../../../assets/logout.png"
import home from "../../../../assets/home.png"



const Sidebar = () => {
  
  const { logout } = useAuthCall();
  const navigate = useNavigate();

  const closed = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="sidebar-main">
      <div className="topSlide">
      <div className="top">
      <img src={profil_image} alt="" /> <h1>Jasmine Doe</h1>
        </div>
        
      </div>
      <div className="middleSlide">
        <div className="mid middle1">
          <img src={dashboard} alt="" /> <h1>Überblick</h1>
        </div>
        <div className="mid middle2">
          <img src={profil_info} alt="" /> <h1>Profil</h1>
        </div>
        <div className="mid middle3">
          <img src={calender} alt="" /> <h1>Kalender</h1>
        </div>
        <div className="mid middle4">
          <img src={statistic} alt="" /> <h1>Statistik</h1>
        </div>
        <div className="mid middle5">
          <img src={patient2} alt="" /> <h1>Patienten-Infos</h1>
        </div>

        <div className="mid middle6">
          <img src={setting} alt="" /> <h1>Einstellung</h1>
        </div>




      </div>

      <div className="bottomSlide">
        <div className="bot bottom1">
          <img src={account} alt="" /> <h1>Mein Konto</h1>
        </div>
        <div className="bot bottom2" onClick={() => closed()}>
          <img src={logoutI} alt="" /> <h1>Ausloggen</h1>
        </div>
        <div className="bot bottom3" onClick={() => navigate("/")}>
          <img src={home} alt="" /> <h1>Home</h1>
        </div>
      </div>

    </div>
  )
}

export default Sidebar