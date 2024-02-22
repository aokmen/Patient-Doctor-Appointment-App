import React, { useEffect } from 'react'
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
import message from "../../../../assets/message.png"
import exit from "../../../../assets/logout.png"
import home from "../../../../assets/home.png"
import task from "../../../../assets/task.png"
import { useSelector } from 'react-redux'
import useDataCall from '../../../../hooks/useDataCall'



const Sidebar = () => {
  
  const { logout } = useAuthCall();
  const navigate = useNavigate();
  const {getData} = useDataCall()

  const {currentUser} = useSelector((state) => state.auth)
  const {patients} = useSelector((state) => state.data)

  useEffect(() => {
    getData("patients")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const thisPatient = patients.filter((pat) => {return pat.email === currentUser}) 
  //console.log(thisPatient)
  const patientName = thisPatient[0]?.firstName + " " + thisPatient[0]?.lastName

  const closed = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="sidebar-main">
      <div className="topSlide">
      <div className="top">
      <img src={profil_image} alt="profil_image"/> <h1>{patientName}</h1>
        </div>
        
      </div>
      <div className="middleSlide">
        <div className="mid middle1" onClick={() => navigate("/patient")}>
          <img src={dashboard} alt="dashboard"/> <h1>Überblick</h1>
        </div>
        <div className="mid middle2" onClick={() => navigate("/patient/profile")}>
          <img src={profil_info} alt="profil_info"/> <h1>Profil</h1>
        </div>
        <div className="mid middle3" onClick={() => navigate("/patient/my-calender")}>
          <img src={calender} alt="calender"/> <h1>Kalender</h1>
        </div>
        <div className="mid middle4" onClick={() => navigate("/patient/message")}>
          <img src={message} alt="message"/> <h1>Nachrichten</h1>
        </div>
        <div className="mid middle5" onClick={() => navigate("/patient/task")}>
          <img src={task} alt="task"/> <h1>Aufgaben</h1>
        </div>
        <div className="mid middle6" onClick={() => navigate("/patient/statistic")}>
          <img src={statistic} alt="statistic"/> <h1>Statistik</h1>
        </div>
        <div className="mid middle8" onClick={() => navigate("/patient/setting")}>
          <img src={setting} alt="setting"/> <h1>Einstellung</h1>
        </div>




      </div>

      <div className="bottomSlide">
        <div className="bot bottom1" onClick={() => navigate("/patient/account")}>
          <img src={account} alt="account"/> <h1>Mein Konto</h1>
        </div>
        <div className="bot bottom2" onClick={() => closed()}>
          <img src={exit} alt="logout"/> <h1>Ausloggen</h1>
        </div>
        <div className="bot bottom3" onClick={() => navigate("/")}>
          <img src={home} alt="home"/> <h1>Home</h1>
        </div>
      </div>

    </div>
  )
}

export default Sidebar