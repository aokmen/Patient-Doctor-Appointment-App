import React, { useState } from "react";
import { useSelector } from "react-redux";
import useDataCall from "../../../../hooks/useDataCall";

const DNotificationCard = ({ id, isReadDr, patientId, date, isCancelledPat, timeStart, complaints}) => {
  const [isOpened, setIsOpened] = useState(false);
  const { putData } = useDataCall();

  const handleNotificationRead = () => {
    setIsOpened(true);
    putData("appointments", id, {
      isReadDr: true,
    });
  };

  const { patients } = useSelector((state) => state.data);

  const patient = patients?.filter((pat) => {
    return pat.id === patientId;
  });
console.log("patpat:", patient);
  return (
    <div className="relative px-6 py-3 flex-auto ">
      {isOpened === false ? (
        <div className={` ${!isCancelledPat ? "bg-sky-200" : "bg-red-300"} dark:bg-main-dark-blue py-6 px-3 rounded-lg flex justify-between`}>
          <p className="dark:text-white">{ !isCancelledPat ? "Morgen haben Sie einen Termin." :"Ihr Termin wurde vom Patient abgesagt."}</p>
          <button
            className="font-bold uppercase text-sm rounded hover:cursor-pointer hover:scale-[1.1] outline-none focus:outline-none ease-linear transition-all duration-150 dark:text-main-light-blue"
            type="button"
            onClick={()=>setIsOpened(true)}
          >
            DETAIL
          </button>
          {isReadDr === false && (
            <div className="absolute h-5 w-5 rounded-full bg-green-600 left-[27.5rem] top-[0.5rem]"></div>
          )}
        </div>
      ) : (
        <div className={`${!isCancelledPat ? "bg-sky-100" : "bg-red-300"} dark:bg-sky-600 dark:text-main-light-blue p-2 rounded-lg`}>
          <p className="my-2 text-blueGray-500 text-lg leading-relaxed">
            Name von Patient/in:{" "}
            <span className="font-bold">
              {
                patient[0]?.firstName +
                " " +
                patient[0]?.lastName}
            </span>
          </p>
          <p className="my-2 text-blueGray-500 text-lg leading-relaxed">
          Symptome: <span className="font-bold">{complaints}</span>
          </p>
          <p className="my-2 text-blueGray-500 text-lg leading-relaxed">
            Datum: <span className="font-bold">{date}</span>
          </p>
          <p className="my-2 text-blueGray-500 text-lg leading-relaxed">
            Uhrzeit: <span className="font-bold">{timeStart}</span>
          </p>
          <p className="my-2 text-blueGray-500 text-lg leading-relaxed">
            Adresse:{" "}
            <span className="font-bold">
              {patient[0]?.street +
                " " +
                patient[0]?.zipCode +
                " " +
                (patient[0]?.cityId?.name || patient[0]?.cityName || patient[0]?.zipCode % 2=== 0 ? "Berlin" : "Köln")}
            </span>
          </p>
          <hr />

          <p className="my-4 text-blueGray-500">
         
          { !isCancelledPat ? "Sie können Ihre Termine auf den Seiten „Kalender“ und „Übersicht“ anzeigen, überprüfen und bearbeiten." :"Leider wurde Ihr Termin vom Patient abgesagt."}
          </p>
          <hr />
          <button
            className="bg-emerald-500 text-white mt-3 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleNotificationRead}
          >
            OKAY
          </button>
        </div>
      )}
    </div>
  );
};

export default DNotificationCard;