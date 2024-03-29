import React from 'react'
import { Chart } from "react-google-charts";
import { useSelector } from 'react-redux';


export let data = [];

export const options = {
  title: "Nachrichten Statistics",
  chartArea: { width: "60%" },
  hAxis: {
    title: "Zahl",
    minValue: 0,
  },
  colors: ["#38638D", "#5999D7", "#59D4D4", "#204060", "#237979"],
  legend: { position: "bottom" },
  backgroundColor: {
    fill: "#fff",
    fillOpacity: 0.7,
  },
};

const MessageStats = () => {

    const { messages } = useSelector((state) => state.data);
    const { userId } = useSelector((state) => state.auth);
  
  //console.log(messages)

    let senderDoctorsNumber = 0
    let receiverDoctorsNumber = 0;
    let sentMessagesNumber = 0
    let receivedMessagesNumber = 0

    let senderDoctors = []
    let receiverDoctors = []

    for (let i = 0; i < messages?.length; i++){
        if (messages[i]?.senderUserId === userId) {
          sentMessagesNumber += 1;
          receiverDoctors.push(messages[i]?.receiverUserId);
        } else if (messages[i]?.receiverUserId === userId) {
          receivedMessagesNumber += 1;
          senderDoctors.push(messages[i]?.senderUserId);
        }
    }
    // console.log(sentMessagesNumber)
    // console.log(receivedMessagesNumber)

    function countOccurrences(arr) {
      const counts = {};

      // Count occurrences of each name
      arr.forEach((name) => {
        counts[name] = (counts[name] || 0) + 1;
      });

      // Convert object into array of arrays
      const result = [];
      for (const name in counts) {
        result.push([name, counts[name]]);
      }

      return result.length;
    }

    senderDoctorsNumber = countOccurrences(senderDoctors)
    receiverDoctorsNumber = countOccurrences(receiverDoctors)

    //console.log(senderDoctorsNumber);
    //console.log(receiverDoctorsNumber);

    data = [
      ["", "Anzahl der Ärzte", "Anzahl der Nachrichten"],
      ["Nachrichten, die ich geschickt habe", receiverDoctorsNumber, sentMessagesNumber],
      ["Nachrichten, die ich erhalten habe", senderDoctorsNumber, receivedMessagesNumber]
    ];

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
  );
}

export default MessageStats