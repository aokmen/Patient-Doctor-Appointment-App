import React, { useEffect, useState } from "react";
import DailyCalendar from "./DailyCalendar";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import moment from "moment";
import { getGermanHolidays } from "./HolidayService.js";
import PatientInfo from "./PatientInfo.jsx";
import "../../../doctor/ReactCalendar.css";




const Uberblick = () => {


  const { appointments } = useSelector((state) => state.data);
  const [patient, setPatient] = useState("");
  const [holidayArray, setHolidayArray] = useState([]);

  let dayData = [];

  const [holidays, setHolidays] = useState([]);

  const dateToday = moment().format("YYYY-MM-DD");

  let todayApps = appointments.filter((item) => {
    return item.date === dateToday;
  });
  //console.log(todayApps)

  let receivedAppThisDoctor = appointments.filter((app) => {
    return app.patientId;
  });

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const holidayData = await getGermanHolidays();
        setHolidays(holidayData);
      } catch (error) {
        console.error("Error fetching holidays:", error);
      }
    };

    // fetchHolidays();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //console.log(holidays)

  const handleDateSelect = async (value) => {
    //console.log("Hello")
    
    const datum = moment(value).format("YYYY-MM-DD");

    dayData = await holidays.filter((item) => item.date.iso === datum);

    setHolidayArray(dayData);
  };

  // console.log(holidayArray)
  //.date

  let patientsArray = appointments.filter((item) => {
    return item.patientId;
  });


  function removeDuplicates(array) {
    const seen = new Set();
    return array.filter((item) => {
      const id = JSON.stringify(item?.patientId?.id);
      const duplicate = seen.has(id);
      seen.add(id);
      return !duplicate;
    });
  }

  const uniquePatients = removeDuplicates(patientsArray);

  //console.log(uniquePatients[0]);

  const todayAppoThisDoctor = receivedAppThisDoctor.filter((element) => {
    return element.date === dateToday;
  });


  return (

    <div className="p-view-main h-[100vh] ">
      <div className="p-view flex rounded-3xl gap-10  justify-center">


        <div className="p-view-start flex flex-col pt-6 bg-white  w-[420px] rounded-l-3xl">
          <div className="text-4xl font-bold flex justify-center items-center border-b-8 border-main-dark-blue">
            <h1 className="text-main-dark-blue">Überblick</h1>
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
          <div className="flex flex-col justify-center items-center border-b-4 border-main-dark-blue mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 text-main-dark-blue mt-4"
            >
              <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-3xl text-main-dark-blue my-4">Heutige Termine</h2>
          </div>
          <div className="mt-8 p-view-daily-calendar">
            <DailyCalendar
              todayAppsThisDoctor={todayApps}
              dateToday={dateToday}
              setPatient={setPatient}
            />
          </div>

        </div>

          <div className="p-view-middle flex flex-col w-[500px]">
            <div className="flex flex-row gap-8 border-b-[1.9rem] justify-center  border-main-light-blue">
              <div className="p-view-info flex text-center flex-col justify-between bg-white p-3 w-[16rem]">
                <h1 className="text-2xl mb-2 wrap text-main-dark-blue">
                  Gesamtzahl der Patienten
                </h1>
                <div className="flex justify-center items-center bg-main-light-blue rounded-lg mx-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-16 border-r-4 border-main-light-blue2 text-main-light-blue2 pr-3"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  <p className="text-3xl text-main-dark-blue font-bold pl-3">
                    {uniquePatients?.length}
                  </p>
                </div>
              </div>
              <div className="p-view-info flex flex-col justify-between  text-center bg-white p-3  w-[16rem]">
                <h1 className="text-2xl mb-2 wrap text-main-dark-blue">
                  Gesamtzahl der Termine
                </h1>
                <div className="flex justify-center items-center bg-main-light-blue rounded-lg mx-auto w-40 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-16 border-r-4 border-main-light-blue2 text-main-light-blue2 pr-3"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  <p className="text-3xl text-main-dark-blue font-bold pl-3">
                    {receivedAppThisDoctor?.length}
                  </p>
                </div>
              </div>
            </div>

            {
              patient ? <div className="p-view-termin-info flex flex-col bg-white h-full pt-20">
              <div className="pt1 text-3xl text-main-dark-blue border-main-dark-blue mb-20 mt-[-40px] text-center">
                <h1>Patient Info</h1>
              </div>
              <div className="pt2 mx-auto mt-[-80px]"><PatientInfo
                patient={patient}
                todayAppsThisDoctor={todayApps}
              /></div> 
              </div>
                :
                <div className="p-view-clock bg-white h-full text-center">
                  {
                    todayAppoThisDoctor?.length ? <h1 className="text-main-dark-blue text-xl mt-10 px-6"><span className="font-bold">Hinweis: </span>Sie haben heute {todayAppoThisDoctor?.length} {todayAppoThisDoctor?.length === 1 ? "Termin" : "Termine"}. Für detaillierte Informationen klicken Sie bitte auf den Namen im Bereich „Heutige Termine“. </h1> : <h1 className="text-main-dark-blue text-xl mt-10 px-6"> <span className="font-bold">Hinweis:</span> Wenn Sie heute einen Termin haben, klicken Sie bitte auf den Namen im Bereich „Heutige Termine“.</h1>
                  }
                  
                  <div className="flex mt-10 justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20em" height="20em" viewBox="0 0 48 48"><g fill="currentColor"  className=" border-main-light-blue2 text-main-light-blue2"><path fillRule="evenodd" d="M12 21a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 2v2h2v-2zm6 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2 0h2v2h-2zm8-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 2v2h2v-2zm-18 8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm4 0v2h-2v-2zm6-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm2 2h-2v2h2z" clipRule="evenodd"/><path d="M36 32.5a1 1 0 1 0-2 0v2.914l1.293 1.293a1 1 0 0 0 1.414-1.414L36 34.586z"/><path fillRule="evenodd" d="M12 7a1 1 0 1 1 2 0v5a1 1 0 1 0 2 0V9h10V7a1 1 0 1 1 2 0v5a1 1 0 1 0 2 0V9h3a3 3 0 0 1 3 3v16.07A7.001 7.001 0 0 1 35 42a6.992 6.992 0 0 1-5.745-3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h3zm16 28a7.001 7.001 0 0 1 6-6.93V18H8v18a1 1 0 0 0 1 1h19.29a7.001 7.001 0 0 1-.29-2m12 0a5 5 0 1 1-10 0a5 5 0 0 1 10 0" clipRule="evenodd"/></g></svg>
                  {/* <Clock/> */}</div>
                  
                  </div>
            }
            
          </div>

          <div className="p-view-end flex flex-col w-[500px] ">
            <div className="flex flex-row gap-8 border-b-[1.9rem] border-main-light-blue justify-center">
              <div className="p-view-info col-span-1 row-span-2 bg-white flex flex-col justify-evenly text-center p-3 w-[16rem] h-[170px]">
                <h1 className="text-2xl mb-2 wrap text-main-dark-blue">
                  Heutige Termine
                </h1>
                <div className="flex justify-center items-center bg-main-light-blue rounded-lg mx-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-16 border-r-4 border-main-light-blue2 text-main-light-blue2 pr-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-3xl text-main-dark-blue font-bold pl-3">
                    {todayAppoThisDoctor?.length}
                  </p>
                </div>
              </div>

              <div className="p-view-info col-span-1 rounded-tr-3xl row-span-2 bg-white flex flex-col justify-evenly text-center p-3 w-[16rem] h-[170px]">
                <h1 className="text-2xl mb-2 wrap text-main-dark-blue">
                  Gesamtbewertung
                </h1>
                <div className="flex justify-center items-center bg-main-light-blue rounded-lg mx-auto w-40 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-16 border-r-4 border-main-light-blue2 text-main-light-blue2 pr-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-3xl text-main-dark-blue font-bold pl-3">4.7</p>
                </div>
              </div>
            </div>

            <div className="p-view-calender flex flex-col bg-white rounded-br-3xl h-full">
              <div className="p-view-calender-box text-3xl w-[18rem] ml-[6rem] mt-3 text-main-dark-blue border-b-2 border-main-dark-blue mx-auto text-center">
                <h1>Kalender</h1>
              </div>
              <Calendar
                className="react-calendar mx-auto mt-5"
                defaultView="month"
                locale="de-DE"
                onChange={handleDateSelect}
                tileClassName={({ date, view }) => {
                  if (
                    holidays.find(
                      (dat) =>
                        dat.date.iso === moment(date).format("YYYY-MM-DD")
                    )
                  ) {
                    return "highlight";
                  }
                }}
              />
              <table className="mt-5 text-start text-main-dark-blue wrap">
                {holidayArray.map((item) => (
                  <>
                    <tr>
                      <th className="text-[#6f48eb]">{item.date.iso}</th>
                    </tr>
                    <tr className="flex justify-center items-center border-2">
                      <td className="py-1 px-2">{item.name}</td>
                      <td className="border-l-2 pl-2">
                        {item.states !== "All"
                          ? item.states?.map((stat) => <>{stat.name},</>)
                          : "Alle Länder"}
                      </td>
                    </tr>
                  </>
                ))}
              </table>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Uberblick;