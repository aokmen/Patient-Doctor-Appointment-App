import React, { useState } from 'react'
import useDataCall from '../../../../hooks/useDataCall';
import EventsModal from './EventsModal';
import { useSelector } from 'react-redux';

const Events = ({ selectedDate}) => {
  const { delData } = useDataCall();

  const [showModal, setShowModal] = React.useState(false);
  const { userType, userId } = useSelector((state) => state.auth);
  const { events } = useSelector((state) => state.data);
 
  console.log(events)

  let todayEventsOfThisUser = []

  if (userType === "doctor") {

    todayEventsOfThisUser = events?.filter((ev) => {
        return ev.day === selectedDate;
      });
    
  } else if (userType === "patient") {

    todayEventsOfThisUser = events?.filter((ev) => {
        return ev.day === selectedDate;
      });
  }
  
  const [info, setInfo] = useState({
    day: "",
    hour: "",
    note: "",
  });

  const handleEventDelete = (id) => {
    delData("events", id);
  };

  const handleEventEdit = (eventInfo) => {
    setInfo({ ...eventInfo });
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
    if (userType === "doctor") {
      setInfo({
        doctorId: userId,
        day: "",
        hour: "",
        note: "",
      });
    } else if (userType === "patient") {
      setInfo({
        patientId: userId,
        day: "",
        hour: "",
        note: "",
      });
    }
  };
  
  return (
    <div className="flex flex-col justify-center items-center overflow-scroll px-2">
      {todayEventsOfThisUser?.length ? (
        <>
          <table className="w-[20vw] text-center mx-auto">
            <tbody>
              <tr className="text-center text-xl font-bold py-3">
                <td className="text-center" colSpan="3">
                  {selectedDate}(Gewähltes datum)
                </td>
              </tr>
              {todayEventsOfThisUser?.map((eve, index) => {
                return (
                  <tr key={index}>
                    <td className="border-2 border-[#38638D]">{eve.hour}</td>
                    <td className="border-2 border-[#38638D]">{eve.note}</td>
                    <td className="border-2 border-[#38638D] flex justify-evenly items-center">
                      <button
                        onClick={() => handleEventDelete(eve.id)}
                        className="hover:scale-[1.05] duration-150"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-red-600"
                        >
                          <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                          <path
                            fillRule="evenodd"
                            d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleEventEdit(eve)}
                        className="hover:scale-[1.05] duration-150"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-green-600"
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table className="mt-14 text-center w-[25vw] mx-auto">
            <tbody>
              <tr className="text-center text-xl font-bold py-3">
                <td colSpan="4">Alle Ereignisse</td>
              </tr>
              {events?.map((eve, index) => {
                return (
                  <tr key={index}>
                    <td className="border-2 border-[#38638D]">{eve.day}</td>
                    <td className="border-2 border-[#38638D]">{eve.hour}</td>
                    <td className="border-2 border-[#38638D]">{eve.note}</td>
                    <td className="border-2 border-[#38638D] flex justify-evenly items-center">
                      <button
                        onClick={() => handleEventDelete(eve.id)}
                        className="hover:scale-[1.05] duration-150"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-red-600"
                        >
                          <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                          <path
                            fillRule="evenodd"
                            d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleEventEdit(eve)}
                        className="hover:scale-[1.05] duration-150"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-green-600"
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <table className="w-[40vw] ">
            <tbody>
              <tr className="text-center text-xl font-bold py-3">
                <td>{selectedDate}(Gewähltes datum)</td>
              </tr>
              <tr className="text-center text-lg font-bold py-3 text-red-600">
                <td>Sie haben an diesem Datum keine Ereignisse.</td>
              </tr>
            </tbody>
          </table>
          <table className="mt-14 w-[28vw] text-center mx-auto">
            <tbody>
              <tr className="text-center text-lg font-bold py-3">
                <td colSpan="4">Alle Ereignisse</td>
              </tr>
              {events?.map((eve, index) => {
                return (
                  <tr key={index}>
                    <td className="border-2 border-[#38638D]">{eve.day}</td>
                    <td className="border-2 border-[#38638D]">{eve.hour}</td>
                    <td className="border-2 border-[#38638D]">{eve.note}</td>
                    <td className="border-2 border-[#38638D] flex justify-evenly items-center">
                      <button
                        onClick={() => handleEventDelete(eve.id)}
                        className="hover:scale-[1.05] duration-150"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-red-600"
                        >
                          <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                          <path
                            fillRule="evenodd"
                            d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleEventEdit(eve)}
                        className="hover:scale-[1.05] duration-150"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-green-600"
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
      <button
        onClick={() => setShowModal(true)}
        className="mt-8 py-3 px-6 bg-emerald-700 text-white rounded-lg w-[15rem] hover:bg-emerald-600 hover:scale-[1.05] duration-150 text-lg"
      >
        EVENT HINFÜGEN
      </button>
      <EventsModal
        showModal={showModal}
        handleClose={handleClose}
        setShowModal={setShowModal}
        userId={userId}
        userType={userType}
        info={info}
        setInfo={setInfo}
      />
    </div>
  );
};

export default Events