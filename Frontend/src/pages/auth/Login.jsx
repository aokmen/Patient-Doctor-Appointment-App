import React from 'react'
import LoginForm from '../../components/authForm/LoginForm'
import LoginImg from "../../assets/LoginImg.png"
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'

const Login = () => {

  return (
    <>
     <Header/>
     <div className="pt-20 min-h-screen flex flex-col lg:flex-row bg-blue-200">
     
     {/* Left side (Image) */}
     <div className=" order-2 lg:order-1 block m-auto   md:w-1/3">
       <img
         //style={{ width: '700px', height: '700px' }}
         src={LoginImg}
         alt="Login"
       />
     </div>
     {/* Right side (Login Form) */}
     <LoginForm/>
     
   </div>
    </>

  )
}
export default Login;