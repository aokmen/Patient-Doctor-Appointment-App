import React from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";
// import moment from "moment";

export let data = [];

export const options = {
  title: "Benutzer Statistik",
  curveType: "function",
  legend: { position: "bottom" },
  colors: ["#38638D", "#59D4D4", "#204060", "#5999D7", "#237979"],
};

const UserStats = () => {
  const { doctors, patients } = useSelector((state) => state.data);

  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  function calculateMonthlyCounts(data) {
    const today = new Date();
    const sixMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 5, 1);

    const monthlyCounts = Array(6).fill(0);

    data?.forEach((person) => {
      const createdAt = new Date(person.createdAt);
      if (createdAt >= sixMonthsAgo && createdAt <= today) {
        const monthsAgo =
          today.getMonth() -
          createdAt.getMonth() +
          12 * (today.getFullYear() - createdAt.getFullYear());
        if (monthsAgo >= 0 && monthsAgo < 6) {
          monthlyCounts[5 - monthsAgo]++;
        }
      }
    });

    return monthlyCounts;
  }
  //console.log(calculateMonthlyCounts(doctors.data))
  
  function getPreviousSixMonths() {
    const currentDate = new Date();
    const result = [];

    for (let i = 0; i < 6; i++) {
      const monthIndex = (currentDate.getMonth() - i + 12) % 12;
      result.unshift(months[monthIndex]);
    }

    return result;
  }

  const previousSixMonths = getPreviousSixMonths();
  //console.log(previousSixMonths);

  //const dateToday = moment().format("YYYY-MM-DD");

  data = [
    ["Monat", "Ärztinnen und Ärzte", "Patienten"],
    [
      previousSixMonths[0],
      calculateMonthlyCounts(doctors.data)[0],
      calculateMonthlyCounts(patients)[0],
    ],
    [
      previousSixMonths[1],
      calculateMonthlyCounts(doctors.data)[1],
      calculateMonthlyCounts(patients)[1],
    ],
    [
      previousSixMonths[2],
      calculateMonthlyCounts(doctors.data)[2],
      calculateMonthlyCounts(patients)[2],
    ],
    [
      previousSixMonths[3],
      calculateMonthlyCounts(doctors.data)[3],
      calculateMonthlyCounts(patients)[3],
    ],
    [
      previousSixMonths[4],
      calculateMonthlyCounts(doctors.data)[4],
      calculateMonthlyCounts(patients)[4],
    ],
    [
      previousSixMonths[5],
      calculateMonthlyCounts(doctors.data)[5],
      calculateMonthlyCounts(patients)[5],
    ],
  ];

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};
export default UserStats;
