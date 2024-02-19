import React from 'react'
import "./aNavbar.css"
import setting from "../../../../assets/setting2.png"
import letter from "../../../../assets/letter.png"
import notification2 from "../../../../assets/notification2.png"
import help from "../../../../assets/help.png"

const ANavbar = ({ count }) => {

  return (
    <div className="a-header">
      <div className="a-navbar-icons">

        <img src={letter} alt="letter" />
        <img src={notification2} alt="notification2" />
        <img src={help} alt="help" />
        <img src={setting} alt="setting" />

        </div>
      </div>

  )
}

export default ANavbar