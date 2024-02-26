import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/dashboard/adminDashboard/sidebar/Sidebar";



import successImg from "../../../assets/success.png"
import "./adminPanel.css";
import { useSelector } from "react-redux";
import useDataCall from "../../../hooks/useDataCall";
import Loading from "../../loading/Loading";
import { Outlet } from "react-router-dom";
import ProcessBar from "../../../components/dashboard/adminDashboard/processBar/ProcessBar";
import ANavbar from "../../../components/dashboard/adminDashboard/aNavbar/ANavbar";
import AProfile from "../../../components/dashboard/adminDashboard/aProfile/AProfile";
import AdminProfile from "./adminProfile/AdminProfile";

const AdminPanel = () => {
  const { getData } = useDataCall()
  const { admins } = useSelector((state) => state.data)
  const { currentUser } = useSelector((state) => state.auth)


  useEffect(() => {
    getData("admins")
  }, [])

  const adminProfile = admins?.data?.filter((item) => (currentUser === item.email))

  return (

    <>
      {adminProfile && adminProfile[0].isAdmin === true ?

        <div className="dashboard">
          <div className="a-panel-sidebar">
            <Sidebar {...adminProfile[0]}/>
          </div>

          <div className="a-panel-main">
            <div className="a-navbar">
              <ANavbar/>
            </div>
            <div className="a-main-content">
                <div className="a-main-content-section">
                  <div className="a-main-content-section-box">

                    <Outlet/>
                   
                  </div>
                </div>
            </div>
          </div>
          <div className="a-doctor-profile-info">
         
              </div>
        </div> : <Loading />}
    </>
  );
};

export default AdminPanel;
