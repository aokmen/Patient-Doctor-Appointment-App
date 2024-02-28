import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
    ["Year", "Terminzahl"],
    ["Dezember", 1030],
    ["Januar", 1000],
    ["Februar", 1170],
    ["März", 660],
  ];
  
  export const options = {
    title: "Anzahl der Termine - 2024",
    curveType: "function",
    legend: { position: "bottom" },
    colors: ["#38638D", "#59D4D4", "#5999D7", "#204060"],
  };

const WeeklyNumber = () => {
  return (
    <div>
        <Chart
            chartType="LineChart"
            width="100%"
            height="340px"
            data={data}
            options={options}
        />
    </div>
  )
}

export default WeeklyNumber