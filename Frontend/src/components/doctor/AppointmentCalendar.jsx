import React, { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import useDataCall from "../../hooks/useDataCall";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const AppointmentCalendar = ({id}) => {

  const {getData} = useDataCall()
  const {appointments} = useSelector((state) => state.data)                   

  
  let day = []
  const [appArr, setAppArr] = useState([])
  //const [appThisDoctorThisDay, setAppThisDoctorThisDay] = useState([])
  let appThisDoctorThisDay = []


  useEffect(() => {
    getData("appointments")
    getData("doctors")
    getData("dayschedules")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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

    appThisDoctorThisDay = await appointments.filter((sch) => {return sch.doctorId === id}).filter((app) => {return app.date === day})
    setAppArr(appThisDoctorThisDay)
  }
  
  useEffect(() => {
    getData("appointments")
    getData("doctors")
    getData("dayschedules")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="appointments-calendar flex flex-col justify-center items-center">
    <Calendar className="react-calendar" defaultView="month" locale="de-DE" onChange={handleDateSelect}/>
    <div className="hour-buttons text-center">
      {
        appArr?.map((app, index) => {
          return <button className={app.patientId ? "reserved" : "free duration-150"} key={index}>{app.timeStart}</button>
        })
      }
    </div>
    
    
  </div>;
};

export default AppointmentCalendar;
