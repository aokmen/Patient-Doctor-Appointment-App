import React, { useState } from "react";
import useDataCall from "../../../../hooks/useDataCall";
import { useSelector } from "react-redux";


export default function DeleteAppoModal({setShowModal, showModal, termin, doctorInfo}) {

    const {putData} = useDataCall()
    
    const [cancelReason, setCancelReason] = useState("")

    const { userId } = useSelector((state) => state.auth)

    const handleTerminCancel = () => {
        setShowModal(false)
        putData("appointments", termin.id, {
          isCancelledPat: true,
            isCancelled:true,
            cancelUserId: userId,
            cancelUserType: "patient",
            cancelReason: cancelReason
        })
        window.location.reload();
    }
  
  return (
    <>
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    

                  <h3 className="text-3xl font-semibold mb-3">
                    den Termin Stornieren 
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-red-600">
                        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                    </svg>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">Name von Arzt/in: <span className="font-bold">{doctorInfo[0]?.title}. {doctorInfo[0]?.firstName} {doctorInfo[0]?.lastName}</span></p>
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">Datum: <span className="font-bold">{termin?.date}</span></p>
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">Uhrzeit: <span className="font-bold">{termin?.timeStart}</span></p>
                    <div className="relative">
                        <textarea onChange={(e)=>setCancelReason(e.target.value)} type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Stornierungsgrund</label>
                    </div>
                    
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Verlassen
                  </button>
                  <button
                    className="bg-red-600 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleTerminCancel()}
                  >
                    STORNIERE DEN TERMIN
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