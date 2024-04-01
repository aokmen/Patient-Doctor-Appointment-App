import React from 'react'
import Termine from './Termine'
import moment from "moment";

const KommendeTermine = ({
  appointmentsOfThisPatient,
  setTermin,
  isOldAppointmentsShown,
}) => {
  //console.log(appointmentsOfThisPatient)

  const dateToday = moment().format("YYYY-MM-DD");
  let pastAppointments = [];
  let futureAppointments = [];

  futureAppointments.push(
    ...appointmentsOfThisPatient.filter((item) => {
      return item.date > dateToday || item.date === dateToday;
    })
  );
  pastAppointments.push(
    ...appointmentsOfThisPatient.filter((item) => {
      return item.date < dateToday && (item.isCancelled === false);
    })
  );
  //console.log(pastAppointments);

  return (
    <>
      {isOldAppointmentsShown
        ? pastAppointments?.map((appo, index) => {
            return (
              <div key={index}>
                <div
                  key={index}
                  className="w-full hover:cursor-pointer"
                  onClick={() => setTermin(appo)}
                >
                  <Termine {...appo} />
                </div>
              </div>
            );
          })
        : futureAppointments?.map((appo, index) => {
            return (
              <div key={index}>
                <div
                  key={index}
                  className="mx-auto w-[300px] hover:cursor-pointer"
                  onClick={() => setTermin(appo)}
                >
                  <Termine {...appo} />
                </div>
              </div>
            );
          })}
    </>
  );
};

export default KommendeTermine