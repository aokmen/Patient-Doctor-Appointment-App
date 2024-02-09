import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/dashboard/doctorDashboard/sidebar/Sidebar";
import ProcessBar from "../../../components/dashboard/doctorDashboard/profil/processBar/ProcessBar";
import Main from "../../../components/dashboard/doctorDashboard/profil/main/Main";

import successImg from "../../../assets/success.png"
import "./doctorPanel.css";
import { useSelector } from "react-redux";
import useDataCall from "../../../hooks/useDataCall";
import Loading from "../../loading/Loading";

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
      {doctorProfile && doctorProfile.length > 0 ?

        <div className="dashboard">
          <div className="dpanel-sidebar">
            <Sidebar />
          </div>
          <div className="dpanel-main">
            <div className="main-content">
              <Main {...doctorProfile[0]} />
            </div>
          </div>
        </div> : <Loading />}
    </>
  );
};

export default DoctorPanel;
