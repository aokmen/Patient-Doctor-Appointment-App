import React, { useEffect, useState } from "react";
import "./pNavbar.css";
import setting from "../../../../assets/setting2.png";
import letter from "../../../../assets/letter.png";
import notification2 from "../../../../assets/notification2.png";
import help from "../../../../assets/help.png";
import logo from "../../../../assets/logo3.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useDataCall from "../../../../hooks/useDataCall";
import NotificationModal from "./NotificationModal";


const PNavbar = () => {
  const { doctors, messages} = useSelector((state) => state.data);
  const { getSingleData, getData } = useDataCall();
  const { userId } = useSelector((state) => state.auth);
  const [notificationNumber, setNotificationNumber] = useState(0)
  let notificationsArray = []
  const [showModal, setShowModal] = React.useState(false);
  

  useEffect(() => {
    getSingleData("appointments", userId);
    getData("notifications");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  const navigate = useNavigate();

  let findUser = [];

  let messageArray = [];

  messages.forEach((item) => {
    messageArray.push(item.senderUserId);
    messageArray.push(item.receiverUserId);
  });
  const uniqueIds = new Set(messageArray);

  const uniqueIdsArray = Array.from(uniqueIds); // Set nesnesini bir diziye dönüştür

  uniqueIdsArray.forEach((element) => {
    const users = doctors?.data?.filter(
      (item) => item.id === element && !item.isChecked
    );
    users && findUser.push(...users);
  });

  return (
    <div className="d-header">
      <img src={logo} alt="logo" />
      <div className="d-navbar-icons ">
        <div
          onClick={() => navigate("message")}
          className=" relative h-[35px] w-[35px] cursor-pointer"
        >
          <span
            className={` absolute bottom-4 left-[-12px] ${
              findUser.length === 0 ? "hidden" : ""
            }`}
          >
            {findUser.length}
          </span>
          <img
            src={letter}
            alt="notification2"
            className="absolute top-[6.5px]"
          />
        </div>

        <div
          onClick={() => setShowModal(!showModal)}
          className=" relative h-[35px] w-[35px] cursor-pointer"
        >
          <span
            className={` absolute dark:text-white bottom-4 left-[-12px] ${
              notificationNumber === 0 ? "hidden" : ""
            }`}
          >
            {notificationNumber}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 absolute top-[2.5px] dark:text-main-light-blue"
            alt="notification2"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 dark:text-main-light-blue"
          alt="help"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 dark:text-main-light-blue"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
      <NotificationModal
        showModal={showModal}
        setShowModal={setShowModal}
        setNotificationNumber={setNotificationNumber}
        notificationsArray={notificationsArray}
      />
    </div>
  );
};

export default PNavbar;
