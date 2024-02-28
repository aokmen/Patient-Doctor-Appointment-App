import React, { useEffect } from 'react'
import { Chart } from "react-google-charts";
import { useSelector } from 'react-redux';
import useDataCall from '../../../../hooks/useDataCall';


export let data = [
  ["Gender", "Rate"],
  ["Weiblich", 11],
  ["Männlich", 2],
  ["Andere", 2],
   // CSS-style declaration
];

export const options = {
  legend: { position: "bottom" },
  title: "Geschlecht von Patienten",
  pieHole: 0.4,
  is3D: false,
  colors: ["#38638D", "#204060", "#59D4D4", "#5999D7"],
};

const GenderStats = ({appoOfthisDoctor}) => {

  const {getData} = useDataCall()
  const {patients} = useSelector((state)=>state.data)
  
  useEffect(() => {
    getData("patients")
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let relevantPatients = []

  let receivedAppointments = appoOfthisDoctor.filter((app) => {return app.patientId})

  receivedAppointments.map(element => { 
    return relevantPatients.push(...patients.filter((item) => {return item.id === element.patientId}))
  });
  //console.log(relevantPatients)

  let manCount = 0
  let womanCount = 0
  let genderlessCount = 0

  relevantPatients.map((pat) => {
    if(pat.gender === "Male") return manCount += 1;
    if(pat.gender === "Female") return womanCount += 1;
    else return genderlessCount += 1;
  })

  data = [
    ["Gender", "Rate"],
    ["Weiblich", womanCount],
    ["Männlich", manCount],
    ["Andere", genderlessCount],
     // CSS-style declaration
  ];

  return (
    <div className="mt-8">
      <Chart
        chartType="PieChart"
        width="100%"
        height="320px"
        data={data}
        options={options}
      />
    </div>

  )
}

export default GenderStats

