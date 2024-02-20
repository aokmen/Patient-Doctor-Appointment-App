import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/dashboard/patientDashboard/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./patientPanel.css";
import PNavbar from "../../../components/dashboard/patientDashboard/pNavbar/PNavbar";


const PatientPanel = () => {


  return (

    <>
      <div className="dashboard">
        <div className="p-panel-sidebar">
          <Sidebar />
        </div>
        <div className="p-panel-main">
          <div className="p-navbar">
            <PNavbar />
          </div>
          <div className="p-main-content">
            <div className="p-main-content-section">
              <div className="p-main-content-section-box">
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
