import React from 'react'
import "./searchEngine.css"
import searchIcon from "../../assets/ic_baseline-search.png"
import locationIcon from "../../assets/locationIcon.png"

const searchEngine = () => {
 
  return (
    <div className="main-section">
        <form action="">
          <div className="input">
            <div className="input-left-box">
              <img src={searchIcon} alt="searchIcon" className='searchIcon' />
              <input type="text" className="input-left" placeholder='Name oder Fachgebiet' />
            </div>
            <div className="input-middleLine"></div>
            <div className="input-right-box">
              <img src={locationIcon} alt="locationIcon" className='locationIcon' />
              <input type="text" className="input-right" placeholder='z.B. Berlin oder 12345' />
            </div>
            <div className="input-right-box">

              <button type="submit" className="input-btn">Suchen</button>
            </div>

          </div>
        </form>
      </div>
  )
}

export default searchEngine