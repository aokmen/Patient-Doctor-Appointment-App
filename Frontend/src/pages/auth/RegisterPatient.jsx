import React from 'react'
import image from "../../assets/register.png"
import Header from '../../components/header/Header'
import RegisterPatientForm from '../../components/authForm/RegisterPatientForm'

const RegisterPatient = () => {
  return (
    <>
     <Header/>
     <div className="min-h-screen flex flex-col lg:flex-row bg-blue-200">
     
     {/* Left side (Image) */}
     <div className=" order-2 lg:order-1 block m-auto ">
       <img
         //style={{ width: '700px', height: '700px' }}
         src={image}
         alt="Login Image"
       />
     </div>
     {/* Right side (Login Form) */}
     <RegisterPatientForm/>
     
   </div>
    </>

  )
}
export default RegisterPatient;