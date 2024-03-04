import React, { useEffect } from 'react'
import { Chart } from "react-google-charts";
import useDataCall from '../../../../hooks/useDataCall';
import { useSelector } from 'react-redux';


export let data = [
  ["März - Anzahl der Termine", "Männlich", "Weiblich", "Andere"],
  ["Täglich", 8, 7, 3],
  ["Wöchentlich", 22, 25, 24],
  ["Monatlich", 116, 111, 32],
];

export const options = {
  title: "März - Anzahl der Termine",
  chartArea: { width: "60%" },

  colors: ["#38638D", "#59D4D4", "#5999D7", "#204060"],
  legend: { position: "bottom" },
};

const TerminZahl = ({appoOfthisDoctor}) => {

  const {getData} = useDataCall()
  const {patients} = useSelector((state)=>state.data)
  
  useEffect(() => {
    getData("patients")
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dateToday = new Date().toISOString()
  const datumHeute = dateToday.toLocaleString().slice(0,10)

  //******************************************************************************************* */

  function getDateOneWeekBefore() {
    var today = new Date();
    var oneWeekBefore = new Date(today);
    oneWeekBefore.setDate(oneWeekBefore.getDate() - 7);
    return oneWeekBefore.toISOString().split("T")[0];
  }

  //console.log(getDateOneWeekBefore());

//****************************************************************************************************** */

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; // January is 0, so add 1
const currentDay = currentDate.getDate();

let previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
let previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;

const daysInPreviousMonth = new Date(previousYear, previousMonth, 0).getDate();
const previousMonthDate = daysInPreviousMonth >= currentDay
    ? `${previousYear}-${previousMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`
    : `${previousYear}-${previousMonth.toString().padStart(2, '0')}-${daysInPreviousMonth.toString().padStart(2, '0')}`;

//console.log("Previous month date:", previousMonthDate);

//****************************************************************************************************** */

  let todayApps = appoOfthisDoctor.filter((item) => {return item.date === datumHeute})
  //console.log(todayApps)
  let AppsThisWeek = appoOfthisDoctor.filter((item) => {return item.date <= datumHeute && item.date > getDateOneWeekBefore(); })
  //console.log(AppsThisWeek)
  let AppsThisMonth = appoOfthisDoctor.filter((item) => {return item.date <= datumHeute && item.date > previousMonthDate })
  //console.log(AppsThisMonth)

  let relevantPatients = []
  let relevantPatientsWeekly = []
  let relevantPatientsMonthly = []

  let receivedAppointmentsToday = todayApps.filter((app) => {return app.patientId})
  let receivedAppointmentsThisWeek = AppsThisWeek.filter((app) => {return app.patientId})
  let receivedAppointmentsThisMonth = AppsThisMonth.filter((app) => {return app.patientId})

  receivedAppointmentsToday.map(element => { 
    return relevantPatients.push(...patients.filter((item) => {return item.id === element.patientId}))
  });
  receivedAppointmentsThisWeek.map(element => { 
    return relevantPatientsWeekly.push(...patients.filter((item) => {return item.id === element.patientId}))
  });
  receivedAppointmentsThisMonth.map(element => { 
    return relevantPatientsMonthly.push(...patients.filter((item) => {return item.id === element.patientId}))
  });

  let manCountToday = 0
  let womanCountToday = 0
  let genderlessCountToday = 0
  let manCountThisWeek = 0
  let womanCountThisWeek = 0
  let genderlessCountThisWeek = 0
  let manCountThisMonth = 0
  let womanCountThisMonth = 0
  let genderlessCountThisMonth = 0

  relevantPatients.map((pat) => {
    if(pat.gender === "Male") return manCountToday += 1;
    if(pat.gender === "Female") return womanCountToday += 1;
    else return genderlessCountToday += 1;
  })
  relevantPatientsWeekly.map((pat) => {
    if(pat.gender === "Male") return manCountThisWeek += 1;
    if(pat.gender === "Female") return womanCountThisWeek += 1;
    else return genderlessCountThisWeek += 1;
  })
  relevantPatientsMonthly.map((pat) => {
    if(pat.gender === "Male") return manCountThisMonth += 1;
    if(pat.gender === "Female") return womanCountThisMonth += 1;
    else return genderlessCountThisMonth += 1;
  })

  data = [
    ["Anzahl der Termine in Bezug auf das Geschlecht", "Männlich", "Weiblich", "Andere"],
    ["Täglich", manCountToday, womanCountToday, genderlessCountToday],
    ["letzte 7 Tage", manCountThisWeek, womanCountThisWeek, genderlessCountThisWeek],
    ["letzte 30 Tage", manCountThisMonth, womanCountThisMonth, genderlessCountThisMonth],
  ];

  return (
    <div className='pl-10 pt-10'>
      <Chart
      chartType="Bar"
      width="100%"
      height="360px"
      data={data}
      options={options}
    />
    </div>

  )
}

export default TerminZahl