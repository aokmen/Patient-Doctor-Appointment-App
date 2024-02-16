import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/dashboard/doctorDashboard/sidebar/Sidebar";
import ProcessBar from "../../../components/dashboard/doctorDashboard/profil/processBar/ProcessBar";
import Main from "../../../components/dashboard/doctorDashboard/profil/main/Main";

import successImg from "../../../assets/success.png"
import "./doctorPanel.css";
import { useSelector } from "react-redux";
import useDataCall from "../../../hooks/useDataCall";
import Loading from "../../loading/Loading";
import Uberblick from "../../../components/dashboard/doctorDashboard/uberblick/Uberblick";
import Kalender from "../../../components/dashboard/doctorDashboard/kalender/Kalender";
import Statistik from "../../../components/dashboard/doctorDashboard/Statistik";
import ManageAppo from "../../../components/dashboard/doctorDashboard/manageAppointments/ManageAppo";

const DoctorPanel = () => {
  const { getData } = useDataCall()
  const { doctors } = useSelector((state) => state.data)
  const { currentUser } = useSelector((state) => state.auth)

  const [pageName, setPageName] = useState("")


  useEffect(() => {
    getData("doctors")
  }, [])

  const doctorProfile = doctors?.data?.filter((item) => (currentUser === item.email))

//console.log("doctors:",doctors);
  return (

    <>
      {doctorProfile && doctorProfile.length > 0 ?

        <div className="dashboard">
          <div className="dpanel-sidebar">
            <Sidebar setPageName={setPageName}/>
          </div>
          <div className="dpanel-main">
            <div className="main-content">
              {/* <Main {...doctorProfile[0]} /> */}
              {
                pageName === "Uberblick" ? <Uberblick/> : (pageName === "Kalender" ? <Kalender/> : (pageName === "Profil" ? <Main/> : (pageName === "Statistik" ? <ManageAppo/> : <Uberblick/>) ) )
              }
              
            </div>
          </div>
        </div> : <Loading />}
    </>
  );
};

export default DoctorPanel;
