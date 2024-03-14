import React from 'react'
import { Chart } from "react-google-charts";
import { useSelector } from 'react-redux';


export const options = {
  legend: { position: "bottom" },
  chartArea: { left: 15, top: 15, right: 15, bottom: 15 },
  pieSliceText: "label",
  colors: ["#59D4D4" , "#38638D", "#204060", "#5999D7"],
};

export let data = [
    ["Status", "Gender", "Age", "Number"],
    ["Wahrgenommen", "Erfolgreich", 12, 3],
    ["Storniert von Patient-en/innen", "Storniert", 20, 6],
    ["Storniert von Admin", "Storniert", 7, 7],
    ["Storniert von mir", "Storniert", 54, 5],
    
  ]


const CancelStats = () => {

  const { appointments } = useSelector((state) => state.data);
  //console.log(appointments)

  
  
  let cancelledByPatient = appointments.filter((app) => {return app.cancelUserType === "patient"})
  let byPatient = cancelledByPatient.length

  let cancelledByAdmin = appointments.filter((app) => {return app.cancelUserType === "admin"})
  let byAdmin = cancelledByAdmin.length

  let cancelledByDoctor = appointments.filter((app) => {return app.cancelUserType === "doctor"})
  let byDoctor = cancelledByDoctor.length

  let realizedAppointments = appointments.length - byPatient - byDoctor - byAdmin
  
  data = [
    ["Status", "Gender", "Age", "Number"],
    ["Wahrgenommen", "Erfolgreich", 12, realizedAppointments],
    ["Storniert von Arzt-en/innen", "Storniert", 20, byDoctor],
    ["Storniert von Admin", "Storniert", 7, byAdmin],
    ["Storniert von mir", "Storniert", 54, byPatient],
  ];

  return (
    
    <div className="flex justify-center">
        <Chart
          chartType="PieChart"
          width="95%"
          height="280px"
          data={data}
          options={options}
          chartWrapperParams={{ view: { columns: [0, 3] } }}
          chartPackages={["corechart", "controls"]}
          controls={[
            {
              controlEvents: [
                {
                  eventName: "statechange",
                  callback: ({ chartWrapper, controlWrapper }) => {
                    console.log("State changed to", controlWrapper?.getState());
                  },
                },
              ],
              controlType: "CategoryFilter",
              options: {
                filterColumnIndex: 1,
                ui: {
                  labelStacking: "vertical",
                  label: "Terminstatus wählen",
                  allowTyping: false,
                  allowMultiple: false,
                },
              },
            },
          ]}
        />
    </div>

    
  )
}

export default CancelStats