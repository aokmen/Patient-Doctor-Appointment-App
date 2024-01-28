import React, { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import useDataCall from "../../hooks/useDataCall";
import { useSelector } from "react-redux";
import { useEffect } from "react";
//import { useParams } from 'react-router-dom';


const AppointmentCalendar = () => {

  const {getData} = useDataCall()
  const myData = useSelector((state)=>state.data)
  //const {doctor_id} = useParams()                     //Bu sayfada doctor id parametreden alinmali

  //console.log(doctor_id)
  let doctor_id = "65afd150425342c5cb398117"       //örnek bir tane

  const [day, setDay] = useState(Date.now())


  useEffect(() => {
    getData("appointments")
    getData("doctors")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleDateSelect = (value) => {
    
    const dayArray = value.toString().split(" ").slice(0,4)
    //console.log(dayArray)
    let month=""
    
    if(dayArray[1] === "Jan") month="01"
    if(dayArray[1] === "Feb") month="02"
    if(dayArray[1] === "Mar") month="03"
    if(dayArray[1] === "Apr") month="04"
    if(dayArray[1] === "May") month="05"
    if(dayArray[1] === "Jun") month="06"
    if(dayArray[1] === "Jul") month="07"
    if(dayArray[1] === "Aug") month="08"
    if(dayArray[1] === "Sep") month="09"
    if(dayArray[1] === "Oct") month="10"
    if(dayArray[1] === "Nov") month="11"
    if(dayArray[1] === "Dec") month="12"

    setDay(dayArray[3]+"-"+month+"-"+dayArray[2])              //month 1 adim geriden geliyor, cözemedim
    
    
  }
  
  useEffect(() => {
    
    const appoOfThisDoctor = myData.appointments.filter((appo) => appo.doctorId === doctor_id)
      for(let i = 0; i < appoOfThisDoctor.length; i++){
    
        if(appoOfThisDoctor[i].date.slice(0,10) === day){                
          
        
        }
      }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDay,day])

  return <div className="appointments-calendar flex flex-col justify-center items-center">
    <Calendar className="react-calendar" defaultView="month" locale="de-DE" onChange={handleDateSelect}/>
    <div className="hour-buttons text-center">
      <button>07.00</button>
      <button>07.20</button>
      <button>07.40</button>
      <button>08.00</button>
      <button>08.20</button>
      <button>08.40</button>
      <button>09.00</button>
      <button>09.20</button>
      <button>09.40</button>
      <button>10.00</button>
      <button>10.20</button>
      <button>10.40</button>
      <button>11.00</button>
      <button>11.20</button>
      <button>11.40</button>
      <button>12.00</button>
      <button>12.20</button>
      <button>12.40</button>
      <button>13.00</button>
      <button>13.20</button>
      <button>13.40</button>
      <button>14.00</button>
      <button>14.20</button>
      <button>14.40</button>
      <button>15.00</button>
      <button>15.20</button>
      <button>15.40</button>
      <button>16.00</button>
      <button>16.20</button>
      <button>16.40</button>
      <button>17.00</button>
      <button>17.20</button>
      <button>17.40</button>
    </div>
    
    
  </div>;
};

export default AppointmentCalendar;
