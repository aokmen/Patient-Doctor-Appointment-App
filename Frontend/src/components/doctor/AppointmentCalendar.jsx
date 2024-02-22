import React, { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import useDataCall from "../../hooks/useDataCall";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Modal from './Appomodal.jsx'
import 'react-calendar/dist/Calendar.css';
import './ReactCalendar.css'


const AppointmentCalendar = ({id}) => {

  const [showModal, setShowModal] = React.useState(false);
  const [uhrZeit, setUhrZeit] = React.useState("");
  const [appoId, setAppoId] = React.useState("");
  const [datum, setDatum] = React.useState("");

  const {getData} = useDataCall()
  const {appointments} = useSelector((state) => state.data)                   
  const {doctors} = useSelector((state) => state.data)                   
  const {patients} = useSelector((state) => state.data)                   
  const {currentUser} = useSelector((state) => state.auth)                   
  //let currentUser = "Jessica.Yvonne11pat@site.com"
  
  let day = []
  const [appArr, setAppArr] = useState([])
  //const [appThisDoctorThisDay, setAppThisDoctorThisDay] = useState([])
  let appThisDoctorThisDay = []


  useEffect(() => {
    getData("appointments")
    getData("doctors")
    getData("patients")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const thisDoc = doctors.data.filter((doc) => {return doc.id === id}) 
  const thisPatient = patients.filter((pat) => {return pat.email === currentUser}) 
  //console.log(thisPatient)
  const patientName = thisPatient[0]?.firstName + " " + thisPatient[0]?.lastName
  const patientId = thisPatient[0]?.id
  

  const doctorName = thisDoc[0]?.title+ ". " + thisDoc[0]?.firstName + " " + thisDoc[0]?.lastName
  const doctorAdress = thisDoc[0]?.street + ", " + thisDoc[0]?.zipCode/*  + thisDoc[0]?.cityId */
  //console.log(doctorName)
  

  const handleDateSelect = async (value) => {
    
    const daysArray = value.toString().split(" ").slice(0,4)
    //console.log(daysArray)
    let month=""
    
    if(daysArray[1] === "Jan") month="01"
    if(daysArray[1] === "Feb") month="02"
    if(daysArray[1] === "Mar") month="03"
    if(daysArray[1] === "Apr") month="04"
    if(daysArray[1] === "May") month="05"
    if(daysArray[1] === "Jun") month="06"
    if(daysArray[1] === "Jul") month="07"
    if(daysArray[1] === "Aug") month="08"
    if(daysArray[1] === "Sep") month="09"
    if(daysArray[1] === "Oct") month="10"
    if(daysArray[1] === "Nov") month="11"
    if(daysArray[1] === "Dec") month="12"

    day = daysArray[3]+"-"+month+"-"+daysArray[2]
    //console.log(day)
    setDatum(daysArray[3]+"-"+month+"-"+daysArray[2])

    appThisDoctorThisDay = await appointments.filter((sch) => {return sch.doctorId === id}).filter((app) => {return app.date === day})
    setAppArr(appThisDoctorThisDay)
  }
  
  const handleHourClick = (uhr, appoId) => {
    //console.log(uhr)
    setShowModal(true)
    setUhrZeit(uhr)
    setAppoId(appoId)
  }
  

  return <div className="appointments-calendar flex flex-col justify-center items-center">
    <Calendar className="react-calendar" defaultView="month" locale="de-DE" onChange={handleDateSelect}/>
    <div className="hour-buttons text-center">
      {
        appArr?.map((app, index) => {
          return <button onClick={() => handleHourClick(app.timeStart, app.id)} className={app.patientId ? "reserved" : "free duration-150"} key={index}>{app.timeStart}</button>
        })
      }
    </div>
    <Modal showModal={showModal} setShowModal={setShowModal} doctorName={doctorName} date={datum} address={doctorAdress} uhrZeit={uhrZeit} appoId={appoId} patientName={patientName} patientId={patientId}/>
    
    
    
  </div>;
};

export default AppointmentCalendar;
