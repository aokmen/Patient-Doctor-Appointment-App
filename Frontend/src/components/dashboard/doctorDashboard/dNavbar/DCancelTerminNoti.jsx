import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useDataCall from "../../../../hooks/useDataCall";

const CancelTerminNoti = ({
  patientId,
  isRead,
  date,
  timeStart,
  cancelReason,
  notID,
}) => {
  const { putData } = useDataCall();
  const [isOpened, setIsOpened] = useState(false);

  const navigate = useNavigate();

  const handleNotificationOpen = () => {
    setIsOpened(true);
    putData("notifications", notID, {
      isRead: true
    });
  };
  const handleNotificationClose = () => {
    setIsOpened(false);
    navigate("/search");
  };

  const { patients } = useSelector((state) => state.data);

  const patient = patients?.filter((doct) => {
    return doct.id === patientId;
  });

  return (
    <div className="relative px-6 py-3 flex-auto max-w-[30rem] min-w-[30rem]">
      {isOpened === false ? (
        <div className="bg-red-200 py-6 px-3 rounded-lg flex justify-between">
          <p>Ihr Termin ist storniert worden.</p>
          <button
            className="font-bold uppercase text-sm rounded hover:cursor-pointer hover:scale-[1.1] outline-none focus:outline-none ease-linear transition-all duration-150"
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
        <div className="bg-red-100 p-2 rounded-lg">
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
            Name von Patient/Patientin:{" "}
            <span className="font-bold">
              {
                patient[0]?.firstName +
                " " +
                patient[0]?.lastName}
            </span>
          </p>
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
            Datum: <span className="font-bold">{date}</span>
          </p>
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
            Uhrzeit: <span className="font-bold">{timeStart}</span>
          </p>
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
            Stornierungsgrund: <span className="font-bold mb-10">{cancelReason}</span>
          </p>
          <hr />

          <p className="my-4 text-blueGray-500">
            Der Termin ist von der Patientin/dem Patient storniert worden.
          </p>
          <hr />
          <div className="flex justify-between">
            <button
              className="bg-emerald-500 text-white mt-3 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setIsOpened(false)}
            >
              OKAY
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CancelTerminNoti;