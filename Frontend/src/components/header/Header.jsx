import React, { useState } from "react";
import logo from "../../assets/logo.png";
import doctor from "../../assets/doctor.png";
import patient from "../../assets/patient.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthCall from "../../hooks/useAuthCall";
import "./header.css";

const Header = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const { logout } = useAuthCall();
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closed = () => {
    logout();
    navigate("/");
  };

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className=" flex-no-wrap relative flex w-full items-center justify-between py-2 shadow-md lg:flex-wrap lg:justify-start lg:py-4">
        <div className=" fixed-navbar flex w-full flex-wrap items-center justify-between px-12  bg-main-dark-blue">
          {/* Hamburger button for mobile view */}
          <button
            className="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            {/* Hamburger icon */}
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className={` flex-grow basis-[100%] items-center flex-col lg:flex lg:basis-auto ${
              isMenuOpen ? "visible" : "hidden"
            }`}
          >
            {/* center navigation links */}
            <ul className="list-style-none mb-4 flex center-ul flex-col  lg:flex-row space-y-2 ">
              {/* Logo and terminuns only in the normal menu */}
              <li className="mb-2 lg:mb-0 lg:pr-2">
                <button
                  className={`large-screen mb-4 mr-8 mt-3 flex items-center text-white hover:text-neutral-900 lg:mb-0 lg:mt-0 ${
                    isMenuOpen ? "hidden" : "visible"
                  }`}
                  onClick={() => navigate("/")}
                >
                  <img
                    src={logo}
                    style={{ height: 39 }}
                    alt="logo"
                    loading="lazy"
                  />
                  <div className="px-4 py-2 text-white text-[32px] font-light">
                    termin<span className="text-main-light-blue font-medium">uns</span>
                  </div>
                </button>
              </li>

              <li className="mb-2 lg:mb-0 lg:pr-2 ">
                <button
                  className="lg:px-2 px-4 py-3  hover:bg-main-light-blue hover:text-main-dark-blue text-white rounded-2xl text-bg-main-dark-blue text-[20px] font-light"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-2">
                <button
                  className="lg:px-2 px-4 py-3 hover:bg-main-light-blue  hover:text-main-dark-blue text-white rounded-2xl text-bg-main-dark-blue text-[20px] font-light"
                  onClick={() => navigate("/about")}
                >
                  Über uns
                </button>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-2">
                <button className="lg:px-2 px-4 py-3 hover:bg-main-light-blue  hover:text-main-dark-blue text-white rounded-2xl text-bg-main-dark-blue text-[20px] font-light"  onClick={() => navigate("/services")}>
                  Service
                </button>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-2">
                <button className="lg:px-2 px-4 py-3 hover:bg-main-light-blue  hover:text-main-dark-blue text-white rounded-2xl text-bg-main-dark-blue text-[20px] font-light">
                  Kontakt
                </button>
              </li>
              {currentUser ? (
                <li>
                  <button
                    className="px-4 py-3 hover:bg-main-light-blue hover:text-main-dark-blue rounded-2xl text-white text-[20px] font-light"
                    onClick={() => closed()}
                  >
                    Ausloggen
                  </button>
                </li>
              ) : null}
            </ul>
          </div>

          {/* Right elements */}
          <div className="relative flex items-center">
            <div className="relative button-right">
              <div className="button-containers flex gap-1 relative ">
                <button className="bg-main-light-blue w-[136px] h-[60px] rounded-l-3xl flex flex-col items-center justify-center">
                  <img
                    className="relative mb-0 mt-2 w-[27px] h-[27px]"
                    src={patient}
                    alt="patient"
                  />
                  <div className="text-main-dark-blue text-[16px] font-normal">
                    Patient
                  </div>
                </button>

                <button
                  className="absolute bg-main-dark-blue text-white font-light rounded-b-xl px-3 py-1 z-10 top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  onClick={() => navigate("/login")}
                >
                  Einloggen
                </button>
                <button className="bg-main-light-blue w-[136px] h-[60px] rounded-r-3xl flex flex-col items-center justify-center">
                  <img
                    className="relative mb-0 mt-2 w-[29.09px] h-[29.09px]"
                    src={doctor}
                    alt="group"
                  />
                  <div className="text-main-dark-blue text-[16px] font-normal">
                    Arzt
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
