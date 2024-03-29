import React from "react";
import { useState } from "react";
import useAuthCall from "../../hooks/useAuthCall";
import userIcon1 from "../../assets/user.png";
import userIcon2 from "../../assets/user2.png";
import lock from "../../assets/lock.png";
import doctor from "../../assets/doctor.png";
import patient from "../../assets/patient.png";

const LoginForm = () => {
  // const { currentUser, token } = useSelector((state) => state.auth)
  const { login } = useAuthCall();
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  const habdleInputChange = (field, value) => {
    setSignIn((prevParams) => ({
      ...prevParams,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    login(signIn);
  };

  return (
    <div className="lg:w-1/2  md:w-full sm:w-full order-1 lg:order-2 rounded-md flex flex-col items-center justify-center mt-5">
      <div
        className="flex flex-col items-center justify-center lg:h-3/4 rounded-md w-full lg:w-3/4 md:w-3/5 sm:w-3/4"
        style={{ backgroundColor: "#38638D" }}
      >
        <div className="flex items-center justify-center text-center xl:mb-4 ">
          <img src={userIcon1} alt="Icon" className="w-12 h-12 mr-2" />
          <h1 className="text-3xl" style={{ color: "white" }}>
            Einloggen
          </h1>
        </div>
        <form className="rounded pt-6 pb-8 flex flex-col justify-center w-3/4">
          <div className="mb-4 relative">
            {/* Icon */}
            <img
              src={userIcon2} // Replace with the path to your PNG icon
              alt="Icon"
              className="w-8 h-8 absolute top-2 left-3"
            />
            {/* Vertical Line */}
            <div
              className="h-full absolute top-0 left-[60px] border-l"
              style={{ borderColor: "#38638D" }}
            ></div>
            {/* Input */}
            <input
              className="shadow appearance-none border rounded w-full h-[50px] py-2 px-3 pl-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500 text-base font-bold"
              id="email"
              type="email"
              placeholder="Email"
              value={signIn.email}
              onChange={(e) => habdleInputChange("email", e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            {/* Icon */}
            <img
              src={lock} // Replace with the path to your PNG icon
              alt="Icon"
              className="w-8 h-8 absolute top-2 left-3"
            />
            {/* Vertical Line */}
            <div
              className="h-full absolute top-0 left-[60px] border-l"
              style={{ borderColor: "#38638D" }}
            ></div>
            {/* Input */}
            <input
              className="shadow appearance-none border rounded w-full h-[50px] py-2 px-3 pl-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500 text-base font-bold"
              id="password"
              type="password"
              placeholder="Password"
              value={signIn.password}
              onChange={(e) => habdleInputChange("password", e.target.value)}
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-3/5 h-[50px]"
              style={{ backgroundColor: "#5999D7" }}
              type="submit"
              onClick={handleSubmit}
            >
              Anmelden
            </button>
          </div>
          <div className="mb-4 mt-4 text-center">
            <p>Nicht registriert?</p>
          </div>

          <div className="flex justify-center items-center mb-4 mt-4 font-bold">
            <a
              href="#"
              className={`px-4 py-2 rounded-l-xl hover:cursor-default bg-[#5999D7] text-white font-bold h-[50px] flex items-center `}
            >
              Jetzt Registrieren
            </a>

            <div className="relative">
              <img
                src={doctor} // Replace with the path to your PNG icon
                alt="Icon"
                className="w-6 h-6 absolute top-3 left-3"
              />
              <a
                href="/regdoctor"
                className="px-4 py-2 font-bold h-[50px] w-[100px] flex items-center justify-end border-r-2 border-[#5999D7] bg-main-light-blue text-main-dark-blue hover:bg-main-light-blue2"
              >
                Arzt
              </a>
            </div>

            <div className="relative">
              <img
                src={patient} // Replace with the path to your PNG icon
                alt="Icon"
                className="w-6 h-6 absolute top-3 left-3"
              />
              <a
                href="/regpatient"
                className="px-4 py-2 font-bold h-[50px] w-[100px] flex items-center justify-end  bg-main-light-blue text-main-dark-blue hover:bg-main-light-blue2"
              >
                Patient
              </a>
            </div>
            <a
              href="#"
              className={`px-4 py-2 rounded-r-xl hover:cursor-default bg-[#5999D7] text-white font-bold h-[50px] flex items-center `}
            ></a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
