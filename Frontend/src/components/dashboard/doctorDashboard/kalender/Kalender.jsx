import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";
import { useSelector } from "react-redux";
import useDataCall from "../../../../hooks/useDataCall";
import PatientInfo from "./PatientInfo";
import Events from "./Events";
import Feiertage from "./Feiertage";
import moment from "moment";

const Kalender = () => {

    const {appointments} = useSelector((state)=>state.data)
    const {getData} = useDataCall()
    const {  userId, userType } = useSelector((state) => state.auth)
  
    
    let doctor_id = userId

  const dateToday = new Date().toISOString();

  let appsThisDoctor = appointments?.filter((item) => {
    return item.doctorId === doctor_id;
  });
  let todayAppsThisDoctor = appsThisDoctor?.filter((item) => {
    return item.date === dateToday.split("T")[0];
  });

  const [appsThisDoctorSelectedDate, setAppsThisDoctorSelectedDate] = useState(
    []
  );
  const [selectedDate, setSelectedDate] = useState(dateToday.split("T")[0]);
  const [patient, setPatient] = useState("");

  const [holidayArray, setHolidayArray] = useState([]);
  let dayData = [];
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    getData("appointments");
    const AppsToday = appsThisDoctor?.filter((item) => {
      return item.date === dateToday.split("T")[0];
    });
    setAppsThisDoctorSelectedDate(AppsToday);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDateSelect = async (value) => {
    const dateArray = value
      .toLocaleString()
      .split(",")
      .slice(0, 1)[0]
      .split("/");
    const datum = dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0];
    //console.log(datum)
    //console.log("value:",value.toLocaleString())
    setSelectedDate(datum);
    const AppsSelectedDate = appsThisDoctor?.filter((item) => {
      return item.date === datum;
    });
    setAppsThisDoctorSelectedDate(AppsSelectedDate);

    dayData = await holidays?.filter((item) => item.date.iso === datum);

    setHolidayArray(dayData);
  };

  const [iSEventsShown, setiSEventsShown] = useState(false);

  return (
    <div className="h-[100vh] w-[87vw]">
      <div className="flex justify-center rounded-3xl">
        <div className="bg-white rounded-l-3xl max-h-[86vh] w-[40vw] max-w-[40vw] border-r-[1.9rem] border-[#F1F7FE] min-h-[86vh] flex flex-col">
          <div className=" min-h-[10vh] text-4xl font-bold flex justify-center items-center border-b-8 border-[#38638D]">
            <h1 className="text-[#38638D]">Kalender</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 ml-5 text-[#38638D]"
            >
              <path
                fillRule="evenodd"
                d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <Calendar
              className="react-calendar2 mx-auto mt-12"
              defaultView="month"
              locale="de-DE"
              onChange={handleDateSelect}
              tileClassName={({ date, view }) => {
                //holidays.map((item) => console.log(item.date.iso))
                if (
                  holidays.find(
                    (dat) => dat.date.iso === moment(date).format("YYYY-MM-DD")
                  )
                ) {
                  return "highlight";
                }
              }}
            />
          </div>

          <div className=" rounded-3xl max-h-[33vh] min-h-[32vh] mt-5 flex flex-col">
            <h1 className="text-3xl text-[#38638D] mx-auto border-b-2 border-[#38638D] px-10 my-3">
              Feiertage
            </h1>
            <Feiertage
              holidayArray={holidayArray}
              holidays={holidays}
              setHolidays={setHolidays}
            />
          </div>
        </div>

        <div className=" bg-white rounded-r-3xl max-h-[86vh] min-h-[86vh] max-w-[50vw] w-[46vw] min-w-[46vw] flex flex-col">
          <div className="py-3 rounded-3xl flex flex-col items-center">
            <div className="flex justify-start items-center border-2 w-[32rem] border-[#38638D] rounded-lg bg-[#F1F7FE] mb-6 mt-3 ml-[-8rem]">
              <button
                onClick={() => setiSEventsShown(false)}
                className={`w-1/2 py-2 px-3 flex justify-center items-center text-3xl  ${
                  !iSEventsShown ? "bg-[#38638D]" : ""
                } ${!iSEventsShown ? "text-white" : "text-[#38638D]"}`}
              >
                Termine
              </button>
              <button
                onClick={() => setiSEventsShown(true)}
                className={`flex-1 py-2 px-3 border-l-2 border-[#38638D] flex justify-center items-center text-3xl ${
                  iSEventsShown ? "bg-[#38638D]" : ""
                } ${iSEventsShown ? "text-white" : "text-[#38638D]"}`}
              >
                Events
              </button>
            </div>

            {!iSEventsShown ? (
              <div className="max-h-[72vh] min-h-[72vh] flex flex-row">
                <div className="overflow-scroll rounded-3xl max-w-[18vw] min-w-[18vw]  ml-[-8rem]">
                  <table className="bg-slate-100 mx-auto my-5 border-2 border-[#38638D]">
                    <thead>
                      <tr>
                        <th
                          colSpan="2"
                          className="w-[120px] text-center border-2 border-[#38638D] p-2 text-lg"
                        >
                          Termine am {selectedDate || dateToday.split("T")[0]}
                        </th>
                      </tr>
                      <tr>
                        <th className="w-[120px] text-center border-2 border-[#38638D] p-2">
                          Uhrzeit
                        </th>
                        <th className="w-[120px] text-center border-2 border-[#38638D] p-2">
                          Patient
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedDate === dateToday.split("T")[0] ? (
                        todayAppsThisDoctor.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td
                                className={`w-[120px] text-center border-r-2 border-[#38638D] p-1 ${
                                  index % 2 === 0
                                    ? "bg-slate-200"
                                    : "bg-slate-100"
                                }`}
                              >
                                {item.timeStart}
                              </td>
                              <td
                                onClick={() => setPatient(item.patientId)}
                                className={`w-[240px] flex items-center justify-center text-center p-1 ${
                                  item.patientId &&
                                  "hover:underline hover:cursor-pointer"
                                } ${
                                  index % 2 === 0
                                    ? "bg-slate-200"
                                    : "bg-slate-100"
                                }`}
                              >
                                <p
                                  className={`w-[15px] h-[15px] mr-2 rounded-full ${
                                    item.patientId && !item.isCancelled
                                      ? "bg-green-500"
                                      : item.patientId && item.isCancelled
                                      ? "bg-red-600"
                                      : null
                                  }`}
                                ></p>
                                {!item.patientId
                                  ? "frei"
                                  : item?.patientId?.firstName +
                                    " " +
                                    item.patientId?.lastName}
                              </td>
                            </tr>
                          );
                        })
                      ) : appsThisDoctorSelectedDate.length ? (
                        appsThisDoctorSelectedDate.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td
                                className={`w-[120px] text-center border-r-2 border-[#38638D] p-1 ${
                                  index % 2 === 0
                                    ? "bg-slate-200"
                                    : "bg-slate-100"
                                }`}
                              >
                                {item.timeStart}
                              </td>
                              <td
                                onClick={() => setPatient(item.patientId)}
                                className={`w-[240px] flex items-center justify-center text-center p-1 ${
                                  item.patientId &&
                                  "hover:underline hover:cursor-pointer"
                                } ${
                                  index % 2 === 0
                                    ? "bg-slate-200"
                                    : "bg-slate-100"
                                }`}
                              >
                                <p
                                  className={`w-[15px] h-[15px] mr-2 rounded-full ${
                                    item.patientId && !item.isCancelled
                                      ? "bg-green-500"
                                      : item.patientId && item.isCancelled
                                      ? "bg-red-600"
                                      : null
                                  }`}
                                ></p>
                                {!item.patientId
                                  ? "frei"
                                  : item?.patientId?.firstName +
                                    " " +
                                    item.patientId?.lastName}
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td
                            colSpan="2"
                            className="w-[120px] text-center border-r-2 border-[#38638D] p-1 bg-slate-200"
                          >
                            Ihre Termine sind an diesem Tag geschlossen.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="rounded-3xl max-w-[18vw] min-w-[18vw] flex justify-center">
                  <PatientInfo
                    appsThisDoctorSelectedDate={appsThisDoctorSelectedDate}
                    appsThisDoctor={appsThisDoctor}
                    patient={patient}
                    selectedDate={selectedDate}
                  />
                </div>
              </div>
            ) : (
              <div className="max-h-[71vh] min-h-[71vh] py-3 mt-6 rounded-3xl flex flex-col w-[35rem] ml-[-7rem]">
                <div className="max-h-[38vh] min-h-[38vh]">
                  <Events
                    selectedDate={selectedDate}
                    userType={userType}
                    userId={userId}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kalender;
