import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/Logo2.png";
import doctor from "../../assets/doctor.png";
import patient from "../../assets/patient.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthCall from "../../hooks/useAuthCall";
import profilImage from "../../assets/profil_image2.png"
import "./header.css";
import { toggleTheme } from "../../theme";

const Header = () => {
    const { userId,user } = useSelector((state) => state.auth);
    const { logout } = useAuthCall();
    const navigate = useNavigate();
    const [state, setState] = useState(false)
    const [themeMode, setThemeMode] = useState(localStorage.theme)
    const URL = process.env.REACT_APP_BASE_URL
    let fileImage = profilImage
    const closed = () => {
        logout();
        navigate("/");
    };

    const handleThemeClick = () => {
        toggleTheme()
        if (themeMode === "light") setThemeMode("dark");
        else if (themeMode === "dark") setThemeMode("light");
    }

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Home", onClick: () => navigate("/") },
        { title: "Service", onClick: () => navigate("/services") },
        { title: "Über uns", onClick: () => navigate("/about") },
        { title: "Kontakt", onClick: () => navigate("/contact") }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])

    const ProfileDropDown = (props) => {

        const [state, setState] = useState(false)
        const profileRef = useRef()

        const navigation = [
            { title: "Mein Panel", onClick: () => navigate("/patient") },
            { title: "Einstellung", onClick: () => navigate("/patient/profile") },
            { title: "Ausloggen", onClick: closed },
        ]

        fileImage = (user.profilePic || user.avatar) && `${URL}/img/${userId.slice(-15)}.jpg` 
        useEffect(() => {
            const handleDropDown = (e) => {
                if (profileRef.current && !profileRef.current.contains(e.target)) setState(false)
            }
            document.addEventListener('click', handleDropDown)
        }, [])

        return (
          <div className={`relative ${props.class}`}>
            <div className="flex items-center mt-[-5px]">
              <button
                ref={profileRef}
                className="w-20 h-20 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:bg-main-light2-blue"
                onClick={() => setState(!state)}
              >
                <img
                  src={fileImage}
                  className="w-full h-full object-cover rounded-full "
                  alt="fileImage"
                />
              </button>
              <div className="lg:hidden">
                {/* <span className="block">Micheal John</span>
                        <span className="block text-sm text-gray-500">john@gmail.com</span> */}
              </div>
            </div>

            <ul
              className={`bg-white top-12 w-full p-3 left-[-20px] mt-100 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-[120] lg:shadow-md lg:space-y-0 lg:mt-0 md:absolute md:border md:rounded-md md:text-sm md:w-[120px] md:shadow-md md:space-y-0 md:mt-0 ${
                state ? "" : "lg:hidden || md:hidden"
              }`}
            >
              {navigation.map((item, i) => (
                <li key={i}>
                  <button
                    className="block text-gray-600 hover:bg-main-dark-blue hover:text-white w-full lg:p-2.5 "
                    onClick={item.onClick}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
    }
    return (
      <nav
        className={`flex-no-wrap  relative  w-full text-lg ${
          state
            ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
            : ""
        }`}
      >
        <div className="fixed-navbar bg-main-dark-blue">
          <div className="    gap-x-14 items-center max-w-screen-2xl mx-auto px-4 md:flex md:px-8  ">
            <div className="flex items-center justify-between py-2 lg:block md:hidden ">
              <button onClick={() => navigate("/")}>
                <img
                  src={logo}
                  alt="Float UI logo"
                  className="mt-4 h-10 max-w-screen-2xl sm:mr-[-50px] "
                />
              </button>
              <div className="md:hidden">
                <button
                  className="menu-btn text-slate-50 hover:text-gray-800 "
                  onClick={() => setState(!state)}
                >
                  {state ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div
              className={`flex-1 flex  justify-space items-center mt-8 md:mt-4 md:flex ${
                state ? "block" : "hidden"
              }`}
            >
              <ul className="justify-center mb-4 mx-auto items-center g-main-dark-blue space-y-6 lg:gap-10  md:gap-0 md:flex md:space-x-4 md:space-y-0  md:border-0 md:mt-0 ">
                {navigation.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className="text-slate-50 hover:text-gray-900 text-xl "
                    >
                      <button className="block" onClick={item.onClick}>
                        {item.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <button
                onClick={() => handleThemeClick()}
                className="text-white bg-blue-800 dark:bg-yellow-300  px-3 py-2 rounded focus:outline-none"
                id="theme-toggle-button"
              >
                {themeMode === "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
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
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                )}
              </button>
              <div className="flex-2 gap-x-6 items-center mt-6 ml-4 space-y-6 md:flex md:space-y-0 md:mt-0  ">
                <div className="relative flex items-center">
                  {!userId ? (
                    <div className="button-containers flex gap-1 relative ">
                      <button
                        className="bg-main-light-blue hover:bg-main-light-blue2 w-[126px] h-[70px] rounded-l-3xl flex  pt-5 justify-center items-center "
                        onClick={() => navigate("/login")}
                      >
                        <img src={patient} alt="patient" className="mb-5" />
                        <p className="pt-3 pl-3 text-main-dark-blue">
                          {" "}
                          Patient{" "}
                        </p>
                      </button>

                      <div className="absolute hover:cursor-default bg-main-dark-blue text-white font-light text-xl rounded-b-xl p-2 px-6 z-10 top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {" "}
                        Einloggen{" "}
                      </div>

                      <button
                        className="bg-main-light-blue hover:bg-main-light-blue2 w-[126px] h-[70px] rounded-r-3xl flex pt-5 items-center justify-center"
                        onClick={() => navigate("/login")}
                      >
                        <p className=" pt-3 pr-4 text-main-dark-blue"> Arzt </p>
                        <img src={doctor} alt="patient" className="mb-5" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <ProfileDropDown className=" lg:block" />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Header;
