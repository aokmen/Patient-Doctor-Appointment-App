import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
    ["Zeitabschnitt", "Männlich", "Weiblich", "Andere"],
    ["Katarakt", 8, 7, 3],
    ["Laser", 22, 25, 24],
    ["Augenschmerzen", 11, 11, 2],
  ];
  
  export const options = {
    title: "Symptome",
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
      title: "Zahl",
      minValue: 0,
    },
    vAxis: {
      title: "",
    },
    colors: ["#38638D", "#59D4D4", "#5999D7", "#204060"],
    
  };

const Sypmtome = () => {
  return (
    <div>
      <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  )
}

export default Sypmtome