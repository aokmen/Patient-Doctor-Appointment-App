import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/dashboard/doctorDashboard/sidebar/Sidebar";
import ProcessBar from "../../../components/dashboard/doctorDashboard/profil/processBar/ProcessBar";
import Main from "../../../components/dashboard/doctorDashboard/profil/main/Main";
import { Outlet } from "react-router-dom";
import successImg from "../../../assets/success.png"
import "./doctorPanel.css";
import { useSelector } from "react-redux";
import useDataCall from "../../../hooks/useDataCall";
import Loading from "../../loading/Loading";
import ApprovalForm from "../../../components/dashboard/doctorDashboard/approvalForm/ApprovalForm";

const DoctorPanel = () => {
  const { getData } = useDataCall()
  const { doctors } = useSelector((state) => state.data)
  const { currentUser } = useSelector((state) => state.auth)


  useEffect(() => {
    getData("doctors")
  }, [])

  const doctorProfile = doctors?.data?.filter((item) => (currentUser === item.email))
  

  return (

    <>

      {doctorProfile && doctorProfile[0].isApproved === false ?
        <>
          <div className="dashboard">
            <div className="dpanel-sidebar">
              <Sidebar/>
            </div>
            <div className="dpanel-main">
              <div className="main-content">
                <ApprovalForm {...doctorProfile[0]} />
              </div>
            </div>
          </div>
        </> :
        <>
          {doctorProfile && doctorProfile[0].isApproved === true ?

            <div className="dashboard">

              <div className="dpanel-sidebar">
                <Sidebar/>
              </div>
              <div className="apanel-main">
                <div className="processbar">
                  <ProcessBar />
                </div>
                <div className="main-content">
                  <div className="main-content-section">
                    <div className="main-content-section-box">

                      <Outlet />

                    </div>
                  </div>
                  {/* <Main  /> */}
                </div>
              </div>

              {/* <div className="dpanel-main">
            <div className="main-content">
              <Main {...doctorProfile[0]} />
            </div>
          </div> */}

              <div className="doctor-profile-info">
                <Main {...doctorProfile[0]} />
              </div>
            </div> : <Loading />}
        </>}
    </>
  );
};

export default DoctorPanel;
