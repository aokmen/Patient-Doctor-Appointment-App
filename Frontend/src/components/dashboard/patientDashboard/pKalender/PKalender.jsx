import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "../../doctorDashboard/kalender/calendar.css";
import { useSelector } from "react-redux";
import Events from "./Events";
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
    const datum = moment(value).format("YYYY-MM-DD");
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
    <div className="p-calender-main">
      <div className="p-calender-box flex justify-center rounded-3xl">
        <div className="p-calender-left bg-white w-[100%] rounded-l-3xl h-[820px] border-r-[1.9rem] border-main-light-blue flex flex-col">
          <div className=" min-h-[10vh] text-4xl font-bold flex justify-center items-center border-b-8 border-main-dark-blue">
            <h1 className="text-main-dark-blue">Kalender</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 ml-5 text-main-dark-blue"
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
              className="react-calendar2  mx-auto mt-12"
              defaultView="month"
              width="100px"
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

          <div className=" rounded-3xl mt-5 flex flex-col justify-center">
            <h1 className="text-3xl text-main-dark-blue mx-auto border-b-2 border-main-dark-blue px-10 mt-10 my-3">
              Feiertage
            </h1>
            <Feiertage
              holidayArray={holidayArray}
              holidays={holidays}
              setHolidays={setHolidays}
            />
          </div>
        </div>

        <div className="p-calender-right bg-white w-[100%] rounded-r-3xl flex flex-col">
          <div className="p-calender-right-box py-3 rounded-3xl flex flex-col items-center mx-auto">
            <div className="p-calender-right-info flex justify-start items-center border-2 w-[32rem] border-main-dark-blue rounded-lg bg-main-light-blue mb-6 mt-3 ">
              <button
                onClick={() => setiSEventsShown(false)}
                className={`w-1/2 py-2 px-3 flex justify-center items-center text-3xl  ${
                  !iSEventsShown ? "bg-main-dark-blue" : ""
                } ${!iSEventsShown ? "text-white" : "text-main-dark-blue"}`}
              >
                Termine
              </button>
              <button
                onClick={() => setiSEventsShown(true)}
                className={`flex-1 py-2 px-3 border-l-2 border-main-dark-blue flex justify-center items-center text-3xl ${
                  iSEventsShown ? "bg-main-dark-blue" : ""
                } ${iSEventsShown ? "text-white" : "text-main-dark-blue"}`}
              >
                Events
              </button>
            </div>

            {!iSEventsShown ? (
              <div className="p-calender-main-termin flex flex-row ">
                <div className="p-calender-termin overflow-scroll p-2 ">
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
                <div className="rounded-3xl  flex justify-center ml-4 ">
                  <TerminInfo termin={termin} />
                </div>
              </div>
            ) : (
              <div className=" rounded-3xl flex flex-col ">
                <div>
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
