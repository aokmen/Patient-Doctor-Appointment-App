import React from 'react'
import "./dNavbar.css"
import setting from "../../../../assets/setting2.png"
import letter from "../../../../assets/letter.png"
import notification2 from "../../../../assets/notification2.png"
import help from "../../../../assets/help.png"
import logo from "../../../../assets/logo3.png"

const DNavbar = () => {

  return (
    <div className="d-header">
       <img src={logo} alt="logo" />
      <div className="d-navbar-icons">

        <img src={letter} alt="letter" />
        <img src={notification2} alt="notification2" />
        <img src={help} alt="help" />
        <img src={setting} alt="setting" />

        </div>
      </div>

  )
}

export default DNavbar