import React from 'react'
import "./processBar.css"
const ProcessBar = ({count}) => {

  return (
    <div className="processbar-main">
        <div className="going-main">
            <div className="going0">
              <h1>Erstelle dein Profil</h1>
            </div>
            <div className="going going1">
              <div className="goingTrue">
                <div className="goingTrueTitle"><h1>1</h1></div>
               <div className={count > 0 ? "goingTrueLine" : "goingFalseLine"}> 
               
               </div>
              </div>
             
              <p>Persönlich</p>
            </div>
            <div className="going going2">
            <div className="goingTrue">
            <div className={count > 0 ? "goingTrueTitle" : "goingFalseTitle"}><h1>2</h1></div>
              <div className={count > 1 ? "goingTrueLine" : "goingFalseLine"}></div>
              <div className="goingTrueLine2">
              </div>
              </div>
              <p>Beruflich</p>
            </div>
            <div className="going going3">
            <div className="goingTrue goingFalse">
            <div className={count > 1 ? "goingTrueTitle" : "goingFalseTitle"}><h1>3</h1></div>
              </div>
              <p>Genehmigt</p>
            </div>
        </div>
    </div>
  )
}

export default ProcessBar
