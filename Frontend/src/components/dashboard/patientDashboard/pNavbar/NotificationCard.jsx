import React, { useState } from "react";
import { useSelector } from "react-redux";
import useDataCall from "../../../../hooks/useDataCall";

const NotificationCard = ({ doctorId, isRead, date, timeStart, notID }) => {
  const [isOpened, setIsOpened] = useState(false);
  const { putData } = useDataCall();

  const handleNotificationOpen = () => {
    setIsOpened(true);
    putData("notifications", notID, {
      isRead: true,
    });
    
  };

  const { doctors } = useSelector((state) => state.data);

  const doctor = doctors?.data?.filter((doct) => {
    return doct.id === doctorId;
  });

  return (
    <div className="relative px-6 py-3 flex-auto max-w-[30rem] min-w-[30rem]">
      {isOpened === false ? (
        <div className="bg-sky-200 dark:bg-main-dark-blue py-6 px-3 rounded-lg flex justify-between">
          <p className="dark:text-white">Morgen haben Sie einen Termin.</p>
          <button
            className="font-bold uppercase text-sm rounded hover:cursor-pointer hover:scale-[1.1] outline-none focus:outline-none ease-linear transition-all duration-150 dark:text-main-light-blue"
            type="button"
            onClick={handleNotificationOpen}
          >
            DETAIL
          </button>
          {isRead === false && (
            <div className="absolute h-5 w-5 rounded-full bg-green-600 left-[27.5rem] top-[0.5rem]"></div>
          )}
        </div>
      ) : (
        <div className="bg-sky-100 dark:bg-sky-600 dark:text-main-light-blue p-2 rounded-lg">
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
            Name von Arzt/Ärztin:{" "}
            <span className="font-bold">
              {doctor[0]?.title +
                ". " +
                doctor[0]?.firstName +
                " " +
                doctor[0]?.lastName}
            </span>
          </p>
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
            Datum: <span className="font-bold">{date}</span>
          </p>
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
            Uhrzeit: <span className="font-bold">{timeStart}</span>
          </p>
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
            Adresse:{" "}
            <span className="font-bold">
              {doctor[0]?.street +
                " " +
                doctor[0]?.zipCode +
                " " +
                doctor[0]?.cityId?.name}
            </span>
          </p>
          <hr />

          <p className="my-4 text-blueGray-500">
            Bitte erscheinen Sie pünktlich.
          </p>
          <hr />
          <button
            className="bg-emerald-500 text-white mt-3 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setIsOpened(false)}
          >
            OKAY
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationCard;
