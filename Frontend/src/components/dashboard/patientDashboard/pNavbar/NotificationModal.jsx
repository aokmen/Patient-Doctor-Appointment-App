
import React from "react";
import NotificationCard from "./NotificationCard";

export default function NotificationModal({
  showModal,
  setShowModal,
  notifications,

}) {

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 flex pl-[66rem] mt-[-10rem] items-center justify-center bg-black bg-opacity-75 z-50 outline-none focus:outline-none">
            <div className="relative bg-white rounded-lg w-full max-w-md p-6 overflow-y-scroll h-[40rem]">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="text-xl font-semibold">Benachrichtigungen</h3> 
                <button
                  className="text-gray-500 hover:text-gray-800"
                  onClick={() => setShowModal(false)}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-4">
                {notifications?.map((notification) => (
                  <div key={notification?.id} className="mb-4">
                    <NotificationCard
                         {...notification}
                        />
                    {/* <p>{notification?.complaints}</p> */}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => setShowModal(false)}
                >
                  Schließen
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
