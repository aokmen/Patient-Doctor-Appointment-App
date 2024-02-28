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
  const dateDeparted = Number(datumHeute.split("-")[2])
  //console.log(dateDeparted - 7)

  //******************************************************************************************* */

  let oneWeekBefore = ""
  
  if (dateDeparted <= 7) {
    const month = parseInt(datumHeute.split("-")[1]);
    const year = parseInt(datumHeute.split("-")[0]);
    const dayOfMonth = parseInt(datumHeute.split("-")[2]);

    let daysInMonth;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            daysInMonth = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            daysInMonth = 30;
            break;
        case 2:
            daysInMonth = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
            break;
        default:
            daysInMonth = 0;
    }

    const daysBack = dateDeparted - 1;
    const daysToSubtract = daysBack >= dayOfMonth ? daysBack - dayOfMonth : 0;
    const newDay = dayOfMonth - daysToSubtract;
    const newMonth = daysToSubtract === 0 ? month : month === 1 ? 12 : month - 1;
    const newYear = newMonth === 12 ? year - 1 : year;

    oneWeekBefore = `${newYear}-${newMonth.toString().padStart(2, '0')}-${newDay.toString().padStart(2, '0')}`;
} else {
    const daysAgo = dateDeparted - 7;
    oneWeekBefore = `${datumHeute.split("-")[0]}-${datumHeute.split("-")[1]}-${daysAgo}`;
}

    
  //console.log(oneWeekBefore)
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
  let AppsThisWeek = appoOfthisDoctor.filter((item) => {return item.date <= datumHeute && item.date > oneWeekBefore })
  //console.log(AppsThisWeek)
  let AppsThisMonth = appoOfthisDoctor.filter((item) => {return item.date <= datumHeute && item.date > previousMonthDate })
  //console.log(AppsThisWeek)

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