import React, { useEffect } from 'react'
import Sidebar0 from '../../components/doctor/sidebar/Sidebar'
import Sidebar from '../../components/dashboard/patientDashboard/sidebar/Sidebar'
import Sidebar2 from '../../components/dashboard/doctorDashboard/sidebar/Sidebar'
import Services from '../../components/doctor/Services'
import DoctorProfil from '../../components/doctor/ProfilDoctor'
import AppointmentCalendar from '../../components/doctor/AppointmentCalendar'
import AboutDoctor from '../../components/doctor/AboutDoctor'
import { useParams } from 'react-router-dom';
import "../../components/doctor/DoctorPages.css"
import useDataCall from '../../hooks/useDataCall'
import { useSelector } from 'react-redux'
import Loading from '../loading/Loading'

const DetailDoctor = () => {
  const {id} = useParams();
  const {getData} = useDataCall()
  const {doctors} = useSelector((state)=>state.data)
  const {userType} = useSelector((state)=>state.auth)

  const thisDoctor = doctors?.data?.filter((item, i) => {return item.id === id})

  useEffect(() => {
    getData("appointments");
    getData("doctors");
    getData("patients");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <>
    {
      !thisDoctor?.length ? <Loading/> : (
        <div className="detail-main flex h-[100vh]">
          <div className=" border-cyan-500 flex-[3%]">
            { !userType ? <Sidebar0/> :(userType==="patient" ? <Sidebar/> : <Sidebar2/>)}
            </div>

          <div className="detail-main-box flex-[97%]" >
            <div className='detail-a h-[200px]'><Services {...thisDoctor[0]}/></div>
            <div className='detail-main-box-info flex'>
              <div className='detail-b flex-1'><DoctorProfil {...thisDoctor[0]}/></div>
              <div className='detail-c flex-1'><AppointmentCalendar {...thisDoctor[0]}/></div>
              <div className='detail-d flex-1'><AboutDoctor {...thisDoctor[0]}/></div>
            </div>
          </div>
    
    </div>
      )
    }
    </>
  )
  
}

export default DetailDoctor