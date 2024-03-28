import React from 'react'
import "./aNavbar.css"
import setting from "../../../../assets/setting2.png"
import letter from "../../../../assets/letter.png"
import notification2 from "../../../../assets/notification2.png"
import help from "../../../../assets/help.png"
import logo from "../../../../assets/logo3.png"

const ANavbar = () => {

  return (
    <div className="a-header">
       <img className="d-header-img" src={logo} alt="logo" />
      <div className="a-navbar-icons min-w-[200px]">

        <img src={letter} alt="letter" />
        <img src={notification2} alt="notification2" />
        <img src={help} alt="help" />
        <img src={setting} alt="setting" />

        </div>
      </div>

  )
}

export default ANavbar