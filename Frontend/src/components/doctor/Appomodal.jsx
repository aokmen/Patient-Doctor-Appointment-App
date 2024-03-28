import React, { useState } from "react";
import useDataCall from "../../hooks/useDataCall";

export default function Modal({showModal, setShowModal, date, doctorName, uhrZeit, address, patientName, appoId, patientId}) {

  const { putData } = useDataCall()

  const [symptoms, setSymptoms] = useState("")
  

  const handleAppointmentGet = () => {
    setShowModal(false)
    putData("appointments", appoId, {
      patientId: patientId,
      complaints: symptoms
    })
    setSymptoms("")
    window.location.reload();
  }
  
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Termin bestätigen:</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Name von Arzt/Ärztin:{" "}
                    <span className="font-bold">{doctorName}</span>
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Datum: <span className="font-bold">{date}</span>
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Uhrzeit: <span className="font-bold">{uhrZeit}</span>
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Adresse: <span className="font-bold">{address}</span>
                  </p>
                  <hr />
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Name der Patientin/des Patients:{" "}
                    <span className="font-bold">{patientName}</span>
                  </p>
                  <hr />
                  <div className="border-2 flex justify-start pl-3 items-center mt-3 rounded-lg text-lg">
                    <label htmlFor="symptomeInput">Symptome: </label>
                    <input
                      id="symptomeInput"
                      className="outline-none my-4 ml-2 text-blueGray-500 text-lg leading-relaxed w-full"
                      onChange={(e) => setSymptoms(e.target.value)}
                    />
                  </div>

                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Sie können den Termin jederzeit absagen. Wenn Sie diesen
                    Termin bestätigen, erhalten Sie eine Bestätigungs-E-Mail.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-main-dark-blue background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-main-dark-blue text-white active:text-main-light-blue2 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleAppointmentGet}
                  >
                    BESTÄTIGE DEN TERMIN
                  </button>
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