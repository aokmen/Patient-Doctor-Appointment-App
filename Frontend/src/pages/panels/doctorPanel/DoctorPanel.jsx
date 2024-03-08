import React, { useEffect} from "react";
import Sidebar from "../../../components/dashboard/doctorDashboard/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./doctorPanel.css";
import { useSelector } from "react-redux";
import useDataCall from "../../../hooks/useDataCall";
import Loading from "../../loading/Loading";
import ApprovalForm from "../../../components/dashboard/doctorDashboard/approvalForm/ApprovalForm";
import DNavbar from "../../../components/dashboard/doctorDashboard/dNavbar/DNavbar";
import DProfile from "../../../components/dashboard/doctorDashboard/profil/DProfile";

const DoctorPanel = () => {

  const { user,userId } = useSelector((state) => state.auth)

  const {getData,getSingleData} = useDataCall()

  useEffect(() => {
    getData("patients")
    getData("doctors")
    getSingleData("messages",userId)
  }, [])

  return (
    <>
      {user && user.isApproved === false ?
        <>
          <div className="d-dashboard">
            <div className="d-panel-sidebar">
              <Sidebar/>
            </div>
            <div className="d-panel-main">
              <div className="d-main-content">
                <ApprovalForm {...user} />
              </div>

            </div>
          </div>
        </> :
        <>
          {user && user.isApproved === true ?

            <div className="d-dashboard">
              <div className="d-panel-sidebar">
                <Sidebar {...user}/>
              </div>
              <div className="d-panel-main">
                <div className="d-navbar">
                  <DNavbar />
                </div>
                <div className="d-main-content">
                  <div className="d-main-content-section">
                    <div className="d-main-content-section-box">
                      <Outlet/>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="d-doctor-profile-info">
                {/* <Main {...doctorProfile[0]} /> */}
                {/* <DProfile {...doctorProfile[0]}/> */}
              </div>
            </div> 
            : <Loading />}
        </>}
    </>
  );
};

export default DoctorPanel;
