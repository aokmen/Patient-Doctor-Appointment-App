import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/dashboard/patientDashboard/sidebar/Sidebar";
import ProcessBar from "../../../components/dashboard/doctorDashboard/profil/processBar/ProcessBar";

import { Outlet } from "react-router-dom";

import "./patientPanel.css";


const PatientPanel = () => {
  

  return (

    <>

      
             <div className="dashboard">

              <div className="p-panel-sidebar">
                <Sidebar/>
              </div>
              <div className="p-panel-main">
                <div className="p-processbar">
                  <ProcessBar />
                </div>
                <div className="main-content">
                  <div className="main-content-section">
                    <div className="main-content-section-box">

                      <Outlet />

                    </div>
                  </div>
                </div>
              </div>
            </div> 
            <div className="patient-profile-info">
                
              </div>
            
    </>
  );
};

export default PatientPanel;
