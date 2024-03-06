import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/dashboard/patientDashboard/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./patientPanel.css";
import PNavbar from "../../../components/dashboard/patientDashboard/pNavbar/PNavbar";
import useDataCall from "../../../hooks/useDataCall";
import { useSelector } from "react-redux";


const PatientPanel = () => {


  const { user, userId} = useSelector((state) => state.auth)
  const {getData, getSingleData} = useDataCall()

  useEffect(() => {
    getData("patients")
    getData("doctors")
    getSingleData("messages",userId)
  }, [])

  return (

    <>
      <div className="dashboard">
        <div className="p-panel-sidebar">
          <Sidebar {...user}/>
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
