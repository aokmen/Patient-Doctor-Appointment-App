import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "../../doctorDashboard/kalender/calendar.css";
import { useSelector } from "react-redux";
import Events from "../../doctorDashboard/kalender/Events";
import Feiertage from "../../doctorDashboard/kalender/Feiertage";
import moment from "moment";
import TerminInfo from "../Uberblick/TerminInfo";
import Termine from "../Uberblick/Termine";

const Kalender = () => {
  

  const { appointments } = useSelector((state) => state.data);
  
  //console.log(events);

  const [termin, setTermin] = useState([]);

  const dateToday = moment().format("YYYY-MM-DD");

  let todayAppsThisPatient = appointments?.filter((item) => {
    return item.date === dateToday;
  });

  const [appsThisPatientSelectedDate, setAppsThisPatientSelectedDate] =
    useState([]);
  const [selectedDate, setSelectedDate] = useState(dateToday);
  //const [patient, setPatient] = useState("");

  const [holidayArray, setHolidayArray] = useState([]);
  let dayData = [];
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    setAppsThisPatientSelectedDate(todayAppsThisPatient);

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
    const AppsSelectedDate = appointments?.filter((item) => {
      return item.date === datum;
    });
    setAppsThisPatientSelectedDate(AppsSelectedDate);

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
              <div className="max-h-[72vh] min-h-[72vh] flex flex-row max-w-[44vw] min-w-[44vw]">
                <div className="overflow-scroll rounded-3xl max-w-[18vw] min-w-[18vw]">
                  {appsThisPatientSelectedDate?.map((appo, index) => {
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
                  })}
                </div>
                <div className="rounded-3xl max-w-[17vw] min-w-[17vw] flex justify-center ml-4 px-4">
                  <TerminInfo termin={termin} />
                </div>
              </div>
            ) : (
              <div className="max-h-[71vh] min-h-[71vh] py-3 mt-6 rounded-3xl flex flex-col w-[35rem] ml-[-7rem]">
                <div className="max-h-[38vh] min-h-[38vh]">
                  <Events selectedDate={selectedDate} />
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
