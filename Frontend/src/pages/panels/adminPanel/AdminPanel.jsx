import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/dashboard/adminDashboard/sidebar/Sidebar";



import successImg from "../../../assets/success.png"
import "./adminPanel.css";
import { useSelector } from "react-redux";
import useDataCall from "../../../hooks/useDataCall";
import Loading from "../../loading/Loading";
import { Outlet } from "react-router-dom";
import ProcessBar from "../../../components/dashboard/adminDashboard/processBar/ProcessBar";

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
          <div className="apanel-sidebar">
            <Sidebar />
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
        </div> : <Loading />}
    </>
  );
};

export default AdminPanel;
