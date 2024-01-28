import React, { useEffect } from 'react'
import Sidebar from '../../components/doctor/Sidebar'
import Symptom from '../../components/doctor/Symptom'
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

  const thisDoctor = doctors?.data?.filter((item, i) => {return item.id === id})

  useEffect(() => {
    
    getData("doctors")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <>
    {
      !thisDoctor?.length ? <Loading/> : (
        <div className="grid grid-rows-5 grid-cols-8 w-100">
          <div className="row-span-5 col-span-1"><Sidebar/></div>
          <div className="row-span-1 col-span-7"><Symptom/></div>
          <div className="row-span-4 col-span-2"><DoctorProfil  {...thisDoctor[0]}/></div>
          <div className="row-span-4 col-span-3"><AppointmentCalendar/></div>
          <div className="row-span-4 col-span-2"><AboutDoctor {...thisDoctor[0]}/></div>
    
    </div>
      )
    }
    </>
  )
  
}

export default DetailDoctor