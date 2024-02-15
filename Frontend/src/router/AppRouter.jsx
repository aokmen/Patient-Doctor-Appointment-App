import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home";
import RegisterDoctor from "../pages/auth/RegisterDoctor";
import RegisterPatient from "../pages/auth/RegisterPatient";
import DetailDoctor from "../pages/detailDoctor/DetailDoctor";
import SearchDoctor from "../pages/searchDoctor/SearchDoctor";
import Login from "../pages/auth/Login";
import { PrivateAdminRouter, PrivateDoctorRouter, PrivatePatientRouter } from "./PrivateRouter";
import AdminPanel from "../pages/panels/adminPanel/AdminPanel";
import DoctorPanel from "../pages/panels/doctorPanel/DoctorPanel";
import PatientPanel from "../pages/panels/patientPanel/PatientPanel";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import MyCalender from "../pages/panels/doctorPanel/myCalender/MyCalender";
import DoctorProfile from "../pages/panels/doctorPanel/doctorProfile/DoctorProfile";
import AdminProfile from "../pages/panels/adminPanel/adminProfile/AdminProfile";
import DoctorManagement from "../pages/panels/adminPanel/doctorManagement/DoctorManagement";
import PatientManagement from "../pages/panels/adminPanel/patientManagement/PatientManagement";
import DoctorOverview from "../pages/panels/doctorPanel/doctorOverview/DoctorOverview";
import DoctorStatistic from "../pages/panels/doctorPanel/doctorStatistic/DoctorStatistic";
import PatientInfo from "../pages/panels/doctorPanel/patientInfo/PatientInfo";
import DoctorMessage from "../pages/panels/doctorPanel/doctorMessage/DoctorMessage";
import DoctorSetting from "../pages/panels/doctorPanel/doctorSetting/DoctorSetting";
import DoctorTask from "../pages/panels/doctorPanel/doctorTask/DoctorTask";
import DoctorAccount from "../pages/panels/doctorPanel/doctorAccount/DoctorAccount";
import AdminOverview from "../pages/panels/adminPanel/adminOverview/AdminOverview";
import AdminMessage from "../pages/panels/adminPanel/adminMessage/AdminMessage";
import AdminTask from "../pages/panels/adminPanel/adminTask/AdminTask";
import AdminSetting from "../pages/panels/adminPanel/adminSetting/AdminSetting";
import AdminAccount from "../pages/panels/adminPanel/adminAccount/AdminAccount";



const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchDoctor />} />
        <Route path="/search/:id" element={<DetailDoctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regdoctor" element={<RegisterDoctor />} />
        <Route path="/regpatient" element={<RegisterPatient />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />

        <Route path="" element={<PrivateAdminRouter/>}>
          <Route path="/admin" element={<AdminPanel />}>

            <Route index element={<AdminOverview />} />
            <Route path="profile" index element={<AdminProfile />} />
            <Route path="doctor-management" index element={<DoctorManagement />} />
            <Route path="patient-management" element={<PatientManagement />} />
            <Route path="message" element={<AdminMessage />} />
            <Route path="task" index element={<AdminTask />} />
            <Route path="setting" element={<AdminSetting />} />
            <Route path="account" element={<AdminAccount/>} />

          </Route>


        </Route>
        <Route path="" element={<PrivateDoctorRouter/>}>
          <Route path="/doctor" element={<DoctorPanel />}>

            <Route index element={<DoctorOverview />} />
            <Route path="profile" element={<DoctorProfile />} />
            <Route path="my-calender" element={<MyCalender />} />
            <Route path="message" element={<DoctorMessage />} />
            <Route path="task" element={<DoctorTask />} />
            <Route path="statistic" element={<DoctorStatistic />} />
            <Route path="patient-info" element={<PatientInfo/>} />
            <Route path="setting" element={<DoctorSetting/>} />
            <Route path="account" element={<DoctorAccount/>} />
          </Route>
        </Route>
        <Route path="" element={<PrivatePatientRouter/>}>
          <Route path="/patient" element={<PatientPanel />} />
        </Route>


      </Routes>
    </Router>
  )

};

export default AppRouter;