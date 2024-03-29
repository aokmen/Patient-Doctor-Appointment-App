/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NotificationCard from "./NotificationCard";
import CancelTerminNoti from "./CancelTerminNoti";
import useDataCall from "../../../../hooks/useDataCall";

export default function NotificationModal({
  showModal,
  setShowModal,
  setNotificationNumber,
  notificationsArray,
}) {
  const { appointments } = useSelector((state) => state.data);
  const [appointmentsWithNotification, setAppointmentsWithNotification] =
    useState([]);
  const [byDoctorcancelledAppointments, setByDoctorCancelledAppointments] =
    useState([]);

  const { notifications } = useSelector((state) => state.data);
  const { userId } = useSelector((state) => state.auth);

  const { getData, postData } = useDataCall();

  console.log(notifications);

  useEffect(() => {
    const today = new Date();

    const appointmentsOneDayAway = appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.date);
      const oneDayBefore = new Date(appointment.date);
      oneDayBefore.setDate(oneDayBefore.getDate() - 1);
      return (
        appointmentDate.getDate() === today.getDate() + 1 &&
        appointmentDate.getMonth() === today.getMonth() &&
        appointmentDate.getFullYear() === today.getFullYear()
      );
    });
    //console.log(appointmentsOneDayAway);

    const cancelledAppo = appointments.filter((appo) => {
      return appo.isCancelled === true && appo.cancelUserType === "doctor";
    });
    setAppointmentsWithNotification(appointmentsOneDayAway);
    setByDoctorCancelledAppointments(cancelledAppo);

    setNotificationNumber(0);
    for (let i = 0; i < notifications?.length; i++) {
      if (notifications[i].isRead === false)
        setNotificationNumber((prevCount) => (prevCount += 1));
    }

    addNewItems(notificationsArray, [
      ...appointmentsOneDayAway,
      ...cancelledAppo,
    ]);

    getData("doctors");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointments, setNotificationNumber, notifications]);

  //getUnequalElements(notifications, notificationsArray);

  //addNewItems(notificationsArray, appointmentsWithNotification);

  useEffect(() => {
    
  
  
  }, [])
  
  async function getUnequalElements(notificationsArray) {
    console.log(notifications)
    const notificationIDs = await notifications?.map((item) => item?.appo?.id);
    console.log(notificationIDs);

    const appoIDs = await notificationsArray?.map((item) => item?.id);
    console.log(appoIDs);

    /* appoIDs.forEach(async(item, i) => {
      if (!notificationIDs.some((element) => element === item)) {
        if (notificationsArray[i]?.cancelUserType === "doctor") {
            await postData("notifications", {
              userId: userId,
              notificationType: "byDoctorCancelledAppointment",
              appo: item,
              isRead: false,
            });
          } else {
            await postData("notifications", {
              userId: userId,
              notificationType: "incomingAppointment",
              appo: item,
              isRead: false,
            });
          }
      }
    }) */
    if (appoIDs.length) {
      for (let i = 0; i < appoIDs.length; i++) {
        let foundEqual = false;

        for (let j = 0; j < notificationIDs.length; j++) {
          console.log("ikinci for")
          if (appoIDs[i] === notificationIDs[j]) {
            foundEqual = true;
            break;
          }
        }
        console.log(foundEqual);
        if (!foundEqual) {
          if (notificationsArray[i]?.cancelUserType === "doctor") {
            await postData("notifications", {
              userId: userId,
              notificationType: "byDoctorCancelledAppointment",
              appo: appoIDs[i],
              isRead: false,
            });
          } else {
            await postData("notifications", {
              userId: userId,
              notificationType: "incomingAppointment",
              appo: appoIDs[i],
              isRead: false,
            });
          }
        }
      }
    } else {
      return [];
    }
  }

  //console.log(getUnequalElements(notifications, notificationsArray));

  function addNewItems(notificationsArray, newItemArray) {
    //let idMap = new Map(notificationsArray.map((item) => [item.id, item]));
    //console.log(idMap);
    console.log(newItemArray)
    console.log(notificationsArray.length)

    newItemArray.forEach((newItem) => {
      console.log(notificationsArray.some((item) => item.id === newItem.id));
      if (!notificationsArray.some((item) => item.id === newItem.id)){
        notificationsArray.push(newItem);

        //idMap.set(newItem.id, newItem);
      }
    });

    console.log(notificationsArray);
    getUnequalElements(notificationsArray);
    return notificationsArray;
  }

  console.log(notificationsArray);

  console.log(notifications);
  

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center overflow-x-hidden max-h-[90vh] overflow-y-scroll ml-[66rem] mt-12 fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-main-light-blue2 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Benachrichtigungen:
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                {
                  // eslint-disable-next-line array-callback-return
                  notifications?.map((note) => {
                    if (note.notificationType === "incomingAppointment") {
                      return (
                        <NotificationCard
                          key={note.id}
                          {...note.appo}
                          isRead={note.isRead}
                          notID={note.id}
                        />
                      );
                    } else if (
                      note.notificationType === "byDoctorCancelledAppointment"
                    ) {
                      return (
                        <CancelTerminNoti
                          key={note.id}
                          {...note.appo}
                          isRead={note.isRead}
                          notID={note.id}
                        />
                      );
                    }
                  })
                }

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Schließ Benachrichtigungen
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