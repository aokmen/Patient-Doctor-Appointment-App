import React from 'react'
import useDataCall from '../../../../hooks/useDataCall'
import { useSelector } from 'react-redux';

export default function Modal({ showModal, info, setInfo, handleClose }) {
  const { postData, putData } = useDataCall();
  const { userId, userType } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setInfo({
      ...info,
      userId: userId,
      userType: userType,
      [e.target.name]: e.target.value,
    });
    
  };
  //console.log(info)

  const handleEventAdd = (e) => {
    e.preventDefault();
    if (info.id) {
      putData("events", info.id, info);
    } else {
      postData("events", info);
    }
    handleClose();
  };
  
  const hours = [
    "00.00",
    "00.15",
    "00.30",
    "00.45",
    "01.00",
    "01.15",
    "01.30",
    "01.45",
    "02.00",
    "02.15",
    "02.30",
    "02.45",
    "03.00",
    "03.15",
    "03.30",
    "03.45",
    "04.00",
    "04.15",
    "04.30",
    "04.45",
    "05.00",
    "05.15",
    "05.30",
    "05.45",
    "06.00",
    "06.15",
    "06.30",
    "06.45",
    "07.00",
    "07.15",
    "07.30",
    "07.45",
    "08.00",
    "08.15",
    "08.30",
    "08.45",
    "09.00",
    "09.15",
    "09.30",
    "09.45",
    "10.00",
    "10.15",
    "10.30",
    "10.45",
    "11.00",
    "11.15",
    "11.30",
    "11.45",
    "12.00",
    "12.15",
    "12.30",
    "12.45",
    "13.00",
    "13.15",
    "13.30",
    "13.45",
    "14.00",
    "14.15",
    "14.30",
    "14.45",
    "15.00",
    "15.15",
    "15.30",
    "15.45",
    "16.00",
    "16.15",
    "16.30",
    "16.45",
    "17.00",
    "17.15",
    "17.30",
    "17.45",
    "18.00",
    "18.15",
    "18.30",
    "18.45",
    "19.00",
    "19.15",
    "19.30",
    "19.45",
    "20.00",
    "20.15",
    "20.30",
    "20.45",
    "21.00",
    "21.15",
    "21.30",
    "21.45",
    "22.00",
    "22.15",
    "22.30",
    "22.45",
    "23.00",
    "23.15",
    "23.30",
    "23.45",
  ];

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-slate-400 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  {info.day ? (
                    <h3 className="text-3xl font-semibold">
                      Event Bearbeiten:
                    </h3>
                  ) : (
                    <h3 className="text-3xl font-semibold">
                      Event Hinzufügen:
                    </h3>
                  )}

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => handleClose()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="border-2 flex justify-evenly items-center  rounded-lg">
                    <label
                      className="text-xl font-bold mr-16"
                      htmlFor="eventHour"
                    >
                      Datum:{" "}
                    </label>
                    <input
                      name="day"
                      value={info?.day}
                      onChange={handleChange}
                      id="eventHour"
                      placeholder="dd.mm.yyy"
                      className="outline-none my-4 text-blueGray-500 text-lg leading-relaxed dark:bg-slate-400"
                      type="date"
                    ></input>
                  </div>
                  <div className="border-2 flex justify-evenly items-center mt-3  rounded-lg">
                    <label
                      className="text-xl font-bold mr-28"
                      htmlFor="eventDate"
                    >
                      Uhrzeit:{" "}
                    </label>
                    <select
                      name="hour"
                      value={info?.hour}
                      onChange={handleChange}
                      id="eventDate"
                      placeholder="dd.mm.yyy"
                      className="outline-none my-4 pr-8 text-blueGray-500 text-lg leading-relaxed dark:bg-slate-400"
                      type="date"
                    >
                      {hours.map((hour, index) => {
                        return (
                          <option key={index} value={hour}>
                            {hour}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="border-2 flex justify-evenly items-center mt-3  rounded-lg">
                    <label className="text-xl font-bold" htmlFor="eventName">
                      Event:{" "}
                    </label>
                    <input
                      name="note"
                      value={info?.note}
                      onChange={handleChange}
                      id="eventName"
                      placeholder="Event Name"
                      className="outline-none my-4 pr-8 text-blueGray-500 text-lg leading-relaxed dark:bg-slate-400"
                      type="text"
                    ></input>
                  </div>

                  <hr />
                  <p className="mt-4 text-blueGray-500 text-lg leading-relaxed">
                    Sie können das Event jederzeit löschen.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleClose()}
                  >
                    Close
                  </button>
                  {info.day ? (
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleEventAdd}
                    >
                      BEARBEITEN
                    </button>
                  ) : (
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleEventAdd}
                    >
                      SENDEN
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}