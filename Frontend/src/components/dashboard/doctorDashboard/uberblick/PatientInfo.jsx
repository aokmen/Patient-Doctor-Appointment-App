import React from "react";
import UserPNG from "../../../../assets/user.png";
import locationIcon from "../../../../assets/locationIcon.png";
import phoneIcon from "../../../../assets/phone.png";
import DeleteAppoModal from "../kalender/DeleteAppoModal";

const PatientInfo = ({ patient, todayAppsThisDoctor }) => {
  const termin = todayAppsThisDoctor.filter(
    (item) => item.patientId === patient
  );
  //console.log(termin)

  const URL = process.env.REACT_APP_BASE_URL;
  const fileImage =
    patient?.profilePic && `${URL}/img/${patient.id.slice(-15)}.jpg`;

  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      {patient ? (
        <>
          <img
            src={fileImage || UserPNG}
            alt="Patient"
            className="w-[7rem] h-[7rem] mt-3"
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl mb-5 text-main-dark-blue">
              {patient?.firstName} {patient?.lastName}
            </h1>
            <h1 className="text-xl mb-2">Termin: {termin[0]?.timeStart}</h1>
            <h1 className="text-xl mb-5">
              Complaints: {termin[0]?.complaints}
            </h1>

            <div className="flex justify-start">
              <img
                src={locationIcon}
                className="mr-2 w-4 h-6"
                alt="locationIcon"
              />
              <h1 className="text-lg">
                {patient.street}, {patient.zipCode}{" "}
              </h1>
            </div>
            <div className="flex">
              <img src={phoneIcon} className="mr-1 w-5 h-5" alt="phoneIcon" />
              <h1 className="text-lg">{patient.phone} </h1>
            </div>
            {termin[0]?.isCancelled && (
              <h1 className="absolute text-5xl text-red-600 font-bold opacity-50">
                STORNIERT
              </h1>
            )}
          </div>
          {termin[0]?.isCancelled ? (
            <div>
              {termin[0]?.cancelUserType === "patient" ? (
                <h1 className="text-red-600 mt-10 text-lg font-bold">
                  Termin ist von dem Patient/der Patientin storniert worden.
                </h1>
              ) : termin[0]?.cancelUserType === "admin" ? (
                <h1 className="text-red-600 mt-10 text-lg font-bold">
                  Termin ist von Website Admin storniert worden.
                </h1>
              ) : (
                <h1 className="text-red-600 mt-10 text-lg font-bold">
                  Termin ist von Ihnen storniert worden.
                </h1>
              )}
              <h1 className="text-red-600">
                Stornierungsgrund: {termin[0]?.cancelReason}
              </h1>
            </div>
          ) : (
            <div className="flex justify-evenly items-center w-[20vw] ml-3">
              <button className="mt-10 bg-sky-600 text-white text-lg py-3 px-4 rounded-xl hover:bg-sky-700 duration-150">
                SEND NACHRICHT
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="mt-10 bg-red-600 text-white text-lg py-3 px-4 rounded-xl hover:bg-red-700 duration-150"
              >
                STORNIEREN
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="w-[30rem] text-center">
          <h1 className="mt-20 text-2xl">
            Dieser Termin ist frei. Bitte klicken Sie auf eine Patient-Name
            links um ihre/seine Info zu sehen.
          </h1>
        </div>
      )}
      <DeleteAppoModal
        showModal={showModal}
        setShowModal={setShowModal}
        termin={termin}
      />
    </div>
  );
};

export default PatientInfo;
