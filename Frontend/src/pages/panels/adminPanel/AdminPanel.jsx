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

const AdminPanel = () => {
  const { getData } = useDataCall()
  const { doctors } = useSelector((state) => state.data)
  const { currentUser } = useSelector((state) => state.auth)


  useEffect(() => {
    getData("doctors")
  }, [])


  console.log("currentUser:", currentUser);
  return (

    <>
      {currentUser === "admin@site.com" ?

        <div className="dashboard">
          <div className="a-panel-sidebar">
            <Sidebar/>
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
        </div> : <Loading />}
    </>
  );
};

export default AdminPanel;
