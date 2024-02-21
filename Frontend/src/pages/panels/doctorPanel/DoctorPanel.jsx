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
  const { getData } = useDataCall()
  const { doctors } = useSelector((state) => state.data)
  const { currentUser } = useSelector((state) => state.auth)

  
  useEffect(() => {
    getData("doctors")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const doctorProfile = doctors?.data?.filter((item) => (currentUser === item.email))
  


  return (

    <>


      {doctorProfile && doctorProfile[0].isApproved === false ?
        <>
          <div className="d-dashboard">
            <div className="d-panel-sidebar">
              <Sidebar/>
            </div>
            <div className="d-panel-main">
              <div className="d-main-content">
                <ApprovalForm {...doctorProfile[0]} />
              </div>

            </div>
          </div>
        </> :
        <>
          {doctorProfile && doctorProfile[0].isApproved === true ?

            <div className="d-dashboard">
              <div className="d-panel-sidebar">
                <Sidebar/>
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
                <DProfile {...doctorProfile[0]}/>
              </div>
            </div> 
            : <Loading />}
        </>}
    </>
  );
};

export default DoctorPanel;
