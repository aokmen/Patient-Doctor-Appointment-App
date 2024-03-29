import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import { useNavigate } from 'react-router-dom'
import useAuthCall from '../../../../hooks/useAuthCall'
import profil_image from "../../../../assets/profil_image.png"
import profil_info from "../../../../assets/profil_info.png"
import dashboard from "../../../../assets/dashboard.png"
import statistic from "../../../../assets/statistic.png"
import calender from "../../../../assets/calender.png"
import account from "../../../../assets/account.png"
import message from "../../../../assets/message.png"
import exit from "../../../../assets/logout.png"
import home from "../../../../assets/home.png"
import task from "../../../../assets/task.png"
import { useSelector } from 'react-redux'
import { toggleTheme } from "../../../../theme";




const Sidebar = () => {
  const { user, userId } = useSelector((state) => state.auth);
  const [themeMode, setThemeMode] = useState(localStorage.theme);

  const { logout } = useAuthCall();
  const navigate = useNavigate();

  const URL = process.env.REACT_APP_BASE_URL
  const fileImage = user.profilePic && `${URL}/img/${userId.slice(-15)}.jpg`
 

  const closed = () => {
    logout();
    navigate("/");
  };

  const handleThemeClick = () => {
    toggleTheme();
    if (themeMode === "light") setThemeMode("dark");
    else if (themeMode === "dark") setThemeMode("light");
  };

  useEffect(() => {
    document.documentElement.classList.add(themeMode);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="sidebar-main dark:bg-[#032c62]">
      <div className="topSlide">
        <div className="top">
          <div className="sidebar-avatar-img">
            <img src={fileImage || profil_image} alt="profil_image" />
          </div>{" "}
          <div className="sidebar-avatar-name">
            <h1>
              {user.firstName} {user.lastName}
            </h1>
          </div>
        </div>
      </div>
      <div className="middleSlide">
        <div className="mid middle1" onClick={() => navigate("/patient")}>
          <img src={dashboard} alt="dashboard" /> <h1>Überblick</h1>
        </div>
        <div
          className="mid middle2"
          onClick={() => navigate("/patient/profile")}
        >
          <img src={profil_info} alt="profil_info" /> <h1>Profil</h1>
        </div>
        <div
          className="mid middle3"
          onClick={() => navigate("/patient/my-calender")}
        >
          <img src={calender} alt="calender" /> <h1>Kalender</h1>
        </div>
        <div
          className="mid middle4"
          onClick={() => navigate("/patient/message")}
        >
          <img src={message} alt="message" /> <h1>Nachrichten</h1>
        </div>
        <div className="mid middle5" onClick={() => navigate("/patient/task")}>
          <img src={task} alt="task" /> <h1>Aufgaben</h1>
        </div>
        <div
          className="mid middle6"
          onClick={() => navigate("/patient/statistic")}
        >
          <img src={statistic} alt="statistic" /> <h1>Statistik</h1>
        </div>
        <div className="mt-20 ml-20">
          <button
            onClick={() => handleThemeClick()}
            className="text-white bg-main-turquoisie hover:bg-main-blue dark:bg-yellow-300  px-6 py-2 rounded focus:outline-none duration-200"
            id="theme-toggle-button"
          >
            {themeMode === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-yellow-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-main-dark-navbar-bg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="bottomSlide">
        <div
          className="bot bottom1"
          onClick={() => navigate("/patient/account")}
        >
          <img src={account} alt="account" /> <h1>Mein Konto</h1>
        </div>
        <div className="bot bottom2" onClick={() => closed()}>
          <img src={exit} alt="logout" /> <h1>Ausloggen</h1>
        </div>
        <div className="bot bottom3" onClick={() => navigate("/")}>
          <img src={home} alt="home" /> <h1>Home</h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar