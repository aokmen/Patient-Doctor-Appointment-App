import React from 'react';
import { useState } from 'react';
import useAuthCall from '../../hooks/useAuthCall';
import userIcon1 from "../../assets/user.png"
import userIcon2 from "../../assets/user2.png"
import lock from "../../assets/lock.png"
import doctor from "../../assets/doctor.png"
import patient from "../../assets/patient.png"
import { useSelector } from 'react-redux';


const RegisterPatientForm = () => {
  const { currentUser, token } = useSelector((state) => state.auth)
  const { regPatient } = useAuthCall()
  const [register, setregister] = useState({
    email: "",
    password: "",
  })

  const habdleInputChange = (field, value) => {
    setregister((prevParams) => ({
      ...prevParams,
      [field]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    regPatient(register)
  };

  //Slider Button
  // const [activeButton, setActiveButton] = useState(1);

  // const handleLinkClick = (buttonNumber) => {
  //   setActiveButton(buttonNumber);
  // };
  return (
    <div className="lg:w-1/2 md:w-full sm:w-full order-1 lg:order-2 rounded-md flex flex-col items-center justify-center mt-5" >
      <div className='flex flex-col items-center justify-center lg:h-3/4 rounded-md w-full lg:w-3/4 md:w-3/5 sm:w-3/4' style={{ backgroundColor: '#38638D' }}>
        <div className="flex items-center justify-center text-center xl:mb-4 ">
          <img
            src={userIcon1}
            alt="Icon"
            className="w-12 h-12 mr-2"
          />
          <h1 className="text-3xl" style={{ color: "white" }}>Registrierung</h1>
        </div>
        <form className="rounded pt-6 pb-8 flex flex-col justify-center w-3/4">
          <div className="mb-4 relative">
            {/* Icon */}
            <img
              src={userIcon2}  // Replace with the path to your PNG icon
              alt="Icon"
              className="w-8 h-8 absolute top-2 left-3"
            />
            {/* Vertical Line */}
            <div className="h-full absolute top-0 left-[60px] border-l" style={{ borderColor: "#38638D" }}></div>
            {/* Input */}
            <input
              className="shadow appearance-none border rounded w-full h-[50px] py-2 px-3 pl-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500 text-base font-bold"
              id="email"
              type="email"
              placeholder="Email"
              value={register.email}
              onChange={(e) => habdleInputChange('email', e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            {/* Icon */}
            <img
              src={lock}  // Replace with the path to your PNG icon
              alt="Icon"
              className="w-8 h-8 absolute top-2 left-3"
            />
            {/* Vertical Line */}
            <div className="h-full absolute top-0 left-[60px] border-l" style={{ borderColor: "#38638D" }}></div>
            {/* Input */}
            <input
              className="shadow appearance-none border rounded w-full h-[50px] py-2 px-3 pl-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500 text-base font-bold"
              id="password"
              type="password"
              placeholder="Password"
              value={register.password}
              onChange={(e) => habdleInputChange('password', e.target.value)}
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-3/5 h-[50px]" style={{ backgroundColor: "#5999D7" }}
              type="submit"
              onClick={handleSubmit}
            >
              Registrieren
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
export default RegisterPatientForm;