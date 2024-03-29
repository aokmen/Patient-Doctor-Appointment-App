import React, { useEffect } from 'react'
import UserPNG from '../../../../assets/user.png'
import { useSelector } from 'react-redux'
import useDataCall from '../../../../hooks/useDataCall'
import CancelAppoModal from './CancelAppoModal'

const TerminInfo = ({termin, isOldAppointmentsShown}) => {

    const { doctors } = useSelector((state) => state.data)
    const {getData, putData} = useDataCall()

  
    useEffect(() => {
      getData("doctors")
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let doctorInfo = []
    if(doctors && doctors.length !== 0){
        doctorInfo = doctors.data?.filter((doct) => {return doct.id === termin.doctorId})
        // console.log(doctorInfo)
    }

    //const termin = todayAppsThisDoctor.filter((item) => item.patientId === patient)

  const [showModal, setShowModal] = React.useState(false);
  
  const handleAppointmentDelete = () => {
    putData("appointments", termin.id, {
      isDeleted: true
    })
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {termin.date ? (
        <>
          <img
            src={doctorInfo[0]?.profilePic || UserPNG}
            alt="termin"
            className="w-[7rem] h-[7rem] mt-3"
          />
          <div className="flex flex-col justify-center items-center dark:text-main-light-blue">
            <h1 className="text-xl mb-2">Datum: {termin?.date}</h1>
            <h1 className="text-xl mb-2">Uhrzeit: {termin?.timeStart}</h1>
            <h1 className="text-xl mb-2">
              Name der Arzt/in: {doctorInfo[0]?.title}.{" "}
              {doctorInfo[0]?.firstName} {doctorInfo[0]?.lastName}
            </h1>
            <h1 className="text-xl mb-5">Complaints: {termin?.complaints}</h1>

            <div className="flex justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-2 dark:text-main-light-blue"
                alt="locationIcon"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="text-lg">
                {doctorInfo[0]?.street}, {doctorInfo[0]?.zipCode}{" "}
              </h1>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2 dark:text-main-light-blue"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="text-lg">{doctorInfo[0]?.phone} </h1>
            </div>
            {termin.isCancelled && (
              <h1 className="absolute text-5xl text-red-600 dark:text-red-500 font-bold opacity-50">
                STORNIERT
              </h1>
            )}
          </div>
          {termin.isCancelled ? (
            <div>
              {termin.cancelUserType === "doctor" ? (
                <h1 className="text-red-600 dark:text-red-300 mt-10 text-lg font-bold">
                  Termin ist von dem Arzt/ der Ärztin storniert worden.
                </h1>
              ) : termin.cancelUserType === "admin" ? (
                <h1 className="text-red-600 dark:text-red-300 mt-10 text-lg font-bold">
                  Termin ist von Website Admin storniert worden.
                </h1>
              ) : (
                <h1 className="text-red-600 dark:text-red-300 mt-10 text-lg font-bold">
                  Termin ist von Ihnen storniert worden.
                </h1>
              )}
              <h1 className="text-red-600 dark:text-red-300">
                Stornierungsgrund: {termin?.cancelReason}
              </h1>
              <div className="flex justify-evenly">
                <button className="mt-10 bg-sky-700 dark:bg-sky-600 text-white text-lg py-3 px-4 rounded-xl hover:bg-sky-600 dark:hover:bg-sky-500 duration-150">
                  SEND NACHRICHT
                </button>

                <button
                  onClick={() => handleAppointmentDelete()}
                  className="mt-10 bg-red-600 text-white text-lg py-3 px-4 rounded-xl hover:bg-red-700 duration-150"
                >
                  LÖSCHEN
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-evenly items-center w-[20vw] ml-3">
              <button className="mt-10 bg-sky-700 dark:bg-sky-600 text-white text-lg py-3 px-4 rounded-xl hover:bg-sky-600 dark:hover:bg-sky-500 duration-150">
                SEND NACHRICHT
              </button>
              {isOldAppointmentsShown ? (
                <button
                  onClick={() => handleAppointmentDelete()}
                  className="mt-10 bg-red-600 text-white text-lg py-3 px-4 rounded-xl hover:bg-red-700 duration-150"
                >
                  LÖSCHEN
                </button>
              ) : (
                <button
                  onClick={() => setShowModal(true)}
                  className="mt-10 bg-red-600 text-white text-lg py-3 px-4 rounded-xl hover:bg-red-700 duration-150"
                >
                  STORNIEREN
                </button>
              )}
            </div>
          )}
          <CancelAppoModal
            showModal={showModal}
            setShowModal={setShowModal}
            termin={termin}
            doctorInfo={doctorInfo}
          />
        </>
      ) : (
        <div className="w-[25rem] px-4 text-center">
          <h1 className="mt-20 mx-4 text-2xl dark:text-main-light-blue">
            Bitte klicken Sie auf einen Termin links um seine Detail zu sehen.
          </h1>
        </div>
      )}
    </div>
  );
}

export default TerminInfo